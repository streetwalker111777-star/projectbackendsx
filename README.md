# Pamela Zaragoza - Perfil Personal

Galería web estática personal con diseño moderno, responsive y tema mixto claro/oscuro.

## 🌐 Demo en Vivo

- **Netlify (recomendado)**: Conecta este repositorio a Netlify para despliegue automático
- **GitHub Pages**: Disponible en `https://streetwalker111777-star.github.io/pamela-zaragoza-perfil/`

## 📚 Estructura del Proyecto

```
pamela-zaragoza-perfil/
├── index.html          # Página principal con galería
├── css/
│   └── style.css       # Estilos con tema mixto
├── images/
│   ├── pamela-01.jpg   # 10 fotos en total
│   └── ...
├── videos/
│   ├── pamela-01.mp4   # 5 vídeos en total
│   └── ...
├── netlify.toml        # Configuración para Netlify
└── README.md           # Este archivo
```

## 🚀 Guía de Despliegue (Paso a Paso)

### Opción 1: Netlify (Recomendado)

1. **Subir tus fotos y vídeos:**
   - Crea las carpetas `images/` y `videos/` en la raíz
   - Añade 10 fotos: `pamela-01.jpg` hasta `pamela-10.jpg`
   - Añade 5 vídeos: `pamela-01.mp4` hasta `pamela-05.mp4`
   - Haz commit y push de los archivos

2. **Conectar con Netlify:**
   - Ve a [netlify.com](https://netlify.com) y crea una cuenta (es gratis)
   - Haz clic en "Add new site" → "Import an existing project"
   - Conecta tu cuenta de GitHub
   - Selecciona este repositorio: `pamela-zaragoza-perfil`
   - Netlify detectará automáticamente la configuración de `netlify.toml`
   - Haz clic en "Deploy site"

3. **Personalizar el dominio (opcional):**
   - En el dashboard de Netlify, ve a "Domain settings"
   - Cambia el nombre del sitio o conecta un dominio personalizado

### Opción 2: GitHub Pages

1. **Subir tus archivos multimedia** (igual que en Netlify)

2. **Activar GitHub Pages:**
   - Ve a la pestaña "Settings" de este repositorio
   - En el menú lateral, haz clic en "Pages"
   - En "Source", selecciona la rama `main` y la carpeta `/` (root)
   - Haz clic en "Save"
   - Espera 1-2 minutos y tu sitio estará en:
     `https://streetwalker111777-star.github.io/pamela-zaragoza-perfil/`

## 🖼️ Cómo Añadir Tus Fotos y Vídeos

### Método 1: Interfaz Web de GitHub (Más fácil)

1. En este repositorio, haz clic en "Add file" → "Upload files"
2. Arrastra tus imágenes a la zona de carga
3. Antes de hacer commit, escribe en el cuadro de nombre:
   - Para fotos: `images/pamela-01.jpg`
   - Para vídeos: `videos/pamela-01.mp4`
4. Repite para cada archivo
5. Haz clic en "Commit changes"

### Método 2: Git desde tu computadora

```bash
# Clonar el repositorio
git clone https://github.com/streetwalker111777-star/pamela-zaragoza-perfil.git
cd pamela-zaragoza-perfil

# Crear carpetas
mkdir images videos

# Copiar tus archivos a las carpetas
cp /ruta/a/tus/fotos/* images/
cp /ruta/a/tus/videos/* videos/

# Subir los cambios
git add .
git commit -m "Añadir fotos y vídeos"
git push origin main
```

## ⚙️ Personalización
### Cambiar textos e información
**Edita `index.html`:**
- Línea 14: Cambiar "Pamela" por tu nombre
- Línea 15: Cambiar "Zaragoza" y disponibilidad
- Líneas 22-25: Actualizar datos personales
- Líneas 74-77: Personalizar la sección "Sobre mí"
- Línea 83: Añadir enlace de contacto (Telegram, WhatsApp, etc.)

### Cambiar colores y estilo

**Edita `css/style.css`:**
- Líneas 1-7: Variables de color (`:root`)
  - `--accent`: Color principal (por defecto rosa: `#e6397f`)
  - `--bg-dark`: Fondo oscuro del hero
  - `--bg-light`: Fondo claro del contenido

## 📱 Características

- ✅ Diseño responsive (se adapta a móviles y tablets)
- ✅ Lightbox para ampliar fotos al hacer clic
- ✅ Reproductor de vídeo integrado
- ✅ Tema mixto claro/oscuro con degradado
- ✅ Efectos hover en imágenes
- ✅ 100% estático (sin backend ni base de datos)
- ✅ Optimizado para SEO
- ✅ Carga rápida

## 👨‍💻 Tecnologías

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- JavaScript Vanilla (para el modal de fotos)
- Sin dependencias externas

## 🔧 Problemas Comunes

**Las imágenes no se ven:**
- Verifica que las imágenes estén en `images/` con los nombres correctos: `pamela-01.jpg`, `pamela-02.jpg`, etc.
- Asegúrate de que los nombres sean exactamente iguales (mayúsculas/minúsculas importan)

**Los vídeos no cargan:**
- Los vídeos deben estar en formato `.mp4`
- Si son muy pesados (>50MB), considera comprimirlos con [HandBrake](https://handbrake.fr/)

**El sitio no se actualiza:**
- Espera 1-2 minutos después de hacer push
- Limpia la caché del navegador (Ctrl+Shift+R en Chrome/Firefox)

## 📝 Licencia

Este proyecto es de uso personal. Puedes modificarlo y adaptarlo libremente.

---

¿💡 Necesitas ayuda? Abre un [Issue](https://github.com/streetwalker111777-star/pamela-zaragoza-perfil/issues) en este repositorio.
