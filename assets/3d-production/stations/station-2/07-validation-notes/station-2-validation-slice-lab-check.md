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

Blender: no listo.

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
Dispositivo: pendiente de validación humana.

Navegador: pendiente de validación humana.

Fecha: 2026-05-04.

Resultado visual: pendiente de validación humana.

Problemas detectados: deuda de optimización del PNG runtime y verificación móvil todavía no registrada por responsable.

Decisión: PENDIENTE DE VALIDACIÓN HUMANA.

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
PENDIENTE DE VALIDACIÓN HUMANA.

No se declara aprobado para handoff a Blender sin confirmación explícita del responsable en móvil o laboratorio.

## 7. Siguiente paso recomendado
Ejecutar validación móvil real con responsable humano.

Si el resultado es positivo, registrar `APROBADO PARA HANDOFF A BLENDER` o `APROBADO CON DEUDA PARA HANDOFF A BLENDER` en una revisión posterior.

Si la experiencia falla en legibilidad, interacción o comprensión, abrir ticket de ajuste React antes de pasar a Blender.
