# Handoff a Blender — Estación II

## 1. Estado de entrada

Concept art aprobado: SÍ.

Estado: NO LISTO PARA BLENDER TODAVÍA.
Motivo: se eligió Opción B como slice de validación previo al GLB.
Blender queda pendiente hasta validar la base interactiva y actualizar este handoff como LISTO.
No producir GLB todavía.

Decisión responsable: Opción B — slice de validación 2D previo al GLB.
Esta decisión no cierra Estación II.
Esta decisión no reemplaza el pipeline Blender → GLB → Three.js.
Referencia: `docs/03-ux/station-2-option-b-validation-slice-plan.md`

Documento de interacción creado:
- `docs/03-ux/station-2-interaction-animation-spec.md`

La decisión técnica de implementación ya quedó registrada como Opción B.
Ver la sección 10 del documento de interacción y el plan de slice de validación.

## 2. Asset final esperado

`station-2-bioelectric-mediation.glb`

## 3. Escena a modelar

- Planta simplificada.
- Señal bioeléctrica como dato.
- Bionosificador/captura como puente.
- Flujo de 6 capas funcionales.
- Fondo sobrio.
- Lía solo si existe referencia aprobada y sin dominar la escena.

Antes de abrir Blender se debe cerrar:

- documento de interacción de Estación II;
- definición de anclas de paneles;
- comportamiento de Lía por capa;
- decisión sobre el slice de validación y su paso a Blender.

## 4. Restricciones narrativas

- No planta cantando.
- No planta tocando instrumentos.
- No notas musicales saliendo directamente de la planta.
- No aura mágica.
- No magia visual.
- No reemplazar la función de Estación IV.

## 5. Restricciones técnicas

- GLB < 3 MB, objetivo < 1.5 MB.
- Texturas máximo 1024×1024.
- Sin audio.
- Sin dependencias externas.
- Legible en iPhone SE de segunda generación.
- Pensado para Three.js bundleado con Vite.

## 6. Animaciones

Permitidas:

- pulso lento de señal;
- revelado de capas;
- vibración sutil de dato.

No permitidas:

- explosiones;
- partículas densas;
- cámara libre obligatoria;
- efectos mágicos.

## 7. Criterio de salida de Blender

□ GLB exportado.
□ Peso reportado.
□ Preview PNG/WebP generado.
□ Archivo fuente Blender guardado si aplica.
□ Responsable aprueba visualmente.
□ No hay lectura planta → música directa.
□ Listo para abrir ticket React solo después de aprobación.
