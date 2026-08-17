# BITÁCORA DE SPRINT 4 — QA, DESPLIEGUE, DOCUMENTACIÓN Y CAPACITACIÓN

## SITIO WEB Y SISTEMA DE GESTIÓN — ALBERGUE "PELUCHÍN"

---

**PROYECTO:** Desarrollo de sitio web y sistema de gestión para el albergue de perritos "Peluchín"

**ORGANIZACIÓN:** Albergue "Peluchín" — ONG sin fines de lucro (Llojeta, La Paz, Bolivia)

**EQUIPO DESARROLLADOR:** Mariana del Arroyo · Nahomi Humerez · Santiago Acha · Jorge Saenz

---

### 1. DATOS DEL SPRINT

| Campo | Detalle |
|-------|---------|
| **N.º de sprint** | 4 de 4 |
| **Nombre del sprint** | QA, despliegue, documentación y capacitación |
| **Período** | Semanas 7–8 (Días 43 al 56) |
| **Fecha de inicio** | [dd/mm/aaaa] |
| **Fecha de cierre (demo final)** | [dd/mm/aaaa] |
| **Objetivo del sprint** | Realizar pruebas funcionales, de rendimiento y responsividad; optimizar rendimiento y SEO; configurar analíticas; publicar el sitio en producción con SSL; elaborar la documentación; capacitar al personal del albergue y realizar la entrega formal |

---

### 2. EQUIPO PARTICIPANTE

| # | Nombre | Rol en el sprint |
|---|--------|------------------|
| 1 | Mariana del Arroyo | Coordinación, optimización de SEO, publicación en producción, coordinación con el hosting |
| 2 | Nahomi Humerez | Pruebas funcionales y de usabilidad, corrección de bugs de interfaz |
| 3 | Santiago Acha | Pruebas de formularios y flujos, ajustes finales de configuración |
| 4 | Jorge Saenz | QA/Testing (rendimiento, responsividad), analíticas, elaboración de manuales y capacitación |

**Responsable de la entrega (por el albergue):** ________________________

---

### 3. ALCANCE Y ENTREGABLES DEL SPRINT

| ID | Entregable | Criterio de aceptación |
|----|------------|------------------------|
| **E7** | Plataforma completa en staging | Pruebas funcionales superadas |
| **E8** | Despliegue en producción con SSL y SEO optimizado | Sitio público operativo |
| **E9** | Documentación: Manual de Sistemas y Manual de Usuario | Documentos entregados en PDF |
| **E10** | Capacitación al personal del albergue (2 sesiones) | Sesiones realizadas y material de apoyo entregado |

---

### 4. ACTIVIDADES REALIZADAS

| Día | Actividad | Herramienta / Bloque | Responsable | Estado |
|-----|-----------|----------------------|-------------|--------|
| 43–45 | Pruebas funcionales de todos los formularios y flujos | — | Jorge Saenz | Completada |
| 45–46 | Pruebas de rendimiento (PageSpeed, GTmetrix, Lighthouse) | Optimizaciones del plan (CDN, compresión de imágenes) | Jorge Saenz | Completada |
| 46–47 | Pruebas de responsividad en dispositivos móviles y navegadores | Responsively | Nahomi Humerez | Completada |
| 47–49 | Corrección de bugs y ajustes | — | Todo el equipo | Completada |
| 49–50 | Optimización de imágenes y activación de CDN / caché del plan | Panel de Hostinger Web Builder | Jorge Saenz | Completada |
| 50–52 | Configuración de analíticas (Google Analytics / Site Kit) | Analytics integrada / código | Jorge Saenz | Completada |
| 52–53 | Optimización SEO (meta tags, sitemap, Google Search Console) | Herramientas SEO integradas | Mariana del Arroyo | Completada |
| 52–53 | Configuración de SSL/TLS, dominio y DNS en producción | Panel de Hostinger | Mariana del Arroyo | Completada |
| 53–54 | Publicación del sitio de staging a producción en Hostinger Web Builder | Panel de Hostinger Web Builder | Mariana del Arroyo | Completada |
| 54–55 | Pruebas post-despliegue (smoke test) | — | Jorge Saenz | Completada |
| 54–55 | Elaboración del Manual de Usuario (guía visual de Hostinger Web Builder para el albergue) | — | Jorge Saenz | Completada |
| 55 | Capacitación al personal del albergue (sesión 1 de 2) | Google Meet / Zoom | Todo el equipo | Completada |
| 55–56 | Capacitación al personal del albergue (sesión 2 de 2) | Google Meet / Zoom | Todo el equipo | Completada |
| 56 | Entrega formal del sitio, backups y documentación | — | Mariana del Arroyo | Completada |
| 56 | **DEMO FINAL: Sitio en producción + documentación (E7, E8, E9, E10)** | Google Meet | Todo el equipo | Completada |

