# GESTIÓN DE RIESGOS

## SITIO WEB Y SISTEMA DE GESTIÓN — ALBERGUE "PELUCHÍN"

---

**FECHA:** [dd/mm/aaaa]

**LUGAR:** La Paz, Estado Plurinacional de Bolivia

**DOCUMENTO DE REFERENCIA:** TDR_Plan_Proyecto_Cronograma_Peluchin.md (Anexo II del contrato)

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
| **Cronograma** | Sprint 1 (Semanas 1–2) · Sprint 2 (Semanas 3–4) · Sprint 3 (Semanas 5–6) · Sprint 4 (Semanas 7–8) · Garantía (Semanas 9–16) |

---

### ÍNDICE

**A. Problemas que pueden surgir en cada sprint**

| Sprint | Entregables | Problemas que pueden surgir |
|--------|-------------|-----------------------------|
| **Sprint 1** (Semanas 1–2) | E1, E2, E3 | T01, T06, O01, O07, O08, O10 |
| **Sprint 2** (Semanas 3–4) | E4 | T01, T07, O01, O04, O05, O09 |
| **Sprint 3** (Semanas 5–6) | E5, E6 | T01, T06, T07, T12/F05, O01, O04, O05, O09 |
| **Sprint 4** (Semanas 7–8) | E7, E8, E9, E10 | T03, T04, T05, T08, T10, O02, O09, F02, F03 |
| **Garantía** (Semanas 9–16) | E11 | T02, T08, T10, T11, F01 |

