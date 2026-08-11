# CONTRATO DE PRESTACIÓN DE SERVICIOS DE DESARROLLO DE SOFTWARE

## ALBERGUE "PELUCHÍN" — EQUIPO DE DESARROLLO

---

**FECHA:** [dd/mm/aaaa]

**LUGAR:** La Paz, Estado Plurinacional de Bolivia

---

Entre el **Albergue "Peluchín"**, Organización No Gubernamental (ONG) sin fines de lucro, con domicilio en la zona de Llojeta, La Paz, Bolivia, representada en este acto por **________________________**, mayor de edad, hábil por derecho, con C.I. N.° ________________, en adelante denominada **"LA ONG"** o **"EL CLIENTE"**; y, por otra parte:

| # | Desarrollador(a) | C.I. N.° |
|---|-------------------|----------|
| 1 | Mariana del Arroyo | ________ |
| 2 | Nahomi Humerez | ________ |
| 3 | Santiago Acha | ________ |
| 4 | Jorge Saenz | ________ |

Todos mayores de edad, hábiles por derecho, en conjunto denominados **"EL EQUIPO DESARROLLADOR"** o **"LOS PRESTADORES"**, quienes actúan de manera solidaria y mancomunada.

**"LA ONG"** y **"EL EQUIPO DESARROLLADOR"** serán denominados conjuntamente como **"LAS PARTES"**.

Las partes convienen en celebrar el presente **CONTRATO DE PRESTACIÓN DE SERVICIOS DE DESARROLLO DE SOFTWARE**, sujeto a las siguientes cláusulas:

---

### CLÁUSULA PRIMERA: RÉGIMEN LEGAL APLICABLE Y NO SUSPENSIÓN DE PAGO

El presente contrato se rige por las disposiciones del Código Civil Boliviano, la Ley N.° 164 de Telecomunicaciones y Tecnologías de Información y Comunicación, la Ley N.° 453 General de los Derechos de las Usuarias y los Usuarios y de las Consumidoras y los Consumidores, y demás normativa aplicable del Estado Plurinacional de Bolivia, en particular las disposiciones vigentes al año 2026 sobre compromisos contractuales y cumplimiento de prestaciones de servicios digitales.

**No suspensión de pago.** Las partes acuerdan de manera expresa, en virtud del principio de irrevocabilidad de las compromisos dinerarios establecido en la legislación boliviana de 2026, que **bajo ninguna circunstancia EL CLIENTE podrá suspender, retener, compensar ni condicionar los pagos ya devengados** correspondientes a los hitos cumplidos y aprobados por entregables del presente contrato, aun cuando existan controversias sobre hitos posteriores, retrasos parciales no atribuibles a dolo o negligencia grave, o cualquier otra circunstancia sobreviniente. Los pagos por hitos ya entregados y formalmente recibidos conforme a los criterios de aceptación definidos en este instrumento son irrevocables y no estarán sujetos a suspensión, devolución ni compensación alguna, salvo sentencia judicial firme y ejecutoriada emitida por tribunal competente del Estado Plurinacional de Bolivia.

Quedan expresamente protegidos por esta cláusula **todos los miembros del EQUIPO DESARROLLADOR** en su calidad de prestadores mancomunados, así como **LA ONG** en su calidad de receptora de los entregables, garantizando que ninguna de las partes podrá verse perjudicada por la suspensión unilateral e injustificada de los pagos pactados, asegurando la continuidad del proyecto y la protección de los derechos laborales de los desarrolladores y la estabilidad operativa del albergue.

---

### CLÁUSULA SEGUNDA: ANTECEDENTES Y OBJETO DEL CONTRATO

#### 2.1. Antecedentes

El Albergue "Peluchín" es una organización sin fines de lucro ubicada en la zona de Llojeta, La Paz, dedicada al rescate, rehabilitación y adopción responsable de perros y gatos en situación de abandono. Actualmente brinda refugio a más de 40 animales rescatados y opera de manera autogestionada mediante donaciones voluntarias y colaboración de voluntarios locales.

"Peluchín" ha identificado la necesidad de contar con un sitio web institucional y un sistema de gestión interno que profesionalice sus operaciones, amplíe su alcance y fortalezca la transparencia ante la comunidad.

#### 2.2. Objeto

**EL EQUIPO DESARROLLADOR** se compromete a diseñar, configurar, personalizar y desplegar un sitio web institucional basado en **WordPress** como CMS con panel de administración para el Albergue "Peluchín", conforme a los Términos de Referencia (TDR_Peluchin.md) anexos al presente contrato y que forman parte integrante del mismo. El proyecto se implementará mediante la instalación, configuración y personalización de temas y plugins. El proyecto incluye:

1. Sitio web público cálido y responsivo con landing page, sección "Quiénes somos", galería de perros y gatos en adopción, formulario de pre-adopción, sección de donaciones, registro de voluntarios, galería de eventos, blog/noticias y página de contacto.
2. Galería de perros y gatos con fichas individuales (fotos, edad, tamaño, personalidad, estado de salud, estado de adopción), separados por especie (perro/gato).
3. Formulario de pre-adopción multi-paso con notificaciones automáticas por correo electrónico.
4. Sistema de donaciones con QR Simple, datos bancarios y formulario opcional de reporte de donación para trazabilidad.
5. Registro de voluntarios con áreas de interés y disponibilidad horaria.
6. Panel de administración con dashboard de KPIs, CRUD de perros y gatos, gestión de solicitudes de adopción con flujo de estados (pendiente → en revisión → aprobado / rechazado), registro de donaciones, listado de voluntarios, gestión de contenido estático y del blog.
7. Despliegue en entorno de producción con certificado SSL/TLS.
8. Documentación (Manual de Sistemas, Manual de Usuario) y capacitación al personal del albergue (2 sesiones presenciales o virtuales).

---

### CLÁUSULA TERCERA: ALCANCE DETALLADO

#### 3.1. Alcance incluido (INCLUYE)

