# DIAGRAMA UML DEL PROYECTO

## SITIO WEB Y SISTEMA DE GESTIÓN — ALBERGUE "PELUCHÍN"

---

**FECHA:** [dd/mm/aaaa]

**LUGAR:** La Paz, Estado Plurinacional de Bolivia

**DOCUMENTOS DE REFERENCIA:** TDR_Peluchin.md · TDR_Contrato_Peluchin.md · TDR_Carta_Aceptacion_Peluchin.md

---


---

### 1. ALCANCE DEL MODELO UML

El presente documento modela el sistema **Sitio Web y Sistema de Gestión para el Albergue "Peluchín"** basado en WordPress, conforme a la estructura detallada de páginas, botones y flujos del Contrato (Cláusula 3.1.1) y de la Carta de Aceptación.

**Diagramas incluidos:**
1. Diagrama de casos de uso (actores y funcionalidades).
2. Diagrama de clases (modelo de datos del dominio).
3. Diagrama de secuencia — flujo de pre-adopción.
4. Diagrama de secuencia — flujo de donación.
5. Diagrama de actividad — flujo completo de adopción.
6. Diagrama de estados — ciclo de vida de la solicitud de adopción.
7. Diagrama de componentes y despliegue — stack WordPress.

---

### 2. DIAGRAMA DE CASOS DE USO

#### 2.1. Actores del sistema

| Actor | Tipo | Descripción |
|-------|------|-------------|
| **Visitante** | Primario | Usuario anónimo que navega el sitio público |
| **Adoptante** | Primario | Visitante que se postula para adoptar |
| **Donante** | Primario | Persona que realiza o reporta una donación |
| **Voluntario** | Primario | Persona que se registra para colaborar |
| **Administrador** | Primario | Personal del albergue con acceso al panel (`/admin`) |
| **Editor** | Secundario | Personal del albergue con permisos limitados (blog/contenido) |
| **Sistema** | Secundario | WordPress + plugins: correos, seguridad, backups, notificaciones |
| **Pasarela (Red Enlace)** | Externo | Condicional; solo si la ONG obtiene la habilitación |

#### 2.2. Diagrama

```mermaid
graph TD
    V["👤 Visitante"]
    AD["👤 Adoptante"]
    DO["👤 Donante"]
    VO["👤 Voluntario"]
    A["👤 Administrador"]
    E["👤 Editor"]

    subgraph SITIO_PUBLICO["SITIO PÚBLICO"]
        UC1["Ver landing page"]
        UC2["Explorar catálogo de animales"]
        UC3["Ver ficha individual"]
        UC4["Filtrar por especie/tamaño/edad"]
        UC5["Postular a pre-adopción (3 pasos)"]
        UC6["Reportar donación"]
        UC7["Registrarse como voluntario"]
        UC8["Ver blog y noticias"]
        UC9["Ver eventos y confirmar asistencia"]
        UC10["Contactar / WhatsApp"]
        UC11["Compartir ficha"]
        UC12["Descargar QR / copiar datos bancarios"]
    end

    subgraph PANEL["PANEL DE ADMINISTRACIÓN"]
        UC13["Iniciar sesión"]
        UC14["Ver dashboard KPIs"]
        UC15["CRUD animales"]
        UC16["Gestionar solicitudes de adopción"]
        UC17["Registrar donaciones manuales"]
        UC18["Gestionar voluntarios"]
        UC19["Gestionar blog"]
        UC20["Gestionar eventos"]
        UC21["Configurar contenido estático"]
        UC22["Exportar reportes Excel"]
        UC23["Enviar correos automáticos"]
    end

    V --> UC1
    V --> UC2
    V --> UC8
    V --> UC9
    V --> UC10
    V --> UC11

    AD --> UC2
    AD --> UC3
    AD --> UC5
    AD --> UC6

    DO --> UC12
    DO --> UC6

    VO --> UC7

    A --> UC13
    A --> UC14
    A --> UC15
    A --> UC16
    A --> UC17
    A --> UC18
    A --> UC19
    A --> UC20
    A --> UC21
    A --> UC22

    E --> UC13
    E --> UC19
    E --> UC21

    SIST["⚙️ Sistema"] --> UC23
    SIST --> UC5
    SIST --> UC6
    SIST --> UC7
```

---

