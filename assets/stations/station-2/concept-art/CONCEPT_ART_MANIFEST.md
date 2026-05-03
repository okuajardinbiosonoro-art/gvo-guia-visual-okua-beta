# Manifiesto de concept art — Estación II

## 1. Estado

Usar uno de estos estados:

- `blocked_no_concept_art`
- `pending_review`
- `approved`
- `rejected`

Estado actual:

  `approved`

## 2. Fuentes usadas

Referenciar:

- `assets/stations/station-2/concept-prompts.md`
- `docs/03-ux/station-2-3d-experience-definition.md`
- `docs/avatars/lia-andina/lia-andina-spec.md`

## 3. Candidatos recibidos

| ID | Archivo | Fuente/prompt | Estado | Observación |
|----|---------|---------------|--------|-------------|
| C1 | `candidates/station-2-concept-c1.png` | ChatGPT Images / GVO-3D-05 | `approved` | Concept art aprobado por responsable |
| A1 | `approved/station-2-concept-approved.png` | Copia aprobada de C1 | `approved` | Base visual para interacción y producción |

## 4. Criterios de evaluación

Checklist:

□ La imagen no sugiere planta → música directa.
□ La señal se representa como dato/variación, no como música autónoma.
□ La mediación tecnológica es visible.
□ El bionosificador/captura aparece o queda representado como puente técnico.
□ La composición es mobile-first.
□ No hay audio, AR, scanner QR interno ni multiavatar.
□ No hay aura mágica ni exceso de partículas.
□ Lía, si aparece, respeta la spec visual.
□ El resultado sirve como referencia para modelado en Blender.

## 5. Decisión del responsable

Usar una de estas salidas:

- Aprobado para Blender.
- Rechazado: requiere nueva generación de concept art.
- Pendiente: requiere revisión humana.
- Bloqueado: no hay imágenes candidatas.

Aprobado para documentación de interacción.
Pendiente para Blender hasta cerrar documento de interacción GVO-3D-07.
No aprobado para runtime directo.

## 6. Concept art aprobado

- Archivo aprobado: `approved/station-2-concept-approved.png`
- Razón de aprobación:
  - muestra planta viva;
  - muestra sensores/cables;
  - muestra bionosificador/circuito;
  - muestra seis capas visuales;
  - incluye Lía como guía sin dominar;
  - no sugiere planta -> música directa si se acompaña con copy correcto.
- Riesgos visuales a vigilar:
  - ondas visuales pueden parecer música autónoma si se separan del microcopy;
  - no usar como imagen final runtime sin overlays pedagógicos;
  - no pasar a Blender sin definición de interacción.
