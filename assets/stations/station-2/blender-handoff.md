# Handoff a Blender — Estación II

## 1. Estado de entrada

Concept art aprobado: SÍ.

Estado: PENDIENTE DE APROBACIÓN VISUAL HUMANA.
Aclaración: el slice React fue validado por el responsable en iPhone y PC, pero el GLB candidato todavía no tiene aprobación visual explícita.
La validación habilita preparar el prompt/script Blender, pero no autoriza ejecutar Blender, producir GLB final, declarar Estación II finalizada ni copiar GLB a runtime.
No producir GLB todavía.

Base validada:
- Concept art aprobado.
- Documento de interacción.
- Opción B registrada.
- Slice React de validación implementado.
- Validación humana en iPhone y PC.
- Deuda PNG runtime registrada.

Decisión responsable: Opción B — slice de validación 2D previo al GLB.
Esta decisión no cierra Estación II.
Esta decisión no reemplaza el pipeline Blender → GLB → Three.js.
Referencia: `docs/03-ux/station-2-option-b-validation-slice-plan.md`

Documento de interacción creado:
- `docs/03-ux/station-2-interaction-animation-spec.md`

La decisión técnica de implementación ya quedó registrada como Opción B.
Ver la sección 10 del documento de interacción y el plan de slice de validación.

Próximo: generar prompt para chat Blender Python o ticket de generación de script Blender. No ejecutar Blender todavía si no existe script aprobado.

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

## 8. Salidas Blender auditadas

- `.blend` candidato: `assets/3d-production/stations/station-2/04-blender-source/station-2-bioelectric-mediation.blend`
- `.glb` candidato: `assets/3d-production/stations/station-2/05-exports/glb-candidates/station-2-bioelectric-mediation-candidate.glb`
- preview: `Preview pendiente de generación`
- reporte: `assets/3d-production/stations/station-2/07-validation-notes/station-2-blender-output-audit.md`
- decisión técnica: `CANDIDATO TÉCNICAMENTE ACEPTABLE PARA REVISIÓN HUMANA`
- integración runtime: NO
- GLB aprobado: NO
- Estación II finalizada: NO

## 9. Revisión visual

- preview: pendiente
- método de revisión: pendiente
- decisión visual: `PENDIENTE DE APROBACIÓN VISUAL HUMANA`
- GLB aprobado en staging: NO
- integración runtime: NO
- Estación II finalizada: NO
