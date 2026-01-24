apps/web/README.md# @antigravity/web

> Aplicación web pública de Antigravity Platform - muestra solo perfiles aprobados.

## 🚀 Tecnologías

- **Next.js 15+** con App Router
- **TypeScript**
- **Tailwind CSS**
- **Supabase** (cliente compartido desde `@antigravity/supabase`)

## 📋 Funcionalidad

- Muestra **solo** perfiles con `status = 'approved'`
- Diseño responsive y moderno
- Server-side rendering para SEO
- Dark/light mode preparado

## 🛠️ Instalación

Desde la raíz del monorepo:

```bash
npm install
```

## 🖥️ Ejecución

Desde la raíz del monorepo:

```bash
npm run dev:web
```

O desde esta carpeta:

```bash
npm run dev
```

Accede a `http://localhost:3000`

## 📦 Build

```bash
npm run build
```

## 📝 TODO

- [ ] Inicializar proyecto Next.js
- [ ] Configurar Tailwind CSS
- [ ] Integrar cliente Supabase compartido
- [ ] Crear página de listado de perfiles
- [ ] Añadir página de detalle de perfil
- [ ] Implementar filtros y búsqueda
