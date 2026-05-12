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
- Captura/video adjunta: NO.
- Validación explicit reduced-motion: PENDIENTE.
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
visual final. Fue validado funcionalmente por el responsable en iPhone y PC,
con deuda documental por falta de captura/video adjunta y validación explícita
de reduced-motion.

Blender/GLB queda pausado como apoyo visual futuro y no como núcleo de implementación.
No usar los binarios retirados para runtime.

Próximo paso: decidir entre pulido visual 2.5D o QA final con evidencia
visual antes de cierre de Estación II.
