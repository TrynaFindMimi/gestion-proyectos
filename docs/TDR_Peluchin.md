# TÉRMINOS DE REFERENCIA (TDR)

## DESARROLLO DE SITIO WEB Y SISTEMA DE GESTIÓN — ALBERGUE "PELUCHÍN"

---

### EQUIPO DE TRABAJO

| # | Nombre |
|---|--------|
| 1 | Mariana del Arroyo |
| 2 | Nahomi Humerez |
| 3 | Santiago Acha |
| 4 | Jorge Saenz |

---

### 1. INFORMACIÓN GENERAL

| Campo | Descripción |
|-------|-------------|
| **Proyecto** | Desarrollo e implementación de sitio web y sistema de gestión para el albergue de perritos "Peluchín" |
| **Organización** | Albergue "Peluchín" — ONG sin fines de lucro |
| **Ubicación** | Llojeta, La Paz, Bolivia |
| **Tipo de organización** | Organización No Gubernamental (ONG) de protección y rescate animal |
| **Moneda de referencia** | Bolivianos (Bs.) |
| **Duración estimada** | 12 semanas |

---

### 2. ANTECEDENTES

El albergue "Peluchín" es una organización sin fines de lucro ubicada en la zona de Llojeta, en la ciudad de La Paz, dedicada al rescate, rehabilitación y adopción responsable de perros en situación de abandono. Desde su fundación, el albergue ha operado de manera autogestionada, sosteniéndose a través de donaciones voluntarias, eventos comunitarios y la colaboración de voluntarios locales. Actualmente brinda refugio a más de 40 perritos rescatados.

La comunicación del albergue con la comunidad se realiza principalmente a través de redes sociales (Facebook e Instagram) y WhatsApp. Si bien estos canales han permitido difundir adopciones y recibir donaciones, presentan limitaciones importantes:

- No existe un catálogo centralizado y actualizado de los perritos en adopción.
- El proceso de postulación para adopción es informal y difícil de dar seguimiento.
- Las donaciones se gestionan manualmente sin trazabilidad ni transparencia para el donante.
- No se cuenta con un espacio digital propio que proyecte seriedad y confianza a potenciales adoptantes y donantes.
- La coordinación de voluntarios y eventos depende de la disponibilidad de una sola persona.

Ante esta realidad, "Peluchín" ha identificado la necesidad de contar con un sitio web institucional y un sistema de gestión interno que permita profesionalizar sus operaciones, ampliar su alcance y fortalecer la transparencia ante la comunidad.

---

### 3. OBJETIVOS

#### 3.1. Objetivo General

Desarrollar un sitio web institucional con panel de administración para el albergue "Peluchín" que permita visibilizar a los perritos en adopción, gestionar donaciones de forma transparente, facilitar el registro de voluntarios y centralizar la información del albergue.

#### 3.2. Objetivos Específicos

1. Diseñar e implementar un sitio web público, cálido y responsivo que refleje la misión del albergue y facilite la adopción y donación.
2. Desarrollar un catálogo de perritos en adopción con fichas individuales (fotos, edad, tamaño, personalidad, estado de salud).
3. Implementar un formulario de pre-adopción para que los interesados puedan postularse en línea.
4. Integrar métodos de donación electrónica accesibles en Bolivia (QR Simple, transferencia bancaria) con confirmación y agradecimiento automático.
5. Habilitar el registro de voluntarios con áreas de interés y disponibilidad horaria.
6. Desarrollar un panel de administración para gestionar perritos, solicitudes de adopción, donaciones registradas y voluntarios.
7. Desplegar el sitio en un entorno de producción seguro con certificado SSL.

---

### 4. ALCANCE DEL PROYECTO

#### 4.1. Incluye

