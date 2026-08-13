# BITÁCORA DE SPRINT 1 — INSTALACIÓN, TEMA Y ESTRUCTURA

## SITIO WEB Y SISTEMA DE GESTIÓN — ALBERGUE "PELUCHÍN"

---

**PROYECTO:** Desarrollo de sitio web y sistema de gestión para el albergue de perritos "Peluchín"

**ORGANIZACIÓN:** Albergue "Peluchín" — ONG sin fines de lucro (Llojeta, La Paz, Bolivia)

**EQUIPO DESARROLLADOR:** Mariana del Arroyo · Nahomi Humerez · Santiago Acha · Jorge Saenz

---

### 1. DATOS DEL SPRINT

| Campo | Detalle |
|-------|---------|
| **N.º de sprint** | 1 de 4 |
| **Nombre del sprint** | Instalación, tema y estructura |
| **Período** | Semanas 1–2 (Días 1 al 14) |
| **Fecha de inicio** | [dd/mm/aaaa] |
| **Fecha de cierre (demo)** | [dd/mm/aaaa] |
| **Objetivo del sprint** | Instalar WordPress en entorno local, configurar el tema base y el tema hijo, definir el CPT "Animales" y construir el sitio base con landing, galería de animales y ficha individual |

---

### 2. EQUIPO PARTICIPANTE

| # | Nombre | Rol en el sprint |
|---|--------|------------------|
| 1 | Mariana del Arroyo | Coordinación, instalación de WordPress y configuración de plugins esenciales |
| 2 | Nahomi Humerez | Diseño de wireframes y mockups (Figma), landing page y galería |
| 3 | Santiago Acha | Configuración de CPT "Animales", taxonomías y campos ACF |
| 4 | Jorge Saenz | QA del sprint, revisión de responsividad y soporte |

**Responsable de la entrega (por el albergue):** ________________________

---

### 3. ALCANCE Y ENTREGABLES DEL SPRINT

| ID | Entregable | Criterio de aceptación |
|----|------------|------------------------|
| **E1** | Plan de trabajo detallado y cronograma confirmado | Aprobación del plan por "Peluchín" |
| **E2** | Wireframes y mockups del sitio público | Aprobación del diseño visual |
| **E3** | Sitio base con landing, galería de animales y ficha individual | Demo funcional con galería y ficha navegables |

---

### 4. ACTIVIDADES REALIZADAS

| Día | Actividad | Herramienta / Plugin | Responsable | Estado |
|-----|-----------|----------------------|-------------|--------|
| 1 | Kick-off meeting con el albergue | Google Meet | Mariana del Arroyo | Completada |
| 1–3 | Instalación de WordPress + tema base (Astra) en entorno local | Local by Flywheel | Santiago Acha | Completada |
| 3–5 | Creación del tema hijo (child theme) con colores y logo del albergue | Child Theme Configurator | Mariana del Arroyo | Completada |
| 3–5 | Instalación de plugins esenciales (SEO, seguridad, backups, SMTP, caché) | Yoast SEO, Wordfence, UpdraftPlus, WP Mail SMTP, WP Super Cache | Mariana del Arroyo | Completada |
| 5–8 | Configuración de CPT "Animales" con taxonomías (especie, tamaño, edad, estado) y campos ACF | CPT UI + ACF | Santiago Acha | Completada |
| 3–8 | Wireframes y mockups del sitio (landing, galería, donaciones, contacto) | Figma | Nahomi Humerez | Completada |
| 9–10 | Revisión y aprobación de diseños con el albergue | Google Meet | Todo el equipo | Completada |
| 9–12 | Construcción de landing page (hero, CTA, contador, animales destacados) | Elementor / Gutenberg | Nahomi Humerez | Completada |
| 12–14 | Plantilla de galería de animales con filtros por taxonomía | CPT UI + Filter Everything | Nahomi Humerez | Completada |
| 12–14 | Plantilla de ficha individual de animal (galería, datos, CTA de adopción) | ACF + Elementor | Santiago Acha | Completada |
| 12–14 | Header, footer y menú de navegación global | Elementor | Nahomi Humerez | Completada |
| 13 | Página 404 personalizada | Elementor | Jorge Saenz | Completada |
| 14 | **DEMO: Sitio base + galería de animales (E1, E2, E3)** | Google Meet | Todo el equipo | Completada |

---

### 5. INCIDENCIAS Y OBSERVACIONES

1. El albergue entregó el logotipo y la identidad visual el día 4 (1 día de retraso respecto a lo pactado); se mitigó usando placeholders temporales en los mockups sin impacto en el cronograma.
2. La instalación de WP Super Cache generó un conflicto menor con el constructor visual en entorno local; se resolvió excluyendo las páginas del constructor de la caché.
3. La aprobación de los diseños por parte del albergue se recibió el día 10, dentro del plazo de 5 días hábiles pactado.

---

### 6. RESULTADOS DE LA DEMO (DÍA 14)

- Sitio base instalado y navegable en entorno local con tema hijo personalizado.
- Landing page publicada con hero, botones CTA ("Quiero Adoptar", "Quiero Donar", "Ser Voluntario"), contador y animales destacados.
- Galería de animales funcional con filtros por especie, tamaño, edad y estado.
- Ficha individual de animal con galería de fotos, datos y CTA de adopción.
- Página 404 personalizada y menú global operativo.
- **E1, E2 y E3 presentados y aceptados sin observaciones pendientes.**

---

### 7. RETROSPECTIVA DEL SPRINT

| ¿Qué salió bien? | ¿Qué podemos mejorar? | Acciones acordadas |
|------------------|------------------------|--------------------|
| Kick-off claro y objetivos bien definidos | Mayor anticipación en la solicitud de materiales al albergue | Enviar recordatorios de dependencias 1 semana antes |
| Trabajo paralelo de diseño y backend sin conflictos | Documentar decisiones de configuración a medida que se toman | Registrar configuración en el Manual Técnico |
| Demo sin incidencias técnicas | Validar el flujo de filtros con datos reales de animales | Pre-cargar fichas de prueba antes del Sprint 2 |

---

### 8. FIRMAS

| Por la entrega (Albergue "Peluchín") | Por el equipo desarrollador |
|--------------------------------------|-----------------------------|
| | |
| ________________________ | **Mariana del Arroyo** |
| Responsable de la entrega | Desarrolladora del sprint |
| C.I.: ________________ | C.I.: ________________ |
| Firma: ________________ | Firma: ________________ |
| Fecha: ________________ | Fecha: ________________ |

---

**Lugar y fecha:** La Paz, Bolivia — [dd/mm/aaaa]
