# 🎬 Video Club

Aplicación web en desarrollo que mostrará películas, series y datos dinámicos.  
Actualmente solo está implementada la parte **frontend**, pero el proyecto incluye una carpeta **backend** para futuras funciones.

---

## 🚀 Características (actuales)
- Listado dinámico de películas con **JavaScript**.
- Diseño moderno y **responsive** con **CSS Grid**.
- Animaciones con hover para mostrar datos adicionales.
- Código organizado por carpetas para facilitar el escalado.

---

## 🛠 Tecnologías
### **Frontend**
- HTML5
- CSS3
- JavaScript (ES6)
- jQuery

### **Backend (planificado)**
- Node.js + Express (por definir)
- Posible conexión a una base de datos (MongoDB o SQL)

---

## 📂 Estructura del proyecto

# Video Club PelisApp

Estructura de proyecto:

```bash
video-club-pelisapp/
│
├── frontend/ 
│   ├── index.html
│   ├── styles/
│   │   └── styles.css
│   └── scripts/
│       ├── index.js
│       └── tempData.js
│
├── backend/ # Código del servidor (en construcción)
│   └── server.js
│
└── README.md

## 📅 Roadmap
- [x] Estructura inicial de frontend.
- [X] Crear estructura básica del backend con Node.js.
- [ ] Conectar con base de datos (películas dinámicas).
- [ ] Añadir autenticación de usuarios.
- [ ] Panel de administración para gestionar catálogo.
- [ ] Mejorar diseño con animaciones y dark mode.

## Novedades
- Se eliminó el array estático y ahora los datos se obtienen mediante una solicitud **GET** a la API:  
  [https://students-api.up.railway.app/movies](https://students-api.up.railway.app/movies)
- Las tarjetas de películas se renderizan dinámicamente con la información recibida (poster, título, duración, director, puntaje y género).

## Tecnologías
- **HTML5** y **CSS3** (con diseño responsive en grid).
- **JavaScript** (DOM y jQuery para la petición AJAX).
- **Git/GitHub** para control de versiones.
---

## 🤝 Contribuciones
¡Las contribuciones son bienvenidas!  
Si deseas aportar, crea un **fork** del repositorio y abre un **pull request**.

---

## ✍️ Autor
**Cristian Sebastian Galván**  
[GitHub](https://github.com/CristianG5) | [LinkedIn](https://www.linkedin.com/in/cristian-sebastian-galvan-7766a6136/)


