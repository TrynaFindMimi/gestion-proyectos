# PLAN DEL PROYECTO Y CRONOGRAMA

## SITIO WEB Y SISTEMA DE GESTIÓN — ALBERGUE "PELUCHÍN"

---

**FECHA:** [dd/mm/aaaa]

**LUGAR:** La Paz, Estado Plurinacional de Bolivia

---

### DATOS DEL PROYECTO

| Concepto | Detalle |
|----------|---------|
| **Cliente** | Albergue "Peluchín" (ONG sin fines de lucro) |
| **Ubicación** | Llojeta, La Paz, Bolivia |
| **Equipo desarrollador** | Mariana del Arroyo, Nahomi Humerez, Santiago Acha, Jorge Saenz |
| **Plataforma** | WordPress (CMS) |
| **Duración total** | 16 semanas (8 semanas de desarrollo + 8 semanas de garantía) |
| **Metodología** | Configuración por sprints de 2 semanas |
| **Precio base** | Bs. 12,000 (más IVA) |

---

### HERRAMIENTAS Y TECNOLOGÍAS

#### Stack WordPress

| Componente | Tecnología | Propósito |
|------------|------------|-----------|
| CMS | WordPress (última versión estable) | Sistema de gestión de contenidos |
| Lenguaje | PHP 8+ | Backend y lógica del sitio |
| Base de datos | MySQL / MariaDB | Almacenamiento de datos |
| Servidor web | Apache / Nginx | Servidor de producción |

#### Tema y constructor visual

| Herramienta | Uso |
|-------------|-----|
| Tema base ligero (GeneratePress / Astra / Kadence) | Tema principal rápido y personalizable |
| Editor de bloques nativo (Gutenberg) o Elementor (versión gratuita) | Construcción visual de páginas |
| CSS personalizado | Ajustes de diseño y marca del albergue |

#### Plugins para funcionalidades

| Plugin | Funcionalidad |
|--------|---------------|
| Custom Post Type UI + Advanced Custom Fields (ACF) | Gestión de animales (perros y gatos) como contenido personalizado |
| Contact Form 7 / WPForms Lite | Formulario de pre-adopción, voluntariado y reporte de donación |
| GiveWP (versión gratuita) o Donation Platform for WooCommerce | Sistema de donaciones con QR y reportes |
| WP Mail SMTP + MailPoet / FluentCRM | Notificaciones por correo automáticas |
| Yoast SEO / Rank Math | Optimización SEO |
| Really Simple SSL | Configuración de SSL/TLS |
| UpdraftPlus | Backups automáticos |
| Wordfence / Sucuri | Seguridad y protección |

#### Herramientas de diseño y colaboración

| Herramienta | Uso |
|-------------|-----|
| Figma | Wireframes, mockups y prototipos |
| Git + GitHub / GitLab | Control de versiones del tema y configuración |
| Trello / Jira / Notion | Gestión de tareas y seguimiento del proyecto |
| Google Meet / Zoom | Reuniones y demos |
| WhatsApp | Comunicación rápida (horario laboral) |
| Local by Flywheel / XAMPP | Entorno de desarrollo local |

#### Herramientas de despliegue

| Herramienta | Uso |
|-------------|-----|
| Migrate Guru / All-in-One WP Migration | Migración del sitio de staging a producción |
| cPanel / Plesk | Administración del hosting (según proveedor) |
| Servidores de la ONG / Hosting compartido / VPS | Despliegue en producción (según disponibilidad y presupuesto) |

#### Herramientas de testing y calidad

| Herramienta | Uso |
|-------------|-----|
| Google PageSpeed Insights / Lighthouse | Auditoría de rendimiento y accesibilidad |
| GTmetrix | Pruebas de velocidad de carga |
| Responsively / BrowserStack | Pruebas de responsividad multi-dispositivo |
| WPScan | Auditoría de seguridad WordPress |

---

### SPRINT 1 — INSTALACIÓN, TEMA Y ESTRUCTURA (Semanas 1–2)

