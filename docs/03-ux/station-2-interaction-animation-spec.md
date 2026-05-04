# GVO — Estación II: especificación de interacción y animación

## 1. Propósito del documento
Convertir el concept art aprobado en una especificación de interacción para Estación II.

No es implementación React, no es script Blender y no es GLB.
No cambia el copy runtime ni reemplaza el SVG fallback.
Sirve para decidir cómo animar e implementar la escena de Estación II.
La dirección final de implementación 3D ya está definida en ADR-003.

## 2. Estado de entrada confirmado
Concept art aprobado: sí.
Definición UX: sí.
Brief de producción: sí.
Staging 3D: sí.

GLB: no.
React scene: no.
Documento de interacción: no antes de este ticket.
Blender: NO LISTO.
ADR-003: pipeline 3D habilitado.

## 3. Lectura pedagógica del concept art
El concept art aprobado muestra una planta colgante, sensores y cables, un bionosificador o circuito dentro de una caja transparente, seis paneles laterales, seis íconos inferiores y Lía como guía visual.

La lectura pedagógica es museográfica, técnica y cálida.
La imagen funciona como referencia de interacción, no como runtime final.
No sugiere planta -> música directa.
La mediación debe ser visible.

## 4. Modelo de interacción
El modelo de interacción es tap-a-tap.
La primera pasada es secuencial y obligatoria.
La revisión libre solo se habilita después de completar la estación.

Los íconos inferiores sirven como navegación por capas.
Los paneles sirven como feedback visual y narrativo.
No hay escritura, no hay audio, no hay AR y no hay hover obligatorio.
La experiencia debe seguir siendo legible en móvil pequeño.

Estados de capa:
- locked
- available
- active
- completed
- review

## 5. Capas interactivas

### Capa 1 — Planta viva
Ícono: planta.
Panel: planta / raíz / hoja.
Animación: brillo sutil planta -> sensor.
Lía: se acerca a la planta. Estado: curious.
Microcopy: "Primero está la planta. No es un adorno: es un ser vivo con actividad que normalmente no percibimos."

### Capa 2 — Señal bioeléctrica
Ícono: onda irregular.
Panel: variación de señal.
Animación: línea irregular tipo dato, no partitura ni onda musical autónoma.
Lía: mira hacia la señal. Estado: curious.
Microcopy: "Esta variación representa una señal bioeléctrica. Existe, pero todavía no es música."

### Capa 3 — Captura / bionosificador
Ícono: circuito.
Panel: captura de señal.
Animación: flujo planta -> bionosificador.
Lía: se aproxima al circuito. Estado: curious.
Microcopy: "El bionosificador capta esa señal y la lleva a una forma que el sistema puede leer."

### Capa 4 — Acondicionamiento
Ícono: ondas ordenadas.
Panel: filtrado / estabilización.
Animación: la señal irregular se limpia o se estabiliza.
Lía: señala el panel. Estado: calm.
Microcopy: "Antes de interpretarla, la señal se prepara: se filtra, se estabiliza y se ordena."

### Capa 5 — Interpretación / mapeo
Ícono: red de puntos o matriz.
Panel: mapeo visual.
Animación: puntos conectados o matriz que transforma la señal.
Lía: se mueve hacia la zona de interpretación. Estado: curious.
Microcopy: "El sistema interpreta la señal y la mapea. Aquí el dato vivo empieza a convertirse en evento musical mediado."
Nota: "evento musical mediado" no significa autonomía vegetal.

### Capa 6 — Resultado sonoro mediado
Ícono: onda abstracta.
Panel: forma sonora mediada.
Animación: visualización abstracta final, sin parlante dominante.
Lía: vuelve a posición de cierre. Estado: calm.
Microcopy: "El resultado no sale solo de la planta. Es una experiencia mediada por captura, electrónica, interpretación y software."

## 6. Estados visuales de íconos
Estados visuales:
- inactivo
- disponible
- activo
- completado
- revisión

Reglas:
- no usar colores hardcodeados; usar variables CSS del proyecto;
- legible en móvil;
- no depender de hover;
- el estado debe ser visible sin depender solo del color.

## 7. Estados visuales de paneles
Inactivo: translúcido, bajo brillo, sin expansión.
Activo: borde lavanda / ámbar, leve escala, animación interna visible.
Completado: brillo bajo, marca sutil, disponible para revisión.

Fallback: si falla cualquier asset avanzado, conservar el SVG / hero actual.

## 8. Comportamiento de Lía
Estados: idle (inicio), curious (exploración), calm (cierre).

