# antigravity-platform

Monorepo profesional para marketplace de perfiles adultos con moderación.

## 📚 Estructura

```
/
├── apps/
│   ├── web/              ← Next.js (web pública, solo muestra aprobados)
│   └── mobile-app/       ← React Native / Expo (crea perfiles pendientes)
├── packages/
│   └── supabase/         ← Cliente compartido + tipos
├── .env.example          ← Variables de entorno
├── package.json          ← Workspaces configurados
└── README.md
```

## ⚙️ Requisitos

- **Node.js** 18+
- **npm** 9+
- **Proyecto Supabase** con:
  - Tabla `profiles` con columnas:
    - `id` (uuid, PK)
    - `display_name` (text)
    - `city` (text, nullable)
    - `bio` (text, nullable)
    - `avatar_url` (text, nullable)
    - `status` (text) → valores: `'pending'` | `'approved'` | `'rejected'`
    - `created_at` (timestamp, default now())
  - Bucket de storage `profile-avatars` con RLS apropiado

## 🚀 Instalación

### 1. Clonar repositorio

```bash
git clone https://github.com/streetwalker111777-star/pamela-zaragoza-perfil.git
cd pamela-zaragoza-perfil
```

### 2. Configurar entorno

```bash
cp .env.example .env
```

Edita `.env` con tus credenciales de Supabase:

```env
SUPABASE_URL=https://tuproyecto.supabase.co
SUPABASE_ANON_KEY=tu_anon_key_aqui
NEXT_PUBLIC_SUPABASE_URL=https://tuproyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_aqui
```

### 3. Instalar dependencias

```bash
npm install
```

## 🖥️ Ejecución

### Web (Next.js)

Muestra solo perfiles con `status = 'approved'`:

```bash
npm run dev:web
```

Accede a `http://localhost:3000`

### App Móvil (Expo)

Crea perfiles con `status = 'pending'`:

```bash
npm run dev:mobile
```

Esto abrirá Expo DevTools. Desde ahí puedes:
- Abrir en emulador Android/iOS
- Escanear QR con Expo Go en dispositivo físico

## 📝 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev:web` | Inicia web en desarrollo |
| `npm run dev:mobile` | Inicia app móvil (Expo) |
| `npm run build:web` | Build de producción para web |
| `npm run build:all` | Build de todos los workspaces |
| `npm run install:all` | Reinstala todas las dependencias |

## 🔐 Seguridad

- **Nunca** publiques `SUPABASE_SERVICE_ROLE_KEY` en este repo
- Solo usa `SUPABASE_ANON_KEY` en frontend/app
- Configura **Row Level Security (RLS)** en Supabase:
  - La web solo debe leer `status = 'approved'`
  - La app crea con `status = 'pending'`
  - La moderación se hace desde dashboard de Supabase

## 📦 Flujo de Moderación
1. Usuario crea perfil en **app móvil** → `status = 'pending'`
2. Moderador revisa desde **dashboard de Supabase**
3. Moderador cambia `status` a `'approved'` o `'rejected'`
4. Solo perfiles `'approved'` aparecen en **web pública**

## 📌 Notas

- Este es un monorepo con **npm workspaces**
- El paquete `@antigravity/supabase` es compartido por web y app
- Ambos proyectos son independientes pero comparten backend en Supabase

## 👤 Autor

**streetwalker111777-star**

---

⚠️ **Advertencia**: Este proyecto es para uso de marketplace de adultos. Asegúrate de cumplir con las leyes locales y regulaciones de contenido para adultos.
