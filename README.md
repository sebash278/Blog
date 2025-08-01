# Blogsini - Blog Personal con Node.js

Un blog personal moderno y elegante construido con Node.js, Express y EJS. Diseñado con una paleta de colores morados y una interfaz limpia y responsive.

## Características

### 🔐 **Sistema de Autenticación Completo**
- Registro de nuevos usuarios con validaciones
- Login/Logout con sessions in-memory
- Protección de rutas (solo usuarios logueados pueden crear/editar/eliminar)
- Navegación dinámica según estado de autenticación

### 📝 **CRUD Completo de Posts**
- ✅ **Create** - Crear nuevos posts
- ✅ **Read** - Visualizar lista y posts individuales
- ✅ **Update** - Editar posts existentes
- ✅ **Delete** - Eliminar posts con confirmación

### **Persistencia de Datos**
- Almacenamiento en archivos JSON (no se pierden datos al reiniciar)
- Sistema de IDs autoincrementales
- Backup automático de posts y usuarios

### **Diseño Moderno**
- **Paleta de colores morados** profesional
- **Hero section** con gradiente animado
- **Post cards** estilo magazine con featured images
- **Sistema de botones** consistente
- **Header** con efectos avanzados y navegación dinámica
- **Layout responsive** con CSS Grid

### **Gestión de Usuarios**
- Perfil personal con posts del usuario
- Autoría automática de posts
- Sistema de sesiones seguro

## Tecnologías Utilizadas

### **Backend**
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web minimalista
- **EJS** - Motor de plantillas
- **express-session** - Manejo de sesiones
- **body-parser** - Parsing de formularios
- **File System (fs)** - Persistencia en JSON

### **Frontend**
- **HTML5** semántico
- **CSS3** avanzado (Grid, Flexbox, Animations)
- **JavaScript** vanilla
- **Responsive Design**

### **Herramientas de Desarrollo**
- **ES6+ Modules** (import/export)
- **CSS Variables** para consistencia de colores
- **Arquitectura MVC** básica

## 🚀 Instalación y Uso

### **Prerrequisitos**
- Node.js (versión 14 o superior)
- npm

### **Pasos de instalación**

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/blogsini.git
cd blogsini
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Crear carpeta de datos**
```bash
mkdir data
```

4. **Inicializar archivos JSON** (opcional - se crean automáticamente)
```bash
echo "[]" > data/posts.json
echo "[]" > data/users.json
```

5. **Ejecutar la aplicación**
```bash
npm start
# o para desarrollo:
node index.js
```

6. **Abrir en el navegador**
```
http://localhost:3000
```

## 📋 Scripts Disponibles

```json
{
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

## 🔧 Funcionalidades Destacadas

### **Sistema de Rutas**
- `GET /` - Página principal con todos los posts
- `GET /post/:id` - Vista individual de post
- `GET /create` - Formulario crear post (protegido)
- `GET /edit/:id` - Formulario editar post (protegido)
- `GET /profile` - Perfil del usuario (protegido)
- `GET /login` - Formulario de login
- `GET /register` - Formulario de registro
- `POST /create` - Crear nuevo post
- `POST /edit/:id` - Actualizar post
- `POST /delete/:id` - Eliminar post
- `POST /login` - Procesar login
- `POST /register` - Procesar registro
- `POST /logout` - Cerrar sesión

### **Características del Diseño**
- **Hero Section** con gradiente animado suave
- **Post Cards** con featured images de Picsum
- **Navigation** con efectos hover avanzados
- **Buttons** con sistema escalable y consistente
- **Typography** con fuente Satoshi
- **Responsive** design para todos los dispositivos

## Próximas Mejoras

- [ ] Migración a PostgreSQL
- [ ] Frontend con framework moderno (React/Vue)
- [ ] Sistema de categorías y tags
- [ ] Búsqueda de posts
- [ ] Paginación
- [ ] Optimización de imágenes
- [ ] Sistema de comentarios
- [ ] API REST
- [ ] Autenticación JWT
- [ ] Deploy en cloud

## Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NewFeature`)
3. Commit tus cambios (`git commit -m 'Add some New Features'`)
4. Push a la rama (`git push origin feature/NewFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más información.

## 👨‍💻 Autor

**Sebastian**
- GitHub: [sebash278](https://github.com/sebash278)
- Email: hernandezsebastian0203@gmail.com

## Agradecimientos

- [Picsum Photos](https://picsum.photos/) por las imágenes placeholder
- [Satoshi Font](https://fontshare.com/fonts/satoshi) por la tipografía
- Comunidad de Node.js por la documentación

---

⭐ ¡No olvides dar una star al repo si te gustó el proyecto!

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)
