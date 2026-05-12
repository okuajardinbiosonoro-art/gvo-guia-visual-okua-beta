# GVO — Estación II: metodología web-first 2.5D

## 1. Decisión

Blender/GLB deja de ser el carril principal de Estación II.

La ruta activa pasa a ser:

React + TypeScript + DOM/SVG/CSS + motion por estados.

## 2. Motivo

El carril Blender/GLB no logró el comportamiento interactivo esperado y no es viable como núcleo para definir la experiencia.

## 3. Qué se conserva

- Concept art aprobado.
- Slice React de validación.
- Imagen runtime del slice.
- Modelo de 6 capas.
- Microcopy de Lía.
- Secuencia pedagógica.
- Revisión libre posterior.
- Hero/SVG actual como fallback.

## 4. Qué se retira

- Componente runtime 3D.
- GLB runtime.
- `.blend` candidato.
- GLB candidato.
- GLB aprobado.
- Preview Blender.
- Ruta de integración React/Three inmediata.

## 5. Nueva arquitectura

- Contrato de comportamiento.
- Estados y eventos tipados.
- Reducer o máquina de estados.
- SVG/DOM overlays.
- GSAP/Motion solo en ticket posterior.
- Reduced-motion obligatorio.
- Feedback por capa.
- Lía PNG/visual como guía.

## 6. Roles

ChatGPT:
- especifica;
- genera tickets;
- revisa salidas;
- evalúa capturas/video.

Codex:
- implementa;
- valida;
- reporta.

Responsable:
- prueba en iPhone/PC;
- aprueba visualmente;
- decide ajustes.

## 7. Reglas

- Si el comportamiento no está aprobado en navegador, no se pasa a 3D.
- Si algo solo sirve para MP4, no es el núcleo del runtime.
- No se sugiere planta → música directa.
- No audio.
- No AR.
- No scanner QR interno.
- No multiavatar.
- No internet en campo.

## 8. Próximo paso

Pulido visual 3D web-first para Estación II.

## 9. Aclaración posterior de cierre

El QA funcional no cierra Estación II.

Antes de cerrar, debe completarse el acabado 3D web-first entendido como:
profundidad visual, foco por capas, overlays, motion claro, Lía conectada con
la capa activa y validación final en iPhone/PC.

Blender/GLB no vuelve a ser carril principal, pero la estación sí debe alcanzar
una sensación espacial/3D suficiente para cumplir la intención visual del proyecto.

Referencia:
`docs/03-ux/station-2-web-first-3d-scope.md`
