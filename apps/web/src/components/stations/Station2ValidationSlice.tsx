import { type FC, useState } from 'react';
import { GuideAvatar, type LiaState } from '../GuideAvatar';

type LayerStatus = 'locked' | 'available' | 'active' | 'completed' | 'review';

type LayerDefinition = {
  id: number;
  title: string;
  iconLabel: string;
  panelLabel: string;
  liaState: LiaState;
  microcopy: string;
};

const LAYERS: readonly LayerDefinition[] = [
  {
    id: 1,
    title: 'Planta viva',
    iconLabel: 'Planta',
    panelLabel: 'Planta / raíz / hoja',
    liaState: 'curious',
    microcopy:
      'Primero está la planta. No es un adorno: es un ser vivo con actividad que normalmente no percibimos.',
  },
  {
    id: 2,
    title: 'Señal bioeléctrica',
    iconLabel: 'Señal',
    panelLabel: 'Variación de señal',
    liaState: 'curious',
    microcopy:
      'Esta variación representa una señal bioeléctrica. Existe, pero todavía no es música.',
  },
  {
    id: 3,
    title: 'Captura / bionosificador',
    iconLabel: 'Circuito',
    panelLabel: 'Captura de señal',
    liaState: 'curious',
    microcopy:
      'El bionosificador capta esa señal y la lleva a una forma que el sistema puede leer.',
  },
  {
    id: 4,
    title: 'Acondicionamiento',
    iconLabel: 'Filtrado',
    panelLabel: 'Filtrado / estabilización',
    liaState: 'calm',
    microcopy:
      'Antes de interpretarla, la señal se prepara: se filtra, se estabiliza y se ordena.',
  },
  {
    id: 5,
    title: 'Interpretación / mapeo',
    iconLabel: 'Mapeo',
    panelLabel: 'Interpretación / mapeo',
    liaState: 'curious',
    microcopy:
      'El sistema interpreta la señal y la mapea. Aquí el dato vivo empieza a convertirse en evento musical mediado.',
  },
  {
    id: 6,
    title: 'Resultado sonoro mediado',
    iconLabel: 'Resultado',
    panelLabel: 'Forma sonora mediada',
    liaState: 'calm',
    microcopy:
      'El resultado no sale solo de la planta. Es una experiencia mediada por captura, electrónica, interpretación y software.',
  },
];

type Props = {
  sceneSrc: string;
};

const getLayerButtonClassName = (status: LayerStatus): string => {
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

const getPanelClassName = (status: LayerStatus): string => {
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
  const [activeLayerId, setActiveLayerId] = useState(1);
  const [maxCompletedLayerId, setMaxCompletedLayerId] = useState(0);
  const [reviewUnlocked, setReviewUnlocked] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const activeLayer = LAYERS[activeLayerId - 1] ?? LAYERS[0];
  const lastLayerId = LAYERS.length;

  const getLayerStatus = (layerId: number): LayerStatus => {
    if (reviewUnlocked) {
      return layerId === activeLayerId ? 'active' : 'review';
    }

    if (layerId === activeLayerId) {
      return 'active';
    }

    if (layerId <= maxCompletedLayerId) {
      return 'completed';
    }

    if (layerId === activeLayerId + 1) {
      return 'available';
    }

    return 'locked';
  };

  const handleLayerSelect = (layerId: number) => {
    if (reviewUnlocked || layerId === activeLayerId) {
      setActiveLayerId(layerId);
    }
  };

  const handleNextLayer = () => {
    if (activeLayerId === lastLayerId) {
      setMaxCompletedLayerId(lastLayerId);
      setReviewUnlocked(true);
      return;
    }

    setMaxCompletedLayerId((current) => Math.max(current, activeLayerId));
    setActiveLayerId((current) => Math.min(lastLayerId, current + 1));
  };

  return (
    <section className="station-2-slice" aria-labelledby="station-2-slice-title">
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
            <img
              className="station-2-slice-image"
              src={sceneSrc}
              alt="Concept art de Estación II usado como base de validación de interacción"
              onError={() => setImageFailed(true)}
            />
          )}
        </div>

        <div className="station-2-lia-card" aria-live="polite">
          <GuideAvatar size="sm" state={activeLayer.liaState} />
          <div className="station-2-lia-copy">
            <p className="station-2-lia-step">Lía · Capa {activeLayer.id}</p>
            <p className="screen-text">{activeLayer.microcopy}</p>
          </div>
        </div>
      </div>

      <nav className="station-2-layer-nav" aria-label="Capas de validación">
        {LAYERS.map((layer) => {
          const status = getLayerStatus(layer.id);
          const disabled = !reviewUnlocked && layer.id !== activeLayerId;

          return (
            <button
              key={layer.id}
              type="button"
              className={`station-2-layer-button ${getLayerButtonClassName(status)}`}
              aria-pressed={activeLayerId === layer.id}
              disabled={disabled}
              onClick={() => handleLayerSelect(layer.id)}
            >
              <span className="station-2-layer-button-index">{layer.id}</span>
              <span className="station-2-layer-button-label">{layer.iconLabel}</span>
            </button>
          );
        })}
      </nav>

      <div className="station-2-panel-stack" aria-label="Paneles de mediación">
        {LAYERS.map((layer) => {
          const status = getLayerStatus(layer.id);

          return (
            <article
              key={layer.id}
              className={`station-2-panel ${getPanelClassName(status)}`}
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
        {!reviewUnlocked ? (
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
