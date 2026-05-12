# GVO — Estación II: contrato de estados y motion spec 2.5D

## 1. Propósito

Definir el contrato de comportamiento de Estación II antes del motion pass.

Este documento no implementa GSAP/Motion.
Este documento no instala dependencias.
Este documento no reabre Blender.
Este documento no declara Estación II finalizada.

## 2. Metodología vigente

La metodología activa es web-first 2.5D.

Prioridad:

1. comportamiento verificable;
2. runtime React/DOM/SVG/CSS;
3. motion por estados;
4. QA humano;
5. acabado visual posterior.

Blender/GLB queda pausado como carril principal.

## 3. Capas

La estación trabaja exactamente 6 capas:

### 1. Planta viva

- id: 1
- título: Planta viva.
- iconLabel: Planta.
- panelLabel: Planta / raíz / hoja.
- estado de Lía: curious.
- microcopy: "Primero está la planta. No es un adorno: es un ser vivo con actividad que normalmente no percibimos."
- foco visual: planta, raíz, hoja y punto de contacto con sensores.
- motion cue: brillo sutil desde planta hacia sensor.
- criterio de éxito: el visitante reconoce la planta como ser vivo activo, no como adorno ni fuente musical autónoma.

### 2. Señal bioeléctrica

- id: 2
- título: Señal bioeléctrica.
- iconLabel: Señal.
- panelLabel: Variación de señal.
- estado de Lía: curious.
- microcopy: "Esta variación representa una señal bioeléctrica. Existe, pero todavía no es música."
- foco visual: línea irregular de dato bioeléctrico.
- motion cue: trazo irregular tipo dato, no partitura ni onda musical autónoma.
- criterio de éxito: el visitante entiende que la señal existe antes de cualquier interpretación musical.

### 3. Captura / bionosificador

- id: 3
- título: Captura / bionosificador.
- iconLabel: Circuito.
- panelLabel: Captura de señal.
- estado de Lía: curious.
- microcopy: "El bionosificador capta esa señal y la lleva a una forma que el sistema puede leer."
- foco visual: puente entre planta, cableado y bionosificador.
- motion cue: flujo planta → bionosificador.
- criterio de éxito: el visitante reconoce que hay mediación técnica desde la captura.

### 4. Acondicionamiento

- id: 4
- título: Acondicionamiento.
- iconLabel: Filtrado.
- panelLabel: Filtrado / estabilización.
- estado de Lía: calm.
- microcopy: "Antes de interpretarla, la señal se prepara: se filtra, se estabiliza y se ordena."
- foco visual: señal preparada, filtrada o estabilizada.
- motion cue: transformación de señal irregular a señal más ordenada.
- criterio de éxito: el visitante entiende que el dato se prepara antes de ser interpretado.

### 5. Interpretación / mapeo

- id: 5
- título: Interpretación / mapeo.
- iconLabel: Mapeo.
- panelLabel: Interpretación / mapeo.
- estado de Lía: curious.
- microcopy: "El sistema interpreta la señal y la mapea. Aquí el dato vivo empieza a convertirse en evento musical mediado."
- foco visual: red de puntos, matriz o mapeo.
- motion cue: puntos conectados o matriz que transforma la señal.
- criterio de éxito: el visitante entiende que el evento musical aparece por interpretación y mapeo, no por autonomía vegetal.

### 6. Resultado sonoro mediado

- id: 6
- título: Resultado sonoro mediado.
- iconLabel: Resultado.
- panelLabel: Forma sonora mediada.
- estado de Lía: calm.
- microcopy: "El resultado no sale solo de la planta. Es una experiencia mediada por captura, electrónica, interpretación y software."
- foco visual: visualización abstracta final sin parlante dominante.
- motion cue: cierre visual de mediación, sin notas musicales saliendo de la planta.
- criterio de éxito: el visitante comprende que el resultado sonoro es mediado por captura, electrónica, interpretación y software.

## 4. Estados

Estados permitidos:

- `locked`
- `available`
- `active`
- `completed`
- `review`

Definición:

- `locked`: capa futura bloqueada en primera pasada.
- `available`: siguiente capa disponible.
- `active`: capa actual.
- `completed`: capa vista en primera pasada.
- `review`: capa revisable después de completar las 6.

## 5. Eventos

Eventos permitidos:

- `select_layer`
- `next_layer`
- `complete_layer`
- `unlock_review`
- `reset_station`
- `image_failed`

No crear eventos implícitos.

## 6. Transiciones permitidas

