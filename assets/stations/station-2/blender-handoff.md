# Handoff a Blender — Estación II

## 1. Estado de entrada

Concept art aprobado: SÍ.

Estado: INTEGRACIÓN RUNTIME INICIAL HABILITADA.
Aclaración: el slice React fue validado por el responsable en iPhone y PC, el preview ya fue generado con Blender CLI y el GLB aprobado fue copiado a runtime.
La integración habilita la escena 3D inicial con fallback, pero no autoriza declarar Estación II finalizada ni tratar el runtime como cierre de estación.

Base validada:
- Concept art aprobado.
- Documento de interacción.
- Opción B registrada.
- Slice React de validación implementado.
- Validación humana en iPhone y PC.
- GLB candidato aprobado por responsable.
- GLB runtime copiado.
- Deuda PNG runtime registrada.

Decisión responsable: Opción B — slice de validación 2D previo al GLB.
Esta decisión no cierra Estación II.
Esta decisión no reemplaza el pipeline Blender → GLB → Three.js.
Referencia: `docs/03-ux/station-2-option-b-validation-slice-plan.md`

Documento de interacción creado:
- `docs/03-ux/station-2-interaction-animation-spec.md`

La decisión técnica de implementación ya quedó registrada como Opción B.
Ver la sección 10 del documento de interacción y el plan de slice de validación.

Próximo: validar el runtime 3D en móvil/lab. No declarar la estación cerrada hasta completar esa validación.

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
- preview: `assets/3d-production/stations/station-2/06-previews/station-2-bioelectric-mediation-preview.png`
- reporte: `assets/3d-production/stations/station-2/07-validation-notes/station-2-blender-output-audit.md`
- decisión técnica: `CANDIDATO TÉCNICAMENTE ACEPTABLE PARA REVISIÓN HUMANA`
- GLB aprobado path: `assets/3d-production/stations/station-2/05-exports/glb-approved/station-2-bioelectric-mediation.glb`
- GLB runtime path: `apps/web/src/assets/3d/stations/station-2/station-2-bioelectric-mediation.glb`
- decisión visual: `APROBADO COMO GLB CANDIDATO`
- integración runtime: SÍ
- GLB aprobado: SÍ
- Estación II finalizada: NO

## 9. Revisión visual

- preview: SÍ
- método de revisión: preview
- decisión visual: APROBADO COMO GLB CANDIDATO
- GLB aprobado en staging: SÍ
- GLB aprobado path: `assets/3d-production/stations/station-2/05-exports/glb-approved/station-2-bioelectric-mediation.glb`
- GLB runtime path: `apps/web/src/assets/3d/stations/station-2/station-2-bioelectric-mediation.glb`
- integración runtime: SÍ
- Fallback 2D: SÍ
- Validación móvil/lab runtime: PENDIENTE
- Estación II finalizada: NO

La aprobación del GLB candidato permite abrir un ticket de integración
React/Three.js con fallback PNG/2D. La integración runtime ya está iniciada,
pero no permite declarar la estación cerrada hasta validar runtime y móvil.
