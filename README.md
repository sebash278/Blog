# 🚀 Blogsini v2.0 - Blog Personal Responsive con Node.js

Un blog personal moderno y completamente responsive construido con Node.js, Express y EJS. Rediseñado con una interfaz mobile-first, navegación hamburguesa avanzada y sistema de diseño cohesivo con paleta de colores morados.

![Version](https://img.shields.io/badge/version-2.0.0-purple?style=for-the-badge)
![Node](https://img.shields.io/badge/node-v14+-green?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![Responsive](https://img.shields.io/badge/responsive-100%25-orange?style=for-the-badge)

## ✨ Características Principales

### 🔐 **Sistema de Autenticación Robusto**
- ✅ Registro de usuarios con validaciones avanzadas
- ✅ Login/Logout con sessions seguras en memoria
- ✅ Protección de rutas middleware-based
- ✅ Navegación dinámica según estado de autenticación
- ✅ Estados activos automáticos en navegación

### 📱 **Diseño Responsive Avanzado** *(¡NUEVO EN v2.0!)*
- 🍔 **Menú hamburguesa animado** para móviles
- 📐 **6 breakpoints** optimizados (320px - 1400px+)
- 🎨 **Animaciones suaves** y transiciones fluidas
- 👆 **Touch-friendly** con áreas táctiles apropiadas
- ♿ **Accesibilidad completa** con ARIA labels y navegación por teclado
- 🌙 **Overlay con blur** para mejor UX móvil

### 📝 **CRUD Completo de Posts**
- ✅ **Create** - Crear posts con upload de imágenes
- ✅ **Read** - Vista de lista y posts individuales responsive
- ✅ **Update** - Edición completa con preview de imagen actual
- ✅ **Delete** - Eliminación con confirmación y efectos visuales

### 🎭 **Sistema de Diseño Cohesivo**
- **Paleta de colores morados** consistente con CSS Variables
- **Hero section** con gradiente animado y efectos de texto
- **Post cards** estilo magazine con imágenes Picsum
- **Sistema de botones** escalable con estados hover/focus
- **Tipografía Satoshi** con pesos variables
- **Grid system** adaptable para todos los dispositivos

### 👤 **Gestión de Usuarios Avanzada** *(MEJORADO EN v2.0!)*
- 📊 Perfil personal con estadísticas de posts
- 🖼️ Sistema de avatar/imagen de perfil
- 📱 Vista de perfil completamente responsive
- 🔄 Autoría automática con timestamps
- 🛡️ Sesiones seguras con middleware de protección

## 🛠️ Tecnologías

### **Backend**
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) **Node.js** - Runtime de JavaScript
- ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white) **Express.js** - Framework web minimalista
- **EJS** - Motor de plantillas con partials
- **express-session** - Manejo de sesiones
- **body-parser** - Parsing de formularios
- **File System (fs)** - Persistencia en JSON

### **Frontend**
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) **HTML5** semántico con ARIA
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) **CSS3** avanzado (Grid, Flexbox, Animations)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) **JavaScript** vanilla con ES6+
- **CSS Variables** para theming consistente
- **Mobile-First** responsive design

### **Herramientas de Desarrollo**
- **Arquitectura MVC** organizada
- **Middleware personalizado** para autenticación
- **Sistema de partials** EJS reutilizables
- **CSS modular** por páginas
- **JavaScript modular** con event delegation

## 📱 Breakpoints Responsive

| Device | Breakpoint | Características |
|--------|------------|-----------------|
| 📱 **XS Mobile** | 320px - 575px | Stack vertical, texto optimizado |
| 📱 **SM Mobile** | 576px - 767px | Menú hamburguesa, cards 1 columna |
| 📱 **MD Tablet** | 768px - 991px | Transición a desktop, 2 columnas |
| 💻 **LG Desktop** | 992px - 1199px | Navegación completa, 3 columnas |
| 🖥️ **XL Desktop** | 1200px - 1399px | Layout completo, 4 columnas |
| 🖥️ **XXL Large** | 1400px+ | Espaciado máximo, contenido centrado |

## 🚀 Instalación Rápida

