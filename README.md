# Node.js & Express Basics 

Este repositorio contiene mis avances y prácticas en el desarrollo Backend, evolucionando desde soluciones nativas hasta la arquitectura de microservicios y REST APIs con Express.js.

##  Tecnologías Utilizadas
- **Runtime:** Node.js
- **Framework:** Express.js
- **Linter / Estilo:** StandardJS
- **Dependencias:** `picocolors`, `express`

---

## Último Avance: `server-express.js`
He desarrollado una **REST API** funcional para la gestión de proyectos, aplicando conceptos avanzados de arquitectura de software como middlewares, códigos de estado HTTP semánticos y persistencia de datos en memoria (Data Structures en runtime).

###  Endpoints Disponibles

| Método | Endpoint | Descripción | Código HTTP |
| :--- | :--- | :--- | :--- |
| **GET** | `/proyectos` | Recupera la lista completa de proyectos en formato JSON. | `200 OK` |
| **POST** | `/proyectos` | Inserta un nuevo proyecto en el payload (Body). | `201 Created` |

###  Cómo Inicializar y Probar el Proyecto

1. **Instalar las dependencias del proyecto:**
   ```bash
   npm install