---

### 5. INCIDENCIAS Y OBSERVACIONES

1. El plan Web Builder fue contratado por el albergue el día 48 (dentro del plazo de la Semana 7); se entregó asistencia técnica para la contratación y se recibieron las credenciales de acceso.
2. El dominio se vinculó correctamente y el certificado SSL quedó activo en producción el día 53.
3. En las pruebas de rendimiento el sitio alcanzó un puntaje Lighthouse ≥ 90/100 en dispositivos móviles; se optimizaron las imágenes y se activó el CDN del plan.
4. Se detectaron y corrigieron 6 bugs menores (mensajes de validación, alineación en móvil, enlace del botón de WhatsApp) antes de la demo final.
5. La capacitación se realizó en 2 sesiones (gestión de animales/solicitudes y contenido/donaciones), con material de apoyo entregado y registro de asistencia.
6. Se enviaron las URLs a Google Search Console y se registró el sitemap generado por las herramientas SEO integradas.

---

### 6. RESULTADOS DE LA DEMO FINAL (DÍA 56)

- **E7**: Plataforma completa en staging con pruebas funcionales superadas (formularios, donaciones, adopciones).
- **E8**: Sitio desplegado en producción con SSL/TLS activo, dominio y DNS configurados, SEO optimizado y analíticas operativas; smoke test aprobado.
- **E9**: Documentación entregada: Manual de Sistemas y Manual de Usuario en formato PDF.
- **E10**: 2 sesiones de capacitación realizadas con el personal del albergue.
- Backups automáticos operativos y credenciales de acceso transferidas al albergue.
- **Entrega formal del proyecto completada. Da inicio el período de garantía de 2 meses (E11).**

---

### 7. RETROSPECTIVA DEL SPRINT

| ¿Qué salió bien? | ¿Qué podemos mejorar? | Acciones acordadas |
|------------------|------------------------|--------------------|
| Publicación a producción sin pérdida de datos | Documentar el procedimiento de despliegue para futuras réplicas | Incluir guía de despliegue en el Manual de Sistemas |
| Pruebas exhaustivas antes del despliegue | Realizar pruebas con el personal del albergue durante el QA | Incluir al personal en las pruebas de aceptación finales |
| Capacitación bien recibida por el equipo del albergue | Ampliar la duración de las sesiones si el personal lo requiere | Ofrecer sesión de refuerzo dentro de la garantía si se solicita |

---

### 8. FIRMAS

| Por la entrega (Albergue "Peluchín") | Por el equipo desarrollador |
|--------------------------------------|-----------------------------|
| | |
| ________________________ | **Jorge Saenz** |
| Responsable de la entrega | Desarrollador del sprint |
| C.I.: ________________ | C.I.: ________________ |
| Firma: ________________ | Firma: ________________ |
| Fecha: ________________ | Fecha: ________________ |

---

**Lugar y fecha:** La Paz, Bolivia — [dd/mm/aaaa]