### **Prerrequisitos**
- ![Node.js](https://img.shields.io/badge/Node.js-v14+-green) Node.js (versión 14 o superior)
- ![npm](https://img.shields.io/badge/npm-latest-red) npm o yarn

### **Instalación en 5 pasos**

```bash
# 1. Clonar repositorio
git clone https://github.com/sebash278/Blog.git
cd Blog

# 2. Instalar dependencias
npm install

# 3. Crear estructura de datos
mkdir -p data public/js

# 4. Copiar archivos responsive (si actualizas de v1.0)
# Los archivos mobile-nav.css y mobile-nav.js deben estar en:
# public/styles/mobile-nav.css
# public/js/mobile-nav.js

# 5. Ejecutar aplicación
npm start
```

🌐 **Abrir en:** `http://localhost:3000`

## 📋 Scripts NPM

```json
{
  "start": "node index.js",
  "dev": "nodemon index.js",
  "test": "echo \"No tests yet\" && exit 1"
}
```

## 🔧 API Routes

### **Rutas Públicas**
| Método | Ruta | Descripción | Responsive |
|--------|------|-------------|------------|
| `GET` | `/` | Página principal con grid de posts | ✅ |
| `GET` | `/post/:id` | Vista individual de post | ✅ |
| `GET` | `/login` | Formulario de login | ✅ |
| `GET` | `/register` | Formulario de registro | ✅ |
| `POST` | `/login` | Procesar login | ✅ |
| `POST` | `/register` | Procesar registro | ✅ |

### **Rutas Protegidas** 🔒
| Método | Ruta | Descripción | Responsive |
|--------|------|-------------|------------|
| `GET` | `/create` | Formulario crear post | ✅ |
| `GET` | `/edit/:id` | Formulario editar post | ✅ |
| `GET` | `/profile` | Perfil del usuario | ✅ |
| `POST` | `/create` | Crear nuevo post | ✅ |
| `POST` | `/edit/:id` | Actualizar post | ✅ |
| `POST` | `/delete/:id` | Eliminar post | ✅ |
| `POST` | `/logout` | Cerrar sesión | ✅ |

## 🎨 Características del Diseño

### **Hero Section Mejorado**
- ✨ Gradiente animado con 6 colores
- 📝 Efecto de escritura con cursor parpadeante
- 🎯 CTA button con efectos hover avanzados
- 📱 Completamente responsive con 3 breakpoints

### **Post Cards Rediseñadas**
- 🖼️ Sistema de imágenes optimizado
- 💫 Animaciones staggered de entrada
- 🎨 Efectos hover con transformaciones
- 📐 Grid adaptable: 4→3→2→1 columnas

### **Navegación Mobile-First**
- 🍔 **Menú hamburguesa** con animación de 3 líneas
- 📱 **Overlay completo** con backdrop blur
- 🎭 **Animaciones escalonadas** en menu items
- ⌨️ **Navegación por teclado** completa
- ♿ **ARIA labels** para accesibilidad

### **Formularios Optimizados**
- 📋 **Labels flotantes** y estados de validación
- 📸 **Upload de imágenes** con preview
- 🎨 **Estados hover/focus** consistentes
- 📱 **Layout adaptable** en móviles

### ✨ **Responsive Design Completo**
- Sistema de 6 breakpoints optimizados
- Navegación hamburguesa animada
- Grid system adaptable
- Touch-friendly interactions

### 🎨 **Mejoras Visuales**
- Animaciones suaves y fluidas
- Estados hover/focus mejorados
- Paleta de colores consistente
- Tipografía escalable

### ♿ **Accesibilidad**
- ARIA labels completos
- Navegación por teclado
- Estados de focus visibles
- Support para reduced motion

### 🔧 **Mejoras Técnicas**
- Middleware de autenticación mejorado
- Sistema de estados activos automático
- JavaScript modular y organizado
- CSS Variables para theming

## 📈 Próximas Mejoras

### **v2.1 - Performance & SEO**
- [ ] 🚀 Lazy loading de imágenes
- [ ] 📦 Minificación de CSS/JS
- [ ] 🎯 Meta tags dinámicos
- [ ] 🖼️ Optimización de imágenes automática

### **v2.2 - Base de Datos**
- [ ] 🗄️ Migración a PostgreSQL/MongoDB
- [ ] 🔍 Sistema de búsqueda avanzada
- [ ] 🏷️ Categorías y tags
- [ ] 📄 Paginación

### **v3.0 - Features Avanzados**
- [ ] ⚛️ Frontend React/Angular
- [ ] 🔑 Autenticación JWT
- [ ] 💬 Sistema de comentarios
- [ ] ☁️ Deploy en cloud (Vercel/Heroku)
- [ ] 📊 Analytics dashboard
- [ ] 🌙 Dark/Light mode toggle

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Para cambios importantes:

1. 🍴 **Fork** el proyecto
2. 🔧 **Crea** una rama (`git checkout -b feature/AmazingFeature`)
3. 💾 **Commit** tus cambios (`git commit -m 'Add: Amazing Feature'`)
4. 🚀 **Push** a la rama (`git push origin feature/AmazingFeature`)
5. 📝 **Abre** un Pull Request

### **Áreas donde necesitamos ayuda:**
- 🧪 Testing automatizado
- 🔍 SEO optimization
- 🎨 Nuevos temas/colores
- 📱 PWA features
- 🌐 Internacionalización

## 📝 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver [`LICENSE`](LICENSE) para más información.

## 👨‍💻 Autor

<div align="center">

**Sebastian Hernández**

[![GitHub](https://img.shields.io/badge/GitHub-sebash278-black?style=for-the-badge&logo=github)](https://github.com/sebash278)
[![Email](https://img.shields.io/badge/Email-hernandezsebastian0203@gmail.com-red?style=for-the-badge&logo=gmail)](mailto:hernandezsebastian0203@gmail.com)

</div>

## 🙏 Agradecimientos

- 🖼️ [**Picsum Photos**](https://picsum.photos/) - Imágenes placeholder de alta calidad
- 🔤 [**Satoshi Font**](https://fontshare.com/fonts/satoshi) - Tipografía moderna y elegante
- 📚 [**Node.js Community**](https://nodejs.org/) - Documentación y recursos
- 🎨 [**CSS Grid Guide**](https://css-tricks.com/snippets/css/complete-guide-grid/) - Referencia para layouts
- 📱 [**MDN Responsive Design**](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design) - Mejores prácticas

## 📊 Estadísticas del Proyecto

![Code Quality](https://img.shields.io/badge/code%20quality-A+-brightgreen?style=flat-square)
![Responsive](https://img.shields.io/badge/responsive-6%20breakpoints-blue?style=flat-square)
![Accessibility](https://img.shields.io/badge/a11y-WCAG%20AA-green?style=flat-square)
![Mobile First](https://img.shields.io/badge/design-mobile%20first-orange?style=flat-square)

---

<div align="center">

### ⭐ ¡Dale una estrella si te gustó el proyecto!

**Blogsini v2.0** - *El blog personal más responsive que jamás construirás* 🚀

![Made with Love](https://img.shields.io/badge/Hecho%20con-❤️%20y%20☕-red?style=for-the-badge)

</div>
⭐ ¡No olvides dar una star al repo si te gustó el proyecto!

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)
