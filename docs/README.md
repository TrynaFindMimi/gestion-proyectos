# GESTIÓN DEL PROYECTO — ALBERGUE "PELUCHÍN"

## ÍNDICE GENERAL DE DOCUMENTACIÓN

---

**PROYECTO:** Desarrollo de sitio web y sistema de gestión para el albergue de perritos "Peluchín"

**ORGANIZACIÓN:** Albergue "Peluchín" — ONG sin fines de lucro (Llojeta, La Paz, Bolivia)

**EQUIPO DESARROLLADOR:** Mariana del Arroyo · Nahomi Humerez · Santiago Acha · Jorge Saenz

---

### ORDEN DE LECTURA SUGERIDO

| # | Documento | Contenido |
|---|-----------|-----------|
| 1 | [TDR_Peluchin.md](TDR_Peluchin.md) | Términos de referencia: información general, objetivos, alcance, requerimientos, entregables, pagos y condiciones |
| 2 | [TDR_Plan_Proyecto_Cronograma_Peluchin.md](TDR_Plan_Proyecto_Cronograma_Peluchin.md) | Plan del proyecto: sprints, dependencias, entregables (E1–E11) y riesgos identificados |
| 3 | [TDR_Contrato_Peluchin.md](TDR_Contrato_Peluchin.md) | Contrato de desarrollo (cláusulas, pagos, propiedad intelectual) |
| 4 | [TDR_Carta_Aceptacion_Peluchin.md](TDR_Carta_Aceptacion_Peluchin.md) | Carta de aceptación del proyecto |
| 5 | [TDR_Gestion_Riesgos_Peluchin.md](TDR_Gestion_Riesgos_Peluchin.md) | Gestión de riesgos: registro detallado, mitigación, contingencia y monitoreo |
| 6 | [TDR_Diagrama_WAE_Peluchin.md](TDR_Diagrama_WAE_Peluchin.md) | Diagramas WAE (Web Application Extension): mapas de navegación del sitio público y del panel de administración |
| 7 | [bitacoras/Bitacora_Sprint_1_Peluchin.md](bitacoras/Bitacora_Sprint_1_Peluchin.md) | Bitácora Sprint 1: instalación, tema y estructura (E1, E2, E3) |
| 8 | [bitacoras/Bitacora_Sprint_2_Peluchin.md](bitacoras/Bitacora_Sprint_2_Peluchin.md) | Bitácora Sprint 2: formularios, donaciones y contenido (E4) |
| 9 | [bitacoras/Bitacora_Sprint_3_Peluchin.md](bitacoras/Bitacora_Sprint_3_Peluchin.md) | Bitácora Sprint 3: panel de administración y funcionalidades avanzadas (E5, E6) |
| 10 | [bitacoras/Bitacora_Sprint_4_Peluchin.md](bitacoras/Bitacora_Sprint_4_Peluchin.md) | Bitácora Sprint 4: QA, despliegue, documentación y capacitación (E7, E8, E9, E10) |
| 11 | [Acta_Final_Entrega_Peluchin.md](Acta_Final_Entrega_Peluchin.md) | Acta final de entrega y recepción del proyecto |

---

### RELACIÓN ENTRE DOCUMENTOS

```mermaid
flowchart LR
    TDR["TDR_Peluchin.md<br/>(Términos de referencia)"] --> PLAN["TDR_Plan_Proyecto_Cronograma_Peluchin.md"]
    PLAN --> RIESGO["TDR_Gestion_Riesgos_Peluchin.md"]
    TDR --> CONTRATO["TDR_Contrato_Peluchin.md"]
    CONTRATO --> CARTA["TDR_Carta_Aceptacion_Peluchin.md"]
    PLAN --> WAE["TDR_Diagrama_WAE_Peluchin.md"]
```

---

### RESUMEN DEL PROYECTO

| Concepto | Detalle |
|----------|---------|
| **Plataforma** | WordPress (CMS) |
| **Duración total** | 16 semanas (8 de desarrollo + 8 de garantía) |
| **Metodología** | Sprints de 2 semanas |
| **Precio base** | Bs. 12,000 (más IVA) |
| **Entregables** | E1–E11 (ver Plan del Proyecto) |
