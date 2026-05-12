# Handoff a Blender — Estación II

## 1. Estado

Estado: BLENDER/GLB RETIRADO COMO CARRIL PRINCIPAL DE ESTACIÓN II.

Concept art aprobado: SÍ.
Slice React 2D/2.5D validado: SÍ.
Estación II finalizada: NO.

## 2. Decisión metodológica

El GLB generado no cumple el comportamiento requerido.
No usar este GLB para runtime.
La integración runtime 3D fue retirada.
La nueva ruta es web-first 2.5D.

Blender queda pausado hasta que el comportamiento interactivo web esté cerrado,
probado y aprobado en navegador.

## 3. Base que se conserva

- Concept art aprobado.
- Documento de interacción.
- Opción B registrada.
- Slice React de validación implementado.
- Validación humana del slice en iPhone y PC.
- Modelo de 6 capas.
- Microcopy de Lía.
- Deuda PNG runtime registrada.

## 4. Salidas Blender retiradas

- `.blend` candidato: RETIRADO.
- `.glb` candidato: RETIRADO.
- `.glb` aprobado: RETIRADO.
- preview Blender: RETIRADO.
- integración runtime 3D: RETIRADA.

Los reportes de auditoría y aprobación visual quedan como antecedente obsoleto,
no como autorización vigente de runtime.

## 5. Restricciones vigentes

- No audio.
- No AR.
- No scanner QR interno.
- No multiavatar.
- No planta → música directa.
- No integración React/Three inmediata.
- No declarar Estación II finalizada.

## 6. Próximo paso

Crear contrato de estados y motion spec 2.5D para implementar la experiencia con
React + TypeScript + DOM/SVG/CSS y motion por estados.