### 3. DIAGRAMA DE CLASES (MODELO DE DATOS)

```mermaid
classDiagram
    class Usuario {
        +int id
        +string nombre
        +string correo
        +string password_hash
        +enum rol : admin, editor, voluntario
        +login()
        +logout()
        +restablecerPassword()
    }

    class Animal {
        +int id
        +string nombre
        +enum especie : perro, gato
        +enum edad : cachorro, adulto, senior
        +enum tamaño : pequeño, mediano, grande
        +enum sexo : macho, hembra
        +string raza
        +float peso_kg
        +string estado_salud
        +list personalidad
        +text historia
        +date fecha_rescate
        +enum estado : en_adopcion, adoptado, en_tratamiento
        +crear()
        +editar()
        +eliminar()
        +cambiarEstado()
    }

    class Foto {
        +int id
        +string url
        +bool es_principal
        +subir()
        +eliminar()
    }

    class Solicitante {
        +int id
        +string nombre_completo
        +string ci
        +date fecha_nacimiento
        +string correo
        +string telefono
        +string direccion
        +string ocupacion
        +registrar()
    }

    class SolicitudAdopcion {
        +int id
        +string tipo_vivienda
        +bool patio_jardin
        +string experiencia_mascotas
        +string otras_mascotas
        +string integrantes_hogar
        +string referencia_personal
        +string referencia_veterinaria
        +text motivo
        +enum estado : pendiente, en_revision, aprobado, rechazado
        +list notas_internas
        +date fecha
        +string numero_seguimiento
        +crear()
        +cambiarEstado()
        +agregarNota()
        +enviarCorreo()
    }

    class Donacion {
        +int id
        +string donante
        +float monto_bs
        +date fecha
        +enum medio : efectivo, transferencia, qr, tarjeta
        +string comprobante_url
        +string medio_origen : manual, reporte_web
        +registrar()
        +exportar()
    }

    class Voluntario {
        +int id
        +string nombre
        +string correo
        +string telefono
        +int edad
        +string ocupacion
        +list areas_interes
        +list disponibilidad
        +string experiencia_previa
        +registrar()
        +filtrar()
    }

    class ArticuloBlog {
        +int id
        +string titulo
        +string categoria
        +string imagen_destacada
        +text contenido
        +date fecha_publicacion
        +enum estado : borrador, publicado
        +crear()
        +publicar()
        +editar()
        +eliminar()
    }

    class Evento {
        +int id
        +string titulo
        +text descripcion
        +datetime fecha_hora
        +string ubicacion
        +string imagen
        +list fotos_galeria
        +list asistentes
        +crear()
        +registrarAsistente()
        +eliminar()
    }

    class ContenidoEstatico {
        +int id
        +string seccion : quienes_somos, mision, faq, donaciones
        +text contenido
        +editar()
        +vistaPrevia()
    }

    Usuario <|-- Administrador
    Administrador --> Animal : gestiona
    Administrador --> SolicitudAdopcion : gestiona
    Administrador --> Donacion : registra
    Administrador --> Voluntario : administra
    Administrador --> ArticuloBlog : publica
    Administrador --> Evento : gestiona
    Administrador --> ContenidoEstatico : edita

    Animal "1" --> "0..*" Foto : tiene
    Solicitante "1" --> "0..*" SolicitudAdopcion : envía
    SolicitudAdopcion "0..*" --> "0..1" Animal : interesado en
    Donacion "0..*" --> "0..1" Solicitante : reporta
    Voluntario "0..*" --> "0..1" Evento : participa en
```

> **Nota de implementación:** En WordPress este modelo se materializa con **CPT UI + ACF** (`Animales`, `Solicitudes`, `Eventos`, `Blog`), roles nativos ampliados con **Members/User Role Editor** y registros de formularios de **WPForms/Contact Form 7**.

---

### 4. DIAGRAMA DE SECUENCIA — FLUJO DE PRE-ADOPCIÓN