| Módulo | Descripción |
|--------|-------------|
| Sitio web público | Landing page, "Quiénes somos", galería de perros y gatos, formulario de pre-adopción, donaciones, registro de voluntarios, galería, blog, contacto, FAQ, botón flotante de WhatsApp |
| Galería de perros y gatos | Fichas individuales con galería de fotos, nombre, edad, tamaño, sexo, especie (perro/gato), estado de salud, personalidad, fecha de rescate, estado |
| Formulario de pre-adopción | Formulario multi-paso con datos del solicitante, tipo de vivienda, experiencia con mascotas, referencias; notificaciones por correo |
| Sistema de donaciones | QR Simple, datos bancarios, formulario opcional de reporte de donación. Integración con pasarela de pago (Red Enlace): **condicional** — solo se implementará si LA ONG completa y obtiene la habilitación del papeleo correspondiente ante Red Enlace, única pasarela disponible en Bolivia. |
| Registro de voluntarios | Datos personales, áreas de interés, disponibilidad horaria |
| Panel de administración | Dashboard con KPIs, CRUD de perros y gatos, gestión de solicitudes, registro de donaciones, listado de voluntarios, gestión de blog y contenido estático |
| Blog / Noticias | Publicación de noticias, eventos, historias de adopción, campañas |
| Notificaciones | Correos automáticos de confirmación (pre-adopción, donación, voluntariado) |
| SEO básico | Meta tags, sitemap.xml, URL amigables, Schema.org |
| Seguridad | SSL/TLS, sanitización de inputs, protección CSRF/XSS, encriptación de datos sensibles |
| Despliegue | Migración de WordPress de entorno local a servidores de la ONG mediante plugin de migración (All-in-One WP Migration). Si LA ONG no cuenta con servidores propios, se entregarán proformas con opciones de hosting. |
| Documentación | Manual de Sistemas, Manual de Usuario |
| Capacitación | 2 sesiones al personal del albergue |

#### 3.1.1. ESTRUCTURA DETALLADA DE PÁGINAS Y BOTONES

A continuación se detalla cada página del sistema con sus botones, acciones, estados y flujos de navegación.

---

##### A. SITIO WEB PÚBLICO

---

###### A1. LANDING PAGE (Inicio — `/`)

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Hero Section | Sección | Imagen principal del albergue con titular ("Dales una segunda oportunidad") y subtítulo. Overlay con gradiente cálido. |
| **"Quiero Adoptar"** | Botón primario (CTA) | Redirige a la galería de perros y gatos (`/adopcion`). Color destacado, animación hover. |
| **"Quiero Donar"** | Botón secundario (CTA) | Redirige a la página de donaciones (`/donar`). Con icono de corazón. |
| **"Ser Voluntario"** | Botón outline (CTA) | Redirige al formulario de voluntariado (`/voluntarios`). Icono de manos. |
| Animales Destacados | Carousel / Grid | 3–6 perros y gatos en tarjetas con foto, nombre y botón **"Conóceme"** → ficha individual (`/adopcion/[id]`). |
| **"Conocer a todos"** | Botón / Link | Redirige a la galería completa (`/adopcion`). |
| Contador en vivo | Sección | Números animados: "X animales adoptados", "X donaciones este mes", "X voluntarios activos". |
| Testimonios | Slider | Historias de adopción exitosas con foto de la familia y el animal adoptado. |
| Misión resumida | Sección | Texto breve de misión con foto del albergue y botón **"Conócenos"** → (`/quienes-somos`). |
| **"Escríbenos por WhatsApp"** | Botón flotante (fijo) | Icono de WhatsApp siempre visible. Abre chat directo al número del albergue. |
| Navbar | Navegación | Logo + enlaces: Inicio, Adopción, Dona, Voluntarios, Blog, Quiénes Somos, Contacto. Menú hamburguesa en mobile. |
| Footer | Pie de página | Logo, dirección, teléfono, email, íconos de redes sociales (Facebook, Instagram), enlaces rápidos. |

---

###### A2. GALERÍA DE PERROS Y GATOS (`/adopcion`)

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Filtros | Barra de filtros | Dropdowns/checkboxes: Especie (perro, gato), Tamaño (pequeño, mediano, grande), Edad (cachorro, adulto, senior), Sexo (macho, hembra), Estado (en adopción, adoptado, en tratamiento). |
| **"Buscar"** | Botón | Aplica filtros seleccionados con indicador de carga (spinner). |
| **"Limpiar filtros"** | Botón secundario | Restablece todos los filtros a su estado por defecto. |
| Grid de animales | Tarjetas | Cada tarjeta muestra: foto principal, nombre, especie, edad, tamaño, sexo. Al hacer hover: overlay con botón **"Conóceme"**. |
| **"Conóceme"** | Botón en tarjeta | Redirige a ficha individual (`/adopcion/[id]`). |
| **"Cargar más"** | Botón paginación | Carga siguiente lote de animales (paginación infinita o numerada). |
| Estado "vacío" | Mensaje | "No se encontraron animales con esos filtros. ¡Prueba con otros!" con ilustración y botón **"Limpiar filtros"**. |
| **"¿No encuentras a tu compañero ideal?"** | Banner inferior | Redirige al formulario de pre-adopción para quedar en lista de espera. |

---

###### A3. FICHA INDIVIDUAL (`/adopcion/[id]`)

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Galería de imágenes | Carrusel | Navegación con flechas < > y dots indicadores. Click en imagen la abre en lightbox/modal a pantalla completa. |
| Datos del animal | Sección | Nombre, especie (perro/gato), edad aproximada, tamaño, sexo, raza (si se conoce), peso. |
| Estado de salud | Badge / Iconos | Vacunado ✅, Esterilizado ✅, Desparasitado ✅, con colores verde/amarillo/rojo según estado. |
| Personalidad | Tags | Etiquetas: "Juguetón", "Tranquilo", "Cariñoso", "Protector", "Socializa con otros animales", "Ideal para niños". |
| Historia | Texto | Narrativa del rescate y personalidad del animal. |
| Fecha de rescate | Dato | Día/mes/año de ingreso al albergue. |
| **"Quiero Adoptar a [Nombre]"** | Botón primario grande (CTA) | Redirige al formulario de pre-adopción (`/adoptar?animal=[id]`) pre-seleccionando al animal. |
| **"Compartir"** | Botón secundario | Abre diálogo para compartir ficha en WhatsApp, Facebook, copiar enlace. |
| **"Regresar"** | Link / Botón outline | Regresa a `/adopcion`. |
| **"Otros animales que buscan hogar"** | Slider inferior | 3 animales aleatorios de la galería con mismo formato de tarjeta. |
| Etiqueta "En tratamiento" | Badge | Si el animal no está disponible para adopción, el botón de adoptar se reemplaza por un mensaje: "En recuperación. Pronto disponible" y botón **"Avísame cuando esté disponible"** (registra email). |
| Etiqueta "Adoptado" | Badge verde | Se deshabilita el botón de adopción. Muestra "¡Adoptado! ❤️" con fecha de adopción. |

---

###### A4. FORMULARIO DE PRE-ADOPCIÓN (`/adoptar`)

Flujo en 3 pasos con barra de progreso visual (Paso 1 → Paso 2 → Paso 3).