Primera pasada:

- Capa activa N → `next_layer` → capa activa N+1.
- Capa futura no se puede seleccionar.
- Capa actual puede reactivarse sin cambio.

Al completar capa 6:

- `unlock_review`.
- Todas las capas quedan en modo revisión.

Revisión libre:

- Cualquier capa puede seleccionarse.
- No se pierde progreso.

## 7. Motion spec

### `scene_enter`

- objetivo visual: introducir la escena sin sensación de pantalla plana.
- duración recomendada: 300–450 ms.
- easing recomendado: `power2.out` o equivalente suave.
- selector o data attribute futuro: `[data-station2-motion-cue="scene_enter"]`.
- fallback reduced-motion: mostrar estado inicial sin desplazamiento.
- criterio de éxito: la escena aparece con claridad sin retrasar el contenido.

### `layer_activate`

- objetivo visual: hacer evidente la capa activa.
- duración recomendada: 220–320 ms.
- easing recomendado: `power2.out`.
- selector o data attribute futuro: `[data-station2-motion-cue="layer_activate"]`.
- fallback reduced-motion: cambio inmediato de borde, opacidad o foco.
- criterio de éxito: el visitante identifica la capa activa sin depender solo del color.

### `panel_focus`

- objetivo visual: enfocar el panel narrativo de la capa.
- duración recomendada: 250–350 ms.
- easing recomendado: `power1.out`.
- selector o data attribute futuro: `[data-station2-motion-cue="panel_focus"]`.
- fallback reduced-motion: foco visual por borde y jerarquía tipográfica.
- criterio de éxito: el panel activo se distingue sin bloquear lectura.

### `lia_shift`

- objetivo visual: acompañar el cambio de microcopy de Lía.
- duración recomendada: 240–360 ms.
- easing recomendado: `power2.out`.
- selector o data attribute futuro: `[data-station2-motion-cue="lia_shift"]`.
- fallback reduced-motion: cambio de estado y texto sin desplazamiento.
- criterio de éxito: Lía acompaña sin dominar la escena.

### `signal_trace`

- objetivo visual: sugerir señal bioeléctrica como dato.
- duración recomendada: 500–900 ms.
- easing recomendado: `power1.inOut`.
- selector o data attribute futuro: `[data-station2-motion-cue="signal_trace"]`.
- fallback reduced-motion: línea o marcador estático.
- criterio de éxito: se entiende como dato, no como música autónoma.

### `layer_complete`

- objetivo visual: indicar avance de primera pasada.
- duración recomendada: 180–260 ms.
- easing recomendado: `power1.out`.
- selector o data attribute futuro: `[data-station2-motion-cue="layer_complete"]`.
- fallback reduced-motion: marca visual inmediata.
- criterio de éxito: se percibe progreso sin generar sensación de juego competitivo.

### `review_unlock`

- objetivo visual: comunicar que ya se puede revisar libremente.
- duración recomendada: 350–500 ms.
- easing recomendado: `power2.out`.
- selector o data attribute futuro: `[data-station2-motion-cue="review_unlock"]`.
- fallback reduced-motion: texto de revisión libre y estado de botones.
- criterio de éxito: el visitante entiende que puede volver a cualquier capa.

No implementar animaciones todavía.

## 8. Reduced motion

Regla:

Si `prefers-reduced-motion: reduce` está activo:

- no desplazar elementos grandes;
- no usar loops;
- usar cambios de opacidad, borde o foco;
- mantener el mismo contenido pedagógico.

## 9. Accesibilidad

- `aria-pressed` en botones de capa.
- Botones deshabilitados para capas futuras.
- `aria-live` para microcopy de Lía.
- Labels comprensibles.
- No depender de hover.
- Targets táctiles adecuados.

## 10. Relación con Estación IV

Estación II no debe mostrar ni duplicar toda la cadena de 8 nodos.

Estación II trabaja 6 capas pedagógicas.
Estación IV conserva el flujo técnico completo de 8 nodos.

## 11. Criterios de éxito

□ El visitante entiende que la señal bioeléctrica no es música por sí sola.
□ El visitante entiende la mediación.
□ La secuencia se puede completar sin escribir.
□ Las capas futuras no se saltan en primera pasada.
□ La revisión libre se habilita al final.
□ Lía acompaña sin dominar.
□ reduced-motion conserva comprensión.
□ No se sugiere planta → música directa.

## 12. Próximo paso

Si este contrato se aprueba:
abrir ticket para motion pass con GSAP o Motion.