| Tarea | Duración | Herramienta / Plugin |
|-------|----------|----------------------|
| Kick-off meeting con el albergue | Día 1 | — |
| Instalación de WordPress + tema base (Astra/Kadence) en entorno local | Día 1–3 | WordPress + Astra/Kadence |
| Creación del tema hijo (child theme) con colores y logo del albergue | Día 3–5 | Child Theme Configurator |
| Instalación de plugins esenciales: SEO, seguridad, backups, SMTP, caché | Día 3–5 | Yoast SEO, Wordfence, UpdraftPlus, WP Mail SMTP, WP Super Cache |
| Configuración de CPT "Animales" con taxonomías (especie, tamaño, edad, estado) y campos ACF | Día 5–8 | CPT UI + Advanced Custom Fields |
| Wireframes y mockups del sitio (landing, galería, donaciones, contacto) | Día 3–8 | Figma |
| Revisión y aprobación de diseños con el albergue | Día 9–10 | — |
| Construcción de landing page con Elementor/Gutenberg (hero, CTA, contador, animales destacados) | Día 9–12 | Elementor / Gutenberg |
| Plantilla de galería de animales con filtros por taxonomía | Día 12–14 | CPT UI + FacetWP / Filter Everything |
| Plantilla de ficha individual de animal (galería, datos, CTA de adopción) | Día 12–14 | ACF + Elementor |
| Header, footer y menú de navegación global | Día 12–14 | Elementor / Personalizador |
| Página 404 personalizada | Día 13 | Elementor |
| **DEMO: Sitio base + galería de animales (E1, E2, E3)** | Día 14 | — |

---

### SPRINT 2 — FORMULARIOS, DONACIONES Y CONTENIDO (Semanas 3–4)

| Tarea | Duración | Herramienta / Plugin |
|-------|----------|----------------------|
| Formulario de pre-adopción multi-paso con notificaciones por correo | Semana 3 | WPForms Lite / Contact Form 7 |
| Configuración de notificaciones automáticas para adopciones | Semana 3 | WP Mail SMTP + WPForms |
| Página de donaciones: QR Simple, datos bancarios con botón copiar | Semana 3 | Elementor + QR Code Generator |
| Formulario de reporte de donación con adjunto de comprobante | Semana 3 | WPForms Lite |
| Página de registro de voluntarios con áreas de interés y horarios | Semana 3–4 | WPForms Lite |
| Página de contacto con botón de WhatsApp y mapa de Google Maps | Semana 4 | Elementor + WhatsApp API (`wa.me`) |
| Página Quiénes Somos, FAQ (acordeón), Misión y Visión | Semana 4 | Elementor / Essential Addons |
| Páginas legales (transcripción del contenido de la ONG) | Semana 4 | Elementor |
| Configuración de SEO básico (meta tags, sitemap, URL amigables) | Semana 4 | Yoast SEO |
| Integración de redes sociales en footer y página de contacto | Semana 4 | Smash Balloon / Elementor |
| **DEMO: Sitio público completo (E4)** | Día 28 | — |

---

### SPRINT 3 — PANEL DE ADMINISTRACIÓN Y FUNCIONALIDADES AVANZADAS (Semanas 5–6)

| Tarea | Duración | Herramienta / Plugin |
|-------|----------|----------------------|
| Personalización del panel de WordPress (logo, dashboard widgets, menús) | Semana 5 | Admin Menu Editor / White Label CMS |
| Roles de usuario: admin, editor, voluntario (con permisos limitados) | Semana 5 | Members / User Role Editor |
| Dashboard con KPIs del albergue (animales, solicitudes, donaciones) | Semana 5 | Admin Dashboard Widgets + ACF |
| Flujo de estados de adopción en el admin (pendiente → en revisión → aprobado/rechazado) | Semana 5 | CPT UI + Post Statuses / PublishPress |
| Gestión de donaciones desde el admin (registro manual, exportación Excel) | Semana 5–6 | WPForms + Export All Posts / WP All Export |
| Gestión de voluntarios desde el admin (listado, filtros, exportación) | Semana 5–6 | Admin Columns / WP All Export |
| Blog con sistema de categorías y editor nativo | Semana 6 | WordPress nativo |
| CPT "Eventos" con fechas, ubicación, galería y formulario de registro | Semana 6 | CPT UI + ACF + WPForms |
| Configuración de backups automáticos diarios | Semana 6 | UpdraftPlus |
| Escaneo de seguridad y hardening WordPress | Semana 6 | Wordfence |
| Contenido editable por secciones (Quiénes Somos, FAQ, Donaciones) | Semana 6 | ACF Options Pages |
| Botón flotante de WhatsApp en todo el sitio | Semana 6 | Join.chat / código personalizado |
| **DEMO: Panel admin completo + blog + eventos (E5, E6)** | Día 42 | — |

