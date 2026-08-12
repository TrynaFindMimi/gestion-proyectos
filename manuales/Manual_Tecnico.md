# MANUAL TÉCNICO (MANUAL DE SISTEMAS)

## SITIO WEB Y SISTEMA DE GESTIÓN — ALBERGUE "PELUCHÍN"

---

**PROYECTO:** Desarrollo de sitio web y sistema de gestión para el albergue de perritos "Peluchín"

**ORGANIZACIÓN:** Albergue "Peluchín" — ONG sin fines de lucro (Llojeta, La Paz, Bolivia)

**EQUIPO DESARROLLADOR:** Mariana del Arroyo · Nahomi Humerez · Santiago Acha · Jorge Saenz

**VERSIÓN:** 1.0

**FECHA:** [dd/mm/aaaa]

**ESTADO:** [Borrador / En revisión / Aprobado]

---

## ÍNDICE

1. [Introducción](#1-introducción)
   - 1.1. [Objeto del manual](#11-objeto-del-manual)
   - 1.2. [Alcance](#12-alcance)
   - 1.3. [Público destinatario](#13-público-destinatario)
   - 1.4. [Documentos de referencia](#14-documentos-de-referencia)
2. [Descripción general del sistema](#2-descripción-general-del-sistema)
   - 2.1. [Propósito del sistema](#21-propósito-del-sistema)
   - 2.2. [Usuarios y roles](#22-usuarios-y-roles)
   - 2.3. [Módulos funcionales](#23-módulos-funcionales)
   - 2.4. [Requerimientos no funcionales (resumen)](#24-requerimientos-no-funcionales-resumen)
3. [Arquitectura del sistema](#3-arquitectura-del-sistema)
   - 3.1. [Vista general (diagrama de arquitectura)](#31-vista-general-diagrama-de-arquitectura)
   - 3.2. [Componentes y servicios externos](#32-componentes-y-servicios-externos)
   - 3.3. [Mapa de navegación — sitio público](#33-mapa-de-navegación--sitio-público)
   - 3.4. [Mapa de navegación — panel de administración](#34-mapa-de-navegación--panel-de-administración)
4. [Stack tecnológico](#4-stack-tecnológico)
   - 4.1. [Plataforma y lenguajes](#41-plataforma-y-lenguajes)
   - 4.2. [Tema y constructor visual](#42-tema-y-constructor-visual)
   - 4.3. [Plugins instalados](#43-plugins-instalados)
   - 4.4. [Herramientas de desarrollo, despliegue y calidad](#44-herramientas-de-desarrollo-despliegue-y-calidad)
5. [Modelo de datos](#5-modelo-de-datos)
   - 5.1. [Entidades principales](#51-entidades-principales)
   - 5.2. [Diagrama de clases UML](#52-diagrama-de-clases-uml)
   - 5.3. [Tipos de contenido personalizados (CPT) y campos ACF](#53-tipos-de-contenido-personalizados-cpt-y-campos-acf)
   - 5.4. [Estados de las entidades](#54-estados-de-las-entidades)
6. [Descripción detallada de módulos y flujos](#6-descripción-detallada-de-módulos-y-flujos)
   - 6.1. [Sitio público](#61-sitio-público)
     - 6.1.1. [Landing y navegación](#611-landing-y-navegación)
     - 6.1.2. [Catálogo y ficha de animales](#612-catálogo-y-ficha-de-animales)
     - 6.1.3. [Formulario de pre-adopción](#613-formulario-de-pre-adopción)
     - 6.1.4. [Donaciones y reporte de donación](#614-donaciones-y-reporte-de-donación)
     - 6.1.5. [Registro de voluntarios](#615-registro-de-voluntarios)
     - 6.1.6. [Blog, eventos, contacto, FAQ](#616-blog-eventos-contacto-faq)
   - 6.2. [Panel de administración](#62-panel-de-administración)
     - 6.2.1. [Dashboard de KPIs](#621-dashboard-de-kpis)
     - 6.2.2. [CRUD de animales](#622-crud-de-animales)
     - 6.2.3. [Gestión de solicitudes de adopción](#623-gestión-de-solicitudes-de-adopción)
     - 6.2.4. [Registro de donaciones](#624-registro-de-donaciones)
     - 6.2.5. [Gestión de voluntarios](#625-gestión-de-voluntarios)
     - 6.2.6. [Blog, eventos y contenido estático](#626-blog-eventos-y-contenido-estático)
     - 6.2.7. [Reportes exportables](#627-reportes-exportables)
   - 6.3. [Notificaciones automáticas por correo](#63-notificaciones-automáticas-por-correo)
7. [Seguridad](#7-seguridad)
   - 7.1. [Autenticación y roles](#71-autenticación-y-roles)
   - 7.2. [SSL/TLS](#72-ssltls)
   - 7.3. [Protección OWASP Top 10](#73-protección-owasp-top-10)
   - 7.4. [Backups y recuperación](#74-backups-y-recuperación)
8. [Despliegue](#8-despliegue)
   - 8.1. [Entornos (local, staging, producción)](#81-entornos-local-staging-producción)
   - 8.2. [Requisitos de servidor](#82-requisitos-de-servidor)
   - 8.3. [Procedimiento de despliegue y migración](#83-procedimiento-de-despliegue-y-migración)
   - 8.4. [Configuración de DNS y SSL](#84-configuración-de-dns-y-ssl)
9. [Pruebas y control de calidad](#9-pruebas-y-control-de-calidad)
   - 9.1. [Pruebas funcionales](#91-pruebas-funcionales)
   - 9.2. [Pruebas de rendimiento](#92-pruebas-de-rendimiento)
   - 9.3. [Pruebas de seguridad](#93-pruebas-de-seguridad)
   - 9.4. [Pruebas de responsividad](#94-pruebas-de-responsividad)
10. [Mantenimiento y soporte](#10-mantenimiento-y-soporte)
    - 10.1. [Actualizaciones](#101-actualizaciones)
    - 10.2. [Procedimientos de operación](#102-procedimientos-de-operación)
    - 10.3. [Monitoreo](#103-monitoreo)
    - 10.4. [Solución de problemas comunes (FAQ técnica)](#104-solución-de-problemas-comunes-faq-técnica)
11. [Riesgos técnicos y contingencias](#11-riesgos-técnicos-y-contingencias)
12. [Glosario](#12-glosario)
13. [Anexos](#13-anexos)

---

## 1. INTRODUCCIÓN

### 1.1. Objeto del manual

> **[Pendiente de redacción]** Documentar la arquitectura, componentes, flujos, seguridad y procedimientos de operación del sistema para el personal técnico de soporte y mantenimiento.

### 1.2. Alcance

> **[Pendiente de redacción]** Cubre el sitio público y el panel de administración (WordPress), incluyendo despliegue, backups, seguridad y mantenimiento. No cubre el uso cotidiano del panel (ver Manual de Usuario / Manual de Administrador).

### 1.3. Público destinatario

- Desarrolladores y personal técnico de soporte.
- Administradores del hosting.
- Personal técnico del albergue designado para mantenimiento.

### 1.4. Documentos de referencia

| # | Documento | Contenido de referencia |
|---|-----------|--------------------------|
| 1 | `docs/TDR_Peluchin.md` | Alcance, requerimientos funcionales y no funcionales, stack, entregables |
| 2 | `docs/TDR_Why_Peluchin.md` | Justificación y contexto del proyecto |
| 3 | `docs/TDR_Plan_Proyecto_Cronograma_Peluchin.md` | Plan de sprints, stack de plugins, herramientas, despliegue |
| 4 | `docs/TDR_Contrato_Peluchin.md` | Alcance contractual, garantía, propiedad intelectual |
| 5 | `docs/TDR_Carta_Aceptacion_Peluchin.md` | Aceptación del proyecto |
| 6 | `docs/TDR_Gestion_Riesgos_Peluchin.md` | Riesgos técnicos y planes de mitigación/contingencia |
| 7 | `docs/TDR_Diagrama_UML_Peluchin.md` | Modelo de datos, casos de uso, secuencias, estados y despliegue |
| 8 | `docs/TDR_Diagrama_WAE_Peluchin.md` | Mapas de navegación y arquitectura web |
| 9 | `docs/mockup/` | Mockups HTML del sitio público |

---

## 2. DESCRIPCIÓN GENERAL DEL SISTEMA

### 2.1. Propósito del sistema

> **[Pendiente]** Redactar a partir de TDR §3 (Objetivos) y TDR_Why_Peluchin.md: visibilizar perritos en adopción, gestionar donaciones transparentes, registro de voluntarios y centralizar información.

### 2.2. Usuarios y roles

| Rol | Descripción | Acceso |
|-----|-------------|--------|
| Visitante / Adoptante / Donante / Voluntario | Público general | Sitio público (sin autenticación) |
| Administrador | Personal del albergue con control total | Panel `/admin` |
| Editor | Contenido (blog, contenido estático) | Panel `/admin` (permisos limitados) |
| Sistema | WordPress + plugins (correos, seguridad, backups) | Interno |

> **[Pendiente]** Detallar permisos por rol según configuración de Members / User Role Editor (Plan §Sprint 3).

### 2.3. Módulos funcionales

| Módulo | Descripción | Fuente |
|--------|-------------|--------|
| Sitio web público | Landing, Quiénes somos, catálogo, pre-adopción, donaciones, voluntarios, eventos, blog, contacto, FAQ | TDR §4.1, WAE §2 |
| Catálogo de perritos | Fichas con galería, datos y estado | TDR §4.1, UML §3 |
| Formulario de pre-adopción | Multi-paso con notificaciones | UML §4, §6 |
| Sistema de donaciones | QR Simple, datos bancarios, reporte | UML §5 |
| Registro de voluntarios | Áreas de interés y disponibilidad | TDR §4.1 |
| Panel de administración | Dashboard, CRUD animales, solicitudes, donaciones, voluntarios, blog, eventos, contenido | TDR §5.1, WAE §3 |

### 2.4. Requerimientos no funcionales (resumen)

| # | Requerimiento | Meta |
|---|---------------|------|
| RNF01 | Rendimiento | Carga < 3 s en 4G |
| RNF02 | Disponibilidad | 99% uptime |
| RNF03 | Seguridad | HTTPS, OWASP Top 10, backups automáticos |
| RNF04 | Responsividad | Mobile-first |
| RNF05 | Usabilidad | Interfaz intuitiva |
| RNF06 | Mantenibilidad | Código documentado, modular |
| RNF07 | Idioma | Español |
| RNF08 | Accesibilidad | Contraste, alt en imágenes |

> Fuente: `docs/TDR_Peluchin.md` §6.

---

## 3. ARQUITECTURA DEL SISTEMA

### 3.1. Vista general (diagrama de arquitectura)

> **[Insertar]** Diagrama de componentes y despliegue del UML §8 (stack WordPress) y diagrama WAE §4. Renderizables en GitHub / mermaid.live.

### 3.2. Componentes y servicios externos

| Componente | Rol | Estado |
|------------|-----|--------|
| Servidor web (Apache / Nginx) | Sirve el sitio | Producción |
| WordPress + tema hijo | Motor PHP / presentación | Producción |
| Plugins (CPT UI, ACF, WPForms, Yoast, Wordfence, UpdraftPlus, WP Mail SMTP, Really Simple SSL) | Funcionalidad | Producción |
| MySQL / MariaDB | Persistencia | Producción |
| SMTP (Gmail / Resend / SendGrid) | Correos automáticos | Producción |
| QR Simple + datos bancarios | Canal de donación | Producción |
| WhatsApp API (`wa.me`) | Contacto / compartir | Producción |
| Red Enlace | Pasarela de pago | Condicional (solo con habilitación de la ONG) |

### 3.3. Mapa de navegación — sitio público

| Página | Ruta | Formularios |
|--------|------|-------------|
| Inicio | `/` | — |
| Quiénes somos | `/quienes-somos` | — |
| Catálogo | `/adoptar` | — |
| Ficha del animal | `/ficha` | — |
| Pre-adopción | `/adopcion` | Solicitud en 3 pasos |
| Donaciones | `/donar` | Reporte de donación |
| Voluntarios | `/voluntarios` | Registro de voluntario |
| Blog | `/blog` | — |
| Eventos | `/eventos` | Confirmación de asistencia |
| Contacto | `/contacto` | WhatsApp / formulario |
| FAQ | `/faq` | — |

> **[Insertar]** Diagrama WAE §2. Fuente: `docs/TDR_Diagrama_WAE_Peluchin.md`.

### 3.4. Mapa de navegación — panel de administración

| Página | Ruta | Formularios |
|--------|------|-------------|
| Inicio de sesión | `/admin/login` | Credenciales |
| Dashboard KPIs | `/admin` | — |
| Animales | `/admin/animales` | CRUD + estado |
| Solicitudes | `/admin/solicitudes` | Estado + notas internas |
| Donaciones | `/admin/donaciones` | Registro manual |
| Voluntarios | `/admin/voluntarios` | Edición / filtros |
| Blog | `/admin/blog` | CRUD |
| Eventos | `/admin/eventos` | CRUD + asistentes |
| Contenido estático | `/admin/contenido` | Edición de secciones |

> **[Insertar]** Diagrama WAE §3. Fuente: `docs/TDR_Diagrama_WAE_Peluchin.md`.

---

## 4. STACK TECNOLÓGICO

### 4.1. Plataforma y lenguajes

| Componente | Tecnología | Versión instalada |
|------------|------------|-------------------|
| CMS | WordPress | [última estable] |
| Lenguaje | PHP | [8.x] |
| Base de datos | MySQL / MariaDB | [versión] |
| Servidor web | Apache / Nginx | [versión] |

### 4.2. Tema y constructor visual

| Herramienta | Uso |
|-------------|-----|
| [Tema base: GeneratePress / Astra / Kadence] | Tema principal |
| [Tema hijo Peluchín] | Personalización y marca |
| Gutenberg / Elementor | Construcción visual |
| CSS personalizado | Ajustes de diseño |

### 4.3. Plugins instalados

| Plugin | Funcionalidad | Versión | Estado |
|--------|---------------|---------|--------|
| Custom Post Type UI | CPT "Animales", "Eventos" | — | Activo |
| Advanced Custom Fields (ACF) | Campos personalizados | — | Activo |
| WPForms Lite / Contact Form 7 | Pre-adopción, donación, voluntarios | — | Activo |
| GiveWP / Donation Platform | Donaciones | — | Activo |
| WP Mail SMTP | Correos automáticos | — | Activo |
| MailPoet / FluentCRM | Notificaciones | — | Activo |
| Yoast SEO / Rank Math | SEO | — | Activo |
| Really Simple SSL | SSL/TLS | — | Activo |
| UpdraftPlus | Backups | — | Activo |
| Wordfence / Sucuri | Seguridad | — | Activo |
| WP Super Cache / LiteSpeed | Caché | — | Activo |
| Smush / EWWW | Optimización de imágenes | — | Activo |

> **[Pendiente]** Completar versiones y plugins finales. Fuente: `docs/TDR_Plan_Proyecto_Cronograma_Peluchin.md`.

### 4.4. Herramientas de desarrollo, despliegue y calidad

| Herramienta | Uso |
|-------------|-----|
| Local by Flywheel / XAMPP | Entorno local |
| Git + GitHub / GitLab | Control de versiones |
| All-in-One WP Migration / Migrate Guru | Migración |
| cPanel / Plesk | Administración del hosting |
| PageSpeed / Lighthouse / GTmetrix | Rendimiento |
| Responsively / BrowserStack | Responsividad |
| WPScan | Seguridad WordPress |

---

## 5. MODELO DE DATOS

### 5.1. Entidades principales

| Entidad | Descripción | Claves de referencia |
|---------|-------------|----------------------|
| Usuario | Usuarios del sistema con rol | UML §3 |
| Animal | Perros/gatos en adopción | UML §3 |
| Foto | Galería de cada animal | UML §3 |
| Solicitante | Persona que postula a adopción | UML §3 |
| SolicitudAdopcion | Postulación con estados y seguimiento | UML §3, §7 |
| Donacion | Donaciones registradas (manual o reporte web) | UML §3 |
| Voluntario | Registro de colaboradores | UML §3 |
| ArticuloBlog | Noticias y publicaciones | UML §3 |
| Evento | Eventos y galería | UML §3 |
| ContenidoEstatico | Quiénes somos, misión, FAQ, donaciones | UML §3 |

### 5.2. Diagrama de clases UML

> **[Insertar]** Diagrama de clases del UML §3 (renderizable con mermaid). Fuente: `docs/TDR_Diagrama_UML_Peluchin.md`.

### 5.3. Tipos de contenido personalizados (CPT) y campos ACF

| CPT | Taxonomías | Campos ACF principales |
|-----|------------|------------------------|
| Animales | especie, tamaño, edad, estado | nombre, sexo, raza, peso_kg, estado_salud, personalidad, historia, fecha_rescate, fotos |
| Solicitudes | — | tipo_vivienda, patio_jardin, experiencia_mascotas, otras_mascotas, referencias, notas_internas, numero_seguimiento |
| Eventos | — | fecha_hora, ubicacion, imagen, fotos_galeria, asistentes |
| Blog | categorías | titulo, imagen_destacada, contenido, estado |

> **[Pendiente]** Documentar la configuración final de CPT UI + ACF del entorno de producción.

### 5.4. Estados de las entidades

| Entidad | Estados |
|---------|---------|
| Animal | en_adopcion · adoptado · en_tratamiento |
| SolicitudAdopcion | pendiente · en_revision · aprobado · rechazado |
| Donacion | medio: efectivo · transferencia · qr · tarjeta |
| ArticuloBlog | borrador · publicado |
| Evento | próximo · pasado |
| Usuario | roles: admin · editor · voluntario |

> **[Insertar]** Diagrama de estados de la solicitud de adopción (UML §7).

---

## 6. DESCRIPCIÓN DETALLADA DE MÓDULOS Y FLUJOS

### 6.1. Sitio público

#### 6.1.1. Landing y navegación

> **[Pendiente]** Describir estructura del home: hero, CTA, contador, animales destacados, menú principal, header/footer, botón flotante de WhatsApp.

#### 6.1.2. Catálogo y ficha de animales

> **[Pendiente]** Describir filtros por taxonomía (especie, tamaño, edad, estado), galería de fotos y CTA según estado (Quiero adoptar / Avísame / Adoptado). Referencia: UML §6 (actividad).

#### 6.1.3. Formulario de pre-adopción

- Paso 1: datos personales del solicitante.
- Paso 2: vivienda y experiencia con mascotas.
- Paso 3: referencias y envío.
- Validaciones, número de seguimiento, correos automáticos.

> **[Insertar]** Diagrama de secuencia del flujo de pre-adopción (UML §4) y de actividad (UML §6).

#### 6.1.4. Donaciones y reporte de donación

- QR Simple visible y datos bancarios con botón copiar.
- Formulario de reporte (monto, fecha, comprobante).
- Confirmación y correo de agradecimiento.

> **[Insertar]** Diagrama de secuencia del flujo de donación (UML §5).

#### 6.1.5. Registro de voluntarios

> **[Pendiente]** Describir campos: datos personales, áreas de interés (paseo, limpieza, veterinaria, difusión, eventos, transporte, captación) y disponibilidad horaria.

#### 6.1.6. Blog, eventos, contacto, FAQ

> **[Pendiente]** Describir publicaciones del blog, registro/confirmación de asistencia a eventos, WhatsApp + Google Maps en contacto, acordeón de FAQ.

### 6.2. Panel de administración

#### 6.2.1. Dashboard de KPIs

> **[Pendiente]** Describir widgets: perritos en adopción, solicitudes pendientes, donaciones del mes (Bs.), voluntarios activos.

#### 6.2.2. CRUD de animales

> **[Pendiente]** Describir creación/edición/eliminación de fichas, carga de fotos múltiples y cambio de estado.

#### 6.2.3. Gestión de solicitudes de adopción

- Flujo de estados: pendiente → en_revision → aprobado / rechazado.
- Notas internas por solicitud.
- Correos automáticos al aprobar/rechazar.

> **[Insertar]** Diagrama de estados de la solicitud (UML §7).

#### 6.2.4. Registro de donaciones

> **[Pendiente]** Describir registro manual (efectivo, transferencia) con monto, fecha y donante; exportación.

#### 6.2.5. Gestión de voluntarios

> **[Pendiente]** Describir listado, filtros por área de interés y edición.

#### 6.2.6. Blog, eventos y contenido estático

> **[Pendiente]** Describir CRUD de noticias, gestión de eventos y edición de secciones (Quiénes Somos, misión, FAQ, donaciones).

#### 6.2.7. Reportes exportables

> **[Pendiente]** Describir exportación a Excel de perritos, adopciones y donaciones por mes.

### 6.3. Notificaciones automáticas por correo

| Flujo | Correo al solicitante/donante/voluntario | Notificación al admin |
|-------|------------------------------------------|-----------------------|
| Pre-adopción | Confirmación + número de seguimiento | Nueva solicitud pendiente |
| Donación | Agradecimiento | Nueva donación reportada |
| Voluntario | Confirmación de registro | Nuevo voluntario |
| Aprobación de adopción | Instrucciones de adopción | — |
| Rechazo | Mensaje amable | — |

> **[Pendiente]** Detallar plantillas, remitente (SMTP) y configuración de WP Mail SMTP. Referencia: TDR §4.1 (Notificaciones), UML §4–§5.

---

## 7. SEGURIDAD

### 7.1. Autenticación y roles

> **[Pendiente]** Describir login `/admin/login`, roles (Members / User Role Editor), doble factor, límite de intentos, principio de menor privilegio. Referencia: TDR §5.1, Riesgos T02/T11.

### 7.2. SSL/TLS

> **[Pendiente]** Describir certificado SSL instalado, redirección HTTP→HTTPS, configuración de Really Simple SSL. Referencia: RNF03, E8.

### 7.3. Protección OWASP Top 10

| Área | Medida | Plugin / Configuración |
|------|--------|------------------------|
| Inyección SQL | Sanitización de inputs, consultas preparadas | WordPress core + ACF |
| XSS | Sanitización de salida | WordPress core |
| CSRF | Nonces de WordPress | WordPress core |
| Brute force | Límite de intentos de login | Wordfence |
| Datos sensibles | Encriptación, HTTPS | Really Simple SSL |

> **[Pendiente]** Completar con el hardening aplicado (prefijo de BD, etc.). Referencia: TDR §4.1 (Seguridad), RNF03.

### 7.4. Backups y recuperación

| Aspecto | Configuración |
|---------|---------------|
| Frecuencia | Diario |
| Herramienta | UpdraftPlus |
| Destino remoto | [Google Drive / Dropbox] |
| Retención | [n] copias |
| Verificación | [frecuencia] restauración de prueba |
| Backup previo a migraciones | Manual obligatorio |

> Referencia: Riesgo T10, Plan §Sprint 3.

---

## 8. DESPLIEGUE

### 8.1. Entornos (local, staging, producción)

| Entorno | URL | Uso |
|---------|-----|-----|
| Local | [localhost] | Desarrollo (Local by Flywheel / XAMPP) |
| Staging | [URL staging] | Pruebas y QA |
| Producción | [URL dominio] | Sitio público |

### 8.2. Requisitos de servidor

| Requisito | Valor |
|-----------|-------|
| PHP | 8+ |
| MySQL / MariaDB | [versión] |
| Espacio en disco | [n] GB |
| PHP.ini (límites de subida) | [n] MB |
| Extras | [cPanel/Plesk, acceso SSH/FTP] |

> Referencia: Riesgos T04, T05.

### 8.3. Procedimiento de despliegue y migración

1. Backup completo en staging.
2. Migración con All-in-One WP Migration / Migrate Guru.
3. Corrección de rutas y URLs (search-replace si aplica).
4. Verificación de enlaces, medios y formularios.
5. Pruebas post-despliegue (smoke test).

> **[Insertar]** Diagrama de despliegue UML §8. Referencia: Plan §Sprint 4, Riesgos T04.

### 8.4. Configuración de DNS y SSL

> **[Pendiente]** Describir registro de dominio, apuntado DNS (A/CNAME), instalación de certificado SSL y verificación de HTTPS.

---

## 9. PRUEBAS Y CONTROL DE CALIDAD

### 9.1. Pruebas funcionales

| Caso de prueba | Resultado esperado | Estado |
|----------------|--------------------|--------|
| Pre-adopción completa | Solicitud guardada + correos + número de seguimiento | [Pendiente] |
| Reporte de donación | Donación registrada + correo de agradecimiento | [Pendiente] |
| Registro de voluntario | Voluntario visible en admin | [Pendiente] |
| CRUD de animales | Crear/editar/eliminar/cambiar estado | [Pendiente] |
| Cambio de estado de solicitud | Flujo completo con notificaciones | [Pendiente] |

> **[Pendiente]** Ampliar la matriz de pruebas. Referencia: E7, UML §4–§6.

### 9.2. Pruebas de rendimiento

> **[Pendiente]** Registrar resultados de PageSpeed/Lighthouse/GTmetrix. Meta: < 3 s en 4G (RNF01). Referencia: Riesgo T03.

### 9.3. Pruebas de seguridad

> **[Pendiente]** Registrar resultados de WPScan y escaneos de Wordfence. Referencia: Riesgos T02, T11.

### 9.4. Pruebas de responsividad

> **[Pendiente]** Registrar pruebas en dispositivos móviles y navegadores. Referencia: RNF04.

---

## 10. MANTENIMIENTO Y SOPORTE

### 10.1. Actualizaciones

| Componente | Frecuencia | Procedimiento |
|------------|------------|---------------|
| WordPress core | Mensual | Prueba en staging → backup → actualizar |
| Plugins | Mensual | Prueba en staging → backup → actualizar |
| Tema hijo | Según cambios | Control de versiones en Git |

> Referencia: Plan §Garantía, Riesgos T01, T06.

### 10.2. Procedimientos de operación

> **[Pendiente]** Redactar procedimientos: puesta en modo mantenimiento, restauración de backup, cambio de credenciales, gestión de cuentas de usuario.

### 10.3. Monitoreo

> **[Pendiente]** Describir monitoreo de uptime (UptimeRobot), entregabilidad de correos y alertas de Wordfence. Referencia: Riesgo T08.

### 10.4. Solución de problemas comunes (FAQ técnica)

| Problema | Causa probable | Solución |
|----------|----------------|----------|
| Correos no llegan | SMTP mal configurado | Revisar WP Mail SMTP (Riesgo T07) |
| Sitio lento | Caché/plugins/imágenes | Purgar caché, optimizar (Riesgo T03) |
| Pantalla en blanco | Plugin/tema conflictivo | Desactivar vía FTP/phpMyAdmin (Riesgo T01) |
| Enlaces rotos tras migración | URLs antiguas | Search-replace en BD (Riesgo T04) |

---

## 11. RIESGOS TÉCNICOS Y CONTINGENCIAS

| ID | Riesgo | Mitigación | Contingencia |
|----|--------|------------|--------------|
| T01 | Incompatibilidad de plugins | Staging, plugins con soporte | Desactivar/reeemplazar plugin |
| T02 | Vulnerabilidades de seguridad | Wordfence, updates, backups | Restaurar backup limpio |
| T03 | Rendimiento | Mínimo de plugins, caché, CDN | Desactivar plugins no esenciales |
| T04 | Fallos de migración | Prueba previa, backup | Re-migrar, search-replace |
| T05 | PHP incompatible | Verificar requisitos | Actualizar PHP en hosting |
| T06 | Conflictos de tema | Tema hijo + staging | Revertir actualización |
| T07 | Fallos de correos | SMTP real, pruebas | Cambiar proveedor SMTP |
| T08 | Caída del hosting | Monitoreo, caché | Escalar plan / VPS |
| T10 | Pérdida de datos | Backups diarios | Restaurar último backup |
| T11 | Hackeo | Hardening, 2FA, monitoreo | Restaurar + limpiar + rotar credenciales |

> **[Insertar]** Mapa completo de riesgos. Fuente: `docs/TDR_Gestion_Riesgos_Peluchin.md`.

---

## 12. GLOSARIO

| Término | Definición |
|---------|------------|
| CMS | Sistema de gestión de contenidos |
| CPT | Custom Post Type (tipo de contenido personalizado) |
| ACF | Advanced Custom Fields (campos personalizados) |
| CPT UI | Plugin para crear tipos de contenido personalizados |
| Staging | Entorno de pruebas previo a producción |
| SSL/TLS | Protocolo de cifrado de comunicaciones |
| SMTP | Protocolo de envío de correos |
| QR Simple | Método de donación por código QR |
| Red Enlace | Pasarela de pago boliviana (condicional) |
| OWASP Top 10 | Lista de riesgos de seguridad web más comunes |
| Uptime | Disponibilidad del servicio |

---

## 13. ANEXOS

- **Anexo A:** Diagramas de arquitectura y despliegue (UML §8, WAE §4).
- **Anexo B:** Mapas de navegación (WAE §2, §3).
- **Anexo C:** Diagrama de clases y modelo de datos (UML §3).
- **Anexo D:** Diagramas de secuencia y estados (UML §4–§7).
- **Anexo E:** Registro de riesgos técnicos completo (Gestión de Riesgos §4.1).
- **Anexo F:** Checklist de pruebas post-despliegue.

---

### CIERRE

> **[Pendiente]** Nota final indicando que este manual se actualizará ante cambios de alcance aprobados por adenda, según lo establecido en el contrato y en el cierre del documento UML.
