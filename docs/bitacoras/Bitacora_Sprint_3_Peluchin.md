# BITÁCORA DE SPRINT 3 — PANEL DE ADMINISTRACIÓN Y FUNCIONALIDADES AVANZADAS

## SITIO WEB Y SISTEMA DE GESTIÓN — ALBERGUE "PELUCHÍN"

---

**PROYECTO:** Desarrollo de sitio web y sistema de gestión para el albergue de perritos "Peluchín"

**ORGANIZACIÓN:** Albergue "Peluchín" — ONG sin fines de lucro (Llojeta, La Paz, Bolivia)

**EQUIPO DESARROLLADOR:** Mariana del Arroyo · Nahomi Humerez · Santiago Acha · Jorge Saenz

---

### 1. DATOS DEL SPRINT

| Campo | Detalle |
|-------|---------|
| **N.º de sprint** | 3 de 4 |
| **Nombre del sprint** | Panel de administración y funcionalidades avanzadas |
| **Período** | Semanas 5–6 (Días 29 al 42) |
| **Fecha de inicio** | [dd/mm/aaaa] |
| **Fecha de cierre (demo)** | [dd/mm/aaaa] |
| **Objetivo del sprint** | Personalizar el panel de administración de WordPress, definir roles de usuario, implementar el dashboard de KPIs, el flujo de estados de adopción, la gestión de donaciones y voluntarios, el blog, los eventos, los backups, la seguridad y el contenido editable |

---

### 2. EQUIPO PARTICIPANTE

| # | Nombre | Rol en el sprint |
|---|--------|------------------|
| 1 | Mariana del Arroyo | Coordinación, dashboard de KPIs y flujo de estados de adopción |
| 2 | Nahomi Humerez | Personalización del panel, roles de usuario y contenido editable |
| 3 | Santiago Acha | Gestión de donaciones y voluntarios desde el admin, exportación Excel |
| 4 | Jorge Saenz | Blog, CPT Eventos, backups automáticos, seguridad y hardening |

**Responsable de la entrega (por el albergue):** ________________________

---

### 3. ALCANCE Y ENTREGABLES DEL SPRINT

| ID | Entregable | Criterio de aceptación |
|----|------------|------------------------|
| **E5** | Panel de administración completo (perritos, solicitudes, donaciones, voluntarios) | CRUD completo operativo |
| **E6** | Blog, galería de eventos, FAQ y contenidos editables | Secciones publicadas y editables desde admin |

---

### 4. ACTIVIDADES REALIZADAS

| Día | Actividad | Herramienta / Plugin | Responsable | Estado |
|-----|-----------|----------------------|-------------|--------|
| 29–30 | Personalización del panel de WordPress (logo, dashboard widgets, menús) | Admin Menu Editor / White Label CMS | Nahomi Humerez | Completada |
| 30–31 | Roles de usuario: admin, editor, voluntario (con permisos limitados) | Members / User Role Editor | Nahomi Humerez | Completada |
| 31–33 | Dashboard con KPIs del albergue (animales, solicitudes, donaciones) | Admin Dashboard Widgets + ACF | Mariana del Arroyo | Completada |
| 33–35 | Flujo de estados de adopción en el admin (pendiente → en revisión → aprobado/rechazado) | CPT UI + Post Statuses / PublishPress | Mariana del Arroyo | Completada |
| 35–37 | Gestión de donaciones desde el admin (registro manual, exportación Excel) | WPForms + WP All Export | Santiago Acha | Completada |
| 37–38 | Gestión de voluntarios desde el admin (listado, filtros, exportación) | Admin Columns / WP All Export | Santiago Acha | Completada |
| 38–39 | Blog con sistema de categorías y editor nativo | WordPress nativo | Jorge Saenz | Completada |
| 39–41 | CPT "Eventos" con fechas, ubicación, galería y formulario de registro | CPT UI + ACF + WPForms | Jorge Saenz | Completada |
| 40–41 | Configuración de backups automáticos diarios | UpdraftPlus | Jorge Saenz | Completada |
| 41 | Escaneo de seguridad y hardening WordPress | Wordfence | Jorge Saenz | Completada |
| 41–42 | Contenido editable por secciones (Quiénes Somos, FAQ, Donaciones) | ACF Options Pages | Nahomi Humerez | Completada |
| 42 | Botón flotante de WhatsApp en todo el sitio | Join.chat / código personalizado | Mariana del Arroyo | Completada |
| 42 | **DEMO: Panel admin completo + blog + eventos (E5, E6)** | Google Meet | Todo el equipo | Completada |

---

### 5. INCIDENCIAS Y OBSERVACIONES

1. Se detectó que el rol "voluntario" requería permisos adicionales para registrar donaciones; se ajustó la configuración del plugin User Role Editor y se documentó en el Manual de Usuario.
2. El contenido de las páginas legales (Reglamento de Adopción, Privacidad, Términos) fue transcrito tal como lo entregó el albergue el día 36; el albergue se comprometió a su revisión legal final en el Sprint 4.
3. Wordfence reportó la instalación del plugin WP File Manager (presente por defecto en el hosting) como riesgo medio; se eliminó el plugin y se endureció la configuración de seguridad.
4. Los backups automáticos diarios quedaron configurados hacia un repositorio externo y se verificó una restauración de prueba satisfactoria.

---

### 6. RESULTADOS DE LA DEMO (DÍA 42)

- Panel de administración personalizado con logo del albergue, widgets y menús simplificados.
- Roles de usuario definidos: admin, editor y voluntario con permisos limitados.
- Dashboard con KPIs (animales en adopción, solicitudes pendientes, donaciones del mes, voluntarios activos).
- CRUD completo de animales y gestión de solicitudes con flujo de estados y notas internas.
- Gestión de donaciones (registro manual + exportación Excel) y listado de voluntarios con filtros.
- Blog con categorías, CPT "Eventos" con formulario de registro y galería.
- Backups diarios configurados, escaneo de seguridad sin vulnerabilidades críticas.
- Contenido editable desde el admin (Quiénes Somos, FAQ, Donaciones) y botón flotante de WhatsApp activo en todo el sitio.
- **E5 y E6 presentados y aceptados sin observaciones pendientes.**

---

### 7. RETROSPECTIVA DEL SPRINT

| ¿Qué salió bien? | ¿Qué podemos mejorar? | Acciones acordadas |
|------------------|------------------------|--------------------|
| Funcionalidades avanzadas entregadas en plazo | Realizar pruebas de roles con usuarios reales del albergue | Programar sesión de prueba con el personal en el Sprint 4 |
| Seguridad y backups configurados tempranamente | Validar los permisos del rol "voluntario" antes de la demo | Incluir checklist de roles en el plan de pruebas |
| La exportación Excel funciona correctamente | Probar la exportación con volúmenes reales de datos | Cargar datos de prueba adicionales antes del QA final |

---

### 8. FIRMAS

| Por la entrega (Albergue "Peluchín") | Por el equipo desarrollador |
|--------------------------------------|-----------------------------|
| | |
| ________________________ | **Santiago Acha** |
| Responsable de la entrega | Desarrollador del sprint |
| C.I.: ________________ | C.I.: ________________ |
| Firma: ________________ | Firma: ________________ |
| Fecha: ________________ | Fecha: ________________ |

---

**Lugar y fecha:** La Paz, Bolivia — [dd/mm/aaaa]
