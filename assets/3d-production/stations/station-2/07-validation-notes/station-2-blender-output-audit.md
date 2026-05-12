# Estación II — Auditoría de salidas Blender/GLB

Estado documental: OBSOLETO.

Este reporte queda como antecedente histórico. La ruta Blender/GLB fue retirada
como carril principal de Estación II en GVO-3D-15-R1. No usar estos resultados
como autorización vigente de runtime.

## 1. Propósito
Auditar técnicamente las salidas generadas en Blender para Estación II.

Este reporte no aprueba integración runtime.
Este reporte no declara Estación II finalizada.
Este reporte no reemplaza la aprobación visual del responsable.

## 2. Fuente local auditada
Ruta:

`C:\Users\JOSE DAVID\Documents\Blender_AI`

Archivos encontrados:

- `station-2-bioelectric-mediation.blend` - 317.110 bytes
- `station-2-bioelectric-mediation.blend1` - 317.962 bytes, backup
- `station-2-bioelectric-mediation.glb` - 625.796 bytes
- `animacion_chatgpt_blender.blend` - 117.707 bytes
- `animacion_chatgpt_blender.blend1` - 109.929 bytes, backup

Archivos seleccionados:

- `.blend`: `station-2-bioelectric-mediation.blend` / 317.110 bytes / `DBB609D1149C398471527124468555CFD9F707E4702EF8633FFA311A9B5E5196` / copiado sí
- `.glb`: `station-2-bioelectric-mediation.glb` / 625.796 bytes / `F52C8C93D653EAD077B36B10009089891FE7C08D4A418B294410357D7A7350DB` / copiado sí
- preview: `station-2-bioelectric-mediation-preview.png` - 1.878.986 bytes / generado sí

## 3. Archivos copiados a staging
- `.blend`: `assets/3d-production/stations/station-2/04-blender-source/station-2-bioelectric-mediation.blend`
- `.glb`: `assets/3d-production/stations/station-2/05-exports/glb-candidates/station-2-bioelectric-mediation-candidate.glb`
- preview: `assets/3d-production/stations/station-2/06-previews/station-2-bioelectric-mediation-preview.png`

## 4. Validación técnica GLB
- magic GLB: válido
- versión: 2
- longitud declarada: 625796
- longitud real: 625796
- tamaño bytes: 625796
- tamaño MB: 0.60
- hash: `F52C8C93D653EAD077B36B10009089891FE7C08D4A418B294410357D7A7350DB`
- referencias externas HTTP/CDN: no
- audio detectado: no
- clasificación por peso: bueno por peso
- nodos: 201
- meshes: 147
- materiales: 22
- animaciones: 29
- nombres principales de nodos:
  - `GVO_Station2_Root`
  - `Plant_Group`
  - `Panels_Root`
  - `Bionosifier_Group`
  - `Lia_Guide_Marker`
  - `Icons_Root`

Métricas estructurales avanzadas extraídas sin dependencias nuevas.

## 5. Revisión narrativa mínima
□ No hay planta cantando.
□ No hay notas musicales saliendo directamente de la planta.
□ No hay aura mágica.
□ No hay AR.
□ No hay scanner QR.
□ No hay multiavatar.
□ No hay audio.
□ Se reconoce planta viva.
□ Se reconoce señal bioeléctrica como dato.
□ Se reconoce bionosificador / captura.
□ Se sugieren 6 capas o flujo de mediación.
□ No duplica la cadena completa de Estación IV.

Revisión visual humana pendiente.

## 6. Decisión técnica
CANDIDATO TÉCNICAMENTE ACEPTABLE PARA REVISIÓN HUMANA.

## 7. Deudas detectadas
- Preview generado.
- Blender CLI disponible en `C:\Program Files\Blender Foundation\Blender 5.1\blender.exe`.
- `.blend1` detectados como backups auxiliares.
- GLB todavía no aprobado por responsable.
- Integración runtime inicial registrada en la sección 10.

## 8. Próximo paso recomendado
Abrir ticket de aprobación visual humana del GLB candidato.

La integración runtime ya fue iniciada y queda pendiente la validación móvil/lab
antes del cierre de Estación II.

## 9. Revisión visual
- Preview generado: SÍ.
- Preview path: `assets/3d-production/stations/station-2/06-previews/station-2-bioelectric-mediation-preview.png`.
- Método de revisión visual: preview.
- Decisión visual: APROBADO COMO GLB CANDIDATO.
- GLB copiado a `glb-approved/`: SÍ.
- GLB aprobado path: `assets/3d-production/stations/station-2/05-exports/glb-approved/station-2-bioelectric-mediation.glb`.
- Hash candidato: `F52C8C93D653EAD077B36B10009089891FE7C08D4A418B294410357D7A7350DB`.
- Hash aprobado: `F52C8C93D653EAD077B36B10009089891FE7C08D4A418B294410357D7A7350DB`.
- Hashes coinciden: SÍ.
- Integración runtime: NO.
- Estación II finalizada: NO.

La aprobación visual habilita preparar integración runtime en ticket posterior.
No autoriza copiar el GLB a `apps/web/src/assets/3d/` dentro de este ticket.

## 10. Integración runtime inicial
- GLB copiado a runtime: SÍ.
- Runtime path: `apps/web/src/assets/3d/stations/station-2/station-2-bioelectric-mediation.glb`.
- Hash staging/runtime: `F52C8C93D653EAD077B36B10009089891FE7C08D4A418B294410357D7A7350DB`.
- React/Three integration inicial: SÍ.
- Fallback 2D: SÍ.
- Validación móvil/lab runtime: PENDIENTE.
- Estación II finalizada: NO.
