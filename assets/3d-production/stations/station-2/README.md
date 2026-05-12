# Producción 3D — Estación II

Esta carpeta conserva la trazabilidad de producción visual de Estación II.

Estado actual:

- Hay definición UX.
- Hay brief de producción.
- Hay concept art aprobado.
- Hay documento de interacción creado (GVO-3D-07).
- Decisión de implementación tomada: Opción B.
- Opción B = slice de validación 2D previo al GLB.
- Metodología activa: web-first 2.5D.
- Blender como carril principal: RETIRADO.
- Runtime 3D anterior: RETIRADO.
- GLB runtime: RETIRADO.
- GLB staging activo: RETIRADO.
- Slice React 2D/2.5D: CONSERVADO.
- Slice React de validación implementado: SÍ.
- Slice React de validación aprobado por responsable: SÍ.
- Contrato de estados y motion spec: CREADO.
- Contrato TypeScript de interacción: CREADO.
- Motion pass: IMPLEMENTADO.
- GSAP instalado: SÍ.
- Motion por estados: SÍ.
- Reduced-motion: SOPORTADO.
- QA humano motion pass: REGISTRADO.
- Validado con `npm run dev`: SÍ.
- Validado en iPhone por responsable: SÍ.
- Validado en PC por responsable: SÍ.
- Recorrido completo sin errores reportado: SÍ.
- Decisión QA: APROBADO FUNCIONALMENTE POR RESPONSABLE CON DEUDA DOCUMENTAL.
- Captura/video adjunta: SÍ.
- Validación explicit reduced-motion: SÍ.
- QA final humano: REGISTRADO.
- Evidencia visual adjunta: SÍ.
- Evidencia visual path: `assets/3d-production/stations/station-2/06-previews/station-2-motion-pass-evidence.mp4`.
- Reduced-motion validado explícitamente: SÍ.
- Decisión QA final: APROBADO FUNCIONALMENTE, NO LISTO PARA CIERRE.
- Alcance 3D web-first: DEFINIDO.
- Pulido visual 3D web-first: IMPLEMENTADO.
- Overlays por capa: SÍ.
- Profundidad visual web-first: SÍ.
- Foco visual por capa: SÍ.
- Movimiento de Lía conectado: PARCIAL.
- Reduced-motion equivalente: SOPORTADO.
- Cierre de Estación II: BLOQUEADO hasta QA humano del pulido 3D web-first.
- GSAP/Motion alternativo: NO INSTALADO.
- Concept art aprobado: CONSERVADO.
- Imagen runtime del slice: CONSERVADA.
- Implementación React final de Estación II: NO.
- Implementación React/Three final con GLB: NO.
- Implementación 3D final: NO.
- Estación II finalizada: NO.
- Deuda de optimización: PNG runtime de 2.160.381 bytes; considerar WebP futuro.
- Validado en iPhone: SÍ.
- Validado en PC: SÍ.
- Decisión de validación del slice: APROBADO CON DEUDA PARA PREPARAR HANDOFF A BLENDER.
- Salidas Blender anteriores: OBSOLETAS.
- `.blend` candidato anterior: RETIRADO.
- GLB candidato anterior: RETIRADO.
- GLB aprobado anterior: RETIRADO.
- Preview Blender anterior: RETIRADO.

El slice React actual queda como base principal para la nueva ruta web-first 2.5D.
Valida interacción, microcopy y secuencia por capas.
No debe interpretarse como cierre visual final.

El motion pass anima transiciones de estado del slice 2.5D. No representa cierre
visual final. Fue validado funcionalmente por el responsable en iPhone y PC.
El QA final registró evidencia visual real y validación explícita de
reduced-motion en iPhone. Esa validación aprueba el funcionamiento, pero no
autoriza cierre: falta completar el acabado 3D web-first, la profundidad visual
y las animaciones esperadas. GVO-3D-21 implementa una primera capa de pulido
web-first con overlays SVG/DOM, foco por capa y profundidad visual controlada.

Blender/GLB queda pausado como apoyo visual futuro y no como núcleo de implementación.
No usar los binarios retirados para runtime.

Próximo paso: QA humano final del pulido 3D web-first con evidencia.
