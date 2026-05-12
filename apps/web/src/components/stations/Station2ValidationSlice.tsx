import { type FC, useEffect, useState } from 'react';
import { GuideAvatar } from '../GuideAvatar';
import {
  STATION2_LAYERS,
  advanceStation2Layer,
  canSelectStation2Layer,
  getInitialStation2InteractionState,
  getStation2LayerStatus,
  selectStation2Layer,
  type Station2LayerStatus,
} from './station2InteractionContract';
import { Station2SpatialOverlay } from './Station2SpatialOverlay';
import { useStation2Motion } from './useStation2Motion';

type Props = {
  sceneSrc: string;
};

const getLayerButtonClassName = (status: Station2LayerStatus): string => {
  switch (status) {
    case 'active':
      return 'station-2-layer-button-active';
    case 'completed':
      return 'station-2-layer-button-completed';
    case 'review':
      return 'station-2-layer-button-review';
    case 'available':
      return 'station-2-layer-button-available';
    case 'locked':
    default:
      return 'station-2-layer-button-locked';
  }
};

const getPanelClassName = (status: Station2LayerStatus): string => {
  switch (status) {
    case 'active':
      return 'station-2-panel-active';
    case 'completed':
      return 'station-2-panel-completed';
    case 'review':
      return 'station-2-panel-review';
    case 'available':
      return 'station-2-panel-available';
    case 'locked':
    default:
      return 'station-2-panel-locked';
  }
};

const Station2ValidationSlice: FC<Props> = ({ sceneSrc }) => {
  const [interactionState, setInteractionState] = useState(
    getInitialStation2InteractionState,
  );
  const [imageFailed, setImageFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const activeLayer =
    STATION2_LAYERS.find((layer) => layer.id === interactionState.activeLayerId) ??
    STATION2_LAYERS[0];
  const { rootRef } = useStation2Motion({
    activeLayerId: interactionState.activeLayerId,
    reviewUnlocked: interactionState.reviewUnlocked,
    reducedMotion,
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleReducedMotionChange = () => {
      setReducedMotion(mediaQuery.matches);
    };

    handleReducedMotionChange();
    mediaQuery.addEventListener('change', handleReducedMotionChange);

    return () => {
      mediaQuery.removeEventListener('change', handleReducedMotionChange);
    };
  }, []);

  const handleLayerSelect = (layerId: typeof activeLayer.id) => {
    setInteractionState((currentState) =>
      selectStation2Layer(currentState, layerId),
    );
  };

  const handleNextLayer = () => {
    setInteractionState((currentState) => advanceStation2Layer(currentState));
  };

  return (
    <section
      ref={rootRef}
      className="station-2-slice"
      aria-labelledby="station-2-slice-title"
      data-station2-motion-cue="scene_enter"
    >
      <header className="station-2-slice-header">
        <p className="screen-label">Señal y mediación</p>
        <h3 id="station-2-slice-title" className="station-2-slice-title">
          Explora cómo una señal viva se convierte en una experiencia mediada.
        </h3>
        <p className="station-2-slice-help">
          Toca cada capa en orden. Al final podrás revisarlas libremente.
        </p>
      </header>

      <div className="station-2-slice-stage">
        <div className="station-2-slice-image-wrap">
          {imageFailed ? (
            <div className="station-2-slice-image-fallback">
              <p className="screen-text">La referencia visual no pudo cargarse.</p>
              <p className="screen-text screen-text--muted">
                La validación sigue disponible.
              </p>
            </div>
          ) : (
            <>
              <img
                className="station-2-slice-image"
                src={sceneSrc}
                alt="Concept art de Estación II usado como base de validación de interacción"
                onError={() => setImageFailed(true)}
              />
              <Station2SpatialOverlay
                activeLayerId={interactionState.activeLayerId}
                activeLayer={activeLayer}
                reviewUnlocked={interactionState.reviewUnlocked}
              />
            </>
          )}
        </div>

        <div
          className="station-2-lia-card"
          aria-live="polite"
          data-station2-layer-id={activeLayer.id}
          data-station2-motion-cue="lia_shift"
        >
          <GuideAvatar size="sm" state={activeLayer.liaState} />
          <div className="station-2-lia-copy">
            <p className="station-2-lia-step">Lía · Capa {activeLayer.id}</p>
            <p className="screen-text">{activeLayer.microcopy}</p>
          </div>
        </div>
      </div>

      <nav className="station-2-layer-nav" aria-label="Capas de validación">
        {STATION2_LAYERS.map((layer) => {
          const status = getStation2LayerStatus(interactionState, layer.id);
          const disabled = !canSelectStation2Layer(interactionState, layer.id);

          return (
            <button
              key={layer.id}
              type="button"
              className={`station-2-layer-button ${getLayerButtonClassName(status)}`}
              aria-pressed={interactionState.activeLayerId === layer.id}
              disabled={disabled}
              data-station2-layer-id={layer.id}
              data-station2-layer-status={status}
              data-station2-motion-cue={layer.motionCue}
              onClick={() => handleLayerSelect(layer.id)}
            >
              <span className="station-2-layer-button-index">{layer.id}</span>
              <span className="station-2-layer-button-label">{layer.iconLabel}</span>
            </button>
          );
        })}
      </nav>

      <div className="station-2-panel-stack" aria-label="Paneles de mediación">
        {STATION2_LAYERS.map((layer) => {
          const status = getStation2LayerStatus(interactionState, layer.id);

          return (
            <article
              key={layer.id}
              className={`station-2-panel ${getPanelClassName(status)}`}
              data-station2-layer-id={layer.id}
              data-station2-layer-status={status}
              data-station2-motion-cue="panel_focus"
              data-station2-focus-target={layer.focusTarget}
            >
              <p className="station-2-panel-kicker">Capa {layer.id}</p>
              <h4 className="station-2-panel-title">{layer.title}</h4>
              <p className="station-2-panel-label">{layer.panelLabel}</p>
              <p className="station-2-panel-copy">{layer.microcopy}</p>
            </article>
          );
        })}
      </div>

      <div className="station-2-slice-actions">
        {!interactionState.reviewUnlocked ? (
          <button type="button" className="btn btn-primary" onClick={handleNextLayer}>
            Siguiente capa
          </button>
        ) : (
          <p className="station-2-slice-note">
            Revisión libre habilitada. Puedes volver a cualquier capa.
          </p>
        )}
      </div>
    </section>
  );
};

export { Station2ValidationSlice };