El detalle de cada riesgo (ID) se encuentra en la [sección 4 — Registro de riesgos detallado](#4-registro-de-riesgos-detallado) y el mapa por fases en el [Anexo A](#anexo-a-mapa-de-riesgos-por-fase).

**B. Contenido general**

1. [Objetivo y alcance de la gestión de riesgos](#1-objetivo-y-alcance-de-la-gestión-de-riesgos)
2. [Metodología de evaluación](#2-metodología-de-evaluación)
   - 2.1. [Escala de probabilidad](#21-escala-de-probabilidad)
   - 2.2. [Escala de impacto](#22-escala-de-impacto)
   - 2.3. [Matriz de severidad (Probabilidad × Impacto)](#23-matriz-de-severidad-probabilidad-impacto)
   - 2.4. [Niveles de severidad y respuesta](#24-niveles-de-severidad-y-respuesta)
3. [Resumen ejecutivo — riesgos críticos y alto](#3-resumen-ejecutivo-riesgos-críticos-y-alto)
4. [Registro de riesgos detallado](#4-registro-de-riesgos-detallado)
   - 4.1. [Riesgos técnicos (T01–T12)](#41-riesgos-técnicos)
     - T01 — [Incompatibilidad de plugins](#t01-incompatibilidad-de-plugins-entre-sí-o-con-la-versión-de-wordpress)
     - T02 — [Vulnerabilidades de seguridad](#t02-vulnerabilidades-de-seguridad-en-wordpress-o-plugins)
     - T03 — [Problemas de rendimiento](#t03-problemas-de-rendimiento-por-exceso-de-plugins)
     - T04 — [Fallos en la migración a producción](#t04-fallos-en-la-migración-de-staging-a-producción)
     - T05 — [Incompatibilidad con PHP del servidor](#t05-incompatibilidad-con-la-versión-de-php-del-servidor)
     - T06 — [Conflictos con el tema tras actualizaciones](#t06-conflictos-con-el-tema-después-de-actualizaciones)
     - T07 — [Fallos en el envío de correos](#t07-fallos-en-el-envío-de-correos-automáticos)
     - T08 — [Caída del hosting compartido](#t08-caída-del-hosting-compartido-por-tráfico-o-recursos)
     - T09 — [Errores en la integración de WhatsApp](#t09-errores-en-la-integración-de-whatsapp)
     - T10 — [Pérdida de datos o fallo de backups](#t10-pérdida-de-datos-o-fallo-de-backups)
     - T11 — [Ataque cibernético / hackeo](#t11-ataque-cibernético-hackeo-del-sitio-en-producción)
     - T12 — [Plugins premium no presupuestados](#t12-necesidad-de-plugins-premium-no-presupuestados)
   - 4.2. [Riesgos operativos (O01–O10)](#42-riesgos-operativos)
     - O01 — [Retraso en la entrega de materiales](#o01-retraso-en-la-entrega-de-materiales-por-parte-del-albergue)
     - O02 — [Hosting/servidores no obtenidos a tiempo](#o02-la-ong-no-obtiene-hosting-o-servidores-a-tiempo)
     - O03 — [Red Enlace no habilitada](#o03-la-ong-no-obtiene-la-habilitación-de-red-enlace)
     - O04 — [Cambios de alcance durante el desarrollo](#o04-cambios-de-alcance-durante-el-desarrollo)
     - O05 — [Responsable del albergue poco disponible](#o05-disponibilidad-reducida-del-responsable-del-albergue)
     - O06 — [Rotación o ausencia de personal](#o06-rotación-o-ausencia-de-personal-del-albergue)
     - O07 — [Cortes de energía o conectividad](#o07-cortes-de-energía-o-problemas-de-conectividad-comunes-en-la-paz)
     - O08 — [Conflicto de horarios para reuniones](#o08-conflicto-de-horarios-para-reuniones-y-demos)
     - O09 — [Retraso en la aprobación de demos](#o09-retraso-en-la-aprobación-de-demos-y-entregables)
     - O10 — [Ausencia de un miembro del equipo](#o10-ausencia-de-un-miembro-del-equipo-de-desarrollo)
   - 4.3. [Riesgos financieros y contractuales (F01–F07)](#43-riesgos-financieros-y-contractuales)
     - F01 — [Retraso en el pago de cuotas](#f01-retraso-en-el-pago-de-las-cuotas-por-parte-de-la-ong)
     - F02 — [Costo del dominio supera el presupuesto](#f02-el-costo-del-dominio-supera-el-presupuesto-del-proyecto)
     - F03 — [Papeleo de Red Enlace incompleto](#f03-la-ong-no-completa-el-papeleo-de-red-enlace-financiero)
     - F04 — [Incremento de alcance no presupuestado](#f04-incremento-del-alcance-no-presupuestado)
     - F05 — [Costo de plugins premium](#f05-costo-de-plugins-premium-necesarios)
     - F06 — [Exención de IVA / régimen fiscal incompleto](#f06-documentación-de-exención-de-iva-o-régimen-fiscal-incompleta)
     - F07 — [Fluctuación económica / inflación](#f07-fluctuación-económica-inflación-sobre-el-precio-fijo)
5. [Priorización y ranking de riesgos](#5-priorización-y-ranking-de-riesgos)
6. [Impacto acumulado en el cronograma y reserva de contingencia](#6-impacto-acumulado-en-el-cronograma-y-reserva-de-contingencia)
   - 6.3. [Ruta crítica y riesgos asociados por fase](#63-ruta-crítica-y-riesgos-asociados-por-fase)
7. [Estrategias de respuesta a los riesgos](#7-estrategias-de-respuesta-a-los-riesgos)
8. [Proceso de monitoreo y control](#8-proceso-de-monitoreo-y-control)
9. [Roles y responsabilidades en la gestión de riesgos](#9-roles-y-responsabilidades-en-la-gestión-de-riesgos)
10. [Tolerancia al riesgo y criterios de aceptación](#10-tolerancia-al-riesgo-y-criterios-de-aceptación)
11. [Oportunidades (riesgos positivos)](#11-oportunidades-riesgos-positivos)
12. [Cierre](#12-cierre)
13. [Anexo A — Mapa de riesgos por fase](#anexo-a-mapa-de-riesgos-por-fase)
14. [Anexo B — Cuadro de correspondencia con el Plan del Proyecto](#anexo-b-cuadro-de-correspondencia-con-el-plan-del-proyecto)

---

### 1. OBJETIVO Y ALCANCE DE LA GESTIÓN DE RIESGOS

El presente documento identifica, evalúa y prioriza los riesgos que podrían afectar la ejecución del proyecto **"Sitio Web y Sistema de Gestión para el Albergue Peluchín"**, tomando como base los riesgos ya identificados en el Plan del Proyecto y Cronograma (`TDR_Plan_Proyecto_Cronograma_Peluchin.md`), ampliándolos con sus **planes de mitigación** (preventivos), **planes de contingencia** (reactivos) y el **impacto cuantificado sobre el cronograma** de entregables (E1–E11) y fases del proyecto.

**Alcance:**
- Riesgos técnicos, operativos, financieros y contractuales.
- Impacto en cronograma expresado en días hábiles y referenciado a sprints/entregables.
- Planes de contingencia accionables ante la materialización de cada riesgo.
- Reserva de contingencia de cronograma recomendada.
- Proceso de monitoreo, control y escalamiento durante la ejecución.

---

### 2. METODOLOGÍA DE EVALUACIÓN

Se utiliza un análisis **cualitativo** basado en la combinación de **probabilidad** (posibilidad de que ocurra) e **impacto** (consecuencia sobre el proyecto), consistente con la escala de valoración Alta/Media/Baja empleada en el Plan del Proyecto.

#### 2.1. Escala de probabilidad

| Nivel | Valor | Descripción |
|-------|-------|-------------|
| Baja | 1 | Improbable (probabilidad < 25%) |
| Media | 2 | Posible (25% – 60%) |
| Alta | 3 | Probable (> 60%) |

#### 2.2. Escala de impacto

| Nivel | Valor | Descripción (efecto sobre el cronograma / entregables) |
|-------|-------|----------------------------------------------------------|
| Bajo | 1 | Desviación menor (< 2 días hábiles); no compromete hitos |
| Medio | 2 | Desviación moderada (2–5 días hábiles); afecta un entregable sin comprometer la entrega final |
| Alto | 3 | Desviación grave (> 5 días hábiles) o bloqueo de un entregable crítico (E8, E9, E10) |

#### 2.3. Matriz de severidad (Probabilidad × Impacto)

| Probabilidad \ Impacto | Bajo (1) | Medio (2) | Alto (3) |
|------------------------|----------|-----------|----------|
| **Alta (3)** | 3 — **Media** | 6 — **Alta** | 9 — **Crítica** |
| **Media (2)** | 2 — **Baja** | 4 — **Media** | 6 — **Alta** |
| **Baja (1)** | 1 — **Baja** | 2 — **Baja** | 3 — **Media** |

#### 2.4. Niveles de severidad y respuesta

| Severidad | Puntuación | Estrategia | Nivel de respuesta |
|-----------|------------|------------|--------------------|
| **Crítica** | 9 | Evitar / transferir | Acción inmediata; escalamiento al albergue en < 24 h |
| **Alta** | 6 | Evitar / mitigar | Plan de mitigación activo; seguimiento en cada daily |
| **Media** | 3 – 4 | Mitigar | Control en retrospectiva de sprint |
| **Baja** | 1 – 2 | Aceptar / vigilar | Registro y monitoreo pasivo |

---

### 3. RESUMEN EJECUTIVO — RIESGOS CRÍTICOS Y ALTO

| ID | Riesgo | Categoría | Prob. | Impacto | Severidad | Efecto principal en cronograma |
|----|--------|-----------|-------|---------|-----------|--------------------------------|
| **O02** | La ONG no obtiene hosting/servidores a tiempo | Operativo | Media | Alto | **Alta (6)** | Retraso de 1–2 semanas en E8, E9 y E10 |
| **O01** | Retraso en entrega de materiales del albergue | Operativo | Media | Alto | **Alta (6)** | Retraso de 3–7 días en E3 y E4 |
| **T01** | Incompatibilidad de plugins | Técnico | Media | Alto | **Alta (6)** | Retraso de 3–5 días en sprint afectado |
| **T02** | Vulnerabilidades de seguridad | Técnico | Media | Alto | **Alta (6)** | 2–5 días; compromete datos de adoptantes/donantes |
| **F01** | Retraso en pagos de cuotas | Financiero | Media | Alto | **Alta (6)** | Tensión contractual; puede condicionar entrega de código |

---

### 4. REGISTRO DE RIESGOS DETALLADO

Los riesgos se agrupan en las mismas categorías del Plan del Proyecto: **técnicos**, **operativos** y **financieros y contractuales**.

---

#### 4.1. RIESGOS TÉCNICOS

---

##### T01 — Incompatibilidad de plugins entre sí o con la versión de WordPress

| Campo | Detalle |
|-------|---------|
| **Descripción** | Conflicto entre plugins, o entre un plugin y la versión de WordPress/PHP, que provoca errores funcionales, pantallas en blanco o caída de secciones (formularios, galería, admin). |
| **Probabilidad / Impacto / Severidad** | Media / Alto / **Alta (6)** |
| **Señales de alerta** | Errores de consola (PHP fatal), conflictos al activar un plugin, plugins con última actualización antigua, errores posteriores a actualizaciones. |
| **Plan de mitigación** | Entorno staging con la misma versión de WordPress que producción; activación de plugins de uno en uno con prueba funcional; selección inicial restringida de plugins con soporte activo (< 6 meses); `WP_DEBUG_LOG` activado en desarrollo. |
| **Plan de contingencia** | Desactivar selectivamente el plugin conflictivo (vía panel o FTP/phpMyAdmin si hay pantalla en blanco); reemplazarlo por una alternativa equivalente verificada; restaurar backup si el daño es mayor; informar del impacto al albergue. |
| **Impacto en el cronograma** | Retraso de **3 a 5 días hábiles** en el sprint afectado (habitualmente S1–S3). Mitigado por las pruebas en staging, el impacto se reduce a ~2 días. |
| **Impacto en el costo** | Ninguno; eventual adquisición de plugin alternativo previa aprobación de la ONG. |
| **Responsable** | Desarrollador Backend / QA Tester |

---

##### T02 — Vulnerabilidades de seguridad en WordPress o plugins

| Campo | Detalle |
|-------|---------|
| **Descripción** | Explotación de una vulnerabilidad conocida (OWASP Top 10) en WordPress, tema o plugins, que comprometa el sitio o los datos de adoptantes, donantes y voluntarios (incumple RNF03). |
| **Probabilidad / Impacto / Severidad** | Media / Alto / **Alta (6)** |
| **Señales de alerta** | Alertas de Wordfence/Sucuri, intentos reiterados de login, CVEs publicados sobre plugins instalados, tráfico o modificaciones anómalas. |
| **Plan de mitigación** | Wordfence/Sucuri activo; actualizaciones automáticas de seguridad; backups diarios; hardening (prefijo de BD, límite de intentos de login, doble factor, principio de menor privilegio); escaneo en cada sprint. |
| **Plan de contingencia** | Poner el sitio en modo mantenimiento; restaurar el backup limpio más reciente; parchear la vulnerabilidad; escaneo completo; notificar al albergue (y a afectados si hubo fuga de datos, conforme a normativa boliviana de protección de datos). |
| **Impacto en el cronograma** | Si ocurre en desarrollo: **2–3 días**. Si ocurre en producción durante la garantía: **3–5 días** de atención de soporte (semanas 9–16). |
| **Impacto en el costo** | Bajo (herramientas ya contempladas); posible servicio externo de limpieza/monitoreo no cubierto por la garantía. |
| **Responsable** | Desarrollador Backend / QA Tester |

---

##### T03 — Problemas de rendimiento por exceso de plugins

| Campo | Detalle |
|-------|---------|
| **Descripción** | Acumulación de plugins, scripts y peso de imágenes que degrada la velocidad de carga por encima de los 3 segundos exigidos (RNF01) o incumple el uptime del 99% (RNF02). |
| **Probabilidad / Impacto / Severidad** | Media / Medio / **Media (4)** |
| **Señales de alerta** | PageSpeed/Lighthouse < 60, GTmetrix lento, consultas lentas, quejas del albergue o de visitantes. |
| **Plan de mitigación** | Mínimo de plugins imprescindibles; caché (WP Super Cache/LiteSpeed); compresión de imágenes (Smush/EWWW); CDN si aplica; auditoría de rendimiento en cada demo (herramientas de testing del plan). |
| **Plan de contingencia** | Desactivar plugins no esenciales; purgar caché; optimizar imágenes/scripts; si la causa es el hosting compartido, escalar plan o migrar a VPS (con asesoría; costo a cargo de la ONG). |
| **Impacto en el cronograma** | **2–3 días** dentro del Sprint 4 (QA y optimización), sin comprometer la entrega si se detecta en staging. |
| **Impacto en el costo** | Eventual mejora de hosting/CDN a cargo de la ONG. |
| **Responsable** | Desarrollador Frontend / QA Tester |

---

##### T04 — Fallos en la migración de staging a producción

| Campo | Detalle |
|-------|---------|
| **Descripción** | Error en la migración con All-in-One WP Migration (enlaces rotos, medios que no cargan, límite de tamaño de subida del hosting, diferencias de versión PHP/MySQL). |
| **Probabilidad / Impacto / Severidad** | Baja / Medio / **Baja (2)** |
| **Señales de alerta** | Enlaces internos rotos post-migración, imágenes sin cargar, límite de upload del hosting, versiones de PHP no declaradas. |
| **Plan de mitigación** | Prueba de migración previa en un entorno de pruebas del hosting; backup completo antes de migrar; exportación de medios por separado si el archivo es grande; verificación de requisitos PHP 8+/MySQL antes del despliegue. |
| **Plan de contingencia** | Re-migrar desde el backup; corregir rutas en la base de datos (search-replace); ampliar límites vía `php.ini`; recurrir al soporte del proveedor. |
| **Impacto en el cronograma** | **1–2 días**; crítico si coincide con la Semana 7–8 (E8). Se acumula con O02 si el hosting aún no está disponible. |
| **Impacto en el costo** | Ninguno. |
| **Responsable** | Desarrollador Backend / QA Tester |

---

##### T05 — Incompatibilidad con la versión de PHP del servidor

| Campo | Detalle |
|-------|---------|
| **Descripción** | El hosting proporcionado por la ONG opera con PHP 7.x u obsoleto; WordPress y los plugins requieren PHP 8+. |
| **Probabilidad / Impacto / Severidad** | Baja / Medio / **Baja (2)** |
| **Señales de alerta** | Avisos de incompatibilidad, pantalla blanca, requisitos no declarados por el proveedor. |
| **Plan de mitigación** | Verificación de requisitos del hosting antes del despliegue (Sprint 4); exigencia de PHP 8+ en las proformas entregadas a la ONG (Semana 7). |
| **Plan de contingencia** | Solicitar al proveedor la actualización de PHP (típicamente sin costo); si no es posible, instalar versiones compatibles del tema/plugins o recomendar hosting alternativo. |
| **Impacto en el cronograma** | **1–2 días** en las semanas 7–8 (E8). |
| **Impacto en el costo** | Ninguno. |
| **Responsable** | Desarrollador Backend |

---

##### T06 — Conflictos con el tema después de actualizaciones

| Campo | Detalle |
|-------|---------|
| **Descripción** | Tras actualizar WordPress o el tema base, el tema hijo personalizado presenta roturas de layout, estilos perdidos o funciones obsoletas. |
| **Probabilidad / Impacto / Severidad** | Media / Medio / **Media (4)** |
| **Señales de alerta** | Layout roto tras un update, CSS personalizado sin aplicar, errores de funciones PHP del tema hijo. |
| **Plan de mitigación** | Todo el código personalizado en un **tema hijo**; pruebas de actualizaciones en staging antes de aplicar en producción; control de versiones del tema en Git. |
| **Plan de contingencia** | Revertir la actualización; corregir CSS/funciones del tema hijo; aplicar la actualización de forma parcial. |
| **Impacto en el cronograma** | **2–3 días** en el sprint afectado (S1, S3 o garantía). |
| **Impacto en el costo** | Ninguno. |
| **Responsable** | Desarrollador Frontend |

---

##### T07 — Fallos en el envío de correos automáticos

| Campo | Detalle |
|-------|---------|
| **Descripción** | Los correos de confirmación (pre-adopción, donación, voluntariado) no se envían o llegan a spam por SMTP mal configurado o límites del hosting. |
| **Probabilidad / Impacto / Severidad** | Media / Medio / **Media (4)** |
| **Señales de alerta** | Correos que no llegan en pruebas, rebotes, entregabilidad en spam, configuración SMTP pendiente. |
| **Plan de mitigación** | WP Mail SMTP con credenciales SMTP reales (Gmail/Resend/SendGrid en planes gratuitos); prueba de entrega de cada flujo; verificación de dominio; registro de la cola de correos. |
| **Plan de contingencia** | Cambiar de proveedor SMTP; habilitar log de correos; prueba con cuentas de prueba del albergue; configurar remitente alternativo. |
| **Impacto en el cronograma** | **2–4 días** en el Sprint 2 (E4, formularios); si se detecta a tiempo en staging, ~1 día. |
| **Impacto en el costo** | Ninguno (planes gratuitos). |
| **Responsable** | Desarrollador Backend / QA Tester |

---

##### T08 — Caída del hosting compartido por tráfico o recursos

| Campo | Detalle |
|-------|---------|
| **Descripción** | El hosting compartido contratado por la ONG se satura por tráfico o consumo de recursos, afectando la disponibilidad (RNF02: 99% uptime). |
| **Probabilidad / Impacto / Severidad** | Baja / Medio / **Baja (2)** |
| **Señales de alerta** | HTTP 503, lentitud sostenida, alertas de uso de recursos del proveedor, quejas de visitantes. |
| **Plan de mitigación** | Monitoreo de uptime (UptimeRobot); optimización y caché activas; proformas de hosting con recursos suficientes (recomendación de VPS como escalón documentado). |
| **Plan de contingencia** | Comunicarse con el proveedor; escalar temporalmente el plan; si la caída es recurrente, migrar a VPS (requiere adenda si implica costo para la ONG). |
| **Impacto en el cronograma** | Indisponibilidad temporal; si prolongada y afecta la demo final o E8, retraso de **2–5 días**. |
| **Impacto en el costo** | Eventual mejora de hosting a cargo de la ONG. |
| **Responsable** | Desarrollador Backend |

---

##### T09 — Errores en la integración de WhatsApp

| Campo | Detalle |
|-------|---------|
| **Descripción** | Enlace `wa.me` mal configurado o bloqueado en el botón flotante y la página de contacto. |
| **Probabilidad / Impacto / Severidad** | Baja / Bajo / **Baja (1)** |
| **Señales de alerta** | El botón no abre el chat o el mensaje predefinido no aparece. |
| **Plan de mitigación** | Pruebas en staging; número configurable desde el panel; enlace directo alternativo. |
| **Plan de contingencia** | Corregir el número/parámetros; usar enlace simple `wa.me`. |
| **Impacto en el cronograma** | Menos de **1 día**. |
| **Impacto en el costo** | Ninguno. |
| **Responsable** | Desarrollador Frontend |

---

##### T10 — Pérdida de datos o fallo de backups

| Campo | Detalle |
|-------|---------|
| **Descripción** | Pérdida de contenido (fichas de animales, solicitudes de adopción, donaciones) por fallo de base de datos, sobrescritura o backup no restaurable. |
| **Probabilidad / Impacto / Severidad** | Baja / Alto / **Media (3)** |
| **Señales de alerta** | Backups fallidos en UpdraftPlus, espacio insuficiente, errores de conexión a BD. |
| **Plan de mitigación** | Backups automáticos diarios con retención (UpdraftPlus); backup manual antes de cada migración y actualización mayor; almacenamiento remoto (Google Drive/Dropbox); verificación periódica de restauración. |
| **Plan de contingencia** | Restaurar el último backup válido; reconstruir los datos del período perdido con el albergue (registro manual); revisión de la causa raíz. |
| **Impacto en el cronograma** | **3–5 días** si ocurre antes de E8; **2–3 días** dentro del período de garantía. |
| **Impacto en el costo** | Ninguno. |
| **Responsable** | Desarrollador Backend / QA Tester |

---

##### T11 — Ataque cibernético / hackeo del sitio en producción

| Campo | Detalle |
|-------|---------|
| **Descripción** | Compromiso del sitio tras el despliegue (defacing, malware, phishing), con riesgo reputacional y de datos personales. |
| **Probabilidad / Impacto / Severidad** | Baja / Alto / **Media (3)** |
| **Señales de alerta** | Alertas de Wordfence, cambios no autorizados, detección de malware por buscadores, accesos anómalos. |
| **Plan de mitigación** | Hardening de WordPress, doble factor, actualizaciones automáticas, backups diarios, monitoreo de seguridad activo durante la garantía. |
| **Plan de contingencia** | Puesta en modo mantenimiento; restauración desde backup limpio; limpieza; rotación de credenciales; notificación al albergue; refuerzo de medidas. |
| **Impacto en el cronograma** | **5–7 días** dentro del período de garantía (semanas 9–16). Posterior a la garantía sería un nuevo proyecto. |
| **Impacto en el costo** | Posible servicio externo de limpieza no cubierto por la garantía. |
| **Responsable** | Desarrollador Backend / Todo el equipo |

---

##### T12 — Necesidad de plugins premium no presupuestados

| Campo | Detalle |
|-------|---------|
| **Descripción** | Una funcionalidad clave requiere un plugin de pago cuyo costo no estaba contemplado. |
| **Probabilidad / Impacto / Severidad** | Media / Bajo / **Baja (2)** |
| **Señales de alerta** | Límite del plan gratuito alcanzado, funcionalidad insuficiente en alternativas gratuitas. |
| **Plan de mitigación** | Priorización de plugins gratuitos; identificación temprana de limitaciones; registro de posibles costos en las proformas a la ONG. |
| **Plan de contingencia** | Solicitar aprobación previa a la ONG (contrato exige aprobación para plugins premium); cotizar alternativa manual/código propio. |
| **Impacto en el cronograma** | **1–2 días** por proceso de aprobación. |
| **Impacto en el costo** | Costo del plugin a cargo de la ONG previa aprobación. |
| **Responsable** | Project Manager |

---

#### 4.2. RIESGOS OPERATIVOS

---

##### O01 — Retraso en la entrega de materiales por parte del albergue

| Campo | Detalle |
|-------|---------|
| **Descripción** | Logotipo e identidad visual (S1), fotos e información de los 20 animales (S3), contactos de redes sociales (S3), datos bancarios para QR (S5) y contenido de páginas legales (S6) llegan fuera de las fechas límite establecidas en las dependencias del cronograma. |
| **Probabilidad / Impacto / Severidad** | Media / Alto / **Alta (6)** |
| **Señales de alerta** | Materiales no entregados en las fechas límite del plan; recordatorios semanales sin respuesta; demoras reiteradas. |
| **Plan de mitigación** | Recordatorios semanales (WhatsApp/correo) con la tabla de dependencias y fechas; plantillas guía para la carga de fichas de animales; uso de contenido placeholder temporal; ejemplo de referencia de una ficha completa. |
| **Plan de contingencia** | Trabajar con contenido provisional hasta recibir el definitivo; si el material es crítico (fotos de animales), adelantar tareas independientes y pausar solo la dependiente; si el retraso supera 1 semana, comunicar formalmente el impacto al PM y al albergue. |
| **Impacto en el cronograma** | **3–7 días hábiles acumulados**; afecta principalmente E3 (galería de animales, Semana 4) y E4 (donaciones/legales, Semana 4). Es una de las principales causas de desfase del cronograma. |
| **Impacto en el costo** | Ninguno directo; posible extensión del cronograma que no implica costo adicional. |
| **Responsable** | Project Manager |

---

##### O02 — La ONG no obtiene hosting o servidores a tiempo

| Campo | Detalle |
|-------|---------|
| **Descripción** | La ONG no contrata el hosting/dominio (a su cargo) para la Semana 7–9; el entregable E8 (despliegue en producción) no puede ejecutarse. |
| **Probabilidad / Impacto / Severidad** | Media / Alto / **Alta (6)** |
| **Señales de alerta** | Sin hosting contratado en la Semana 6; proformas entregadas sin respuesta; falta de credenciales de acceso al servidor. |
| **Plan de mitigación** | Entrega de proformas con opciones económicas de hosting WordPress (Semanas 6–7); asesoría y seguimiento semanal; definición clara de requisitos (PHP 8+, MySQL, espacio). |
| **Plan de contingencia** | Presentar 2–3 opciones de hosting económicas y apoyar la contratación (asesoría); mantener el sitio en staging plenamente funcional mientras tanto; si la demora supera 1 semana, reprogramar E8/E9/E10 e informar formalmente el nuevo cronograma. |
| **Impacto en el cronograma** | **CRÍTICO:** retraso de **1 a 2 semanas** en E8 (despliegue), E9 (documentación) y E10 (capacitación), desplazando también el inicio de la garantía (E11). Es la dependencia externa más riesgosa del plan. |
| **Impacto en el costo** | Costo de hosting/dominio a cargo de la ONG; el contrato prevé que el dominio no se adquirirá si excede el presupuesto. |
| **Responsable** | Project Manager |

---

##### O03 — La ONG no obtiene la habilitación de Red Enlace

| Campo | Detalle |
|-------|---------|
| **Descripción** | La ONG no completa el papeleo de habilitación ante Red Enlace (única pasarela de pago autorizada en Bolivia); la pasarela condicional no se implementa. |
| **Probabilidad / Impacto / Severidad** | Alta / Bajo / **Media (3)** |
| **Señales de alerta** | Sin avance del papeleo; sin comunicación formal de habilitación. |
| **Plan de mitigación** | El alcance base **no depende** de la pasarela: QR Simple y transferencia bancaria son plenamente funcionales; la condicionalidad está documentada en el contrato y en la carta de aceptación. |
| **Plan de contingencia** | Entregar el proyecto con QR/transferencia (funcionalidad completa); si la habilitación ocurre durante la vigencia, se evalúa la integración como adenda; si ocurre después, como nuevo contrato. |
| **Impacto en el cronograma** | **Sin impacto**: se mantiene dentro de los límites presupuestarios y de cronograma originales (riesgo aceptado). |
| **Impacto en el costo** | Ninguno. |
| **Responsable** | Project Manager |

---

##### O04 — Cambios de alcance durante el desarrollo

| Campo | Detalle |
|-------|---------|
| **Descripción** | Solicitudes de funcionalidades nuevas o modificaciones fuera del alcance pactado (nuevos módulos, cambios de diseño, contenido no previsto). |
| **Probabilidad / Impacto / Severidad** | Media / Medio / **Media (4)** |
| **Señales de alerta** | Solicitudes no documentadas en reuniones; pedidos informales por WhatsApp; desvío del foco del sprint. |
| **Plan de mitigación** | Gestión formal de cambios: toda solicitud por escrito y aprobada mediante **adenda** (Cláusula Décima Primera); revisión de alcance al inicio de cada demo; difusión clara de la lista de incluidos/no incluidos de los TDR. |
| **Plan de contingencia** | Registrar la solicitud; evaluar impacto en costo y tiempo; proponer adenda con nuevo presupuesto/cronograma; si el cambio es menor, negociar su inclusión en el sprint siguiente sin afectar los hitos de pago. |
| **Impacto en el cronograma** | **2–5 días** por cada cambio no gestionado; se controla mediante adenda con nuevo cronograma. |
| **Impacto en el costo** | Presupuesto adicional definido en la adenda. |
| **Responsable** | Project Manager / Todo el equipo |

---

##### O05 — Disponibilidad reducida del responsable del albergue

| Campo | Detalle |
|-------|---------|
| **Descripción** | El responsable único de la ONG no responde a tiempo aprobaciones, revisa demos o provee información (cuello de botella operativo). |
| **Probabilidad / Impacto / Severidad** | Media / Medio / **Media (4)** |
| **Señales de alerta** | Respuestas > 48–72 h; demos sin retroalimentación; mensajes sin responder. |
| **Plan de mitigación** | Designar un punto de contacto alterno; comunicación asíncrona por WhatsApp/correo; calendarizar los hitos de aprobación con antelación. |
| **Plan de contingencia** | Escalar al contacto alterno; solicitar reunión extraordinaria (24 h de aviso, horario laboral); activar el mecanismo de aprobación tácita pactado. |
| **Impacto en el cronograma** | **1–2 días** por ciclo; acumulable (relacionado con O09). |
| **Impacto en el costo** | Ninguno. |
| **Responsable** | Project Manager |

---

##### O06 — Rotación o ausencia de personal del albergue

| Campo | Detalle |
|-------|---------|
| **Descripción** | Cambio del responsable o de voluntarios clave del albergue durante o después del proyecto; pérdida de continuidad. |
| **Probabilidad / Impacto / Severidad** | Baja / Medio / **Baja (2)** |
| **Señales de alerta** | Aviso de renuncia/rotación; nueva persona sin contexto del proyecto. |
| **Plan de mitigación** | Documentación detallada (Manual de Usuario y Manual de Administrador); capacitación grabada; registro escrito de decisiones y configuraciones. |
| **Plan de contingencia** | Sesión extra de inducción/reinducción (1–2 h); entrega de manuales y grabaciones. |
| **Impacto en el cronograma** | **2–3 días** (re-capacitación) durante el proyecto o en la garantía. |
| **Impacto en el costo** | Ninguno. |
| **Responsable** | Project Manager |

---

##### O07 — Cortes de energía o problemas de conectividad (comunes en La Paz)

| Campo | Detalle |
|-------|---------|
| **Descripción** | Cortes eléctricos o fallas de internet que interrumpen el trabajo de desarrollo o las reuniones. |
| **Probabilidad / Impacto / Severidad** | Alta / Bajo / **Media (3)** |
| **Señales de alerta** | Cortes frecuentes del proveedor eléctrico/de internet. |
| **Plan de mitigación** | Trabajo en entorno local (Local by Flywheel); commits frecuentes a Git; sincronización periódica; configuración posible de forma offline. |
| **Plan de contingencia** | Recuperar el trabajo desde el repositorio/backup; continuar offline; reprogramar demos si la conectividad falla. |
| **Impacto en el cronograma** | **0.5–1 día por evento**; bajo impacto acumulado gracias al trabajo local y al control de versiones. |
| **Impacto en el costo** | Ninguno. |
| **Responsable** | Todo el equipo |

---

##### O08 — Conflicto de horarios para reuniones y demos

| Campo | Detalle |
|-------|---------|
| **Descripción** | Dificultad para coincidir en demos y reuniones formales por disponibilidad de las partes. |
| **Probabilidad / Impacto / Severidad** | Media / Bajo / **Baja (2)** |
| **Señales de alerta** | Cancelaciones y reagendamientos reiterados. |
| **Plan de mitigación** | Agendamiento con anticipación (calendario compartido); horarios flexibles pactados dentro del horario laboral (L–V, 9:00–18:00); reuniones adicionales con 24 h de aviso; demos al cierre de cada sprint. |
| **Plan de contingencia** | Grabación de la demo; retroalimentación asíncrona; reagendamiento. |
| **Impacto en el cronograma** | Hasta **1 día** por demo; mitigable con el mecanismo asíncrono. |
| **Impacto en el costo** | Ninguno. |
| **Responsable** | Project Manager |

---

##### O09 — Retraso en la aprobación de demos y entregables

| Campo | Detalle |
|-------|---------|
| **Descripción** | El albergue excede el plazo máximo de **5 días hábiles** para aprobar o rechazar cada demo/entregable, desfasando los sprints siguientes (dependencia "Aprobación de cada demo"). |
| **Probabilidad / Impacto / Severidad** | Media / Medio / **Media (4)** |
| **Señales de alerta** | Demos sin aprobación al inicio del sprint siguiente; objeciones planteadas fuera del plazo. |
| **Plan de mitigación** | Entregar cada demo con material escrito/video para revisión asíncrona; fijar fecha límite de retroalimentación; recordatorios previos; **pre-acordar aprobación tácita** si no hay objeciones dentro del plazo. |
| **Plan de contingencia** | Continuar el sprint siguiente con supuestos razonables y registrar comentarios pendientes; si el retraso es reiterado, convocar reunión de seguimiento y ajustar el cronograma formalmente. |
| **Impacto en el cronograma** | Hasta **5 días hábiles por aprobación**; de forma acumulativa puede desplazar la entrega final **1–2 semanas** si coincide con O01/O02. |
| **Impacto en el costo** | Ninguno directo. |
| **Responsable** | Project Manager |

---

##### O10 — Ausencia de un miembro del equipo de desarrollo

| Campo | Detalle |
|-------|---------|
| **Descripción** | Enfermedad, viaje u otra causa que impide a un miembro del equipo cumplir sus tareas (el equipo actúa de forma solidaria y mancomunada). |
| **Probabilidad / Impacto / Severidad** | Baja / Medio / **Baja (2)** |
| **Señales de alerta** | Aviso de ausencia; tareas del sprint sin avance. |
| **Plan de mitigación** | Revisión de carga al inicio de cada sprint; documentación del trabajo en curso; conocimiento compartido en módulos críticos; registro de avances en Trello/Jira/Notion. |
| **Plan de contingencia** | Redistribución de tareas entre los 4 miembros; priorización de los entregables del sprint. |
| **Impacto en el cronograma** | **2–3 días** por evento; absorbibles con la redistribución en un equipo de 4 personas. |
| **Impacto en el costo** | Ninguno. |
| **Responsable** | Project Manager |

---

#### 4.3. RIESGOS FINANCIEROS Y CONTRACTUALES

---

##### F01 — Retraso en el pago de las cuotas por parte de la ONG

| Campo | Detalle |
|-------|---------|
| **Descripción** | La ONG no cancela las cuotas en los plazos pactados (1.ª cuota al mes de la firma; 2.ª a los 2.5 meses; 3.ª al finalizar), dentro de los 15 días hábiles posteriores al vencimiento. |
| **Probabilidad / Impacto / Severidad** | Media / Alto / **Alta (6)** |
| **Señales de alerta** | Facturas emitidas sin pago; recordatorios sin respuesta; retrasos reiterados. |
| **Plan de mitigación** | Cronograma de pagos claro en el contrato; recordatorios previos al vencimiento; facturación con 5 días hábiles de anticipación; protección de la Cláusula Primera (no suspensión de pago). |
| **Plan de contingencia** | Recordatorio formal por escrito; reunión de regularización; mediación conforme al contrato. El desarrollo de hitos ya comprometidos no se suspende (Cláusula Primera); si el retraso es reiterado, evaluar con asesoría legal la suspensión de hitos no devengados y el derecho a penalidad (Cláusula Décima Segunda). |
| **Impacto en el cronograma** | No retrasa el trabajo directamente, pero puede condicionar la entrega del código fuente hasta la cancelación íntegra (Cláusula 12.2) y genera tensión contractual. |
| **Impacto en el costo** | Impacto financiero directo en el flujo de caja del equipo; posible penalidad del 15% del saldo restante por incumplimiento de la ONG. |
| **Responsable** | Project Manager / Todo el equipo |

---

##### F02 — El costo del dominio supera el presupuesto del proyecto

| Campo | Detalle |
|-------|---------|
| **Descripción** | El dominio elegido para el sitio supera el presupuesto previsto por la ONG, afectando la adquisición y el despliegue (E8). |
| **Probabilidad / Impacto / Severidad** | Media / Medio / **Media (4)** |
| **Señales de alerta** | Cotizaciones superiores a lo esperado; indecisión de la ONG sobre el nombre/extensión. |
| **Plan de mitigación** | Cotizaciones anticipadas; alternativas de bajo costo (`.com.bo`, `.org`, `.net`); asesoría en la elección del nombre. |
| **Plan de contingencia** | Proponer extensiones o nombres alternativos económicos; conforme al contrato, el dominio no se adquirirá si su costo excede el presupuesto, manteniendo el proyecto en staging hasta que la ONG decida. |
| **Impacto en el cronograma** | Retraso de **2–5 días** en E8 mientras la ONG decide; se acumula con O02. |
| **Impacto en el costo** | Costo del dominio a cargo de la ONG. |
| **Responsable** | Project Manager |

---

##### F03 — La ONG no completa el papeleo de Red Enlace (financiero)

| Campo | Detalle |
|-------|---------|
| **Descripción** | Se relaciona con O03: sin habilitación ante Red Enlace no se implementa la pasarela condicional de donaciones. |
| **Probabilidad / Impacto / Severidad** | Alta / Bajo / **Media (3)** |
| **Señales de alerta** | Sin avance del papeleo; sin comunicación formal. |
| **Plan de mitigación** | El proyecto base funciona con QR Simple y transferencia; la pasarela es una fase condicional documentada. |
| **Plan de contingencia** | Mantener el alcance dentro de los límites presupuestarios originales (según cláusula 3.3 del contrato); evaluar la integración como adenda o nuevo contrato si la habilitación llega después. |
| **Impacto en el cronograma** | **Sin impacto** en el cronograma base. |
| **Impacto en el costo** | Ninguno. |
| **Responsable** | Project Manager |

---

##### F04 — Incremento del alcance no presupuestado

| Campo | Detalle |
|-------|---------|
| **Descripción** | Requerimientos nuevos no contemplados en los TDR que se solicitan y ejecutan sin adenda, generando trabajo no remunerado. |
| **Probabilidad / Impacto / Severidad** | Media / Medio / **Media (4)** |
| **Señales de alerta** | Pedidos informales fuera del alcance; solicitudes "urgentes" por WhatsApp. |
| **Plan de mitigación** | Toda ampliación requiere adenda con nuevo presupuesto y cronograma (Cláusula Décima Primera); control del alcance en cada demo; referencia constante a la lista de incluidos/no incluidos. |
| **Plan de contingencia** | Registrar y cotizar la solicitud antes de ejecutarla; si se ejecutó sin adenda, regularizarla formalmente. |
| **Impacto en el cronograma** | **2–5 días** si no se gestiona adecuadamente. |
| **Impacto en el costo** | Presupuesto adicional definido por adenda. |
| **Responsable** | Project Manager / Todo el equipo |

---

##### F05 — Costo de plugins premium necesarios

| Campo | Detalle |
|-------|---------|
| **Descripción** | Funcionalidad que requiere plugins de pago adicionales a los previstos (relacionado con T12). |
| **Probabilidad / Impacto / Severidad** | Media / Bajo / **Baja (2)** |
| **Señales de alerta** | Límite del plan gratuito alcanzado; funcionalidad requerida no cubierta. |
| **Plan de mitigación** | Priorización de plugins gratuitos; identificación anticipada de limitaciones. |
| **Plan de contingencia** | Solo se adquieren con aprobación previa de la ONG; alternativa manual/código propio si la ONG no los aprueba. |
| **Impacto en el cronograma** | **1–2 días** por proceso de aprobación. |
| **Impacto en el costo** | Costo a cargo de la ONG previa aprobación. |
| **Responsable** | Project Manager |

---

##### F06 — Documentación de exención de IVA o régimen fiscal incompleta

| Campo | Detalle |
|-------|---------|
| **Descripción** | La ONG no presenta a tiempo la documentación de exención de IVA (por su carácter sin fines de lucro) o surgen dudas sobre retenciones (RC-IVA/IT). |
| **Probabilidad / Impacto / Severidad** | Baja / Medio / **Baja (2)** |
| **Señales de alerta** | Sin respaldo de exención antes de la firma; consultas recurrentes sobre facturación. |
| **Plan de mitigación** | Solicitar la documentación antes de la firma (Cláusula 6.3); aclarar el régimen de retenciones desde el inicio. |
| **Plan de contingencia** | Aplicar el IVA del 13% conforme a ley si no hay respaldo; emitir facturas conforme al régimen fiscal final. |
| **Impacto en el cronograma** | **2–3 días** en la emisión de facturas y cobro de cuotas. |
| **Impacto en el costo** | Impacto en los montos netos de las cuotas. |
| **Responsable** | Project Manager |

---

##### F07 — Fluctuación económica / inflación sobre el precio fijo

| Campo | Detalle |
|-------|---------|
| **Descripción** | Variaciones de costos de herramientas o insumos (hosting, plugins) frente a un precio de contrato fijo (Bs. 12,000 + IVA). |
| **Probabilidad / Impacto / Severidad** | Baja / Bajo / **Baja (1)** |
| **Señales de alerta** | Variación de precios de proveedores; cotizaciones con vigencia corta. |
| **Plan de mitigación** | Precio fijo pactado; cotizaciones con vigencia; priorización de herramientas gratuitas. |
| **Plan de contingencia** | Absorber pequeñas variaciones; re-cotizar los servicios a cargo de la ONG. |
| **Impacto en el cronograma** | **Sin impacto.** |
| **Impacto en el costo** | Bajo; eventual re-cotización de servicios externos. |
| **Responsable** | Project Manager |

---

### 5. PRIORIZACIÓN Y RANKING DE RIESGOS

#### 5.1. Orden de prioridad

| Prioridad | ID | Riesgo | Severidad | Acción requerida |
|-----------|----|--------|-----------|------------------|
| 1 | **O02** | Hosting/servidores no disponibles a tiempo | Alta (6) | Mitigación intensiva desde la Semana 6 |
| 2 | **O01** | Retraso en materiales del albergue | Alta (6) | Recordatorios semanales + placeholders |
| 3 | **T01** | Incompatibilidad de plugins | Alta (6) | Pruebas en staging obligatorias |
| 4 | **T02** | Vulnerabilidades de seguridad | Alta (6) | Hardening + backups + monitoreo |
| 5 | **F01** | Retraso en pagos de cuotas | Alta (6) | Seguimiento financiero estricto |
| 6 | **O09** | Retraso en aprobaciones de demos | Media (4) | Aprobación tácita pactada |
| 7 | **O04** | Cambios de alcance | Media (4) | Gestión de cambios por adenda |
| 8 | **T07** | Fallos en correos automáticos | Media (4) | SMTP verificado en Sprint 2 |
| 9 | **T03** | Rendimiento por exceso de plugins | Media (4) | Auditoría en cada sprint |
| 10 | **T06** | Conflictos de tema tras updates | Media (4) | Child theme + pruebas |
| 11 | **O05** | Responsable del albergue poco disponible | Media (4) | Contacto alterno |
| 12 | **F02** | Costo del dominio > presupuesto | Media (4) | Cotizaciones anticipadas |
| 13 | **F04** | Incremento de alcance no presupuestado | Media (4) | Control de alcance estricto |
| 14 | **T10** | Pérdida de datos / fallo de backups | Media (3) | Backups diarios verificados |
| 15 | **T11** | Hackeo en producción | Media (3) | Hardening + monitoreo |
| 16 | **O03 / F03** | Red Enlace no habilitada | Media (3) | Aceptado (sin impacto) |
| 17 | **O07** | Cortes de energía/conectividad | Media (3) | Trabajo local + Git |
| 18–29 | T04, T05, T08, T09, T12, O06, O08, O10, F05, F06, F07 | Resto de riesgos | Baja (1–2) | Monitoreo pasivo |

#### 5.2. Matriz de severidad (ubicación de riesgos)

| Probabilidad \ Impacto | Bajo (1) | Medio (2) | Alto (3) |
|------------------------|----------|-----------|----------|
| **Alta (3)** | O03, F03, O07 → Media (3) | — | — |
| **Media (2)** | T12, O08, F05 → Baja (2) | T03, T06, T07, O04, O05, O09, F02, F04 → Media (4) | T01, T02, O01, O02, F01 → **Alta (6)** |
| **Baja (1)** | T09, F07 → Baja (1) | T04, T05, T08, O06, O10, F06 → Baja (2) | T10, T11 → Media (3) |

---

### 6. IMPACTO ACUMULADO EN EL CRONOGRAMA Y RESERVA DE CONTINGENCIA

#### 6.1. Escenarios de impacto

| Escenario | Supuestos | Impacto acumulado en entrega (E8) |
|-----------|-----------|-----------------------------------|
| **Optimista** | Materiales a tiempo, hosting contratado en Semana 7, aprobaciones en plazo, sin fallos de migración | Sin desfase (Semana 8) |
| **Probable** | Retraso moderado en materiales (3 días), aprobaciones cercanas al límite (2 días), 1 día de fallos técnicos | **+4–6 días hábiles** (Semana 9) |
| **Desfavorable** | Retraso en hosting de 1 semana (O02), materiales a destiempo (7 días), aprobaciones al límite (5 días) | **+1.5–2 semanas** (Semanas 9–10) |

#### 6.2. Reserva de contingencia recomendada

| Concepto | Recomendación |
|----------|---------------|
| **Reserva de cronograma** | **5 días hábiles** (1 semana), concentrada al final del Sprint 4 (Semana 8) y antes del despliegue (E8). |
| **Reserva de presupuesto (ONG)** | Bs. 500 – 800 recomendados para imprevistos de hosting/dominio/plugins premium, informada en las proformas. |
| **Política de uso** | La reserva solo se consume con la aprobación del Project Manager y previa comunicación al albergue del impacto en el cronograma. |

#### 6.3. Ruta crítica y riesgos asociados por fase

| Fase / Sprint | Semanas | Entregables | Riesgos con mayor actividad |
|---------------|---------|-------------|------------------------------|
| **Sprint 1** — Instalación, tema y estructura | 1–2 | E1, E2, E3 | T01, T06, O01 (logo, S1), O07, O08, O10 |
| **Sprint 2** — Formularios, donaciones y contenido | 3–4 | E4 | T01, T07, O01 (fotos, redes, S3), O04, O05, O09 |
| **Sprint 3** — Panel admin y funcionalidades | 5–6 | E5, E6 | T01, T06, T07, T12/F05, O01 (bancarios S5, legales S6), O04, O05, O09 |
| **Sprint 4** — QA, despliegue, documentación y capacitación | 7–8 | E7, E8, E9, E10 | T03, T04, T05, T08, T10, O02, O09, F02, F03 |
| **Garantía** | 9–16 | E11 | T02, T08, T10, T11, F01 (3.ª cuota) |

---

### 7. ESTRATEGIAS DE RESPUESTA A LOS RIESGOS

| Estrategia | Definición | Riesgos donde se aplica |
|------------|------------|--------------------------|
| **Evitar** | Eliminar la causa del riesgo o la actividad que lo origina | F04 (control de alcance por adenda), O03/F03 (pasarela condicional fuera del alcance base) |
| **Mitigar** | Reducir la probabilidad o el impacto mediante acciones preventivas | T01, T02, T03, T04, T06, T07, T10, T11, O01, O02, O07, O09 |
| **Transferir** | Trasladar el riesgo o su costo a un tercero (contrato, seguros, proveedor) | T05, T08 (responsabilidad del proveedor de hosting), T11 (servicio de limpieza) |
| **Aceptar** | Asumir el riesgo conociendo su impacto (con plan de contingencia) | O03/F03 (Red Enlace), O07 (cortes de energía), F07 (inflación) |

---

### 8. PROCESO DE MONITOREO Y CONTROL

#### 8.1. Frecuencia de revisión

| Ocasión | Frecuencia | Responsable | Acción |
|---------|------------|-------------|--------|
| **Daily stand-up** | Diario (15 min) | Todo el equipo | Reporte de señales de alerta de los riesgos Alta |
| **Retrospectiva** | Cada 2 semanas (cierre de sprint) | Project Manager | Revisión del registro, actualización de probabilidad/impacto |
| **Demo funcional** | Cada 2 semanas | Project Manager | Comunicación de riesgos y reserva al albergue |
| **Revisión de dependencias** | Semanal | Project Manager | Verificación de materiales, hosting y aprobaciones pendientes |

#### 8.2. Registro de riesgos (formato de control)

| Campo | Detalle |
|-------|---------|
| **Herramienta** | Trello/Jira/Notion — tablero "Riesgos" con tarjetas por ID |
| **Actualización** | Tras cada retrospectiva o ante cualquier materialización |
| **Contenido** | ID, estado (activo/mitigado/materializado/cerrado), severidad vigente, fecha de revisión |

#### 8.3. Escalamiento

| Severidad | Plazo de comunicación | Canal |
|-----------|------------------------|-------|
| **Alta (6)** | Máximo 24–48 h desde la detección | Reunión extraordinaria (Google Meet/Zoom) + WhatsApp |
| **Media (3–4)** | Retrospectiva / siguiente demo | Demo funcional + registro en el tablero |
| **Baja (1–2)** | Monitoreo pasivo | Registro en el tablero |

---

### 9. ROLES Y RESPONSABILIDADES EN LA GESTIÓN DE RIESGOS

| Rol | Responsabilidades |
|-----|-------------------|
| **Project Manager** | Dueño del registro de riesgos; monitoreo semanal de dependencias; gestión de cambios (adendas); escalamiento al albergue; control de la reserva de contingencia. |
| **Desarrollador Backend** | Riesgos de servidor, base de datos, seguridad (T02, T04, T05, T08, T10, T11) y configuración SMTP (T07). |
| **Desarrollador Frontend** | Riesgos del tema, rendimiento front (T03, T06, T09) y responsividad. |
| **QA Tester** | Pruebas en staging, verificación de migraciones (T04), entregabilidad de correos (T07), pruebas de seguridad (T02). |
| **Diseñador UX/UI** | Anticipación de limitaciones de plugins premium (T12/F05) y soporte en aprobaciones de diseño. |
| **Todo el equipo** | Reporte de señales de alerta en el daily; ejecución de los planes de contingencia asignados. |

---

### 10. TOLERANCIA AL RIESGO Y CRITERIOS DE ACEPTACIÓN

| Umbral | Criterio |
|--------|----------|
| **Desviación de cronograma aceptable** | Hasta 5 días hábiles sin requerir modificación formal del cronograma. |
| **Desviación mayor** | Toda desviación > 5 días hábiles se comunica formalmente al albergue y se propone un plan de recuperación o la actualización del cronograma. |
| **Riesgo aceptado** | Riesgos cuya mitigación no es viable o cuyo impacto es asumible (O03/F03, O07, F07), documentados como aceptados. |
| **Riesgo no negociable** | Seguridad de datos (T02/T11) y disponibilidad del sitio (T08): nunca se aceptan niveles de riesgo que comprometan datos personales o el cumplimiento de RNF03. |

---

### 11. OPORTUNIDADES (RIESGOS POSITIVOS)

| ID | Oportunidad | Acción para potenciarla | Impacto potencial |
|----|-------------|--------------------------|-------------------|
| **OP01** | Habilitación de Red Enlace durante la vigencia | Adelantar el papeleo de habilitación desde la Semana 1; seguimiento mensual del avance | Ampliación del alcance como adenda (mayor valor del producto) |
| **OP02** | Adopciones/donaciones incrementadas tras el lanzamiento | Publicación de historias de adopción y campañas desde la demo de E4 | Mayor visibilidad del albergue y del proyecto |
| **OP03** | Contenido placeholder bien recibido por el albergue | Entregar ejemplos de alto nivel | Menor tiempo de espera por materiales |
| **OP04** | Reutilización del tema hijo y plugins configurados | Documentar el procedimiento en el Manual de Sistemas | Menor esfuerzo en soporte y futuros proyectos |

---

### 12. CIERRE

La presente gestión de riesgos forma parte de la documentación de planificación del proyecto **"Sitio Web y Sistema de Gestión — Albergue Peluchín"** y complementa la sección de riesgos del documento `TDR_Plan_Proyecto_Cronograma_Peluchin.md`.

El registro se mantendrá actualizado durante toda la vigencia del contrato (8 semanas de desarrollo + 8 semanas de garantía) y será revisado por el equipo en cada retrospectiva de sprint, comunicando al albergue cualquier variación significativa de severidad o la materialización de un riesgo que afecte el cronograma.

---

### ANEXO A — Mapa de riesgos por fase

| Fase | Riesgos activos (prioritarios) |
|------|--------------------------------|
| **Sprint 1 (Semanas 1–2)** | T01, T06, O01, O07, O08, O10 |
| **Sprint 2 (Semanas 3–4)** | T01, T07, O01, O04, O05, O09 |
| **Sprint 3 (Semanas 5–6)** | T01, T06, T07, T12/F05, O01, O04, O05, O09 |
| **Sprint 4 (Semanas 7–8)** | T03, T04, T05, T08, T10, O02, O09, F02, F03 |
| **Garantía (Semanas 9–16)** | T02, T08, T10, T11, F01 |

### ANEXO B — Cuadro de correspondencia con el Plan del Proyecto

| Riesgo del Plan (`TDR_Plan_Proyecto_Cronograma`) | ID en esta gestión |
|---------------------------------------------------|---------------------|
| Incompatibilidad de plugins | T01 |
| Vulnerabilidades de seguridad en WordPress o plugins | T02 |
| Problemas de rendimiento por exceso de plugins | T03 |
| Fallos en la migración de staging a producción | T04 |
| Incompatibilidad con la versión de PHP del servidor | T05 |
| Conflictos con el tema después de actualizaciones | T06 |
| Fallos en el envío de correos automáticos | T07 |
| Caída del hosting compartido por tráfico o recursos | T08 |
| Errores en la integración de WhatsApp | T09 |
| Retraso en entrega de materiales por el albergue | O01 |
| La ONG no obtiene hosting o servidores a tiempo | O02 |
| La ONG no obtiene habilitación de Red Enlace | O03 / F03 |
| Cambios de alcance durante el desarrollo | O04 |
| Disponibilidad reducida del responsable del albergue | O05 |
| Rotación o ausencia de personal del albergue | O06 |
| Cortes de energía o problemas de conectividad | O07 |
| Conflicto de horarios para reuniones y demos | O08 |
| Retraso en pagos de cuotas por parte de la ONG | F01 |
| El costo del dominio supera el presupuesto | F02 |
| Incremento del alcance no presupuestado | F04 |
| Costo de plugins premium necesarios | F05 / T12 |