```mermaid
sequenceDiagram
    actor AD as Adoptante
    participant W as Sitio web (/adoptar)
    participant S as Sistema (WordPress + WPForms)
    participant DB as Base de datos MySQL
    participant SM as Servidor SMTP
    participant AL as Admin del albergue

    AD->>W: Abre formulario de pre-adopción
    AD->>W: Completa Paso 1 (datos personales)
    W-->>AD: Valida y avanza a Paso 2
    AD->>W: Completa Paso 2 (vivienda y experiencia)
    W-->>AD: Valida y avanza a Paso 3
    AD->>W: Completa Paso 3 (referencias) y envía
    W->>S: Envía solicitud (animal de interés opcional)
    S->>S: Valida campos (email, teléfono, checkboxes)
    alt Validación exitosa
        S->>DB: Guarda solicitud (estado: pendiente)
        S-->>W: Número de seguimiento generado
        W-->>AD: Mensaje de confirmación + número de seguimiento
        S->>SM: Correo de confirmación al solicitante
        SM-->>AD: Correo recibido
        S->>SM: Notificación al admin
        SM-->>AL: Solicitud pendiente de revisión
    else Validación fallida
        S-->>W: Errores inline en rojo
        W-->>AD: Mensajes de error por campo
    end
```

---

### 5. DIAGRAMA DE SECUENCIA — FLUJO DE DONACIÓN

```mermaid
sequenceDiagram
    actor D as Donante
    participant PW as Sitio web (/donar)
    participant S as Sistema (WPForms)
    participant DB as Base de datos MySQL
    participant SM as Servidor SMTP

    D->>PW: Abre página de donaciones
    D->>PW: Escanea QR Simple o copia datos bancarios
    D->>D: Realiza la transferencia en su banca
    D->>PW: Despliega "Reportar mi donación"
    D->>PW: Completa reporte (monto, fecha, comprobante)
    PW->>S: Envía reporte de donación
    S->>DB: Registra donación (medio: reporte_web)
    S-->>PW: Confirmación visual
    PW-->>D: "¡Gracias por tu generosidad!"
    S->>SM: Correo de confirmación al donante
    SM-->>D: Correo de agradecimiento recibido
    S->>SM: Notificación al admin (nueva donación)
```

---

### 6. DIAGRAMA DE ACTIVIDAD — FLUJO COMPLETO DE ADOPCIÓN

```mermaid
flowchart TD
    INICIO([Visitante ingresa al sitio]) --> NAV{Explora catálogo?}
    NAV -->|No| OTROS[Ve blog / donaciones / voluntariado]
    NAV -->|Sí| FILTRO[Filtra por especie, tamaño, edad]
    FILTRO --> FICHA[Ve ficha individual del animal]
    FICHA --> EST{Estado del animal}
    EST -->|En adopción| CTA[Botón Quiero Adoptar]
    EST -->|En tratamiento| ESPERAR[Avísame cuando esté disponible]
    EST -->|Adoptado| CERRADO[Botón deshabilitado - ¡Adoptado!]
    CTA --> F1[Paso 1: Datos personales]
    F1 --> F2[Paso 2: Vivienda y experiencia]
    F2 --> F3[Paso 3: Referencias y envío]
    F3 --> VALID{Validación}
    VALID -->|Errores| F1
    VALID -->|OK| GUARDAR[Sistema guarda solicitud en pendiente]
    GUARDAR --> CORREO[Correos automáticos: solicitante + admin]
    GUARDAR --> ADMIN[Admin revisa en panel]
    ADMIN --> REV{¿Aprueba?}
    REV -->|Aprueba| APROBADO[Estado: aprobado + instrucciones al adoptante]
    REV -->|Rechaza| RECHAZADO[Estado: rechazado + mensaje amable]
    REV -->|Duda| NOTAS[Agrega notas internas - en revisión]
    NOTAS --> REV
    APROBADO --> ACT[Admin actualiza estado del animal a Adoptado]
    ACT --> FIN([Fin del flujo])
```

---

### 7. DIAGRAMA DE ESTADOS — SOLICITUD DE ADOPCIÓN

```mermaid
stateDiagram-v2
    [*] --> Pendiente: Solicitud enviada desde /adoptar
    Pendiente --> EnRevision: Admin inicia revisión
    EnRevision --> Pendiente: Se solicitan datos adicionales
    EnRevision --> Aprobado: Cumple requisitos y referencias
    EnRevision --> Rechazado: No cumple requisitos / no disponible
    Aprobado --> Adoptado: Animal entregado y marcado como adoptado
    Rechazado --> [*]
    Aprobado --> [*]
    Adoptado --> [*]

    note right of EnRevision
        El admin puede agregar
        notas internas en
        cualquier estado
    end note

    note right of Aprobado
        Se envía correo automático
        con instrucciones de adopción
    end note

    note right of Rechazado
        Se envía correo automático
        con mensaje amable
    end note
```