| Paso | Campos | Botones |
|------|--------|---------|
| **Paso 1: Datos Personales** | Nombre completo, C.I., fecha de nacimiento, correo electrónico, teléfono, dirección, ocupación. | **"Siguiente"** (valida campos requeridos). |
| **Paso 2: Vivienda y Experiencia** | Tipo de vivienda (casa/departamento), propia/alquilada, tiene patio/jardín (sí/no), ha tenido mascotas antes (sí/no), qué pasó con ellas, tiene otras mascotas actualmente (sí/no/cuáles), quiénes viven en el hogar (adultos, niños, otros). | **"Anterior"** / **"Siguiente"**. |
| **Paso 3: Referencias y Envío** | Referencia personal (nombre, teléfono, parentesco), referencia veterinaria (nombre del veterinario, clínica, teléfono), ¿por qué quiere adoptar? (textarea), animal de interés (dropdown con animales disponibles por especie, opcional), acepta seguimiento post-adopción (checkbox requerido), acepta condiciones de adopción (checkbox requerido con link al reglamento). | **"Anterior"** / **"Enviar Solicitud"** (botón primario). |
| Post-envío | Mensaje de confirmación: "¡Gracias! Tu solicitud ha sido recibida. Te contactaremos pronto." Con número de seguimiento. | **"Volver al inicio"** / **"Conocer más animales"**. |

Validaciones: campos requeridos marcados con asterisco (*), mensajes de error inline en rojo, validación de formato de email y teléfono.

---

###### A5. PÁGINA DE DONACIONES (`/donar`)

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Mensaje de impacto | Hero | "Tu donación salva vidas. Con Bs. 50 alimentas a un animal rescatado por una semana." |
| **QR Simple** | Imagen + texto | Código QR escaneable con datos bancarios del albergue. Botón **"Descargar QR"** (descarga PNG). |
| Datos de transferencia | Sección copiable | Banco, n.° de cuenta, titular, CI/NIT. Cada campo con botón **"Copiar"** (ícono de portapapeles, tooltip "Copiado ✅"). |
| **"Reportar mi donación"** | Botón secundario | Despliega formulario opcional para trazabilidad. |
| Formulario de reporte | Collapsible | Nombre del donante (opcional), monto (Bs.), fecha, comprobante (adjuntar imagen), mensaje al albergue (opcional), ¿desea recibo? (checkbox). Botón **"Enviar reporte"**. |
| Post-reporte | Mensaje | "¡Gracias por tu generosidad! Recibirás un correo de confirmación." |
| Sección "Otras formas de ayudar" | Cards | Apadrina un animal rescatado (mensual), dona insumos (lista de necesidades), comparte en redes. Cada una con botón **"Más info"**. |
| **"Voluntariado"** | Banner | "También puedes donar tu tiempo." Botón **"Quiero ser voluntario"** → `/voluntarios`. |

---

###### A6. REGISTRO DE VOLUNTARIOS (`/voluntarios`)

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Info del voluntariado | Hero | Texto explicativo: tipos de voluntariado, requisitos, beneficios. |
| Formulario | Campos | Nombre completo, correo, teléfono, edad, ocupación. |
| Áreas de interés | Checkboxes | Paseo de perros, limpieza del albergue, apoyo veterinario, difusión en redes, organización de eventos, transporte, captación de donaciones. |
| Disponibilidad horaria | Select múltiple | Lunes a domingo, turnos: mañana (8–12), tarde (14–18), fines de semana. |
| Experiencia previa | Textarea opcional | Trabajo con animales, voluntariados anteriores. |
| **"Enviar solicitud"** | Botón primario | Envía formulario, envía correo de confirmación al voluntario y notificación al admin. |
| Post-envío | Mensaje | "¡Bienvenido al equipo! Revisaremos tu solicitud y te contactaremos." Botón **"Volver al inicio"**. |

---

###### A7. QUIÉNES SOMOS (`/quienes-somos`)

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Historia del albergue | Sección | Texto narrativo con imágenes de la fundación y evolución. |
| Misión y Visión | Cards | Diseño con iconos y texto. |
| Equipo | Grid | Fotos y nombres del equipo del albergue (voluntarios permanentes). |
| Línea de tiempo | Timeline | Hitos del albergue: fundación, primeros rescates, eventos destacados. |
| **"Únete al equipo"** | Botón CTA | Redirige a `/voluntarios`. |

---

###### A8. BLOG / NOTICIAS (`/blog`)

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Listado de artículos | Grid / Lista | Imagen destacada, título, fecha, extracto (primeras líneas), categoría (adopciones, eventos, consejos, campañas). |
| **"Leer más"** | Botón / Link en tarjeta | Redirige a `/blog/[slug]`. |
| **Filtro por categoría** | Pills / Tabs | Filtra artículos por categoría. |
| **"Cargar más"** | Botón | Paginación. |
| Artículo individual (`/blog/[slug]`) | Página | Título, fecha, categoría, contenido (texto enriquecido con imágenes), botones **"Compartir"** (Facebook, WhatsApp, copiar enlace). |
| Artículo vacío | Mensaje | "Pronto publicaremos historias. ¡Vuelve a visitarnos!" |

---

###### A9. GALERÍA DE EVENTOS (`/eventos`)

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Próximos eventos | Sección | Tarjetas con fecha, título, descripción, ubicación. Botón **"Quiero participar"** (abre modal con formulario: nombre, email, teléfono, botón **"Confirmar asistencia"**). |
| Eventos pasados | Grid | Fotos del evento en galería clickeable (lightbox). |
| Sin eventos | Mensaje | "No hay eventos programados por ahora. ¡Síguenos en redes!" con íconos de Facebook/Instagram. |

---

###### A10. CONTACTO (`/contacto`)

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Mapa | Iframe | Google Maps con ubicación del albergue (Llojeta, La Paz). |
| Datos de contacto | Sección | Dirección, teléfono (clickeable para llamada en mobile), correo (clickeable `mailto:`). |
| **"Escríbenos por WhatsApp"** | Botón primario (CTA) | Redirige a la API de WhatsApp (`https://wa.me/+591XXXXXXXX?`) con un mensaje predefinido: *"Hola Albergue Peluchín, me gustaría obtener más información."* El número de WhatsApp será configurable desde el panel de administración. |
| Redes sociales | Íconos grandes | Facebook, Instagram, WhatsApp. |

---

###### A11. FAQ — PREGUNTAS FRECUENTES (`/faq`)

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Acordeón | Dropdowns | Preguntas agrupadas por categoría: Adopción, Donación, Voluntariado, General. Click en pregunta despliega respuesta. |
| **"¿No encontraste lo que buscabas?"** | Banner final | Botón **"Contáctanos"** → `/contacto`. |

---

###### A12. PÁGINAS LEGALES