| Módulo | Descripción |
|--------|-------------|
| **Sitio web público** | Landing page, sección "Quiénes somos", catálogo de perritos en adopción, formulario de pre-adopción, sección de donaciones, registro de voluntarios, galería de eventos, blog/noticias, contacto |
| **Catálogo de perritos** | Fichas individuales con galería de fotos, nombre, edad aproximada, tamaño, sexo, estado de salud, personalidad, fecha de rescate y estado (en adopción / adoptado / en tratamiento) |
| **Formulario de pre-adopción** | Formulario multi-paso con datos del solicitante, tipo de vivienda, experiencia con mascotas, referencias. Envío de notificación por correo al admin y al solicitante |
| **Sistema de donaciones** | Página de donaciones con QR Simple visible, datos de cuenta bancaria, y formulario de reporte de donación voluntario para trazabilidad. Opcional: integración con pasarela de pago para donaciones directas |
| **Registro de voluntarios** | Formulario con datos personales, áreas de interés (paseo, limpieza, veterinaria, difusión, eventos), disponibilidad horaria |
| **Panel de administración** | Dashboard con resumen (perritos activos, solicitudes pendientes, donaciones del mes), CRUD de perritos, gestión de solicitudes de adopción (estados: pendiente, en revisión, aprobado, rechazado), registro de donaciones, listado de voluntarios |
| **Blog / Noticias** | Publicación de noticias, eventos, historias de adopción, campañas |
| **Notificaciones** | Envío de correos automáticos: confirmación de pre-adopción, agradecimiento por donación, confirmación de registro de voluntario |
| **SEO básico** | Meta tags, sitemap.xml, URL amigables, datos estructurados (Schema.org) |
| **Seguridad** | SSL/TLS, sanitización de inputs, protección CSRF/XSS, encriptación de datos sensibles |
| **Despliegue** | Configuración de servidor en producción, CI/CD básico |
| **Documentación** | Manual de Sistemas, manual de usuario |
| **Capacitación** | 2 sesiones de capacitación al personal del albergue |

#### 4.2. No incluye

- Diseño de logotipo ni identidad visual (el albergue ya cuenta con ella; se proporcionarán los archivos).
- Campañas de marketing digital o manejo de redes sociales.
- Carga masiva inicial de perritos (se capacitará al personal; se pre-cargarán hasta 20 fichas como parte del proyecto).
- Integración con sistemas contables o ERP.
- Desarrollo de aplicaciones móviles nativas (solo web responsiva).
- Hosting, dominio ni certificados SSL (corren por cuenta del albergue; se brinda asesoría para su contratación).
- Pasarela de pago con tarjeta de crédito (puede cotizarse como fase adicional si se requiere en el futuro).

---

### 5. REQUERIMIENTOS FUNCIONALES

Los requerimientos funcionales del sitio público (páginas, formularios y flujos de navegación) están descritos en la Sección 4 (Alcance del proyecto). Esta sección se centra en los requerimientos específicos del panel de administración, por lo que la numeración comienza en F13.

#### 5.1. Panel de Administración

| # | Funcionalidad | Prioridad |
|---|---------------|-----------|
| F13 | Dashboard con KPIs: perritos en adopción, solicitudes pendientes, donaciones del mes en Bs., voluntarios activos | Alta |
| F14 | CRUD de perritos con fotos múltiples, datos de salud, personalidad y cambio de estado | Alta |
| F15 | Gestión de solicitudes de adopción con cambio de estado (pendiente → en revisión → aprobado / rechazado) y notas internas | Alta |
| F16 | Registro manual de donaciones recibidas (efectivo, transferencia) con monto, fecha y donante | Media |
| F17 | Listado de voluntarios registrados con filtro por área de interés | Media |
| F18 | CRUD de noticias / blog | Media |
| F19 | Gestión de eventos y galería de imágenes | Baja |
| F20 | Administración de contenido estático (editar "Quiénes Somos", misión, FAQ) | Media |
| F21 | Reportes exportables (Excel): perritos, adopciones, donaciones por mes | Baja |

---

### 6. REQUERIMIENTOS NO FUNCIONALES

| # | Requerimiento | Descripción |
|---|---------------|-------------|
| RNF01 | **Rendimiento** | Carga de página principal < 3 segundos en conexión 4G |
| RNF02 | **Disponibilidad** | 99% de uptime |
| RNF03 | **Seguridad** | HTTPS obligatorio. Passwords encriptados. Protección OWASP Top 10. Respaldo de base de datos automático |
| RNF04 | **Responsividad** | Compatible con navegadores modernos. Diseño mobile-first (la mayoría de usuarios accederá desde celular) |
| RNF05 | **Usabilidad** | Interfaz intuitiva y amigable. Formulario de pre-adopción sencillo. Navegación clara para público general |
| RNF06 | **Mantenibilidad** | Código documentado, estructura modular, panel de admin usable por personal sin conocimientos técnicos |
| RNF07 | **Idioma** | Español. Todos los textos, mensajes y correos en español |
| RNF08 | **Accesibilidad** | Contraste adecuado, textos legibles, imágenes con texto alternativo (alt) |

