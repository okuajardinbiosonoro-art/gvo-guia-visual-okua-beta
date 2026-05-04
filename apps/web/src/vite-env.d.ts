/// <reference types="vite/client" />

declare module 'three' {
  export class Vector3 {
    constructor(x?: number, y?: number, z?: number);
    x: number;
    y: number;
    z: number;
    set(x: number, y: number, z: number): this;
    setScalar(scalar: number): this;
    copy(vector: Vector3): this;
    multiplyScalar(scalar: number): this;
  }

  export class Box3 {
    min: Vector3;
    max: Vector3;
    setFromObject(object: Object3D): this;
    getSize(target: Vector3): Vector3;
    getCenter(target: Vector3): Vector3;
  }

  export class Object3D {
    position: Vector3;
    scale: Vector3;
    add(...objects: Object3D[]): this;
    remove(...objects: Object3D[]): this;
    traverse(callback: (child: Object3D) => void): void;
    updateMatrixWorld(force?: boolean): void;
  }

  export class Scene extends Object3D {}

  export class PerspectiveCamera extends Object3D {
    constructor(fov?: number, aspect?: number, near?: number, far?: number);
    aspect: number;
    lookAt(x: number, y: number, z: number): void;
    updateProjectionMatrix(): void;
  }

  export class Clock {
    constructor(autoStart?: boolean);
    start(): void;
    getDelta(): number;
  }

  export class Texture {
    isTexture: true;
    dispose(): void;
  }

  export class Material {
    dispose(): void;
    [key: string]: unknown;
  }

  export class Geometry {
    dispose(): void;
  }

  export class Mesh extends Object3D {
    geometry: Geometry;
    material: Material | Material[];
    castShadow: boolean;
    receiveShadow: boolean;
  }

  export class AmbientLight extends Object3D {
    constructor(color?: number, intensity?: number);
  }

  export class DirectionalLight extends Object3D {
    constructor(color?: number, intensity?: number);
  }

  export class AnimationClip {}

  export class AnimationAction {
    play(): this;
  }

  export class AnimationMixer {
    constructor(root: Object3D);
    clipAction(clip: AnimationClip): AnimationAction;
    update(delta: number): void;
    stopAllAction(): void;
    uncacheRoot(root: Object3D): void;
  }

  export type WebGLRendererParameters = {
    antialias?: boolean;
    alpha?: boolean;
    canvas?: HTMLCanvasElement;
    powerPreference?: 'default' | 'high-performance' | 'low-power';
  };

  export class WebGLRenderer {
    constructor(parameters?: WebGLRendererParameters);
    outputColorSpace: string;
    setClearColor(color: number, alpha: number): void;
    setPixelRatio(pixelRatio: number): void;
    setSize(width: number, height: number, updateStyle?: boolean): void;
    render(scene: Scene, camera: PerspectiveCamera): void;
    dispose(): void;
  }

  export const SRGBColorSpace: string;
}

declare module 'three/examples/jsm/loaders/GLTFLoader.js' {
  import type { AnimationClip, Object3D } from 'three';

  export type GLTF = {
    scene: Object3D;
    animations: AnimationClip[];
  };

  export class GLTFLoader {
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent<EventTarget>) => void,
      onError?: (error: unknown) => void,
    ): void;
  }
}

// Arquitectura de integración de assets (decisión F7-07):
// Los imports binarios (.webp, .png, .svg) ocurren únicamente dentro de
// apps/web/src/, no en content/stations/*.ts.
// vite/client ya declara *.webp, *.png y *.svg como string para todo el
// scope de este proyecto.
// Ver apps/web/src/assets/stations/README.md para el flujo completo.