| Página | Ruta | Contenido |
|--------|------|-----------|
| Política de Privacidad | `/privacidad` | Texto estático sobre manejo de datos personales. |
| Términos y Condiciones | `/terminos` | Condiciones de uso del sitio. |
| Reglamento de Adopción | `/reglamento-adopcion` | Requisitos, compromisos, proceso de seguimiento. |

---

##### B. FOOTER (PRESENTE EN TODAS LAS PÁGINAS PÚBLICAS)

| Elemento | Descripción |
|----------|-------------|
| Columna 1: Logo + descripción breve | "Albergue Peluchín — Rescatando y transformando vidas desde [año]." |
| Columna 2: Enlaces rápidos | Adopción, Dona, Voluntarios, Blog, Quiénes Somos, Contacto. |
| Columna 3: Contacto | Dirección (Llojeta, La Paz), Teléfono, Correo (clickeables). |
| Columna 4: Redes sociales | Íconos SVG de Facebook, Instagram, WhatsApp con links. |
| Barra inferior | © 2026 Albergue Peluchín. Todos los derechos reservados. Links a Privacidad y Términos. |

---

###### A13. PÁGINA 404 (NO ENCONTRADA)

| Elemento | Descripción |
|----------|-------------|
| Ilustración | Animal perdido / confundido. |
| Mensaje | "Oops... Esta página no existe. Pero hay muchos animales que sí quieren verte." |
| **"Ir al inicio"** | Botón primario → `/`. |
| **"Ver animales en adopción"** | Botón secundario → `/adopcion`. |

---

##### C. PANEL DE ADMINISTRACIÓN (`/admin`)

Acceso protegido por login (usuario y contraseña). Panel de administración nativo de WordPress personalizado.

---

###### C1. LOGIN (`/admin/login`)

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Formulario | Campos | Email, Contraseña. |
| **"Ingresar"** | Botón primario | Autentica al usuario. |
| Estado "cargando" | Spinner | Mientras se valida la sesión. |
| Estado "error" | Alerta roja | "Credenciales inválidas. Intenta de nuevo." |
| **"Olvidé mi contraseña"** | Link | Envía correo de restablecimiento. |

---

