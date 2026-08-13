# MANUAL DE USUARIO (PANEL DE ADMINISTRACIÓN)

## SITIO WEB Y SISTEMA DE GESTIÓN — ALBERGUE "PELUCHÍN"

---

**PROYECTO:** Desarrollo de sitio web y sistema de gestión para el albergue de perritos "Peluchín"

**ORGANIZACIÓN:** Albergue "Peluchín" — ONG sin fines de lucro (Llojeta, La Paz, Bolivia)

**EQUIPO DESARROLLADOR:** Mariana del Arroyo · Nahomi Humerez · Santiago Acha · Jorge Saenz

**VERSIÓN:** 1.0

**FECHA:** [dd/mm/aaaa]

**PÚBLICO:** Personal del albergue designado para administrar el sitio

---

## ÍNDICE

1. [Introducción](#1-introducción)
   - 1.1. [Objeto del manual](#11-objeto-del-manual)
   - 1.2. [¿Qué puede hacer usted desde el panel?](#12-qué-puede-hacer-usted-desde-el-panel)
2. [Acceso al panel de administración](#2-acceso-al-panel-de-administración)
   - 2.1. [Ingresar al sistema](#21-ingresar-al-sistema)
   - 2.2. [Recuperar la contraseña](#22-recuperar-la-contraseña)
   - 2.3. [Cerrar sesión](#23-cerrar-sesión)
3. [El Dashboard (panel principal)](#3-el-dashboard-panel-principal)
   - 3.1. [Tarjetas de indicadores (KPIs)](#31-tarjetas-de-indicadores-kpis)
   - 3.2. [Gráfico de donaciones](#32-gráfico-de-donaciones)
   - 3.3. [Últimas solicitudes y próximos eventos](#33-últimas-solicitudes-y-próximos-eventos)
4. [Gestión de animales](#4-gestión-de-animales)
   - 4.1. [Ver el listado de animales](#41-ver-el-listado-de-animales)
   - 4.2. [Registrar un animal nuevo](#42-registrar-un-animal-nuevo)
   - 4.3. [Editar un animal](#43-editar-un-animal)
   - 4.4. [Subir fotos](#44-subir-fotos)
   - 4.5. [Cambiar el estado de un animal](#45-cambiar-el-estado-de-un-animal)
   - 4.6. [Eliminar un animal](#46-eliminar-un-animal)
5. [Gestión de solicitudes de adopción](#5-gestión-de-solicitudes-de-adopción)
   - 5.1. [Ver las solicitudes](#51-ver-las-solicitudes)
   - 5.2. [Revisar el detalle de una solicitud](#52-revisar-el-detalle-de-una-solicitud)
   - 5.3. [Cambiar el estado de la solicitud](#53-cambiar-el-estado-de-la-solicitud)
   - 5.4. [Agregar notas internas](#54-agregar-notas-internas)
6. [Gestión de donaciones](#6-gestión-de-donaciones)
   - 6.1. [Registrar una donación manualmente](#61-registrar-una-donación-manualmente)
   - 6.2. [Ver el total del mes](#62-ver-el-total-del-mes)
   - 6.3. [Exportar el reporte de donaciones a Excel](#63-exportar-el-reporte-de-donaciones-a-excel)
7. [Gestión de voluntarios](#7-gestión-de-voluntarios)
   - 7.1. [Ver el listado de voluntarios](#71-ver-el-listado-de-voluntarios)
   - 7.2. [Filtrar por área de interés](#72-filtrar-por-área-de-interés)
   - 7.3. [Exportar el listado a Excel](#73-exportar-el-listado-a-excel)
8. [Gestión de blog y noticias](#8-gestión-de-blog-y-noticias)
   - 8.1. [Publicar un artículo](#81-publicar-un-artículo)
   - 8.2. [Guardar como borrador](#82-guardar-como-borrador)
   - 8.3. [Editar o eliminar un artículo](#83-editar-o-eliminar-un-artículo)
9. [Gestión de eventos](#9-gestión-de-eventos)
   - 9.1. [Crear un evento](#91-crear-un-evento)
   - 9.2. [Gestionar asistentes](#92-gestionar-asistentes)
10. [Edición de contenido estático](#10-edición-de-contenido-estático)
11. [Notificaciones automáticas por correo](#11-notificaciones-automáticas-por-correo)
12. [Buenas prácticas y recomendaciones](#12-buenas-prácticas-y-recomendaciones)
13. [Solución de problemas frecuentes](#13-solución-de-problemas-frecuentes)
14. [Glosario](#14-glosario)

---

## 1. INTRODUCCIÓN

### 1.1. Objeto del manual

Este manual explica, de forma sencilla y paso a paso, cómo usar el **panel de administración** del sitio web del albergue "Peluchín". Está pensado para el personal del albergue que gestionará el contenido, los animales, las solicitudes de adopción, las donaciones, los voluntarios, el blog y los eventos.

Para los detalles técnicos, consulte el **Manual de Sistemas** (Manual Técnico).

### 1.2. ¿Qué puede hacer usted desde el panel?

| Módulo | ¿Qué permite hacer? |
|--------|----------------------|
| Dashboard | Ver de un vistazo los indicadores del albergue |
| Animales | Registrar, editar y actualizar las fichas de perros y gatos |
| Solicitudes | Revisar y dar seguimiento a las postulaciones de adopción |
| Donaciones | Registrar donaciones y exportar reportes |
| Voluntarios | Consultar los voluntarios registrados |
| Blog | Publicar noticias e historias |
| Eventos | Crear eventos y gestionar asistentes |
| Configuración | Editar textos de secciones como "Quiénes Somos" y FAQ |

---

## 2. ACCESO AL PANEL DE ADMINISTRACIÓN

### 2.1. Ingresar al sistema

1. Abra su navegador (Chrome, Firefox, Edge o Safari).
2. Ingrese a la dirección del panel: **`https://[su-dominio]/admin`** (o `/wp-admin`).
3. Escriba su **usuario o correo** y su **contraseña**.
4. Pulse el botón **"Ingresar"**.

> Si las credenciales no son correctas, verá el mensaje "Credenciales inválidas. Intenta de nuevo".

### 2.2. Recuperar la contraseña

1. En la pantalla de ingreso, pulse **"Olvidé mi contraseña"**.
2. Escriba el correo de su cuenta y pulse **"Solicitar restablecimiento"**.
3. Revisará el correo recibido y seguirá el enlace para crear una nueva contraseña.

### 2.3. Cerrar sesión

- Pulse **"Cerrar sesión"** en el menú lateral (sidebar). Es recomendable cerrar sesión siempre que utilice un equipo compartido.

---

## 3. EL DASHBOARD (PANEL PRINCIPAL)

El Dashboard es la primera pantalla que verá al ingresar. Resume la actividad del albergue.

### 3.1. Tarjetas de indicadores (KPIs)

| Indicador | Qué muestra |
|-----------|-------------|
| Animales en adopción | Número de perros y gatos disponibles para adopción |
| Solicitudes pendientes | Postulaciones de adopción que aún no se han revisado |
| Donaciones del mes | Monto recaudado (en Bs.) durante el mes actual |
| Voluntarios activos | Número de voluntarios registrados |

Cada tarjeta incluye un indicador de variación (▲ / ▼) respecto al mes anterior.

### 3.2. Gráfico de donaciones

Muestra las donaciones de los **últimos 6 meses** en bolivianos, en un gráfico de barras o líneas.

### 3.3. Últimas solicitudes y próximos eventos

- La sección **"Últimas solicitudes"** lista las 5 postulaciones más recientes. Pulse **"Ver todas"** para ir a la gestión de solicitudes.
- La sección **"Próximos eventos"** muestra los eventos programados. Pulse **"Gestionar eventos"** para administrarlos.

---

## 4. GESTIÓN DE ANIMALES

### 4.1. Ver el listado de animales

1. En el menú lateral, pulse **"Animales"**.
2. Verá una tabla con: foto, nombre, especie (perro/gato), edad, tamaño, estado y fecha de ingreso.
3. Puede **buscar por nombre** o **filtrar por estado y especie**.

### 4.2. Registrar un animal nuevo

1. En la pantalla de Animales, pulse **"+ Nuevo animal"**.
2. Complete el formulario:

| Campo | Qué ingresar |
|-------|--------------|
| Nombre | Nombre del animal |
| Especie | Perro o gato |
| Edad | Rango (0–1 año, 1–3, 3–7, 7+) |
| Tamaño | Pequeño, mediano o grande |
| Sexo | Macho o hembra |
| Raza | Si se conoce (opcional) |
| Peso | En kilogramos |
| Estado | En adopción, adoptado o en tratamiento |
| Personalidad | Etiquetas (juguetón, tranquilo, cariñoso, etc.) |
| Historia | Texto del rescate y personalidad |
| Fecha de rescate | Fecha de ingreso al albergue |

3. Suba las **fotos** (ver §4.4).
4. Pulse **"Guardar"**.

### 4.3. Editar un animal

1. En el listado, pulse el ícono de **lápiz** (Editar) de la fila del animal.
2. Modifique los datos necesarios.
3. Pulse **"Guardar"**.

### 4.4. Subir fotos

1. Dentro del formulario del animal, use el área de carga **"Subir fotos"**.
2. Arrastre las imágenes o pulse para seleccionarlas desde su computadora. Puede cargar **varias fotos a la vez**.
3. Aparecerán miniaturas con un botón **"X"** para eliminar cada una.
4. Seleccione la **foto principal** (marca de estrella) que se mostrará en el catálogo.

> Use imágenes en formato JPG o PNG. Se recomienda optimizar las imágenes antes de subirlas para que el sitio cargue rápido.

### 4.5. Cambiar el estado de un animal

El estado controla lo que ve el público en el catálogo:

| Estado | Efecto en el sitio |
|--------|--------------------|
| **En adopción** | Muestra el botón **"Quiero Adoptar"** |
| **En tratamiento** | Muestra el mensaje "En recuperación" y el botón **"Avísame cuando esté disponible"** |
| **Adoptado** | Deshabilita la adopción y muestra la etiqueta "¡Adoptado!" |

Para cambiar el estado: **Editar** el animal → seleccionar el nuevo estado → **Guardar**.

> **Importante:** cuando un animal sea adoptado, recuerde actualizar también el estado de la solicitud correspondiente (ver §5).

### 4.6. Eliminar un animal

1. En el listado, pulse el ícono de **basurero** (Eliminar).
2. Confirme en la ventana emergente: *"¿Eliminar a [Nombre]? Esta acción no se puede deshacer."*
3. Pulse **"Eliminar"**.

> **Precaución:** eliminar una ficha es una acción definitiva. Si solo desea ocultarla temporalmente, cambie su estado a **Adoptado** o **En tratamiento**.

---

## 5. GESTIÓN DE SOLICITUDES DE ADOPCIÓN

### 5.1. Ver las solicitudes

1. En el menú lateral, pulse **"Solicitudes de Adopción"**.
2. Verá una tabla con: fecha, nombre del solicitante, animal de interés, estado y teléfono.
3. Puede **filtrar por estado** o **buscar** por nombre.

### 5.2. Revisar el detalle de una solicitud

1. Pulse el ícono de **ojo** (Ver) de la fila de la solicitud.
2. Se mostrarán todos los datos del formulario de pre-adopción, las **notas internas** y el **historial de cambios de estado**.

### 5.3. Cambiar el estado de la solicitud

El flujo de estados es: **Pendiente → En revisión → Aprobado / Rechazado**.

1. En el detalle de la solicitud, seleccione el nuevo estado en el menú desplegable.
2. Pulse **"Actualizar estado"**.
3. Pulse **"Enviar correo"** para notificar automáticamente al solicitante:
   - **Aprobado:** recibe las instrucciones de adopción.
   - **Rechazado:** recibe un mensaje amable.

> **Consejo:** al aprobar una solicitud, actualice el estado del animal a **Adoptado** (ver §4.5).

### 5.4. Agregar notas internas

1. En el detalle de la solicitud, escriba la nota en el campo correspondiente.
2. Pulse **"Agregar nota"**.
3. Las notas quedan registradas cronológicamente y son visibles solo para el personal del albergue.

---

## 6. GESTIÓN DE DONACIONES

### 6.1. Registrar una donación manualmente

Cuando reciba una donación en efectivo o por transferencia, regístrela para mantener la trazabilidad:

1. En el menú lateral, pulse **"Donaciones"**.
2. Pulse **"+ Registrar donación"**.
3. Complete el formulario:

| Campo | Qué ingresar |
|-------|--------------|
| Monto | Cantidad en Bs. |
| Fecha | Fecha de la donación |
| Donante | Nombre (opcional; si no se conoce, quedará como "Anónimo") |
| Medio de pago | Efectivo, transferencia o QR |
| Notas | Observaciones (opcional) |

4. Pulse **"Guardar"**.

### 6.2. Ver el total del mes

En la parte superior de la pantalla de Donaciones verá el resumen **"Total del mes: Bs. X.XXX"**, actualizado automáticamente.

### 6.3. Exportar el reporte de donaciones a Excel

1. En la pantalla de Donaciones, seleccione el mes/año del reporte.
2. Pulse **"Exportar Excel"**.
3. El archivo (formato `.xlsx`) se descargará a su computadora; puede abrirlo en Excel o Google Sheets.

---

## 7. GESTIÓN DE VOLUNTARIOS

### 7.1. Ver el listado de voluntarios

1. En el menú lateral, pulse **"Voluntarios"**.
2. Verá una tabla con: nombre, correo, teléfono, áreas de interés, disponibilidad y fecha de registro.
3. Pulse **"Ver detalle"** para abrir la ficha completa de un voluntario.

### 7.2. Filtrar por área de interés

- Use el filtro de área (paseo, limpieza, veterinaria, difusión, eventos, transporte, captación) para consultar voluntarios según su interés.

### 7.3. Exportar el listado a Excel

- Pulse **"Exportar Excel"** para descargar el listado completo en formato `.xlsx`.

---

## 8. GESTIÓN DE BLOG Y NOTICIAS

### 8.1. Publicar un artículo

1. En el menú lateral, pulse **"Blog"**.
2. Pulse **"+ Nuevo artículo"**.
3. Complete los campos:

| Campo | Qué ingresar |
|-------|--------------|
| Título | Título del artículo |
| Categoría | Seleccione la categoría (adopciones, eventos, consejos, campañas) |
| Imagen destacada | Suba una imagen de portada |
| Contenido | Escriba el texto; use la barra de herramientas para dar formato (negrita, listas, enlaces, imágenes) |

4. Pulse **"Publicar"** para que el artículo aparezca en el sitio público.

### 8.2. Guardar como borrador

- Si aún no desea publicar, pulse **"Guardar borrador"**. El artículo quedará guardado sin mostrarse en el sitio.

### 8.3. Editar o eliminar un artículo

- En la tabla de artículos, use los botones **"Editar"** (lápiz) o **"Eliminar"** (basurero) de la fila correspondiente.

---

## 9. GESTIÓN DE EVENTOS

### 9.1. Crear un evento

1. En el menú lateral, pulse **"Eventos"**.
2. Pulse **"+ Nuevo evento"**.
3. Complete el formulario:

| Campo | Qué ingresar |
|-------|--------------|
| Título | Nombre del evento |
| Descripción | Detalle del evento |
| Fecha y hora | Cuándo se realizará |
| Ubicación | Dónde se realizará |
| Imagen | Imagen principal del evento |
| Estado | Próximo o pasado |

4. Pulse **"Guardar"**.
5. Si desea agregar fotos de un evento pasado, use el **cargador de fotos múltiples** en el mismo formulario.

### 9.2. Gestionar asistentes

- Las confirmaciones de asistencia ("Quiero participar") que envían los visitantes desde la página de eventos quedan registradas en el detalle del evento para su consulta.

---

## 10. EDICIÓN DE CONTENIDO ESTÁTICO

Puede modificar los textos de secciones como "Quiénes Somos", "Misión y Visión", "Equipo", "FAQ" y el texto de la página de donaciones, **sin tocar código**:

1. En el menú lateral, pulse **"Configuración"**.
2. Seleccione la sección a editar (en pestañas o acordeón).
3. Modifique los textos con el editor.
4. Pulse **"Guardar cambios"**.
5. Para verificar cómo quedó, pulse **"Vista previa"** para abrir la página pública en otra pestaña.

---

## 11. NOTIFICACIONES AUTOMÁTICAS POR CORREO

El sistema envía correos automáticos en los siguientes casos:

| Flujo | Correo enviado |
|-------|----------------|
| Pre-adopción | Confirmación al solicitante con número de seguimiento |
| | Aviso de "nueva solicitud pendiente" al administrador |
| Donación reportada | Agradecimiento al donante |
| | Aviso de "nueva donación reportada" al administrador |
| Registro de voluntario | Confirmación al voluntario |
| | Aviso de "nuevo voluntario" al administrador |
| Solicitud aprobada | Instrucciones de adopción al solicitante |
| Solicitud rechazada | Mensaje amable al solicitante |

> Si no recibe los correos, verifique la configuración del SMTP (consulte el Manual de Sistemas §6.3) o el correo no deseado.

---

## 12. BUENAS PRÁCTICAS Y RECOMENDACIONES

1. **Seguridad de credenciales:** use contraseñas seguras, no las comparta y actívelas con autenticación de doble factor (2FA) si es posible.
2. **Actualice las fichas:** mantenga el estado de los animales y de las solicitudes al día; un sitio desactualizado genera desconfianza.
3. **Fotos optimizadas:** use imágenes de calidad pero optimizadas para que el sitio no pierda velocidad.
4. **Realice backups:** verifique periódicamente que los backups automáticos se estén generando (Manual de Sistemas §8.4).
5. **Registre todo:** registre las donaciones y eventos en el panel para mantener la trazabilidad.
6. **Respete el horario de soporte:** las solicitudes de soporte se atienden de lunes a viernes, 9:00 a 18:00 (hora de Bolivia).

---

## 13. SOLUCIÓN DE PROBLEMAS FRECUENTES

| Problema | Causa probable | Solución |
|----------|----------------|----------|
| No puedo ingresar al panel | Credenciales incorrectas | Verifique usuario/contraseña o use "Olvidé mi contraseña" |
| La página se ve lenta | Imágenes pesadas o caché | Optimice las imágenes o purgue la caché (Manual de Sistemas §11.4) |
| No llegan los correos | SMTP mal configurado | Consulte el Manual de Sistemas §6.3 |
| No veo un animal en el sitio | Estado del animal | Verifique que el estado sea "En adopción" |
| Pantalla en blanco | Conflicto de plugin o actualización | Contacte al soporte con el detalle del problema |
| Olvidé las credenciales | — | Use "Olvidé mi contraseña" o solicite apoyo al administrador |

---

## 14. GLOSARIO

| Término | Definición |
|---------|------------|
| Dashboard | Pantalla principal del panel con los indicadores del albergue |
| KPI | Indicador clave de gestión (Key Performance Indicator) |
| CRUD | Crear, leer, actualizar y eliminar registros |
| Ficha de animal | Página con los datos y fotos de un perro o gato |
| Solicitud de adopción | Postulación de una persona para adoptar un animal |
| Número de seguimiento | Código que recibe el solicitante al enviar su postulación |
| Borrador | Artículo o contenido guardado pero no publicado |
| SMTP | Protocolo usado para enviar los correos automáticos |
| Excel / .xlsx | Formato de hoja de cálculo usado para los reportes |
| 2FA | Autenticación de doble factor: segunda verificación al ingresar |

---

### CIERRE

Este manual se actualizará ante cambios de alcance aprobados por adenda. Ante cualquier duda, consulte primero este documento y, si persiste, contacte al equipo desarrollador dentro del horario de soporte pactado.
