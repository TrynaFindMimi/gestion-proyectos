# CARTA DE ACEPTACIÓN DE TÉRMINOS DE REFERENCIA

## PROYECTO: SITIO WEB Y SISTEMA DE GESTIÓN — ALBERGUE "PELUCHÍN"

---

**FECHA:** [dd/mm/aaaa]

**LUGAR:** La Paz, Estado Plurinacional de Bolivia

---

### DESTINATARIO

**Albergue "Peluchín"**  
ONG sin fines de lucro  
Llojeta, La Paz, Bolivia  
Correo: alberguepeluchin@gmail.com

**Atención:** ________________________ (Responsable del Proyecto)

---

### REMITENTES

| # | Nombre | C.I. N.° | Rol en el proyecto |
|---|--------|----------|---------------------|
| 1 | Mariana del Arroyo | ________ | ________ |
| 2 | Nahomi Humerez | ________ | ________ |
| 3 | Santiago Acha | ________ | ________ |
| 4 | Jorge Saenz | ________ | ________ |

---

### ASUNTO: ACEPTACIÓN FORMAL DE TÉRMINOS DE REFERENCIA Y COMPROMISO DE EJECUCIÓN

---

Estimados miembros del Albergue "Peluchín":

Por medio de la presente, quienes suscribimos, en nuestra calidad de **Equipo de Desarrollo**, manifestamos nuestra **aceptación formal e incondicional** de los Términos de Referencia (TDR) correspondientes al proyecto **"Desarrollo de Sitio Web y Sistema de Gestión para el Albergue Peluchín"**, documento de referencia **"TDR_Peluchin.md"** en su versión vigente, así como del **Contrato de Prestación de Servicios de Desarrollo de Software** anexo a esta carta.

---

### 1. DECLARACIONES DEL EQUIPO DESARROLLADOR

Mediante la presente carta, declaramos que:

1. **Conocemos y comprendemos** en su totalidad los alcances, límites, requerimientos funcionales y no funcionales, entregables, cronograma, condiciones técnicas y económicas establecidos en los TDR y en el Contrato.

2. **Aceptamos todos los términos y condiciones** establecidos en dichos documentos, incluyendo de manera expresa la **Cláusula Primera del Contrato** sobre el régimen legal aplicable y la no suspensión de pago, comprometiéndonos a respetar y hacer respetar dichas disposiciones.

3. **Contamos con la capacidad técnica, los recursos humanos y las herramientas necesarias** para ejecutar el proyecto en los plazos y con los estándares de calidad exigidos, conforme al siguiente stack tecnológico propuesto:

| Componente | Tecnología propuesta |
|------------|---------------------|
| Plataforma / CMS | WordPress (CMS) |
| Tema / diseño | Temas de WordPress (300+) personalizadas con la marca del albergue |
| Editor | Editor de bloques de WordPress (Gutenberg) |
| Funcionalidades | Bloques integrados (catálogo/colecciones, formularios, blog, donaciones, SEO, correos) |
| Base de datos | No aplica (sin BD propia; formularios y contenido gestionados por la plataforma) |
| Almacenamiento de imágenes | Biblioteca de medios de WordPress |
| Envío de correos | Correo del dominio (mailbox) / SMTP del plan |
| Despliegue | Publicación directa desde el editor en el plan WordPress contratado por la ONG |
| Control de versiones | Git (GitHub) para documentación y configuración exportada |
| Entorno de trabajo | Editor en línea de WordPress + entorno de pruebas (staging) del plan |

4. **Nos comprometemos a cumplir** con la totalidad de los entregables, plazos, hitos de pago, obligaciones de confidencialidad, garantía, soporte post-lanzamiento y cesión de propiedad intelectual estipulados en el Contrato y los TDR.

---

### 2. ACEPTACIÓN DE LÍMITES Y ALCANCES

#### 2.1. Alcances aceptados (INCLUYE)

Reconocemos y aceptamos que el proyecto incluye los siguientes módulos y funcionalidades:

