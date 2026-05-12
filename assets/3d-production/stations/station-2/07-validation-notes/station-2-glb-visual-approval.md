# Estación II — Aprobación visual del GLB candidato

Estado documental: OBSOLETO.

Este reporte queda como antecedente histórico. La ruta Blender/GLB fue retirada
como carril principal de Estación II en GVO-3D-15-R1. La aprobación visual aquí
registrada ya no habilita integración runtime.

## 1. Propósito
Registrar la revisión visual humana del GLB candidato de Estación II.

Este documento no integra runtime.
Este documento no declara Estación II finalizada.
Este documento no reemplaza validación móvil posterior en React/Three.js.
Este documento no aprueba visualmente por Codex.

## 2. Candidato revisado
- `.blend`: `assets/3d-production/stations/station-2/04-blender-source/station-2-bioelectric-mediation.blend`
- `.glb` candidato: `assets/3d-production/stations/station-2/05-exports/glb-candidates/station-2-bioelectric-mediation-candidate.glb`
- preview: `assets/3d-production/stations/station-2/06-previews/station-2-bioelectric-mediation-preview.png`
- reporte técnico: `assets/3d-production/stations/station-2/07-validation-notes/station-2-blender-output-audit.md`
- método de revisión: preview

## 3. Checklist visual
Responsable humano debe revisar:

□ Se reconoce una planta viva.
□ Se reconoce señal bioeléctrica como dato, no como música.
□ Se reconoce bionosificador / captura.
□ Se reconoce acondicionamiento o transformación de señal.
□ Se reconoce interpretación / mapeo.
□ Se reconoce resultado sonoro mediado.
□ Se evita planta → música directa.
□ No hay notas musicales saliendo de la planta.
□ No hay planta cantando.
□ No hay aura mágica.
□ No hay AR.
□ No hay scanner QR.
□ No hay multiavatar.
□ No hay audio.
□ No duplica la cadena completa de Estación IV.
□ La escena se entiende en composición vertical / mobile-first.
□ La escena puede servir como base para integración Three.js.

## 4. Decisión visual
APROBADO COMO GLB CANDIDATO.

Decisión del responsable:
El responsable revisó el preview generado y aprobó el GLB como candidato
para preparar integración React/Three.js con fallback.

Regla:

Si no hay decisión explícita del responsable, usar:

  PENDIENTE DE APROBACIÓN VISUAL HUMANA.

No aprobar por Codex.
No aprobar solo por validez técnica.
No aprobar solo porque el GLB pesa poco.

## 5. Deudas visuales
- preview generado;
- aprobación humana registrada;
- GLB listo para copiarse a `glb-approved/`;
- integración runtime sigue bloqueada hasta ticket posterior;
- Estación II no finalizada.

## 6. Resultado de aprobación
Resultado:
El GLB puede copiarse a `glb-approved/` en staging.
La integración runtime sigue bloqueada hasta ticket posterior.
GLB aprobado en staging: SÍ.

Si aprobado con deuda:

  El GLB puede copiarse a `glb-approved/` solo si la deuda no bloquea pedagogía.
  La deuda debe absorberse antes de cierre final o integración final.

Si rechazado:

  No copiar a `glb-approved/`.
  Abrir ticket de ajuste Blender o regeneración.

Si pendiente:

  No copiar a `glb-approved/`.
  Ejecutar revisión visual humana antes de avanzar.

## 7. Próximo paso
Próximo paso:
abrir ticket para integración React/Three.js con fallback y validación móvil.

Si rechazado:

  Abrir ticket de ajuste Blender.

Si pendiente:

  Realizar revisión visual humana del preview o del GLB candidato.
