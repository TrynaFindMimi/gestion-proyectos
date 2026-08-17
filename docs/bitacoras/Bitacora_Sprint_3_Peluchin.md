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
| **Objetivo del sprint** | Personalizar el editor y el panel de Hostinger Web Builder, definir accesos/roles, implementar el dashboard de KPIs, el flujo de estados de adopción, la gestión de donaciones y voluntarios, el blog, los eventos, los backups, la seguridad y el contenido editable |

---

### 2. EQUIPO PARTICIPANTE

| # | Nombre | Rol en el sprint |
|---|--------|------------------|
| 1 | Mariana del Arroyo | Coordinación, dashboard de KPIs y flujo de estados de adopción |
| 2 | Nahomi Humerez | Personalización del panel, accesos/roles y contenido editable |
| 3 | Santiago Acha | Gestión de donaciones y voluntarios (envíos de formularios), exportación Excel |
| 4 | Jorge Saenz | Blog, página de eventos, backups automáticos, seguridad |

**Responsable de la entrega (por el albergue):** ________________________

---

### 3. ALCANCE Y ENTREGABLES DEL SPRINT

| ID | Entregable | Criterio de aceptación |
|----|------------|------------------------|
| **E5** | Panel de administración completo (perritos, solicitudes, donaciones, voluntarios) | CRUD completo operativo |
| **E6** | Blog, galería de eventos, FAQ y contenidos editables | Secciones publicadas y editables desde admin |

---

### 4. ACTIVIDADES REALIZADAS

| Día | Actividad | Herramienta / Bloque | Responsable | Estado |
|-----|-----------|----------------------|-------------|--------|
| 29–30 | Personalización del editor/panel de Hostinger (marca, menús, estructura) | Editor de Hostinger Web Builder | Nahomi Humerez | Completada |
| 30–31 | Accesos/roles: administrador, editor, voluntario (permisos de edición) | Accesos del plan de Hostinger | Nahomi Humerez | Completada |
| 31–33 | Dashboard con KPIs del albergue (animales, solicitudes, donaciones) | Envíos de formularios + reportes | Mariana del Arroyo | Completada |
| 33–35 | Flujo de estados de adopción (pendiente → en revisión → aprobado/rechazado) | Bandeja de envíos + notificaciones | Mariana del Arroyo | Completada |
| 35–37 | Gestión de donaciones (registro manual, exportación Excel) | Envíos de formularios + exportación | Santiago Acha | Completada |
| 37–38 | Gestión de voluntarios (listado, filtros, exportación) | Envíos de formularios | Santiago Acha | Completada |
| 38–39 | Blog con sistema de categorías | Módulo de blog integrado | Jorge Saenz | Completada |
| 39–41 | Página "Eventos" con fechas, ubicación, galería y formulario de registro | Editor + Form Builder | Jorge Saenz | Completada |
| 40–41 | Configuración de backups automáticos | Backups del plan de Hostinger | Jorge Saenz | Completada |
| 41 | Revisión de seguridad (SSL, malware, DDoS) | Seguridad gestionada de Hostinger | Jorge Saenz | Completada |
| 41–42 | Contenido editable por secciones (Quiénes Somos, FAQ, Donaciones) | Editor del constructor | Nahomi Humerez | Completada |
| 42 | Botón flotante de WhatsApp en todo el sitio | Bloque HTML / código | Mariana del Arroyo | Completada |
| 42 | **DEMO: Panel admin completo + blog + eventos (E5, E6)** | Google Meet | Todo el equipo | Completada |

---

### 5. INCIDENCIAS Y OBSERVACIONES

1. Se detectó que el acceso "voluntario" requería permisos adicionales para ver los envíos de donaciones; se ajustó la configuración de accesos del plan y se documentó en el Manual de Usuario.
2. El contenido de las páginas legales (Reglamento de Adopción, Privacidad, Términos) fue transcrito tal como lo entregó el albergue el día 36; el albergue se comprometió a su revisión legal final en el Sprint 4.
3. La revisión de seguridad de Hostinger no reportó hallazgos relevantes; se confirmaron SSL, protección DDoS y escaneo de malware activos.
4. Los backups automáticos quedaron configurados en el plan y se verificó una restauración de prueba satisfactoria.

---

### 6. RESULTADOS DE LA DEMO (DÍA 42)

- Editor/panel de Hostinger Web Builder personalizado con el logo del albergue, menús y estructura simplificados.
- Accesos/roles definidos: administrador, editor y voluntario con permisos limitados.
- Dashboard con KPIs (animales en adopción, solicitudes pendientes, donaciones del mes, voluntarios activos).
- CRUD completo de animales y gestión de solicitudes con flujo de estados y notas internas.
- Gestión de donaciones (registro manual + exportación Excel) y listado de voluntarios con filtros.
- Blog con categorías, página de eventos con formulario de registro y galería.
- Backups configurados, revisión de seguridad sin hallazgos críticos.
- Contenido editable desde el panel (Quiénes Somos, FAQ, Donaciones) y botón flotante de WhatsApp activo en todo el sitio.
- **E5 y E6 presentados y aceptados sin observaciones pendientes.**

---

### 7. RETROSPECTIVA DEL SPRINT

| ¿Qué salió bien? | ¿Qué podemos mejorar? | Acciones acordadas |
|------------------|------------------------|--------------------|
| Funcionalidades avanzadas entregadas en plazo | Realizar pruebas de accesos con usuarios reales del albergue | Programar sesión de prueba con el personal en el Sprint 4 |
| Seguridad y backups configurados tempranamente | Validar los permisos del acceso "voluntario" antes de la demo | Incluir checklist de accesos en el plan de pruebas |
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
.