Lía no debe dominar la escena.
No debe tapar la planta, el bionosificador, el panel activo ni el CTA.
No debe parecer un hada mágica ni una mascota parlante.
No debe actuar como chat.
No hay audio.
Los textos deben ser breves.
El movimiento debe ser suave y corto.
Su función es acompañar la comprensión, no protagonizar la mediación técnica.

## 9. Animaciones recomendadas
Animaciones sugeridas:
- entrada de escena;
- activación de capa;
- transición entre capas;
- completado de capa;
- cierre de estación.

Puede resolverse con React + CSS / SVG:
- activación de íconos;
- brillo de panel;
- líneas animadas;
- microcopy;
- estado de Lía PNG;
- progreso por capas.

Puede resolverse con Canvas / SVG si hace falta:
- señal irregular;
- red de puntos;
- matrices;
- visualización abstracta.

Para Three.js / GLB, como objetivo final según ADR-003:
- volumen real del bionosificador;
- paneles 3D;
- Lía 3D animada;
- cableado 3D;
- escena GLB interactiva completa.

## 10. Opciones de implementación para decisión del responsable
La dirección final de implementación es 3D, según ADR-003.
Esta sección solo presenta opciones de secuenciación para que el responsable decida.
No pre-decide ni contradice ADR-003.

OPCIÓN A — Implementación directa 3D con Blender / GLB:
Seguir el pipeline de ADR-003 directamente: definir anclas, producir el GLB en Blender e integrarlo en React con Three.js.
Ventaja: alineación directa con ADR-003 y resultado final inmersivo.
Consideración: requiere completar el GLB antes de poder validar la pedagogía.

OPCIÓN B — Slice de validación 2D previo al GLB:
Implementar primero la lógica de capas con React + imagen 2D aprobada + overlays SVG/CSS como paso de validación pedagógica.
Una vez validada la secuencia de capas, reemplazar por el GLB de Blender.
Ventaja: permite validar comprensión e interacción antes de invertir en el GLB.
Consideración: agrega un paso intermedio que no es el resultado final.
Requiere que el responsable lo entienda como validación, no como destino.

OPCIÓN C — Híbrida:
Implementar con overlays CSS / Canvas los elementos animados más livianos (señal, capas) y reservar el GLB de Blender solo para Lía 3D y el volumen del bionosificador.

Decisión del responsable:
Se elige la OPCIÓN B — Slice de validación 2D previo al GLB.

Esta decisión habilita un ticket posterior para implementar una base interactiva con React + imagen 2D aprobada + overlays SVG/CSS.

Esta base no finaliza Estación II.
Esta base no reemplaza la implementación 3D.
Esta base sirve para validar interacción, microcopy, secuencia y estados antes de producir el GLB en Blender.

La dirección final sigue siendo 3D según ADR-003.

Documento de decisión:
`docs/03-ux/station-2-option-b-validation-slice-plan.md`

## 11. Criterios para pasar a Blender
□ Este documento aprobado por el responsable.
□ Decisión de implementación tomada por el responsable.
□ Anclas visuales aproximadas definidas.
□ Elementos 3D definidos: qué va a GLB y qué va a overlay.
□ Sin riesgo de planta -> música directa.
□ Blender-handoff actualizado como LISTO.

Mientras no se cumplan estos criterios: Blender = NO LISTO.

## 12. Criterios para pasar a React
□ Decisión de opción de implementación tomada.
□ Asset de referencia o GLB definido.
□ Fallback definido.
□ No se toca QR / sesión / secuencia.
□ No se importan assets desde `content/stations/*.ts`.
□ Secuencia pedagógica conservada.
□ Dónde vive el asset runtime: definido.

Mientras no se cumplan estos criterios: React = NO LISTO.

## 13. Diferencia con Estación IV
Estación II: señal bioeléctrica y mediación, con 6 capas pedagógicas.
Estación IV: cadena técnica completa de 8 nodos, representada por `SignalFlowDiagram`.

Estación II no debe mostrar los 8 nodos completos.
Estación II no debe reemplazar `SignalFlowDiagram`.

## 14. Criterio de cierre de este documento
□ 6 capas definidas.
□ Microcopy de Lía definido.
□ Estados visuales definidos.
□ Animaciones definidas.
□ Opciones de implementación presentadas al responsable.
□ Diferencia con Estación IV explícita.
□ Blender y React marcados como NO LISTO hasta aprobación.
□ Sin modificar runtime.