---

### 7. ARQUITECTURA Y STACK TECNOLÓGICO PROPUESTO

| Componente | Opción sugerida | Alternativas aceptables |
|------------|-----------------|------------------------|
| Plataforma / CMS | **Hostinger Web Builder** (constructor visual no-code sobre hosting gestionado de Hostinger) | — |
| Lenguaje | HTML/CSS generados por el constructor (sin programación; se permite bloques de código personalizado HTML/CSS) | — |
| Base de datos | No aplica (sin base de datos propia; formularios y contenido gestionados por la plataforma de Hostinger) | — |
| Editor / constructor visual | Editor drag & drop de Hostinger Web Builder con plantillas y bloques | — |
| Formularios | Form Builder integrado de Hostinger (notificaciones por correo y almacenamiento de envíos) | — |
| Blog | Módulo de blog integrado del constructor | — |
| SEO | Herramientas SEO integradas (meta tags, sitemap, URLs amigables) | — |
| Envío de correos | Correos del dominio de Hostinger (mailbox) / SMTP del plan | — |
| Almacenamiento de imágenes | Biblioteca de medios del constructor (medios del sitio) | — |
| Seguridad | SSL gratuito, DDoS, escaneo de malware y backups gestionados por Hostinger | — |
| Backups | Backups automáticos del plan (semanal en Premium; mejorable) | — |
| Despliegue | Publicación directa desde el editor de Hostinger Web Builder (dominio propio o gratuito) | — |
| Control de versiones | Git (GitHub) para respaldo de la configuración exportada y documentación | — |
| Entorno de trabajo | Editor en línea de Hostinger + entorno de pruebas (staging) del plan | — |

---

### 8. METODOLOGÍA DE TRABAJO

Se sugiere adoptar una metodología ágil (Scrum o Kanban) con sprints de 2 semanas, realizando reuniones diarias de seguimiento (daily stand-up de 15 min, virtual) y revisiones con retrospectiva al cierre de cada sprint. Para la gestión de tareas se recomienda utilizar Trello, Jira o Notion, manteniendo la comunicación fluida mediante un grupo de WhatsApp para coordinación rápida y Google Meet o Zoom para reuniones formales. El código fuente deberá alojarse en un repositorio privado de GitHub o GitLab con acceso compartido para el albergue. Como parte de cada sprint se entregará una demo funcional del incremento desarrollado para validación de "Peluchín".

---

### 9. ENTREGABLES

| Código | Entregable | Fase | Semana | Criterio de aceptación |
|--------|------------|------|--------|------------------------|
| **E1** | Plan de trabajo detallado y cronograma confirmado | Planificación | 1 | Aprobación del plan por "Peluchín" |
| **E2** | Wireframes y mockups del sitio público y panel admin | Diseño | 2 | Aprobación del diseño visual |
| **E3** | MVP: sitio público con landing, catálogo de perritos y formulario de pre-adopción | Desarrollo | 4 | Demo funcional con flujo de pre-adopción completo |
| **E4** | Página de donaciones con QR, sección de voluntarios y contacto | Desarrollo | 6 | Secciones publicadas y funcionales |
| **E5** | Panel de administración completo (perritos, solicitudes, donaciones, voluntarios) | Desarrollo | 8 | CRUD completo operativo |
| **E6** | Blog, galería de eventos, FAQ y contenidos editables | Desarrollo | 9 | Secciones publicadas y editables desde admin |
| **E7** | Plataforma completa en staging | QA / Testing | 10 | Pruebas funcionales superadas |
| **E8** | Despliegue en producción con SSL | Despliegue | 11 | Sitio público operativo |
| **E9** | Documentación: manual de administrador, manual de despliegue y manual de usuario | Documentación | 11 | Documentos entregados en PDF |
| **E10** | Capacitación al equipo del albergue (2 sesiones) | Capacitación | 12 | Sesiones realizadas y material de apoyo entregado |
| **E11** | Soporte post-lanzamiento (2 semanas) | Soporte | 12–14 | Operación estable, bugs críticos resueltos |