| Módulo | Confirmación |
|--------|-------------|
| Sitio web público completo (landing, galería de perros y gatos, formularios, donaciones, blog, contacto, FAQ) | Sí |
| Galería de perros y gatos con fichas individuales y galería de imágenes | Sí |
| Formulario de pre-adopción multi-paso con notificaciones automáticas | Sí |
| Sistema de donaciones con QR Simple, datos bancarios y formulario de reporte | Sí |
| Registro de voluntarios con áreas de interés y disponibilidad | Sí |
| Panel de administración completo (dashboard, CRUDs de animales, gestión de estados) | Sí |
| Blog y galería de eventos gestionables desde el panel admin | Sí |
| Notificaciones automáticas por correo electrónico | Sí |
| SEO básico, seguridad (SSL, OWASP), despliegue en producción | Sí |
| Documentación (Manual de Sistemas, Manual de Usuario) | Sí |
| Capacitación al personal del albergue (2 sesiones) | Sí |
| Garantía post-despliegue (2 meses) | Sí |
| Pre-carga de hasta 20 fichas de animales | Sí |

---

#### 2.1.1. DESGLOSE DETALLADO DE PÁGINAS, BOTONES Y FLUJOS DE NAVEGACIÓN

Aceptamos y nos comprometemos a implementar cada una de las siguientes páginas con todos sus botones, acciones, validaciones, estados (normal, carga, vacío, error) y flujos de navegación:

| # | Página | Ruta | Botones y acciones clave |
|---|--------|------|--------------------------|
| 1 | **Landing Page** | `/` | "Quiero Adoptar" → `/adopcion`, "Quiero Donar" → `/donar`, "Ser Voluntario" → `/voluntarios`, "Conóceme" (animales destacados) → `/adopcion/[id]`, "Conocer a todos" → `/adopcion`, "Conócenos" → `/quienes-somos`, botón flotante WhatsApp (fijo) |
| 2 | **Galería de perros y gatos** | `/adopcion` | Filtros (especie, tamaño, edad, sexo, estado), "Buscar", "Limpiar filtros", "Conóceme" (tarjeta) → `/adopcion/[id]`, "Cargar más" (paginación), estado vacío: mensaje + "Limpiar filtros" |
| 3 | **Ficha individual** | `/adopcion/[id]` | Galería clickeable (lightbox), "Quiero Adoptar a [Nombre]" → `/adoptar`, "Compartir" (WhatsApp, Facebook, copiar enlace), "Regresar", "Otros animales que buscan hogar", "Avísame cuando esté disponible" (si en tratamiento) |
| 4 | **Formulario de pre-adopción** (3 pasos) | `/adoptar` | Barra de progreso. Paso 1: "Siguiente", Paso 2: "Anterior" / "Siguiente", Paso 3: "Anterior" / "Enviar Solicitud". Post-envío: "Volver al inicio" / "Conocer más animales". Validación inline en rojo. |
| 5 | **Página de donaciones** | `/donar` | QR descargable, botones "Copiar" por cada dato bancario, "Reportar mi donación" (despliega formulario), "Enviar reporte", "Más info" (otras formas de ayudar), banner "Quiero ser voluntario" |
| 6 | **Registro de voluntarios** | `/voluntarios` | Checkboxes de áreas, select de disponibilidad, "Enviar solicitud", post-envío: "Volver al inicio" |
| 7 | **Quiénes Somos** | `/quienes-somos` | Línea de tiempo, grid de equipo, botón CTA "Únete al equipo" → `/voluntarios` |
| 8 | **Blog / Noticias** | `/blog`, `/blog/[slug]` | Filtro por categoría, "Leer más", "Cargar más", "Compartir" en artículo. Estado vacío: mensaje. |
| 9 | **Galería de eventos** | `/eventos` | "Quiero participar" (modal + formulario), galería clickeable, estado vacío: íconos de redes |
| 10 | **Contacto** | `/contacto` | Mapa Google Maps, botón "Escríbenos por WhatsApp" que redirige a la API de WhatsApp (`wa.me`) con mensaje predefinido, teléfono y correo clickeables (`tel:`, `mailto:`) |
| 11 | **FAQ** | `/faq` | Acordeón por categorías, banner final "Contáctanos" |
| 12 | **Páginas legales** | `/privacidad`, `/terminos`, `/reglamento-adopcion` | Texto estático editable desde admin |
| 13 | **Página 404** | Cualquier ruta inválida | Ilustración, "Ir al inicio" → `/`, "Ver animales en adopción" → `/adopcion` |
| 14 | **Login admin** | `/admin/login` | "Ingresar" (con spinner y estado error), "Olvidé mi contraseña" → envía correo de restablecimiento |
| 15 | **Dashboard admin** | `/admin` | Sidebar con navegación, 4 tarjetas KPI, gráfico de donaciones, tabla de últimas solicitudes, "Cerrar sesión" |
| 16 | **CRUD animales** (admin) | `/admin/animales` | "+ Nuevo animal" (formulario modal con especie perro/gato), "Editar" / "Eliminar" (con confirmación), uploader de fotos múltiple (drag & drop), "Guardar" / "Cancelar" |
| 17 | **Gestión de solicitudes** (admin) | `/admin/solicitudes` | "Ver" detalle, dropdown cambio de estado (pendiente → en revisión → aprobado/rechazado), notas internas, "Enviar correo" automático |
| 18 | **Gestión de donaciones** (admin) | `/admin/donaciones` | "+ Registrar donación" (formulario manual), "Exportar Excel", totalizador del mes |
| 19 | **Gestión de voluntarios** (admin) | `/admin/voluntarios` | "Ver detalle", "Exportar Excel", filtro por área |
| 20 | **Gestión de blog** (admin) | `/admin/blog` | "+ Nuevo artículo" (editor WYSIWYG), "Guardar borrador" / "Publicar", "Editar" / "Eliminar" |
| 21 | **Gestión de eventos** (admin) | `/admin/eventos` | "+ Nuevo evento", uploader de fotos, "Guardar" / "Eliminar" |
| 22 | **Configuración** (admin) | `/admin/configuracion` | Edición de contenido estático (WYSIWYG) por secciones, "Guardar cambios", "Vista previa" |
| 23 | **Errores admin** | `/admin/*` | 401: sesión expirada → login. 403: sin permisos → dashboard. 404: recurso no encontrado → dashboard. 500: error interno → recargar. |

