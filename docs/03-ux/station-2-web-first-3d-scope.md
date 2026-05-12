# GVO — Estación II: alcance 3D web-first antes del cierre

## 1. Decisión

Estación II no se cierra todavía.

El QA funcional está aprobado, pero falta culminar el acabado 3D/volumétrico
web-first y las animaciones completas de la estación.

## 2. Qué significa “3D” en esta metodología

En Estación II, “3D” no significa volver a Blender como carril principal.

Significa lograr una experiencia visual con profundidad y comportamiento espacial
usando tecnologías web-first:

- capas visuales;
- profundidad mediante composición;
- paneles con jerarquía espacial;
- overlays SVG/DOM;
- focos por capa;
- movimiento guiado de Lía;
- sensación de escena, no galería plana;
- parallax o profundidad moderada si aporta claridad;
- motion por estados;
- reduced-motion equivalente.

Blender/GLB queda pausado hasta que el comportamiento web esté completamente
cerrado y solo puede volver si aporta valor específico.

## 3. Qué ya está aprobado

- Concept art aprobado.
- Slice React 2D/2.5D.
- Contrato de estados.
- Motion pass GSAP.
- QA funcional en iPhone.
- QA funcional en PC.
- Reduced-motion validado en iPhone.
- Evidencia visual registrada.

## 4. Qué falta para cierre

Falta implementar y validar un acabado 3D web-first suficiente:

□ Profundidad visual clara entre imagen base, Lía, paneles e íconos.
□ Foco visual por capa más explícito.
□ Overlays o señales visuales por capa.
□ Movimiento de Lía más conectado con la capa activa.
□ Indicadores de señal bioeléctrica como dato, no música.
□ Transición de capa con sensación espacial controlada.
□ Reduced-motion equivalente.
□ Validación iPhone/PC después del pulido.
□ Evidencia visual final.
□ Confirmación de que no se sugiere planta → música directa.

## 5. Elementos visuales mínimos a producir o ajustar

- Overlay de foco para planta/sensor.
- Overlay de señal bioeléctrica.
- Overlay de bionosificador/captura.
- Overlay de acondicionamiento.
- Overlay de mapeo.
- Overlay de resultado mediado.
- Estados visuales de Lía por capa.
- Profundidad visual en panel activo.
- Marca de completado/revisión libre.

Estos elementos pueden implementarse con CSS/SVG/DOM antes de pedir nuevos assets.

## 6. Qué NO entra todavía

- No reabrir Blender como carril principal.
- No crear GLB.
- No HyperFrames runtime.
- No audio.
- No AR.
- No scanner QR interno.
- No multiavatar.
- No cambio de QR/sesión/secuencia.
- No cierre de estación.

## 7. Criterios de cierre visual

La Estación II podrá abrir ticket de cierre solo si:

□ El comportamiento es claro.
□ La profundidad visual se entiende.
□ Las seis capas tienen foco visual diferenciado.
□ La animación ayuda a comprender, no distrae.
□ Lía acompaña sin dominar.
□ Reduced-motion conserva comprensión.
□ iPhone y PC se ven correctos.
□ Hay evidencia visual final.
□ El responsable aprueba explícitamente cierre.
□ No se sugiere planta → música directa.

## 8. Próximo paso

Abrir ticket de pulido visual 3D web-first para Estación II.