###### C2. DASHBOARD (`/admin`)

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Sidebar | Navegación fija | Logo + enlaces: Dashboard, Animales, Solicitudes de Adopción, Donaciones, Voluntarios, Blog, Eventos, Configuración. Con íconos. Colapsable en mobile. |
| Tarjetas KPI | 4 cards | Animales en adopción (#), Solicitudes pendientes (#), Donaciones del mes (Bs.), Voluntarios activos (#). Con indicador de variación (▲▼) respecto al mes anterior. |
| Gráfico de donaciones | Barras / Línea | Donaciones por mes (últimos 6 meses) en Bs. |
| Últimas solicitudes | Tabla resumida | 5 solicitudes más recientes: fecha, nombre del solicitante, animal, estado. Botón **"Ver todas"** → `/admin/solicitudes`. |
| Próximos eventos | Lista | Eventos programados con fecha. Botón **"Gestionar eventos"** → `/admin/eventos`. |
| **"Cerrar sesión"** | Botón en sidebar | Logout. |

---

###### C3. CRUD ANIMALES (`/admin/animales`)

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Tabla de animales | Data table | Columnas: foto miniatura, nombre, especie (perro/gato), edad, tamaño, estado (badge de color), fecha de ingreso. Paginación. Búsqueda por nombre. Filtro por estado y especie. |
| **"+ Nuevo animal"** | Botón primario | Abre formulario de creación. |
| **"Editar"** (ícono lápiz) | Botón por fila | Abre formulario de edición pre-cargado. |
| **"Eliminar"** (ícono basurero) | Botón por fila | Muestra modal de confirmación: "¿Eliminar a [Nombre]? Esta acción no se puede deshacer." Botones **"Cancelar"** / **"Eliminar"**. |
| Formulario de creación/edición | Modal o página | Campos: nombre (texto), especie (select: perro/gato), edad (select: 0–1 año, 1–3, 3–7, 7+), tamaño (select), sexo (radio), raza (texto, opcional), peso (número, kg), estado (select: en adopción, adoptado, en tratamiento), personalidad (tags con autocomplete), historia (textarea enriquecido), fecha de rescate (datepicker). |
| **Subir fotos** | Uploader | Drag & drop + click para seleccionar. Múltiples archivos. Previsualización con miniaturas y botón **"X"** para eliminar cada una. Imagen principal seleccionable (estrella). |
| **"Guardar"** | Botón primario | Crea o actualiza registro. |
| **"Cancelar"** | Botón secundario | Vuelve a la tabla sin guardar. |

---

###### C4. GESTIÓN DE SOLICITUDES DE ADOPCIÓN (`/admin/solicitudes`)

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Tabla de solicitudes | Data table | Columnas: fecha, nombre del solicitante, animal de interés, estado (badge: pendiente 🟡, en revisión 🔵, aprobado 🟢, rechazado 🔴), teléfono. Filtros por estado. Búsqueda. |
| **"Ver"** (ícono ojo) | Botón por fila | Abre detalle completo de la solicitud: todos los campos del formulario, notas internas, historial de cambios de estado. |
| Cambiar estado | Dropdown + botón | Select con estados disponibles según estado actual (flujo: pendiente → en revisión → aprobado / rechazado). Botón **"Actualizar estado"**. |
| Notas internas | Textarea + botón | Campo para notas del administrador. Botón **"Agregar nota"**. Lista cronológica de notas anteriores. |
| **"Enviar correo"** | Botón | Envía correo automático al solicitante según cambio de estado (aprobado: instrucciones de adopción; rechazado: mensaje amable). |

---

###### C5. GESTIÓN DE DONACIONES (`/admin/donaciones`)

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Tabla de donaciones | Data table | Columnas: fecha, donante (o "Anónimo"), monto (Bs.), medio (efectivo, transferencia, QR), comprobante (ícono de descarga si adjuntó imagen). Orden por fecha descendente. |
| **"+ Registrar donación"** | Botón primario | Abre formulario manual: monto, fecha, donante (opcional), medio de pago, notas. Botón **"Guardar"**. |
| **"Exportar Excel"** | Botón | Descarga reporte del mes/año seleccionado en formato .xlsx. |
| Totalizador | Resumen superior | "Total del mes: Bs. X.XXX". |

---

###### C6. GESTIÓN DE VOLUNTARIOS (`/admin/voluntarios`)

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Tabla de voluntarios | Data table | Columnas: nombre, correo, teléfono, áreas de interés (tags), disponibilidad, fecha de registro. Filtro por área de interés. Búsqueda. |
| **"Ver detalle"** | Botón por fila | Abre ficha completa con todos los datos del formulario de registro. |
| **"Exportar Excel"** | Botón | Listado completo en .xlsx. |

---

###### C7. GESTIÓN DE BLOG (`/admin/blog`)

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Tabla de artículos | Data table | Columnas: título, categoría, fecha de publicación, estado (publicado/borrador). |
| **"+ Nuevo artículo"** | Botón primario | Abre editor. |
| Editor | Formulario | Campos: título, categoría (select), imagen destacada (uploader single), contenido (editor WYSIWYG con formato básico: negrita, cursiva, listas, enlaces, inserción de imágenes). |
| **"Guardar borrador"** | Botón secundario | Guarda sin publicar. |
| **"Publicar"** | Botón primario | Publica el artículo en el sitio público. |
| **"Editar"** / **"Eliminar"** | Botones por fila | Acciones estándar. |

---

###### C8. GESTIÓN DE EVENTOS (`/admin/eventos`)

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Tabla de eventos | Data table | Columnas: título, fecha, ubicación, estado (próximo/pasado). |
| **"+ Nuevo evento"** | Botón primario | Formulario: título, descripción, fecha y hora, ubicación, imagen, estado (próximo/pasado). |
| Subir fotos del evento | Uploader múltiple | Galería de fotos para eventos pasados. |
| **"Guardar"** / **"Eliminar"** | Botones | Acciones estándar. |

---

###### C9. CONFIGURACIÓN DE CONTENIDO ESTÁTICO (`/admin/configuracion`)

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| Secciones editables | Tabs / Acordeón | "Quiénes Somos", "Misión y Visión", "Equipo", "FAQ", "Página de Donaciones (texto de impacto)". |
| Editor por sección | WYSIWYG / Campos de texto | Permite modificar textos sin tocar código. |
| **"Guardar cambios"** | Botón primario | Actualiza contenido en el sitio público. |
| Vista previa | Botón secundario | Abre la página pública en otra pestaña para ver los cambios. |

---

###### C10. PÁGINAS DE ERROR DEL PANEL

| Situación | Comportamiento |
|-----------|---------------|
| Sesión expirada | Redirección a `/admin/login` con mensaje: "Tu sesión ha expirado. Ingresa nuevamente." |
| Acceso no autorizado (rol insuficiente) | Página 403: "No tienes permisos para acceder a esta sección." Botón **"Volver al dashboard"**. |
| Recurso no encontrado | Página 404 admin: "El recurso solicitado no existe." Botón **"Volver al dashboard"**. |
| Error del servidor | Página 500 admin: "Error interno. Intenta de nuevo más tarde." Botón **"Recargar página"**. |

---

#### 3.2. Alcance excluido (LIMITACIONES)

- Diseño de logotipo ni identidad visual (el albergue ya cuenta con ella).
- Campañas de marketing digital o manejo de redes sociales.
- Carga masiva inicial de animales (se pre-cargarán hasta 20 fichas como parte del proyecto).
- Integración con sistemas contables o ERP.
- Desarrollo de aplicaciones móviles nativas (solo web responsiva).
- Redacción y elaboración del contenido de las páginas legales (Reglamento de Adopción, Política de Privacidad, Términos y Condiciones, acuerdos de seguimiento post-adopción y cualquier otro documento legal o normativo). **EL EQUIPO DESARROLLADOR únicamente transcribirá y publicará** en el sitio web el contenido que LA ONG proporcione. LA ONG es la única responsable de redactar, revisar y aprobar dichos contenidos. EL EQUIPO DESARROLLADOR no asume responsabilidad alguna por el contenido legal de estos documentos.
- Hosting, servidores, dominio y certificados SSL: **corren por cuenta del albergue**. EL EQUIPO DESARROLLADOR realiza la configuración y personalización del sitio WordPress en entorno local, y migrará el sitio a los servidores que LA ONG proporcione. Si LA ONG no cuenta con servidores propios, el equipo entregará **proformas con opciones de hosting** para que LA ONG elija según su presupuesto. El equipo **no proveerá, contratará ni pagará ninguno de estos servicios**. Asimismo, **EL EQUIPO DESARROLLADOR no se compromete ni se responsabiliza por la compra del dominio si el costo del mismo llegase a ser superior al presupuesto del proyecto**. La instalación de plugins premium que impliquen un costo adicional requerirá aprobación previa de LA ONG.
- Pasarela de pago con tarjeta de crédito (Red Enlace): **está fuera del alcance del presente contrato**, salvo que LA ONG complete el papeleo de habilitación ante Red Enlace — única pasarela autorizada en Bolivia — y lo comunique formalmente al EQUIPO DESARROLLADOR, en cuyo caso se evaluará como adenda al contrato existente si aún está vigente, o como nuevo contrato si ya ha vencido. **En caso de que LA ONG no obtenga la habilitación de la pasarela de pagos ante Red Enlace, se deja expresa constancia de que el proyecto se mantendrá dentro de los límites presupuestarios originales y el dominio no será adquirido si su costo excede dicho presupuesto.**

#### 3.3. Integración con pasarela de pago Red Enlace (CONDICIONAL)

Debido a que en Bolivia la única pasarela de pago autorizada es **Red Enlace**, la integración de donaciones con tarjeta de crédito/débito queda **condicionada** a que LA ONG gestione y complete el papeleo de habilitación correspondiente ante dicha entidad.

Si LA ONG obtiene la habilitación y la comunica formalmente al EQUIPO DESARROLLADOR durante la vigencia del contrato, se evaluará la integración mediante adenda al contrato existente.

Si la comunicación ocurre después del vencimiento del contrato (post-garantía de 2 meses), se requerirá un **nuevo contrato** independiente para dicha integración.

Mientras tanto, las donaciones se gestionan mediante QR Simple y transferencia bancaria, ambos plenamente funcionales e incluidos en el alcance del presente contrato.

En caso de que LA ONG no obtenga la habilitación de la pasarela de pagos ante Red Enlace, se deja expresa constancia de que el proyecto se mantendrá dentro de los límites presupuestarios originales y el dominio no será adquirido si su costo excede dicho presupuesto.

---

### CLÁUSULA CUARTA: DURACIÓN, VIGENCIA Y CRONOGRAMA

La duración estimada del proyecto es de **8 semanas** (aproximadamente 2 meses) contadas a partir de la firma del presente contrato, prorrogables únicamente por causas justificadas y aprobadas por ambas partes por escrito.

**Vigencia del contrato.** El presente contrato estará vigente desde la fecha de su firma hasta la entrega formal del producto completo (Entregable E8 desplegado en producción, E9 documentación y E10 capacitación realizados), más un período de **2 (dos) meses de garantía** posteriores al despliegue en producción. Una vez vencido dicho período de garantía, el contrato se considerará totalmente cumplido y extinguido para todos los efectos legales.

**Nuevas implementaciones post-contrato.** Cualquier implementación, modificación, mejora, nueva funcionalidad, ampliación de alcance o cambio solicitado por LA ONG con posterioridad al vencimiento del período de garantía será considerado un **nuevo proyecto independiente** y requerirá la suscripción de un **nuevo contrato** de prestación de servicios, con sus propios términos, alcances, plazos y condiciones económicas. EL EQUIPO DESARROLLADOR no tendrá el compromiso de realizar trabajo alguno fuera de la vigencia del presente contrato sin la firma previa de un nuevo instrumento contractual.

Queda expresamente entendido por LAS PARTES que **el presente contrato no genera compromisos de mantenimiento continuo, soporte permanente ni actualización más allá del período de garantía estipulado**.

| Fase | Semana | Entregable |
|------|--------|------------|
| Planificación y diseño | 1–2 | E1: Plan de trabajo; E2: Wireframes y mockups; E3: Sitio base con galería de animales |
| Formularios y contenido | 3–4 | E4: Formularios (adopción, donación, voluntariado), contacto y páginas estáticas |
| Panel admin y funcionalidades | 5–6 | E5: Panel de administración personalizado; E6: Blog, eventos, FAQ y contenidos editables |
| QA, despliegue y capacitación | 7–8 | E7: Plataforma en staging con pruebas superadas; E8: Despliegue en producción; E9: Documentación; E10: Capacitación |
| Periodo de garantía | 9–16 | E11: Garantía de 2 meses (corrección de bugs y actualizaciones de seguridad, sin costo adicional) |

Cada sprint tiene una duración de 2 semanas, al final de los cuales se realizará una demo funcional para validación por parte de LA ONG. El cronograma detallado de planificación del proyecto se encuentra en el documento **"TDR_Plan_Proyecto_Cronograma_Peluchin.md"**, anexo al presente contrato.

---

### CLÁUSULA QUINTA: OBLIGACIONES DE LAS PARTES

#### 5.1. Obligaciones del EQUIPO DESARROLLADOR

1. Cumplir con los entregables, plazos y criterios de aceptación establecidos en el presente contrato y en los TDR anexos.
2. Mantener comunicación fluida y transparente con LA ONG mediante reuniones de seguimiento al final de cada sprint (cada 2 semanas), revisiones con retrospectiva, y grupo de WhatsApp para coordinación rápida. **En caso de requerirse reuniones adicionales,** LA ONG deberá notificar al EQUIPO DESARROLLADOR con un mínimo de **24 horas de antelación**, y dichas reuniones se llevarán a cabo únicamente **dentro del horario laboral** (lunes a viernes, 9:00 a 18:00, hora de Bolivia). **No se contestarán mensajes fuera del horario laboral establecido.**
3. Instalar, configurar y personalizar el CMS WordPress, el tema y los plugins necesarios para cumplir con los requerimientos del proyecto.
4. Alojar los archivos de configuración y personalizaciones en un repositorio privado de Git.
5. Entregar una demo funcional del incremento configurado al finalizar cada sprint.
6. Garantizar la confidencialidad de toda la información del albergue, datos de adoptantes, donantes, voluntarios y cualquier información sensible.
7. Transferir la totalidad de los archivos de configuración, tema personalizado, documentación y materiales producidos a LA ONG una vez completado el pago total del proyecto.
8. Brindar el soporte post-lanzamiento establecido en el presente contrato.

#### 5.2. Obligaciones de LA ONG

1. Proporcionar la información, materiales gráficos (logotipo, identidad visual, **fotos de los animales**), textos, **contactos de redes sociales (Facebook, Instagram, WhatsApp) para su vinculación en el sitio web**, y cualquier recurso necesario para el desarrollo en tiempo y forma. Asimismo, **LA ONG se compromete a subir y entregar los archivos con la información completa de los 20 animales para la pre-carga inicial de prueba** (nombre, edad, tamaño, sexo, especie, estado de salud, personalidad, historia y fotos), en el formato que EL EQUIPO DESARROLLADOR indique.
2. Designar un responsable de proyecto que actúe como interlocutor principal con EL EQUIPO DESARROLLADOR.
3. Revisar y aprobar o rechazar (con justificación escrita) cada entregable en un plazo máximo de 5 días hábiles desde su presentación.
4. **Proporcionar los servidores u hosting** compatibles con WordPress (PHP 8+, MySQL) donde se desplegará el sitio. EL EQUIPO DESARROLLADOR se encargará de la migración e instalación en dichos servidores. En caso de que LA ONG **no cuente con hosting propio**, EL EQUIPO DESARROLLADOR entregará **proformas con opciones de hosting WordPress** (hosting compartido, VPS u otras plataformas) con sus respectivos costos. LA ONG es la única responsable de contratar, pagar y renovar el hosting, dominio y certificado SSL.
5. Cumplir con los pagos en los plazos y montos establecidos en la Cláusula Sexta del presente contrato.

---

### CLÁUSULA SEXTA: PRECIO, IMPUESTOS Y FORMA DE PAGO

#### 6.1. Precio total del proyecto

| Concepto | Monto |
|----------|-------|
| Precio base del proyecto (sin impuestos) | Bs. 12,000 |
| IVA (Impuesto al Valor Agregado), alícuota vigente en Bolivia (13%) | Bs. 1,560 |
| **PRECIO TOTAL (IVA incluido)** | **Bs. 13,560** |

El precio total incluye exclusivamente los servicios de diseño, instalación, configuración y personalización del CMS WordPress (tema y plugins), documentación, capacitación y garantía de 2 meses descritos en el presente contrato. **El precio NO incluye servicios de hosting, servidores, dominio, certificados SSL ni licencias de plugins premium**, los cuales corren por cuenta de LA ONG. EL EQUIPO DESARROLLADOR realizará la configuración en entorno local y migrará el sitio WordPress a los servidores que LA ONG proporcione. En caso de que LA ONG no cuente con hosting propio, EL EQUIPO DESARROLLADOR entregará proformas con opciones de hosting para WordPress.

#### 6.2. Impuestos aplicables

| Impuesto | Alícuota | A cargo de |
|----------|----------|------------|
| IVA (Impuesto al Valor Agregado) | Conforme a la normativa tributaria boliviana vigente (Ley N.° 843 y sus modificaciones al año 2026) | LA ONG (retención o pago directo según corresponda) |
| IT (Impuesto a las Transacciones) | Conforme a ley | Aplicable según régimen fiscal de EL EQUIPO DESARROLLADOR |
| RC-IVA (Régimen Complementario al IVA) | Conforme a ley | Aplica sobre honorarios profesionales según corresponda |

EL EQUIPO DESARROLLADOR emitirá la **factura correspondiente** por cada cuota, con el desglose de los impuestos aplicables de acuerdo a la normativa tributaria boliviana vigente. LA ONG se compromete a realizar las retenciones impositivas que correspondan y a entregar los comprobantes de retención a EL EQUIPO DESARROLLADOR dentro de los plazos legales.

#### 6.3. Valor del servicio exento de IVA

En caso de que LA ONG, por su carácter de organización sin fines de lucro, califique para la exención del IVA conforme a la legislación boliviana, deberá presentar la documentación respaldatoria correspondiente antes de la firma del presente contrato. De no presentarse dicha documentación, se aplicará el IVA conforme a la alícuota vigente.

#### 6.4. Forma de pago — Tres cuotas

LAS PARTES acuerdan que el pago se realizará en **tres (3) cuotas** conforme al siguiente cronograma:

| Cuota | Plazo | Porcentaje | Monto con IVA (Bs.) |
|-------|-------|------------|----------------------|
| 1. Primera cuota | **1 mes** después de la firma del contrato | 40% | 5,424 |
| 2. Segunda cuota | **1 mes y medio** después de la primera cuota (2.5 meses desde la firma) | 35% | 4,746 |
| 3. Tercera cuota | **Al finalizar el contrato** (entrega del producto completo + inicio del período de garantía) | 25% | 3,390 |

| Cuota | Hitos cubiertos |
|-------|-----------------|
| **1.ª cuota (40%)** — al mes de firmado el contrato | E1 (Plan de trabajo), E2 (Wireframes y mockups), E3 (Sitio base + galería de animales), E4 (Formularios, donaciones, voluntarios y contacto) |
| **2.ª cuota (35%)** — a los 2.5 meses de firmado el contrato | E5 (Panel admin personalizado), E6 (Blog, eventos, FAQ), E7 (QA/Testing en staging) |
| **3.ª cuota (25%)** — al finalizar el contrato | E8 (Despliegue en producción con SSL), E9 (Documentación), E10 (Capacitación). El pago de esta cuota marca el inicio del período de garantía de 2 meses. |

#### 6.5. Plazo de pago y facturación

Cada cuota deberá ser cancelada por LA ONG en un plazo máximo de **15 (quince) días hábiles** desde la fecha de vencimiento indicada. EL EQUIPO DESARROLLADOR emitirá la factura correspondiente con al menos 5 días hábiles de anticipación al vencimiento de cada cuota.

---

### CLÁUSULA SÉPTIMA: PROPIEDAD INTELECTUAL

Todo el código fuente, documentación, diseños, materiales producidos y derechos de propiedad intelectual generados durante el desarrollo del proyecto serán de **propiedad exclusiva del Albergue "Peluchín"** una vez completado el pago total del proyecto. EL EQUIPO DESARROLLADOR se compromete a entregar el código fuente completo, sin dependencias de licencias restrictivas que impidan su uso, modificación o redistribución por parte de LA ONG.

EL EQUIPO DESARROLLADOR podrá hacer mención del proyecto en su portafolio profesional, previa autorización escrita de LA ONG, y únicamente con fines demostrativos no comerciales, sin revelar información confidencial, datos de usuarios, código fuente ni detalles técnicos sensibles. LA ONG conserva en todo momento el derecho de revocar dicha autorización.

---

### CLÁUSULA OCTAVA: CONFIDENCIALIDAD Y PROTECCIÓN DE DATOS

EL EQUIPO DESARROLLADOR se compromete a mantener estricta confidencialidad sobre toda la información del albergue, los datos personales de adoptantes, donantes, voluntarios y cualquier información sensible a la que tenga acceso durante la ejecución del proyecto. Este compromiso se mantendrá aun después de finalizado el contrato, por un período mínimo de **2 (dos) años** contados desde la fecha de finalización o resolución del mismo.

EL EQUIPO DESARROLLADOR se compromete a implementar medidas técnicas y organizativas adecuadas para garantizar la seguridad de los datos personales tratados, incluyendo encriptación de contraseñas, protección contra accesos no autorizados, y respaldo automático de la base de datos, en cumplimiento de la normativa boliviana aplicable en materia de protección de datos personales.

---

### CLÁUSULA NOVENA: GARANTÍA Y SOPORTE

#### 9.1. Garantía

EL EQUIPO DESARROLLADOR otorga una garantía de **2 (dos) meses** calendario posteriores a la puesta en producción del sitio web (fecha de despliegue del E8), durante los cuales se compromete a corregir, sin costo adicional para LA ONG, cualquier bug, error o fallo que sea atribuible al desarrollo realizado en el marco del presente contrato. Quedan excluidos de la garantía los problemas derivados de:

- Modificaciones realizadas por personal no autorizado por EL EQUIPO DESARROLLADOR.
- Fallos en la infraestructura de hosting, dominio o servicios de terceros contratados por LA ONG.
- Uso inadecuado o contrario a lo estipulado en el Manual de Usuario.
- Causas de fuerza mayor o caso fortuito.

#### 9.2. Fin de la relación contractual

Vencido el período de garantía de 2 meses, el presente contrato se extingue en su totalidad y EL EQUIPO DESARROLLADOR queda liberado de todo compromiso frente a LA ONG. Cualquier requerimiento posterior de soporte, mantenimiento, nuevas funcionalidades, modificaciones o cambios sobre el producto entregado será tratado como un **nuevo proyecto independiente** que requerirá la negociación y firma de un **nuevo contrato** con sus propias condiciones técnicas, plazos y económicas.

---

### CLÁUSULA DÉCIMA: REQUERIMIENTOS NO FUNCIONALES Y CRITERIOS DE CALIDAD

EL EQUIPO DESARROLLADOR se compromete a cumplir con los siguientes requerimientos no funcionales:

| Requerimiento | Descripción | Criterio de aceptación |
|---------------|-------------|------------------------|
| Rendimiento | Carga de página principal | < 3 segundos en conexión 4G |
| Disponibilidad | Uptime del sitio | ≥ 99% |
| Seguridad | HTTPS, passwords encriptados, protección OWASP Top 10 | Auditoría de seguridad sin vulnerabilidades críticas |
| Responsividad | Mobile-first, compatible con navegadores modernos | Pruebas en Chrome, Firefox, Safari, Edge y dispositivos móviles |
| Usabilidad | Interfaz intuitiva, formularios sencillos | Pruebas de usabilidad con usuario real |
| Accesibilidad | Contraste adecuado, textos legibles, alt en imágenes | Cumplimiento WCAG 2.1 nivel AA básico |
| Idioma | Contenido íntegro en español | Sin contenido en otros idiomas |

---

### CLÁUSULA DÉCIMA PRIMERA: MODIFICACIONES Y CONTROL DE CAMBIOS DENTRO DE LA VIGENCIA DEL CONTRATO

Cualquier modificación al alcance, funcionalidades, cronograma o condiciones del presente contrato deberá ser solicitada por escrito por cualquiera de LAS PARTES y aprobada por ambas mediante una **adenda al contrato** firmada por los representantes autorizados, siempre que dicha solicitud se presente **antes del vencimiento del período de garantía**. Las solicitudes de cambio que impliquen un aumento del alcance podrán estar sujetas a una revisión del precio y/o del cronograma, a ser negociada de buena fe entre LAS PARTES.

**Nuevas implementaciones post-vigencia.** Se reitera, en concordancia con la Cláusula Cuarta, que **toda implementación, funcionalidad, modificación, mejora o cambio solicitado por LA ONG una vez vencido el período de garantía de 2 meses constituye un nuevo proyecto que requerirá un nuevo contrato independiente**, no siendo exigible al EQUIPO DESARROLLADOR la ejecución de trabajo alguno sin la suscripción previa de dicho nuevo instrumento contractual.

---

### CLÁUSULA DÉCIMA SEGUNDA: RESOLUCIÓN DEL CONTRATO

#### 12.1. Resolución por mutuo acuerdo

LAS PARTES podrán resolver el presente contrato en cualquier momento por mutuo acuerdo, formalizado por escrito.

#### 12.2. Resolución unilateral por incumplimiento

Cualquiera de LAS PARTES podrá resolver el contrato en caso de incumplimiento grave de los compromisos de la otra parte, previa notificación escrita con 30 (treinta) días de anticipación, otorgando a la parte incumplidora un plazo de 15 (quince) días para subsanar el incumplimiento.

En caso de resolución por incumplimiento de EL EQUIPO DESARROLLADOR, LA ONG tendrá derecho a recibir todo el código fuente, documentación y materiales desarrollados hasta el momento de la resolución, previo pago de los hitos efectivamente completados y aprobados. En ningún caso LA ONG podrá suspender los pagos de los hitos ya devengados, conforme a lo establecido en la **Cláusula Primera** del presente contrato.

En caso de resolución por incumplimiento de LA ONG, EL EQUIPO DESARROLLADOR tendrá derecho al pago de los hitos completados y aprobados hasta la fecha de resolución, más una penalidad equivalente al 15% del saldo restante del contrato en concepto de lucro cesante, y no estará comprometido a entregar el código fuente hasta que dichos montos sean íntegramente cancelados.

---

### CLÁUSULA DÉCIMA TERCERA: FUERZA MAYOR Y CASO FORTUITO

Ninguna de LAS PARTES será responsable por el incumplimiento de sus compromisos cuando dicho incumplimiento sea consecuencia de fuerza mayor o caso fortuito, entendiéndose por tales los eventos imprevisibles e irresistibles conforme a la legislación boliviana. La parte afectada deberá notificar a la otra dentro de los 5 (cinco) días hábiles siguientes a la ocurrencia del evento. Si la situación de fuerza mayor se prolonga por más de 30 (treinta) días, cualquiera de LAS PARTES podrá resolver el contrato, procediéndose a la liquidación de los hitos completados y aprobados hasta la fecha del evento.

---

### CLÁUSULA DÉCIMA CUARTA: SOLUCIÓN DE CONTROVERSIAS

LAS PARTES se comprometen a resolver de buena fe cualquier controversia derivada de la interpretación o ejecución del presente contrato mediante negociación directa. De no llegar a un acuerdo en un plazo de 30 (treinta) días, LAS PARTES someterán la controversia a **conciliación** ante el Centro de Conciliación y Arbitraje de la Cámara de Comercio de La Paz. Si la conciliación no prospera, la controversia será resuelta mediante **arbitraje de derecho** ante la misma institución, conforme a su reglamento vigente, renunciando LAS PARTES a cualquier otro fuero o jurisdicción que pudiera corresponderles.

Sin perjuicio de lo anterior, las controversias relativas a la **suspensión indebida de pagos** serán de resolución inmediata, quedando EL EQUIPO DESARROLLADOR habilitado para recurrir a la vía judicial ordinaria para exigir el cumplimiento forzoso del compromiso de pago, en los términos de la Cláusula Primera.

---

### CLÁUSULA DÉCIMA QUINTA: RESPONSABILIDAD SOLIDARIA

Los miembros del EQUIPO DESARROLLADOR actúan de manera solidaria y mancomunada frente a LA ONG, por lo que cada uno de ellos responde individualmente por la totalidad de los compromisos asumidos en el presente contrato, sin perjuicio del derecho de repetición entre ellos en la proporción que internamente acuerden.

---

### CLÁUSULA DÉCIMA SEXTA: DISPOSICIONES FINALES

1. El presente contrato reemplaza cualquier acuerdo, entendimiento o negociación previa, verbal o escrita, entre LAS PARTES respecto al objeto del mismo.
2. La nulidad o ineficacia de una o más cláusulas no afectará la validez de las restantes.
3. Cualquier notificación entre LAS PARTES se realizará por escrito a los correos electrónicos y números de contacto designados en los TDR anexos.
4. El presente contrato se firma en dos ejemplares de igual tenor, uno para cada parte.

---

### FIRMAS

En señal de conformidad con todas y cada una de las cláusulas precedentes, LAS PARTES firman el presente contrato en la ciudad de La Paz, a los ____ días del mes de ______________ de 202__.

<br><br>

| Por LA ONG | Por EL EQUIPO DESARROLLADOR |
|------------|------------------------------|
| **Albergue "Peluchín"** | |
| | |
| ________________________ | **Mariana del Arroyo** |
| Nombre: ________________ | C.I.: ________________ |
| C.I.: ________________ | Firma: ________________ |
| Cargo: Representante Legal | |
| | |
| | **Nahomi Humerez** |
| | C.I.: ________________ |
| | Firma: ________________ |
| | |
| | **Santiago Acha** |
| | C.I.: ________________ |
| | Firma: ________________ |
| | |
| | **Jorge Saenz** |
| | C.I.: ________________ |
| | Firma: ________________ |

---

### ANEXO I: TÉRMINOS DE REFERENCIA (TDR)

El documento **"TDR_Peluchin.md"** en su versión vigente al momento de la firma del presente contrato forma parte integrante del mismo como Anexo I. En caso de discrepancia entre lo establecido en el presente contrato y los TDR, prevalecerá lo dispuesto en el contrato.

---

### ANEXO II: CRONOGRAMA DE PLANIFICACIÓN

El documento **"TDR_Plan_Proyecto_Cronograma_Peluchin.md"** en su versión vigente al momento de la firma del presente contrato forma parte integrante del mismo como Anexo II.

