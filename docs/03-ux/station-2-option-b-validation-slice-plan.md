# GVO — Estación II: plan de slice de validación 2D previo al GLB

## 1. Propósito del documento
Registrar formalmente la decisión del responsable: Opción B.

Este slice no finaliza Estación II.
Este slice no reemplaza el objetivo 3D.
Este slice no contradice ADR-003.
La dirección final sigue siendo Blender → GLB/GLTF → Three.js.

## 2. Estado de entrada
Concept art aprobado: sí.
Definición UX: sí.
Brief de producción: sí.
Staging 3D: sí.

GLB: no.
React scene: no.
Documento de interacción: sí.
Blender: NO LISTO.
ADR-003: pipeline 3D habilitado.

## 3. Decisión registrada
El responsable decide avanzar con la Opción B como paso intermedio de validación, no como destino final.

La Opción B permitirá implementar una base interactiva en React usando el concept art aprobado y overlays SVG/CSS para validar la pedagogía de las 6 capas antes de invertir en la producción completa del GLB.

Una vez validado el slice, la estación deberá continuar hacia producción 3D según ADR-003.

## 4. Alcance del slice de validación
El slice validará:
- navegación por 6 capas;
- estados locked / available / active / completed / review;
- microcopy de Lía;
- comportamiento visual de Lía con PNG fallback;
- estados visuales de íconos;
- estados de paneles;
- secuencia pedagógica en primera pasada;
- revisión libre al completar;
- fallback al SVG actual;
- legibilidad móvil.

## 5. Fuera de alcance del slice
Fuera de alcance:
- GLB;
- `.blend`;
- Lía 3D;
- paneles 3D;
- Three.js adicional;
- cierre final de Estación II;
- QR / sesión / secuencia;
- audio;
- AR;
- scanner QR interno;
- multiavatar.

## 6. Relación con la implementación 3D
El slice crea una base funcional y pedagógica.
El GLB posterior debe respetar la interacción validada.
La interacción del slice servirá como contrato para anclas visuales, timing, orden de capas, comportamiento de Lía, estados y fallback.

## 7. Arquitectura técnica esperada para el futuro ticket React
Componente futuro sugerido: `Station2ValidationSlice.tsx`.
Ubicación: `apps/web/src/components/stations/Station2ValidationSlice.tsx`.

Debe usar:
- estado React;
- CSS plano;
- overlays SVG/CSS;
- imagen aprobada copiada a runtime solo en el ticket de implementación;
- GuideAvatar PNG;
- fallback SVG actual si falla la imagen.

No debe usar todavía:
- GLB;
- Three.js adicional;
- audio;
- AR.

## 8. Reglas de assets para el futuro ticket React
El concept art aprobado ya existe en staging.
Para runtime, la versión aprobada deberá copiarse a `apps/web/src/assets/stations/station-2/`.

El import binario debe ir en `apps/web/src/lib/content.ts` o en un registry documentado si el componente no usa `VisualHero`.
No poner `src:` en `content/stations/station-2.ts`.
No importar imágenes desde `content/stations/*.ts`.
No importar desde `assets/3d-production/`.

## 9. Gate para abrir implementación React del slice
□ Este documento existe.
□ Decisión Opción B registrada.
□ Concept art aprobado existe en staging.
□ Fallback SVG actual conservado.
□ Se declara que el slice no finaliza Estación II.
□ Se declara que el slice es base para GLB futuro.
□ No se toca QR / sesión / secuencia.

## 10. Gate para pasar a Blender después del slice
□ Slice implementado.
□ Responsable aprobó interacción en móvil/laboratorio.
□ Capas, microcopy y timing confirmados.
□ Elementos a convertir en GLB definidos.
□ Handoff a Blender actualizado como LISTO.
□ Sin riesgo de lectura planta → música directa.

## 11. Riesgos de la Opción B
Riesgos principales:
- que el slice sea interpretado como final;
- que se postergue indefinidamente el GLB;
- que se use la imagen como runtime final sin overlays pedagógicos;
- que se rompa la regla de assets;
- que se duplique la función de Estación IV;
- que se sugiera planta → música directa;
- colores hardcodeados o CSS no alineado.

## 12. Criterio de cierre de este documento
□ Decisión B registrada.
□ Slice descrito como validación previa, no finalización.
□ Relación con GLB futuro clara.
□ Gates React y Blender claros.
□ No se modifica runtime, no se crea React, no se crea GLB.

## 13. Actualización metodológica

El slice de validación se convierte en base principal de la nueva ruta
web-first 2.5D. Blender/GLB deja de ser el carril principal hasta que el
comportamiento interactivo esté completamente cerrado y aprobado en navegador.