---

### 10. PERFIL DEL EQUIPO DE DESARROLLO REQUERIDO

| Rol | Cantidad | Experiencia | Responsabilidades |
|-----|----------|-------------|-------------------|
| Project Manager | 1 | 2+ años liderando proyectos digitales | Gestión del proyecto, comunicación con el albergue |
| Diseñador UX/UI | 1 | 2+ años en diseño de productos digitales | Wireframes, mockups, diseño cálido y responsivo |
| Desarrollador Frontend | 1 | 2+ años en React/Next.js o similar | Implementación del sitio público |
| Desarrollador Backend | 1 | 2+ años en Node.js/Django/Laravel o similar | API REST, base de datos, panel de administración, seguridad |
| QA Tester | 1 | 1+ año en pruebas de software | Pruebas funcionales, de usabilidad |

El equipo deberá presentar portafolio de proyectos similares y referencias comprobables. Se valorará experiencia previa con organizaciones sin fines de lucro.

---

### 11. FORMA DE PAGO

**Forma de pago propuesta:**

| Hito | Porcentaje |
|------|-------------|
| Firma de contrato y plan de trabajo aprobado | 20% |
| Aprobación de mockups y diseño | 15% |
| MVP funcional (sitio público + catálogo + pre-adopción) | 20% |
| Panel de administración completo | 20% |
| Despliegue en producción y capacitación | 25% |

---

### 12. PROPIEDAD INTELECTUAL

Todo el código fuente, documentación, diseños y materiales producidos durante el desarrollo del proyecto serán de propiedad exclusiva del Albergue "Peluchín" una vez completado el pago total del proyecto. El equipo desarrollador se compromete a entregar el código fuente completo, sin dependencias de licencias restrictivas que impidan su uso.

---

### 13. CONFIDENCIALIDAD

El equipo desarrollador se compromete a mantener estricta confidencialidad sobre toda la información del albergue, los datos de adoptantes, donantes, voluntarios y cualquier información sensible a la que tenga acceso durante el proyecto. Esta obligación se extiende por un período mínimo de 2 años posteriores a la finalización del contrato.

---

### 14. GARANTÍA Y SOPORTE

- **Garantía**: 90 días posteriores a la puesta en producción, cubriendo corrección de bugs y fallos atribuibles al desarrollo, sin costo adicional.
- **Soporte post-garantía**: Podrá contratarse como un servicio mensual independiente a bajo costo solidario.

---

### 15. CRITERIOS DE EVALUACIÓN DE PROPUESTAS

| Criterio | Peso |
|----------|------|
| Experiencia del equipo y portafolio | 30% |
| Propuesta técnica y stack tecnológico | 25% |
| Propuesta económica (relación costo-beneficio) | 25% |
| Cronograma y metodología | 15% |
| Experiencia comprobable con ONG o proyectos sociales | 5% |

---

### 16. CONDICIONES DE PRESENTACIÓN DE PROPUESTAS

- Las propuestas deberán enviarse al correo **[alberguepeluchin@gmail.com]** con el asunto: **"PROPUESTA WEB PELUCHÍN – [Nombre del proponente]"**.
- Fecha límite de recepción: **[dd/mm/aaaa]**
- Consultas técnicas: al mismo correo, hasta **[dd/mm/aaaa]**
- Se valorará positivamente que el equipo tenga sensibilidad por la causa animal y/o experiencia con organizaciones sociales.
- Dado el carácter sin fines de lucro de la organización, se invita a los proponentes a considerar precios solidarios.
- "Peluchín" se reserva el derecho de declarar desierta la convocatoria si ninguna propuesta cumple los requisitos mínimos.

---

### 17. CONTACTO

| | |
|---|---|
| **Organización** | Albergue "Peluchín" |
| **Responsable del proyecto** | [Nombre del responsable] |
| **Correo electrónico** | [alberguepeluchin@gmail.com] |
| **Teléfono / WhatsApp** | [+591 X XXXXXXXX] |
| **Dirección** | Llojeta, La Paz, Bolivia |
| **Redes sociales** | Facebook: /AlberguePeluchin — Instagram: @alberguepeluchin |


