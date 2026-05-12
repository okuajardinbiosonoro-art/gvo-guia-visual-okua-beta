# Estación II — QA final humano del runtime 2.5D

## 1. Propósito

Registrar la validación final humana de Estación II en la metodología web-first 2.5D.

Este documento no modifica runtime.
Este documento no instala dependencias.
Este documento no declara cierre de estación por sí solo.
Este documento sirve como gate previo al ticket de cierre de Estación II.

## 2. Estado de entrada

- Slice React 2D/2.5D: implementado.
- Contrato de estados: creado.
- Motion pass GSAP: implementado.
- QA funcional iPhone/PC: registrado.
- Runtime 3D: retirado.
- Blender/GLB como carril principal: retirado.
- Estación II finalizada: no.

## 3. Evidencia visual

Opción A — Evidencia adjunta:
- iPhone: incluido en video único entregado por el responsable.
- PC: sin captura separada en este ticket; validación funcional PC previa registrada en GVO-3D-18.
- video: `assets/3d-production/stations/station-2/06-previews/station-2-motion-pass-evidence.mp4`

Detalle técnico de evidencia:
- Fuente local entregada: `C:\Users\JOSE DAVID\Downloads\evidencia.mp4`.
- Fuente local hash SHA256: `A9B4CC335C1A0AD4A7F0F80A25EFA70CE0226A7B79D1B6DB685EEC34F845030C`.
- Evidencia versionada hash SHA256: `3CF06DE817244F2FF14751163710F82AA41446D44E5411C06F445A9CC4C41ED1`.
- Evidencia versionada: copia visual sin audio, derivada del video real entregado para no introducir audio en el repositorio.
- Dimensiones: 464 x 832 px.
- Duración: 113.016667 s.

No se inventó evidencia.
No se usó concept art como evidencia QA.

## 4. Validación reduced-motion

- Método usado: iPhone, configuración del sistema.
- Resultado: aprobado.

Checklist:

□ Con reduced-motion activo no hay desplazamientos fuertes.
□ No se pierden capas.
□ No se pierde microcopy.
□ No se pierde Lía.
□ No se rompe navegación.
□ La comprensión pedagógica se conserva.

## 5. Checklist narrativo

□ No hay audio.
□ No hay AR.
□ No hay scanner QR interno.
□ No hay multiavatar.
□ No hay planta → música directa.
□ Se entiende que la señal bioeléctrica no es música por sí sola.
□ Se entiende la mediación tecnológica.
□ Lía acompaña sin dominar.
□ La Estación II no duplica Estación IV.

## 6. Checklist funcional

□ Estación II carga.
□ El slice aparece.
□ Las 6 capas se pueden recorrer.
□ La primera pasada mantiene orden pedagógico.
□ La revisión libre posterior se mantiene.
□ El motion pass no bloquea lectura.
□ El recorrido completo funciona.
□ No hay scroll horizontal reportado.
□ No se rompe navegación global.

## 7. Decisión final QA

APROBADO FUNCIONALMENTE, NO LISTO PARA CIERRE.

Motivo:
- El responsable entregó evidencia visual real.
- El responsable validó reduced-motion en iPhone.
- No se reportaron problemas.
- El runtime 3D sigue retirado.
- La estación todavía no se declara finalizada dentro de este ticket.

Decisión posterior del responsable:
La Estación II no se puede cerrar todavía. Aunque el motion pass y el QA
funcional fueron aprobados, falta culminar el acabado 3D web-first, la
profundidad visual y las animaciones completas esperadas para que esta
estación sirva como base metodológica de las demás estaciones.

## 8. Deudas

- Captura/video: evidencia visual registrada como video único.
- Reduced-motion: aprobado por responsable en iPhone.
- PNG runtime: optimización futura no bloqueante para el ticket de cierre.
- Ajuste visual: sin deuda reportada.
- Ajuste de motion: sin deuda reportada.
- Accesibilidad: sin deuda reportada en este QA; mantener revisión en ticket de cierre.
- Otros: no aplica.

## 9. Próximo paso

Abrir ticket de pulido visual 3D web-first antes de cierre.