---

#### 2.2. Límites aceptados (NO INCLUYE)

Reconocemos y aceptamos que **quedan expresamente excluidos** del alcance del proyecto:

| Exclusión | Confirmación |
|-----------|-------------|
| Diseño de logotipo ni identidad visual (proporcionado por el albergue) | Sí |
| Campañas de marketing digital o manejo de redes sociales | Sí |
| Carga masiva inicial de animales (más allá de 20 fichas de pre-carga) | Sí |
| Integración con sistemas contables o ERP | Sí |
| Desarrollo de aplicaciones móviles nativas (solo web responsiva) | Sí |
| Redacción y elaboración del contenido de páginas legales (Reglamento de Adopción, Política de Privacidad, Términos y Condiciones, acuerdos de seguimiento post-adopción y cualquier otro documento legal). **Solo transcribimos y publicamos** el contenido que el albergue nos proporcione. El albergue es el único responsable de redactar y aprobar dichos contenidos. | Sí |
| Hosting, servidores, dominio y certificados SSL: **por cuenta del albergue**. Realizamos la configuración y personalización del sitio en el editor de WordPress (plan del albergue) y publicaremos el sitio en el dominio que el albergue proporcione. Si no cuenta con plan propio, entregaremos **proformas con opciones de hosting** para que elija según su presupuesto. Como consultores brindaremos cotizaciones y asesoría, pero **no los proveeremos ni pagaremos**. Asimismo, **no nos comprometemos por la compra del dominio si su costo supera el presupuesto del proyecto**. La habilitación de funciones premium de WordPress con costo adicional requerirá aprobación previa del albergue. | Sí |
| Pasarela de pago con tarjeta de crédito (Red Enlace): **condicional** — solo si la ONG completa el papeleo de habilitación ante Red Enlace (única pasarela autorizada en Bolivia). De lo contrario, fuera de alcance. **En caso de que la ONG no obtenga la habilitación de la pasarela de pagos, el proyecto se mantendrá dentro de los límites presupuestarios originales y el dominio no será adquirido si su costo excede dicho presupuesto.** | Sí |