---

### 8. DIAGRAMA DE COMPONENTES Y DESPLIEGUE — STACK WORDPRESS

```mermaid
flowchart LR
    subgraph USUARIO["USUARIOS"]
        NAV["Navegador (PC / Celular)"]
    end

    subgraph PRODUCCION["ENTORNO DE PRODUCCIÓN (Hosting de la ONG)"]
        WEB["Servidor Web (Apache / Nginx)"]
        WP["WordPress<br/>Tema hijo Peluchín<br/>Elementor / Gutenberg"]
        PLUGINS["Plugins<br/>CPT UI + ACF · WPForms<br/>Yoast SEO · Wordfence<br/>UpdraftPlus · WP Mail SMTP<br/>Really Simple SSL"]
        DB[(MySQL / MariaDB)]
        FILES["Media: Fotos de animales y eventos"]
    end

    subgraph EXTERNOS["SERVICIOS EXTERNOS"]
        SMTP["SMTP (Gmail / Resend / SendGrid)"]
        QR["QR Simple + Datos bancarios"]
        WA["API WhatsApp (wa.me)"]
        MAPS["Google Maps"]
        RED["Red Enlace (condicional)"]
    end

    NAV <-->|HTTPS / SSL| WEB
    WEB <--> WP
    WP <--> PLUGINS
    WP <--> DB
    WP <--> FILES
    PLUGINS <--> SMTP
    PLUGINS <--> QR
    WEB <--> WA
    WEB <--> MAPS
    PLUGINS -.->|Solo con habilitación| RED

    subgraph DEV["ENTORNO DE DESARROLLO"]
        LOCAL["Local by Flywheel / XAMPP"]
        GIT["Git + GitHub (repositorio privado)"]
        STAGING["Staging en hosting"]
    end

    LOCAL --> GIT
    GIT --> STAGING
    STAGING -->|Migración All-in-One WP Migration| PRODUCCION
```

---

### 9. GLOSARIO DE ENTIDADES Y ESTADOS

| Entidad | Atributos clave | Estados / Enumerados |
|---------|-----------------|----------------------|
| **Animal** | nombre, especie, edad, tamaño, sexo, raza, peso, salud, personalidad, historia, fecha_rescate | en_adopcion · adoptado · en_tratamiento |
| **SolicitudAdopcion** | datos del solicitante, vivienda, referencias, motivo | pendiente · en_revision · aprobado · rechazado |
| **Donacion** | donante, monto, fecha, medio, comprobante | efectivo · transferencia · qr · tarjeta (Red Enlace) |
| **Voluntario** | nombre, correo, áreas de interés, disponibilidad | áreas: paseo · limpieza · veterinaria · difusión · eventos · transporte · captación |
| **ArticuloBlog** | título, categoría, contenido, imagen | borrador · publicado |
| **Evento** | título, fecha_hora, ubicación, galería | próximo · pasado |
| **Usuario** | nombre, correo, password_hash | roles: admin · editor · voluntario |

---

### 10. CIERRE

El presente modelo UML documenta los actores, datos, flujos y componentes del sistema **"Sitio Web y Sistema de Gestión — Albergue Peluchín"**, sirviendo de referencia técnica para el desarrollo, las pruebas funcionales (E7) y la elaboración del Manual de Sistemas (E9). Los diagramas se actualizarán si se incorporan cambios de alcance aprobados mediante adenda (Cláusula Décima Primera del contrato).

---

### ANEXO — COMO RENDERIZAR LOS DIAGRAMAS

| Herramienta | Pasos |
|-------------|-------|
| **GitHub / GitLab** | Subir el `.md` tal cual; los bloques `mermaid` se renderizan automáticamente |
| **mermaid.live** | Copiar cada bloque, pegarlo en [mermaid.live](https://mermaid.live) y exportar como PNG/SVG |
| **VS Code** | Instalar la extensión "Markdown Preview Mermaid Support" y abrir la vista previa |
| **Notion** | Usar el bloque `/code` con lenguaje `mermaid` o pegar la imagen exportada |


