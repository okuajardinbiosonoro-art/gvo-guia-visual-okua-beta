# Estación II — Validación de slice React 2D previo al GLB

## 1. Propósito
Registrar la validación del slice React de Estación II antes de cualquier paso hacia Blender o GLB.

Este slice no finaliza Estación II y no reemplaza el GLB.
Sirve para validar interacción, microcopy, secuencia y estados antes de producción 3D.

## 2. Estado del repo
Slice React implementado: sí.

Concept art runtime integrado: sí.

Tamaño PNG runtime: 2.160.381 bytes.

Deuda de optimización PNG: sí. Supera el objetivo de 1.5 MB y permanece por debajo del máximo de 3 MB.

GLB: no.

Three.js adicional: no.

Blender: no ejecutado.

QR/sesión/secuencia: sin tocar.

## 3. Checklist funcional
□ El slice aparece solo en Estación II.
□ El hero/SVG actual sigue visible como fallback.
□ La Capa 1 inicia activa.
□ Las capas avanzan en orden durante la primera pasada.
□ Los botones de capas futuras están `disabled`.
□ El botón `Siguiente capa` avanza correctamente.
□ Al completar la Capa 6 se habilita revisión libre.
□ El microcopy cambia por capa.
□ Lía cambia de estado mediante `GuideAvatar`.
□ El texto visible dice `Señal y mediación` y no `Validación de Estación II`.
□ No hay audio, AR, scanner QR interno ni GLB.
□ No hay lectura planta → música directa.

## 4. Checklist móvil
Dispositivo:
- iPhone.
- PC.

Navegador:
- iPhone: no especificado.
- PC: no especificado.

Fecha: 2026-05-04.

Resultado visual:
- El responsable verificó que el slice se ve bien en iPhone.
- El responsable verificó que el slice se ve bien en PC.
- No se reportaron problemas visuales bloqueantes.
- No se reportaron problemas de navegación bloqueantes.

Problemas detectados:
- Deuda de optimización del PNG runtime.
- No se reportaron ajustes bloqueantes de layout, microcopy o interacción.

Decisión: APROBADO CON DEUDA PARA PREPARAR HANDOFF A BLENDER.

Criterios mínimos:
□ Legible en pantalla pequeña.
□ Botones táctiles utilizables.
□ Sin scroll horizontal.
□ Sin bloqueo de navegación global.
□ El visitante entiende que la señal bioeléctrica no es música por sí sola.
□ El texto visible no usa lenguaje interno de desarrollo.
□ La experiencia no se percibe como final visual de Estación II.

## 5. Deudas detectadas
La principal deuda sigue siendo la optimización del PNG runtime.

`station-2-concept-approved.png` pesa 2.160.381 bytes.
Considerar WebP futuro antes de campo o antes de cerrar la capa visual final.

También pueden quedar ajustes menores de layout, microcopy, timing, contraste o tamaño táctil si la validación móvil los revela.

## 6. Decisión
APROBADO CON DEUDA PARA PREPARAR HANDOFF A BLENDER.

La deuda pendiente es la optimización del PNG runtime antes de campo o antes de cierre visual final. Esta deuda no bloquea la preparación del handoff a Blender, porque el slice ya validó interacción, microcopy y secuencia base según confirmación del responsable en iPhone y PC.

Este slice no finaliza Estación II.
Este slice no reemplaza el GLB.
No se declara Estación II finalizada.
No se declara GLB aprobado.
No se declara implementación 3D final.

## 7. Siguiente paso recomendado
Preparar handoff/prompt para Blender Python usando el slice validado como contrato de interacción, microcopy y secuencia.

La producción Blender debe respetar:
- las 6 capas validadas;
- la línea narrativa señal viva ≠ música directa;
- Lía como guía única;
- cero audio;
- cero AR;
- cero scanner QR interno;
- mobile-first;
- fallback del slice mientras no exista GLB aprobado.