---

### 3. COMPROMISO DE EJECUCIÓN

El equipo se compromete a ejecutar el proyecto bajo las siguientes condiciones:

#### 3.1. Cronograma y vigencia aceptados

| Fase | Semana | Entregable |
|------|--------|------------|
| Planificación y diseño | 1–2 | E1: Plan de trabajo; E2: Wireframes y mockups; E3: Sitio base con galería de animales |
| Formularios y contenido | 3–4 | E4: Formularios (adopción, donación, voluntariado), contacto y páginas estáticas |
| Panel admin y funcionalidades | 5–6 | E5: Panel de administración personalizado; E6: Blog, eventos, FAQ y contenidos editables |
| QA, despliegue y capacitación | 7–8 | E7: Plataforma en staging; E8: Despliegue en producción; E9: Documentación; E10: Capacitación |
| Garantía | 9–16 | E11: Garantía de 2 meses (corrección de bugs y actualizaciones de seguridad) |

**Vigencia del contrato y fin de la relación laboral.** Aceptamos que **el tiempo de trabajo se extiende hasta la entrega del producto completo** (E8 desplegado, E9 documentación y E10 capacitación), más un período de **2 (dos) meses de garantía** posteriores al despliegue en producción (semanas 9 a 16). Una vez vencido dicho período, el contrato se considerará plenamente cumplido y extinguido.

**Nuevas implementaciones post-garantía.** Entendemos y aceptamos que **cualquier implementación, modificación, nueva funcionalidad, mejora o cambio solicitado por el albergue después del vencimiento de los 2 meses de garantía será tratado como un nuevo proyecto y requerirá la negociación y firma de un nuevo contrato**, con sus propios alcances, plazos y condiciones económicas. El presente contrato no genera obligación alguna de mantenimiento continuo, soporte permanente ni actualización más allá del período de garantía estipulado.

#### 3.2. Metodología de trabajo aceptada

- Plataforma WordPress con temas personalizados con la marca del albergue.
- Editor de bloques (Gutenberg) para maquetación de páginas.
- Funcionalidades integradas de WordPress: catálogo/colecciones de animales, formularios (pre-adopción, donación, voluntariado), blog, SEO, correos del dominio y seguridad gestionada.
- Sprints de 2 semanas con demo funcional del sitio configurado al final de cada sprint.
- Gestión de tareas en Trello/Jira/Notion.
- Comunicación vía WhatsApp para coordinación rápida **dentro del horario laboral** (lunes a viernes, 9:00 a 18:00, hora de Bolivia).
- Reuniones formales vía Google Meet o Zoom. **En caso de requerirse reuniones adicionales, se deberá notificar al equipo con un mínimo de 24 horas de antelación y se realizarán únicamente en horario laboral.**
- **No se contestarán mensajes fuera del horario laboral establecido.**
- Repositorio de código en GitHub/GitLab privado con acceso compartido.

#### 3.3. Forma de pago aceptada — Tres cuotas

Aceptamos la siguiente propuesta de pago en **tres (3) cuotas**, por un precio total de **Bs. 13,560** (IVA incluido), correspondiente a Bs. 12,000 de precio base más Bs. 1,560 de IVA (13%):

| Cuota | Plazo | Porcentaje | Monto con IVA (Bs.) | Hitos cubiertos |
|-------|-------|------------|----------------------|-----------------|
| 1.ª cuota | **1 mes** después de la firma del contrato | 40% | 5,424 | E1 (Plan de trabajo), E2 (Wireframes y mockups), E3 (Sitio base + galería de animales), E4 (Formularios, donaciones, voluntarios y contacto) |
| 2.ª cuota | **1 mes y medio** después de la 1.ª cuota (2.5 meses desde la firma) | 35% | 4,746 | E5 (Panel admin personalizado), E6 (Blog, eventos, FAQ), E7 (QA/Testing) |
| 3.ª cuota | **Al finalizar el contrato** (producto completo entregado + inicio de garantía de 2 meses) | 25% | 3,390 | E8 (Despliegue en producción con SSL), E9 (Documentación), E10 (Capacitación) |

