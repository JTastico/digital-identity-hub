# Digital Identity Hub

Tarjeta de presentación digital y portafolio personal de **Jamil Raúl Turpo Arocutipa** — Desarrollador Full Stack & Gestor de Proyectos. Aplicación web (SPA) bilingüe (Español / Inglés) con diseño *glassmorphism*.

## Tecnologías

- **Vite** — bundler y servidor de desarrollo
- **React 18** + **TypeScript**
- **React Router** (HashRouter)
- **Tailwind CSS** + **shadcn/ui** (Radix UI)
- **lucide-react** y **react-icons** para iconografía

## Requisitos

- Node.js y npm instalados ([instalar con nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

## Desarrollo local

```sh
# 1. Clonar el repositorio
git clone https://github.com/JTastico/digital-identity-hub.git

# 2. Entrar al directorio
cd digital-identity-hub

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo (http://localhost:8080)
npm run dev
```

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Build de producción (carpeta `dist/`) |
| `npm run build:dev` | Build en modo desarrollo |
| `npm run preview` | Previsualiza el build de producción |
| `npm run lint` | Ejecuta ESLint |

## Estructura

```
src/
├── pages/        # Rutas: Landing, Portfolio, CV, Tarjeta Virtual, 404
├── components/   # Secciones del portafolio + componentes UI (shadcn)
├── context/      # LanguageContext (i18n ES/EN)
├── data/         # translations.ts
├── hooks/        # Hooks personalizados
└── lib/          # Utilidades
```

## Rutas

| Ruta | Página |
|------|--------|
| `/` | Tarjeta de bienvenida (Landing) |
| `/detalles` | Portafolio completo |
| `/cv` | Curriculum Vitae |
| `/tarjeta-virtual` | Tarjeta virtual con QR |

## Despliegue

Genera el build de producción y publica el contenido de la carpeta `dist/` en cualquier hosting estático (GitHub Pages, Netlify, Vercel, etc.):

```sh
npm run build
```
