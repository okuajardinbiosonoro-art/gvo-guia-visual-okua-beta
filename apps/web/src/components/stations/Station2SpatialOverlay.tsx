import type { FC } from 'react';
import type {
  Station2LayerDefinition,
  Station2LayerId,
} from './station2InteractionContract';

type Props = {
  activeLayerId: Station2LayerId;
  activeLayer: Station2LayerDefinition;
  reviewUnlocked: boolean;
};

const renderLayerVisual = (activeLayerId: Station2LayerId) => {
  switch (activeLayerId) {
    case 1:
      return (
        <svg
          className="station-2-spatial-svg"
          viewBox="0 0 100 100"
          role="presentation"
          focusable="false"
        >
          <circle className="station-2-spatial-anchor" cx="34" cy="62" r="5" />
          <circle className="station-2-spatial-ring" cx="34" cy="62" r="17" />
          <path
            className="station-2-spatial-connector"
            d="M38 60 C47 51 57 47 68 43"
          />
          <rect
            className="station-2-spatial-chip"
            x="66"
            y="35"
            width="16"
            height="14"
            rx="3"
          />
        </svg>
      );
    case 2:
      return (
        <svg
          className="station-2-spatial-svg"
          viewBox="0 0 100 100"
          role="presentation"
          focusable="false"
        >
          <polyline
            className="station-2-spatial-signal station-2-spatial-data-line"
            data-station2-spatial-signal
            points="8,57 18,54 27,61 36,49 46,56 56,47 66,53 77,45 92,50"
            pathLength={1}
          />
          <circle className="station-2-spatial-dot" cx="18" cy="54" r="2.8" />
          <circle className="station-2-spatial-dot" cx="46" cy="56" r="2.8" />
          <circle className="station-2-spatial-dot" cx="77" cy="45" r="2.8" />
        </svg>
      );
    case 3:
      return (
        <svg
          className="station-2-spatial-svg"
          viewBox="0 0 100 100"
          role="presentation"
          focusable="false"
        >
          <path
            className="station-2-spatial-flow"
            d="M12 64 C27 55 34 48 48 48 S68 55 84 40"
          />
          <rect
            className="station-2-spatial-module"
            x="54"
            y="34"
            width="30"
            height="22"
            rx="5"
          />
          <path
            className="station-2-spatial-circuit"
            d="M60 45 H68 M70 45 H78 M68 40 V50"
          />
          <circle className="station-2-spatial-anchor" cx="18" cy="61" r="4" />
        </svg>
      );
    case 4:
      return (
        <svg
          className="station-2-spatial-svg"
          viewBox="0 0 100 100"
          role="presentation"
          focusable="false"
        >
          <polyline
            className="station-2-spatial-signal station-2-spatial-raw-line"
            data-station2-spatial-signal
            points="8,68 17,57 25,71 35,52 44,63 54,48 64,59 75,45 91,51"
            pathLength={1}
          />
          <polyline
            className="station-2-spatial-signal station-2-spatial-clean-line"
            data-station2-spatial-signal
            points="8,38 22,37 36,36 50,36 64,35 78,35 91,34"
            pathLength={1}
          />
          <path className="station-2-spatial-gate" d="M47 22 V78" />
        </svg>
      );
    case 5:
      return (
        <svg
          className="station-2-spatial-svg"
          viewBox="0 0 100 100"
          role="presentation"
          focusable="false"
        >
          <path
            className="station-2-spatial-map-link"
            d="M24 30 L50 46 L76 31 M50 46 L32 72 M50 46 L69 70"
          />
          <circle className="station-2-spatial-node" cx="24" cy="30" r="5" />
          <circle className="station-2-spatial-node" cx="50" cy="46" r="6" />
          <circle className="station-2-spatial-node" cx="76" cy="31" r="5" />
          <circle className="station-2-spatial-node" cx="32" cy="72" r="5" />
          <circle className="station-2-spatial-node" cx="69" cy="70" r="5" />
        </svg>
      );
    case 6:
      return (
        <svg
          className="station-2-spatial-svg"
          viewBox="0 0 100 100"
          role="presentation"
          focusable="false"
        >
          <path
            className="station-2-spatial-result"
            d="M18 58 C30 29 49 25 59 44 C69 64 82 55 84 36"
          />
          <path
            className="station-2-spatial-result-secondary"
            d="M18 68 C36 52 46 68 58 58 S76 38 84 53"
          />
          <circle className="station-2-spatial-dot" cx="59" cy="44" r="3.5" />
          <circle className="station-2-spatial-dot" cx="58" cy="58" r="3.5" />
        </svg>
      );
    default:
      return null;
  }
};

const Station2SpatialOverlay: FC<Props> = ({
  activeLayerId,
  activeLayer,
  reviewUnlocked,
}) => {
  return (
    <div
      className="station-2-spatial-overlay"
      aria-hidden="true"
      data-station2-spatial-overlay
      data-station2-layer-id={activeLayerId}
      data-station2-motion-cue={activeLayer.motionCue}
      data-station2-focus-target={activeLayer.focusTarget}
    >
      <div
        className="station-2-spatial-depth"
        data-station2-spatial-depth
      />
      <div
        className={`station-2-spatial-layer station-2-spatial-focus station-2-spatial-layer-${activeLayerId}`}
        data-station2-spatial-focus
        data-station2-layer-id={activeLayerId}
        data-station2-motion-cue={activeLayer.motionCue}
        data-station2-focus-target={activeLayer.focusTarget}
      >
        {renderLayerVisual(activeLayerId)}
      </div>
      {reviewUnlocked && (
        <div
          className="station-2-spatial-review"
          data-station2-motion-cue="review_unlock"
        >
          <span />
          <span />
          <span />
        </div>
      )}
    </div>
  );
};

export { Station2SpatialOverlay };