---

### SPRINT 4 — QA, DESPLIEGUE, DOCUMENTACIÓN Y CAPACITACIÓN (Semanas 7–8)

| Tarea | Duración | Herramienta / Plugin |
|-------|----------|----------------------|
| Pruebas funcionales de todos los formularios y flujos | Semana 7 | — |
| Pruebas de rendimiento (PageSpeed, GTmetrix, Lighthouse) | Semana 7 | WP Super Cache + Smush / EWWW |
| Pruebas de responsividad en dispositivos móviles y navegadores | Semana 7 | Responsively |
| Corrección de bugs y ajustes | Semana 7 | — |
| Migración del sitio de local a staging en el hosting | Semana 7 | All-in-One WP Migration |
| Pruebas en staging (formularios, donaciones, adopciones) | Semana 7 | — |
| Configuración de SSL/TLS, dominio y DNS en producción | Semana 8 | Really Simple SSL |
| Migración final de staging a producción | Semana 8 | All-in-One WP Migration |
| Pruebas post-despliegue (smoke test) | Semana 8 | — |
| Elaboración del Manual de Usuario (guía visual de WordPress para el albergue) | Semana 8 | — |
| Capacitación al personal del albergue (1–2 sesiones) | Semana 8 | Google Meet / Zoom |
| Entrega formal del sitio, backups y documentación | Semana 8 | — |
| **DEMO FINAL: Sitio en producción + documentación (E7, E8, E9, E10)** | Día 56 | — |

---

### PERÍODO DE GARANTÍA (Semanas 9–16)

| Tarea | Duración | Estado |
|-------|----------|--------|
| Monitoreo del sitio en producción | Semanas 9–16 | Pendiente |
| Actualizaciones de seguridad de WordPress y plugins | Mensual | Pendiente |
| Corrección de bugs reportados por el albergue | Según incidencia | Pendiente |
| Soporte técnico por WhatsApp y correo | Semanas 9–16 | Pendiente |
| **FIN DEL CONTRATO** | Semana 16 | — |

---

### DEPENDENCIAS DEL ALBERGUE

| Dependencia | Plazo máximo | Impacto si no se cumple |
|-------------|-------------|------------------------|
| Entrega de logotipo e identidad visual | Semana 1 | Retraso en diseño de mockups |
| Entrega de fotos de los 20 animales para pre-carga | Semana 3 | Retraso en galería de animales |
| Entrega de contactos de redes sociales (Facebook, Instagram, WhatsApp) | Semana 3 | Retraso en footer y página de contacto |
| Entrega de contenido de páginas legales (Reglamento de Adopción, Privacidad, Términos) | Semana 6 | Retraso en publicación de páginas legales |
| Entrega de información de datos bancarios para QR | Semana 5 | Retraso en página de donaciones |
| Provisión de hosting y servidores para despliegue (o contratación) | Semana 9 | Retraso en despliegue en producción |
| Aprobación de cada demo (5 días hábiles máximo) | Al cierre de cada sprint | Retraso acumulativo en el cronograma |

---

### REUNIONES PROGRAMADAS

| Reunión | Frecuencia | Participantes | Medio |
|---------|------------|---------------|-------|
| Demo funcional | Cada 2 semanas (fin de sprint) | Equipo de desarrollo + Responsable del albergue | Google Meet / Zoom |
| Retrospectiva | Cada 2 semanas (fin de sprint) | Equipo de desarrollo | Google Meet / Zoom |
| Comunicación rápida | Continua | Equipo de desarrollo + Albergue | WhatsApp (horario laboral) |

---

### ENTREGABLES (E1–E11)

