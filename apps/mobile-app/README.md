# @antigravity/mobile-app

> Aplicación móvil de Antigravity Platform - creación de perfiles pendientes de moderación.

## 🚀 Tecnologías

- **React Native** con Expo
- **TypeScript**
- **Expo Image Picker** (subida de fotos)
- **Supabase** (cliente compartido desde `@antigravity/supabase`)

## 📋 Funcionalidad

- Formulario de creación de perfiles
- Subida de imagen de perfil
- Los perfiles se crean con `status = 'pending'`
- Requieren aprobación manual antes de aparecer en la web

## 🛠️ Instalación

Desde la raíz del monorepo:

```bash
npm install
```

## 🖥️ Ejecución

Desde la raíz del monorepo:

```bash
npm run dev:mobile
```

O desde esta carpeta:

```bash
npm start
```

Esto abrirá Expo DevTools. Opciones:
- Escanear QR con Expo Go (dispositivo físico)
- Abrir en emulador Android
- Abrir en simulador iOS
- Ejecutar en navegador web

## 📦 Build

Para generar APK/IPA:

```bash
eas build --platform android
eas build --platform ios
```

## 📝 TODO

- [ ] Inicializar proyecto Expo
- [ ] Instalar dependencias (expo-image-picker, etc)
- [ ] Integrar cliente Supabase compartido
- [ ] Crear formulario de perfil
- [ ] Implementar subida de imágenes
- [ ] Validaciones de formulario
- [ ] Manejo de errores
