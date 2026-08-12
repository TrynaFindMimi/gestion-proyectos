# DIAGRAMAS "WHILE" DE INTERACCIÓN

## SITIO WEB Y SISTEMA DE GESTIÓN — ALBERGUE "PELUCHÍN"

---

**FECHA:** [dd/mm/aaaa]

**LUGAR:** La Paz, Estado Plurinacional de Bolivia

**DOCUMENTOS DE REFERENCIA:** TDR_Peluchin.md · TDR_Diagrama_UML_Peluchin.md · TDR_Gestion_Riesgos_Peluchin.md

---

### 1. ALCANCE

El presente documento modela mediante **diagramas de flujo tipo `while`** los bucles de interacción continua de los dos actores principales con la plataforma:

1. **Bucle de interacción del usuario (público)** con el sitio web.
2. **Bucle de interacción del administrador** con el panel de administración.

Estos bucles representan el comportamiento repetitivo esperado mientras el actor permanece en la plataforma (sesión de navegación o sesión de administración activa).

---

### 2. DIAGRAMA WHILE — INTERACCIÓN DEL USUARIO CON EL SITIO PÚBLICO

> **Condición del bucle:** *mientras el usuario siga navegando el sitio público.*

```mermaid
flowchart TD
    INICIO([Inicio: el usuario accede al sitio]) --> W{"while:<br/>¿El usuario sigue navegando?"}
    W -->|Sí| NAV[Explora el sitio]
    NAV --> ACC{¿Qué acción realiza?}

    ACC -->|Explorar catálogo| CAT[Ve la galería de animales]
    CAT --> FICHA[Ve ficha individual del animal]
    FICHA --> POST[Postula a pre-adopción<br/>(3 pasos)]

    ACC -->|Donar| DON[Reporta donación / QR Simple]
    ACC -->|Colaborar| VOL[Se registra como voluntario]
    ACC -->|Informarse| INFO[Blog / Eventos / Contacto]

    POST --> W
    DON --> W
    VOL --> W
    INFO --> W

    W -->|No| FIN([Fin: el usuario sale del sitio])
```

**Lógica del bucle:**

| Paso | Descripción |
|------|-------------|
| **Evaluación de la condición** | Al inicio y tras cada acción, se pregunta si el usuario desea continuar navegando. |
| **Cuerpo del bucle** | El usuario realiza una o varias acciones: ver catálogo, postular adopción, donar, registrarse como voluntario o informarse. |
| **Retorno** | Tras cada acción, la condición se evalúa nuevamente. |
| **Salida** | Cuando el usuario decide salir (cierra el navegador o abandona el sitio), el bucle termina. |

---

### 3. DIAGRAMA WHILE — INTERACCIÓN DEL ADMINISTRADOR CON EL PANEL

> **Condición del bucle:** *mientras la sesión de administración esté activa.*

```mermaid
flowchart TD
    INICIO([Inicio: el admin inicia sesión en /admin]) --> W{"while:<br/>¿La sesión está activa?"}
    W -->|Sí| ACC{¿Qué tarea realiza?}

    ACC -->|Dashboard| DASH[Revisa KPIs y resumen]
    ACC -->|Animales| ANI[CRUD de animales]
    ACC -->|Solicitudes| SOL[Gestiona solicitudes de adopción<br/>(cambia estados y notas)]
    ACC -->|Donaciones| DON[Registra donaciones manuales]
    ACC -->|Voluntarios| VOL[Gestiona voluntarios]
    ACC -->|Contenido| CON[Blog / Eventos / Contenido estático]

    DASH --> W
    ANI --> W
    SOL --> W
    DON --> W
    VOL --> W
    CON --> W

    W -->|No| FIN([Fin: el admin cierra sesión])
```

**Lógica del bucle:**

| Paso | Descripción |
|------|-------------|
| **Evaluación de la condición** | Al inicio y tras cada tarea, se verifica si la sesión del administrador sigue activa. |
| **Cuerpo del bucle** | El admin realiza una o varias tareas de gestión: dashboard, CRUD de animales, solicitudes de adopción, donaciones, voluntarios o contenido. |
| **Retorno** | Tras cada tarea, la condición se evalúa nuevamente. |
| **Salida** | Cuando el admin cierra sesión (o la sesión expira), el bucle termina. |

---

### 4. COMPARACIÓN DE LOS BUCLES

| Aspecto | Usuario (sitio público) | Administrador (panel) |
|---------|--------------------------|------------------------|
| **Condición del `while`** | Usuario sigue navegando | Sesión de admin activa |
| **Acceso** | Público, sin autenticación | Requiere inicio de sesión (`/admin`) |
| **Acciones principales** | Ver, postular, donar, registrarse | Gestionar, modificar, aprobar, registrar |
| **Naturaleza** | De lectura y captura de información | De escritura y control de la información |
| **Fin del bucle** | Sale del sitio / cierra navegador | Cierra sesión / expira sesión |

---

### 5. RELACIÓN CON EL MODELO UML

Los bucles `while` complementan los diagramas del documento `TDR_Diagrama_UML_Peluchin.md`:

- El **bucle del usuario** resume los casos de uso del actor **Visitante/Adoptante/Donante/Voluntario** (UC1–UC12) como un ciclo continuo de navegación.
- El **bucle del administrador** resume los casos de uso del actor **Administrador** (UC13–UC23) como un ciclo continuo de gestión dentro del panel.

---

En señal de conformidad con los presentes diagramas:

<br>

| Por LA ONG | Por EL EQUIPO DESARROLLADOR |
|------------|------------------------------|
| **Albergue "Peluchín"** | |
| | |
| ________________________ | **Mariana del Arroyo** |
| Nombre: ________________ | Firma: ________________ |
| C.I.: ________________ | |
| Cargo: Representante Legal | **Nahomi Humerez** |
| | Firma: ________________ |
| | |
| | **Santiago Acha** |
| | Firma: ________________ |
| | |
| | **Jorge Saenz** |
| | Firma: ________________ |
