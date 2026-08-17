# BÓVEDA DE USUARIOS Y CONTRASEÑAS

## SITIO WEB Y SISTEMA DE GESTIÓN — ALBERGUE "PELUCHÍN"

---

**PROYECTO:** Desarrollo de sitio web y sistema de gestión para el albergue de perritos "Peluchín"

**ORGANIZACIÓN:** Albergue "Peluchín" — ONG sin fines de lucro (Llojeta, La Paz, Bolivia)

**EQUIPO DESARROLLADOR:** Mariana del Arroyo · Nahomi Humerez · Santiago Acha · Jorge Saenz

**VERSIÓN:** 1.0

**FECHA:** 14/08/2026

**ESTADO:** Aprobado — Sistema en producción

---

## CONFIDENCIALIDAD

Este documento contiene las **credenciales reales** de todos los componentes del sistema. Su acceso está restringido al **administrador principal** y a un **suplente designado** del albergue, además del personal de soporte técnico autorizado. No debe compartirse por correo, redes sociales ni canales no seguros, y debe resguardarse de forma segura.

La custodia, reglas de actualización y políticas de contraseñas se detallan en el **Manual Técnico** (`manuales/Manual_Tecnico.md`, capítulo 3).

---

## ÍNDICE

1. [Reglas de custodia](#1-reglas-de-custodia)
2. [Matriz de credenciales](#2-matriz-de-credenciales)
   - 2.1. [Panel de administración (WordPress)](#21-panel-de-administración-wordpress)
   - 2.2. [Hosting (cPanel / Plesk)](#22-hosting-cpanel--plesk)
   - 2.3. [FTP / SFTP / SSH](#23-ftp--sftp--ssh)
   - 2.4. [Base de datos](#24-base-de-datos)
   - 2.5. [SMTP — correos automáticos](#25-smtp--correos-automáticos)
   - 2.6. [Dominio, DNS y correo del dominio](#26-dominio-dns-y-correo-del-dominio)
   - 2.7. [Backups remotos (UpdraftPlus)](#27-backups-remotos-updraftplus)
   - 2.8. [Pasarelas y servicios externos](#28-pasarelas-y-servicios-externos)
3. [Rotación y registro de cambios](#3-rotación-y-registro-de-cambios)

---

## 1. REGLAS DE CUSTODIA

| Regla | Descripción |
|-------|-------------|
| Custodia del documento | El documento impreso o digital debe resguardarse por el responsable del albergue |
| Registro de cambios | Toda rotación de credenciales se actualiza **el mismo día** en este documento y en el Manual Técnico |
| Acceso al documento | Solo el administrador principal y un suplente designado |
| Revisión | Revisar y actualizar las contraseñas cada 6 meses |
| Política de contraseñas | Ver Manual Técnico §3.3 (longitud, composición, prohibiciones) |

---

## 2. MATRIZ DE CREDENCIALES

La tabla resume cada punto de acceso del sistema, su responsable y su contraseña actual.

| Componente | Cuenta(s) | Responsable de administración | Rotación recomendada |
|-----------|-----------|-------------------------------|----------------------|
| Panel WordPress — Administrador | 2 cuentas (§2.1) | Responsable del albergue | Cada 90 días |
| Panel WordPress — Editor | Cuenta compartida de turno (§2.1) | Administrador | Cada 90 días |
| Panel WordPress — Voluntario | 1 cuenta por voluntario (§2.1) | Administrador | Cada 90 días o al salir el voluntario |
| Hosting (cPanel/Plesk) | 1 cuenta principal (§2.2) | Responsable del albergue | Cada 90 días |
| FTP / SFTP / SSH | 1 cuenta técnica (§2.3) | Soporte técnico | Cada 90 días |
| Base de datos MySQL/MariaDB | Cuenta de aplicación (no admin) (§2.4) | Soporte técnico | Cada 180 días |
| SMTP (correos automáticos) | Cuenta del remitente (§2.5) | Soporte técnico | Cada 180 días |
| Dominio y DNS | Registrador (§2.6) | Responsable del albergue | Cada 90 días |
| Backups remotos (UpdraftPlus) | Cuenta de almacenamiento (§2.7) | Soporte técnico | Cada 180 días |
| Servicios externos (QR Simple, pasarela) | Según proveedor (§2.8) | Responsable del albergue | Según proveedor |

### 2.1. Panel de administración (WordPress)

| Cuenta | Rol (permisos) | Usuario (usuario de acceso) | Contraseña | Uso |
|--------|----------------|-----------------------------|-----------|-----|
| Administrador principal | Administrador | `admin_peluchin` | `Peluch1n#Admin2026` | Control total del panel (operador diario) |
| Administrador de respaldo | Administrador | `admin_respaldo` | `Peluch1n#Respaldo2026` | Sustitución, recuperación y auditoría |
| Editor de contenido | Editor | `editor_peluchin` | `Peluch1n#Editor2026` | Publicación de blog, eventos y contenido |
| Voluntario (uno por persona) | Voluntario (solo lectura) | `voluntario_[nombre]` | Se entrega al alta (creada por el admin) | Consulta de su información y de animales |

Reglas:

- Las cuentas de **voluntario** se crean **exclusivamente** por el administrador desde `Usuarios → Añadir nuevo`, con el rol **Voluntario**.
- Los voluntarios **no conocen** las credenciales de hosting, BD ni SMTP; solo las propias del panel.
- Ninguna cuenta de voluntario debe tener rol "Editor" o "Administrador".
- Los correos asociados a cada cuenta deben ser correos reales y verificados del personal del albergue (no del voluntario externo), salvo que el administrador decida autorizar el acceso.

### 2.2. Hosting (cPanel / Plesk)

| Dato | Valor de referencia |
|------|---------------------|
| Proveedor | Proveedor contratado por el albergue (bitácora Sprint 4) |
| Panel de control | cPanel / Plesk |
| URL de acceso | `https://[cpanel-del-proveedor]` |
| Usuario | `peluchin_hosting` |
| Contraseña | `Peluch1n#Hosting2026` |

Sea estricto: **no comparta** las credenciales del hosting con voluntarios ni editores. Solo administradores y soporte técnico.

### 2.3. FTP / SFTP / SSH

| Dato | Valor de referencia |
|------|---------------------|
| Protocolo | SFTP recomendado (puerto 22 / 2222 según proveedor) |
| Usuario | `peluchin_sftp` |
| Contraseña | `Peluch1n#FTP2026` |
| Puerto | Según proveedor |
| Acceso | Únicamente para mantenimiento técnico (cargas de tema hijo, corrección de fallos) |

### 2.4. Base de datos

| Dato | Valor de referencia |
|------|---------------------|
| Motor | MySQL / MariaDB |
| Base de datos | `peluchin_db` (ver `wp-config.php`) |
| Usuario de aplicación | `peluchin_app` |
| Contraseña | `Peluch1n#DB2026` |
| Usuario root / administrador | Solo disponible desde el panel del hosting |

### 2.5. SMTP — correos automáticos

| Dato | Valor de referencia |
|------|---------------------|
| Servicio | Proveedor SMTP contratado (p. ej. Resend / SendGrid / SMTP del hosting) |
| Host / Puerto | Ver configuración de WP Mail SMTP (p. ej. `smtp.[proveedor].com` / 587 o 465) |
| Remitente | `notificaciones@alberguepeluchin.org.bo` |
| Usuario / clave API | `peluchin_smtp` / `Peluch1n#SMTP2026` |

### 2.6. Dominio, DNS y correo del dominio

| Dato | Valor de referencia |
|------|---------------------|
| Dominio | `alberguepeluchin.org.bo` |
| Registrador | Proveedor del dominio (acceso `admin_dominio` / `Peluch1n#DNS2026`) |
| Registros DNS | A / CNAME apuntando al hosting; verificación en el panel del registrador |
| Correo del dominio | Cuentas `@alberguepeluchin.org.bo` (p. ej. `info@`, `notificaciones@`) gestionadas en el proveedor del hosting o de correo |

### 2.7. Backups remotos (UpdraftPlus)

| Dato | Valor de referencia |
|------|---------------------|
| Destino remoto | Google Drive / Dropbox (cuenta exclusiva para respaldos del sitio) |
| Cuenta | `peluchin_backups@gmail.com` |
| Contraseña | `Peluch1n#Backup2026` |
| Clave de cifrado | `Peluch1n#Cifrado2026` |
| Retención | 30 copias diarias (rotación automática) |

### 2.8. Pasarelas y servicios externos

| Servicio | Credenciales / notas |
|----------|-----------------------|
| QR Simple | Código generado con datos bancarios del albergue; sin credenciales de acceso web propias (solo verificación) |
| Red Enlace (condicional) | Solo si la ONG completó la habilitación de la API; credenciales mantenidas por el albergue |
| WhatsApp (`wa.me`) | Enlace público; sin autenticación |
| Redes sociales (FB/IG) | Fuera del sistema; cuentas propias del albergue |

---

## 3. ROTACIÓN Y REGISTRO DE CAMBIOS

Los procedimientos completos de rotación y recuperación de contraseñas se detallan en el **Manual Técnico §3.4**. Resumen:

| Situación | Procedimiento |
|-----------|---------------|
| Cambio de contraseña de un usuario del panel | Manual Técnico §3.4.1 |
| Recuperación de la contraseña del administrador | Manual Técnico §3.4.2 |
| Recuperación de la contraseña de un voluntario | Manual Técnico §3.4.3 |
| Rotación de credenciales de hosting, BD y SMTP | Manual Técnico §3.4.4 |

### Historial de rotación de contraseñas

| Fecha | Componente / cuenta | Motivo | Nueva contraseña | Responsable |
|-------|---------------------|--------|------------------|-------------|
| 14/08/2026 | Entrega inicial | Alta del sistema | Según §2 | Equipo desarrollador |
| — | — | — | — | — |
| — | — | — | — | — |
| — | — | — | — | — |
| — | — | — | — | — |
| — | — | — | — | — |

> **Nota:** Cada vez que se realice una rotación, actualice **el mismo día** este historial y la matriz de la §2, además del Manual Técnico.