| | |
|---|---|
| **1.ª cuota (40%) — Bs. 5,424** | Sí |
| **2.ª cuota (35%) — Bs. 4,746** | Sí |
| **3.ª cuota (25%) — Bs. 3,390** | Sí |

#### 3.4. Propiedad intelectual y confidencialidad

Aceptamos que:
- Todo el código fuente, documentación y materiales producidos serán propiedad exclusiva del Albergue "Peluchín" al completarse el pago total.
- Mantendremos confidencialidad sobre toda la información del albergue, adoptantes, donantes y voluntarios por un mínimo de **2 años** posteriores al contrato.
- No utilizaremos el código fuente ni los datos del proyecto para fines ajenos a este contrato.

#### 3.5. Fin de la relación contractual y nuevas implementaciones

Aceptamos que:
- El presente contrato estará vigente únicamente hasta la entrega del producto completo más los **2 (dos) meses de garantía** posteriores al despliegue en producción.
- Vencido dicho período, el contrato se extingue en su totalidad y el EQUIPO DESARROLLADOR queda liberado de toda obligación frente al albergue.
- **Cualquier implementación, modificación, nueva funcionalidad, mejora o cambio** solicitado por el albergue con posterioridad al vencimiento de los 2 meses de garantía será considerado un **nuevo proyecto independiente** y requerirá la negociación y firma de un **nuevo contrato**, con sus propios alcances, plazos y condiciones económicas.
- Este contrato **no genera obligación de mantenimiento continuo, soporte permanente ni actualización** más allá del período de garantía estipulado.

---

### 4. DECLARACIÓN DE NO CONFLICTO DE INTERESES

Declaramos bajo juramento que no tenemos ningún conflicto de intereses, presente o potencial, que pueda comprometer la ejecución imparcial, objetiva y profesional del proyecto, ni relaciones comerciales, laborales o personales que puedan influir negativamente en nuestra capacidad de cumplir con las obligaciones asumidas frente al Albergue "Peluchín".

---

### 5. ACEPTACIÓN DE LA CLÁUSULA DE NO SUSPENSIÓN DE PAGO

De manera expresa y en cumplimiento del régimen legal boliviano vigente al año 2026, **aceptamos la Cláusula Primera del Contrato** que establece que bajo ninguna circunstancia EL CLIENTE podrá suspender, retener, compensar ni condicionar los pagos correspondientes a hitos ya cumplidos y aprobados. Entendemos y aceptamos que dicha cláusula protege tanto a **LA ONG** como al **EQUIPO DESARROLLADOR**, garantizando la estabilidad financiera y operativa del proyecto para ambas partes.

---

### 6. DATOS DE CONTACTO DEL EQUIPO DESARROLLADOR

| Canal | Detalle |
|-------|---------|
| Correo electrónico principal | [correo@equipo.com] |
| WhatsApp (coordinador) | [+591 X XXXXXXXX] |
| Repositorio de código | [URL de GitHub/GitLab] |

---

### 7. CIERRE

Reiteramos nuestro compromiso y entusiasmo por contribuir al fortalecimiento del Albergue "Peluchín" mediante el desarrollo de herramientas digitales que amplíen su alcance, profesionalicen sus operaciones y generen un impacto positivo en la comunidad y en la vida de los animales rescatados.

Manifestamos nuestra plena **aceptación** de los Términos de Referencia, del Contrato de Prestación de Servicios y de todas las condiciones, alcances, límites y obligaciones en ellos contenidos, y quedamos a disposición para coordinar la firma del contrato e iniciar formalmente las actividades del proyecto en la fecha que se acuerde.

---

Atentamente,

<br>

| | |
|---|---|
| **Mariana del Arroyo** | **Nahomi Humerez** |
| C.I.: ________________ | C.I.: ________________ |
| Firma: ________________ | Firma: ________________ |
| | |
| | |
| **Santiago Acha** | **Jorge Saenz** |
| C.I.: ________________ | C.I.: ________________ |
| Firma: ________________ | Firma: ________________ |

---

**ANEXOS A ESTA CARTA:**
1. TDR_Peluchin.md — Términos de Referencia originales.
2. TDR_Contrato_Peluchin.md — Contrato de Prestación de Servicios de Desarrollo de Software.

.