| ID | Entregable | Sprint | Semana |
|----|------------|--------|--------|
| E1 | Plan de trabajo detallado y cronograma confirmado | Sprint 1 | 2 |
| E2 | Wireframes y mockups del sitio público | Sprint 1 | 2 |
| E3 | MVP: sitio público con landing, galería de animales y formulario de pre-adopción | Sprint 2 | 4 |
| E4 | Páginas de donaciones, voluntarios y contacto | Sprint 3 | 6 |
| E5 | Panel de administración WordPress personalizado | Sprint 4 | 8 |
| E6 | Blog, galería de eventos, FAQ y contenidos editables | Sprint 5 | 9 |
| E7 | Plataforma completa en staging, pruebas funcionales superadas | Sprint 6 | 10 |
| E8 | Despliegue en producción con SSL | Sprint 7 | 11 |
| E9 | Documentación: Manual de Sistemas y Manual de Usuario | Sprint 7 | 11 |
| E10 | Capacitación al personal del albergue (2 sesiones) | Sprint 8 | 12 |
| E11 | Garantía de 2 meses (corrección de bugs y actualizaciones de seguridad) | Garantía | 13–20 |

---

### RIESGOS IDENTIFICADOS

#### Riesgos técnicos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Incompatibilidad de plugins entre sí o con la versión de WordPress | Media | Alto | Pruebas en staging antes de cada actualización, selección de plugins con buen soporte |
| Vulnerabilidades de seguridad en WordPress o plugins | Media | Alto | Instalación de Wordfence/Sucuri, actualizaciones automáticas de seguridad, backups diarios |
| Problemas de rendimiento por exceso de plugins | Media | Medio | Uso mínimo de plugins necesarios, optimización de caché, CDN |
| Fallos en la migración de staging a producción | Baja | Medio | Prueba de migración previa, backup completo antes de migrar |
| Incompatibilidad con la versión de PHP del servidor | Baja | Medio | Verificación de requisitos antes del despliegue |
| Conflictos con el tema después de actualizaciones | Media | Medio | Uso de tema hijo (child theme), pruebas antes de actualizar |
| Fallos en el envío de correos automáticos | Media | Medio | Configuración de SMTP dedicado, monitoreo de entregabilidad |
| Caída del hosting compartido por tráfico o recursos | Baja | Medio | Monitoreo de recursos, escalabilidad a VPS si es necesario |
| Errores en la integración de WhatsApp API | Baja | Bajo | Pruebas en staging, enlace directo alternativo |

#### Riesgos operativos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Retraso en entrega de materiales por el albergue | Media | Alto | Recordatorios semanales, contenido placeholder temporal |
| La ONG no obtiene hosting o servidores a tiempo | Media | Alto | Entrega de proformas de hosting en Semana 7, opciones económicas |
| La ONG no obtiene habilitación de Red Enlace | Alta | Bajo | El sistema funciona con QR Simple y transferencia; la pasarela es condicional |
| Cambios de alcance durante el desarrollo | Media | Medio | Gestión de cambios mediante adenda al contrato |
| Disponibilidad reducida del responsable del albergue | Media | Medio | Punto de contacto alterno definido, comunicación asíncrona |
| Rotación o ausencia de personal del albergue | Baja | Medio | Documentación detallada, capacitación grabada |
| Cortes de energía o problemas de conectividad (comunes en La Paz) | Alta | Bajo | Trabajo local (Local by Flywheel), sincronización periódica |
| Conflicto de horarios para reuniones y demos | Media | Bajo | Agendamiento con anticipación, horarios flexibles pactados |

#### Riesgos financieros y contractuales

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Retraso en pagos de cuotas por parte de la ONG | Media | Alto | Recordatorios previos al vencimiento, cronograma claro |
| El costo del dominio supera el presupuesto del proyecto | Media | Medio | Cotizaciones anticipadas, alternativas de bajo costo |
| La ONG no completa el papeleo de Red Enlace | Alta | Bajo | El alcance base no depende de la pasarela; funcionalidad completa con QR |
| Incremento del alcance no presupuestado | Media | Medio | Toda ampliación requiere adenda con nuevo presupuesto y cronograma |
| Costo de plugins premium necesarios | Media | Bajo | Priorización de plugins gratuitos, solo se adquieren con aprobación de la ONG |



