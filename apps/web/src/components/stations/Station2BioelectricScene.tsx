import { useCallback, useState } from 'react';
import type { FC, ReactNode } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { ThreeSceneShell } from '../three/ThreeSceneShell';

type Props = {
  glbSrc: string;
  fallback: ReactNode;
};

function disposeObject(root: THREE.Object3D): void {
  const textures = new Set<THREE.Texture>();
  const materials = new Set<THREE.Material>();

  root.traverse((child: THREE.Object3D) => {
    if (!(child instanceof THREE.Mesh)) {
      return;
    }

    child.geometry.dispose();

    const meshMaterials = Array.isArray(child.material)
      ? child.material
      : [child.material];

    meshMaterials.forEach((material: THREE.Material | undefined) => {
      if (!material || materials.has(material)) {
        return;
      }

      materials.add(material);

      Object.values(material).forEach((value: unknown) => {
        if (value && typeof value === 'object' && 'isTexture' in value) {
          textures.add(value as THREE.Texture);
        }
      });
    });
  });

  textures.forEach((texture) => texture.dispose());
  materials.forEach((material) => material.dispose());
}

const Station2BioelectricScene: FC<Props> = ({ glbSrc, fallback }) => {
  const [loadFailed, setLoadFailed] = useState(false);

  const initScene = useCallback(
    (canvas: HTMLCanvasElement) => {
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        canvas,
        powerPreference: 'high-performance',
      });
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      const loader = new GLTFLoader();
      const clock = new THREE.Clock();
      const container = canvas.parentElement ?? canvas;
      let disposed = false;
      let rafId: number | null = null;
      let mixer: THREE.AnimationMixer | null = null;
      let modelRoot: THREE.Object3D | null = null;

      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      camera.position.set(0, 1.25, 3.75);
      camera.lookAt(0, 0.55, 0);

      scene.add(new THREE.AmbientLight(0xffffff, 1.6));

      const keyLight = new THREE.DirectionalLight(0xfff6e6, 2.3);
      keyLight.position.set(2.6, 4.6, 3.6);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0xc9ddff, 0.75);
      fillLight.position.set(-2.6, 1.9, -3.5);
      scene.add(fillLight);

      const resize = () => {
        const width = Math.max(container.clientWidth, 1);
        const height = Math.max(container.clientHeight, 1);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      const cleanupScene = () => {
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }

        window.removeEventListener('resize', resize);

        if (mixer) {
          mixer.stopAllAction();
          if (modelRoot) {
            mixer.uncacheRoot(modelRoot);
          }
        }

        if (modelRoot) {
          scene.remove(modelRoot);
          disposeObject(modelRoot);
          modelRoot = null;
        }

        renderer.dispose();
      };

      const renderFrame = () => {
        if (disposed) {
          return;
        }

        try {
          if (mixer) {
            mixer.update(clock.getDelta());
          }

          renderer.render(scene, camera);
        } catch {
          if (!disposed) {
            disposed = true;
            setLoadFailed(true);
          }
          return;
        }

        rafId = window.requestAnimationFrame(renderFrame);
      };

      window.addEventListener('resize', resize);
      resize();

      loader.load(
        glbSrc,
        (gltf: { scene: THREE.Object3D; animations: THREE.AnimationClip[] }) => {
          if (disposed) {
            disposeObject(gltf.scene);
            return;
          }

          modelRoot = gltf.scene;
          modelRoot.updateMatrixWorld(true);

          const bounds = new THREE.Box3().setFromObject(modelRoot);
          const size = bounds.getSize(new THREE.Vector3());
          const center = bounds.getCenter(new THREE.Vector3());
          const maxDimension = Math.max(size.x, size.y, size.z) || 1;
          const scale = 2.45 / maxDimension;

          modelRoot.scale.setScalar(scale);
          modelRoot.position.set(
            -center.x * scale,
            -bounds.min.y * scale + 0.12,
            -center.z * scale,
          );

          modelRoot.traverse((child: THREE.Object3D) => {
            if (child instanceof THREE.Mesh) {
              child.castShadow = false;
              child.receiveShadow = false;
            }
          });

          scene.add(modelRoot);

          if (gltf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(modelRoot);
            const action = mixer.clipAction(gltf.animations[0]);
            action.play();
          }

          clock.start();
          rafId = window.requestAnimationFrame(renderFrame);
        },
        undefined,
        () => {
          if (!disposed) {
            setLoadFailed(true);
          }
        },
      );

      return () => {
        disposed = true;
        cleanupScene();
      };
    },
    [glbSrc],
  );

  if (loadFailed) {
    return <>{fallback}</>;
  }

  return (
    <section className="station-2-3d" aria-labelledby="station-2-3d-title">
      <header className="station-2-3d-header">
        <p className="screen-label">Escena 3D de mediación</p>
        <h3 id="station-2-3d-title" className="station-2-3d-title">
          Escena 3D de mediación
        </h3>
        <p className="station-2-3d-help">
          Explora la escena aprobada. Si el 3D no carga, se conserva la versión guiada por capas.
        </p>
      </header>

      <div className="station-2-3d-frame">
        <ThreeSceneShell
          label="Escena 3D de mediación"
          fallback={<div className="station-2-3d-fallback">{fallback}</div>}
          initScene={initScene}
        />
      </div>
    </section>
  );
};

export { Station2BioelectricScene };
