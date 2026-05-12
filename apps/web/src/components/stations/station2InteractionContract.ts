import type { LiaState } from '../GuideAvatar';

type Station2LayerId = 1 | 2 | 3 | 4 | 5 | 6;
type Station2LayerStatus = 'locked' | 'available' | 'active' | 'completed' | 'review';
type Station2InteractionEvent =
  | { type: 'select_layer'; layerId: Station2LayerId }
  | { type: 'next_layer' }
  | { type: 'complete_layer'; layerId: Station2LayerId }
  | { type: 'unlock_review' }
  | { type: 'reset_station' }
  | { type: 'image_failed' };

type Station2InteractionState = {
  activeLayerId: Station2LayerId;
  maxCompletedLayerId: number;
  reviewUnlocked: boolean;
};

type Station2LayerDefinition = {
  id: Station2LayerId;
  title: string;
  iconLabel: string;
  panelLabel: string;
  liaState: LiaState;
  microcopy: string;
  focusTarget: string;
  motionCue: string;
  successCriterion: string;
};

const STATION2_LAST_LAYER_ID: Station2LayerId = 6;

const STATION2_LAYERS: readonly Station2LayerDefinition[] = [
  {
    id: 1,
    title: 'Planta viva',
    iconLabel: 'Planta',
    panelLabel: 'Planta / raíz / hoja',
    liaState: 'curious',
    microcopy:
      'Primero está la planta. No es un adorno: es un ser vivo con actividad que normalmente no percibimos.',
    focusTarget: 'planta-sensores',
    motionCue: 'layer_activate',
    successCriterion:
      'El visitante reconoce la planta como ser vivo activo, no como adorno ni fuente musical autónoma.',
  },
  {
    id: 2,
    title: 'Señal bioeléctrica',
    iconLabel: 'Señal',
    panelLabel: 'Variación de señal',
    liaState: 'curious',
    microcopy:
      'Esta variación representa una señal bioeléctrica. Existe, pero todavía no es música.',
    focusTarget: 'senal-bioelectrica',
    motionCue: 'signal_trace',
    successCriterion:
      'El visitante entiende que la señal existe antes de cualquier interpretación musical.',
  },
  {
    id: 3,
    title: 'Captura / bionosificador',
    iconLabel: 'Circuito',
    panelLabel: 'Captura de señal',
    liaState: 'curious',
    microcopy:
      'El bionosificador capta esa señal y la lleva a una forma que el sistema puede leer.',
    focusTarget: 'bionosificador-captura',
    motionCue: 'layer_activate',
    successCriterion:
      'El visitante reconoce que hay mediación técnica desde la captura.',
  },
  {
    id: 4,
    title: 'Acondicionamiento',
    iconLabel: 'Filtrado',
    panelLabel: 'Filtrado / estabilización',
    liaState: 'calm',
    microcopy:
      'Antes de interpretarla, la señal se prepara: se filtra, se estabiliza y se ordena.',
    focusTarget: 'acondicionamiento-senal',
    motionCue: 'panel_focus',
    successCriterion:
      'El visitante entiende que el dato se prepara antes de ser interpretado.',
  },
  {
    id: 5,
    title: 'Interpretación / mapeo',
    iconLabel: 'Mapeo',
    panelLabel: 'Interpretación / mapeo',
    liaState: 'curious',
    microcopy:
      'El sistema interpreta la señal y la mapea. Aquí el dato vivo empieza a convertirse en evento musical mediado.',
    focusTarget: 'interpretacion-mapeo',
    motionCue: 'panel_focus',
    successCriterion:
      'El visitante entiende que el evento musical aparece por interpretación y mapeo, no por autonomía vegetal.',
  },
  {
    id: 6,
    title: 'Resultado sonoro mediado',
    iconLabel: 'Resultado',
    panelLabel: 'Forma sonora mediada',
    liaState: 'calm',
    microcopy:
      'El resultado no sale solo de la planta. Es una experiencia mediada por captura, electrónica, interpretación y software.',
    focusTarget: 'resultado-mediado',
    motionCue: 'review_unlock',
    successCriterion:
      'El visitante comprende que el resultado sonoro es mediado por captura, electrónica, interpretación y software.',
  },
];

const getInitialStation2InteractionState = (): Station2InteractionState => ({
  activeLayerId: 1,
  maxCompletedLayerId: 0,
  reviewUnlocked: false,
});

const resetStation2Interaction = (): Station2InteractionState =>
  getInitialStation2InteractionState();

const getNextStation2LayerId = (layerId: Station2LayerId): Station2LayerId => {
  switch (layerId) {
    case 1:
      return 2;
    case 2:
      return 3;
    case 3:
      return 4;
    case 4:
      return 5;
    case 5:
    case 6:
    default:
      return 6;
  }
};

const getStation2LayerStatus = (
  state: Station2InteractionState,
  layerId: Station2LayerId,
): Station2LayerStatus => {
  if (state.reviewUnlocked) {
    return layerId === state.activeLayerId ? 'active' : 'review';
  }

  if (layerId === state.activeLayerId) {
    return 'active';
  }

  if (layerId <= state.maxCompletedLayerId) {
    return 'completed';
  }

  if (layerId === state.activeLayerId + 1) {
    return 'available';
  }

  return 'locked';
};

const canSelectStation2Layer = (
  state: Station2InteractionState,
  layerId: Station2LayerId,
): boolean => state.reviewUnlocked || layerId === state.activeLayerId;

const selectStation2Layer = (
  state: Station2InteractionState,
  layerId: Station2LayerId,
): Station2InteractionState => {
  if (!canSelectStation2Layer(state, layerId)) {
    return state;
  }

  return {
    ...state,
    activeLayerId: layerId,
  };
};

const advanceStation2Layer = (
  state: Station2InteractionState,
): Station2InteractionState => {
  if (state.activeLayerId === STATION2_LAST_LAYER_ID) {
    return {
      activeLayerId: STATION2_LAST_LAYER_ID,
      maxCompletedLayerId: STATION2_LAST_LAYER_ID,
      reviewUnlocked: true,
    };
  }

  return {
    activeLayerId: getNextStation2LayerId(state.activeLayerId),
    maxCompletedLayerId: Math.max(
      state.maxCompletedLayerId,
      state.activeLayerId,
    ),
    reviewUnlocked: false,
  };
};

export {
  STATION2_LAYERS,
  advanceStation2Layer,
  canSelectStation2Layer,
  getInitialStation2InteractionState,
  getStation2LayerStatus,
  resetStation2Interaction,
  selectStation2Layer,
};

export type {
  Station2InteractionEvent,
  Station2InteractionState,
  Station2LayerDefinition,
  Station2LayerId,
  Station2LayerStatus,
};
