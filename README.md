# Vecinos Plus

Sitio web para **Vecinos Plus**, una empresa de mudanzas, reubicaciones, envíos y acarreos en Panamá. El proyecto está construido para editarse rápidamente desde archivos locales, desplegarse en Vercel y transferirse de forma ordenada al cliente cuando corresponda.

## Objetivo del sitio

El sitio debe comunicar una marca joven, cercana y práctica: "tu vecino que te ayuda a resolver la mudanza". El visitante debe poder conocer los servicios, resolver dudas básicas y solicitar una cotización sin fricción.

Servicios principales:

- Mudanzas residenciales
- Mudanzas en apartamentos y P.H.
- Mudanzas de oficina
- Reubicaciones
- Envíos y logística local
- Acarreos
- Transporte de artículos personales
- Vueltas puntuales

## Identidad visual

Paleta base de Vecinos Plus:

```css
--primary: #01267e; /* azul, confianza y estructura */
--secondary: #f47a0e; /* naranja, energía y CTAs */
--accent: #fe2400; /* rojo, detalles de alto impacto, con moderación */
```

Uso recomendado:

- `#01267E` para navegación, footer, encabezados y estructura.
- `#F47A0E` para botones, acentos e íconos.
- `#FE2400` con moderación, para pequeños highlights o detalles de urgencia visual.

## Stack

- Astro
- Tailwind CSS
- TypeScript ligero
- Contenido en archivos locales
- Web3Forms para el formulario de cotización
- Vercel para deploy
- Sanity (opcional / dataset compartido) solo si el cliente necesita editar blog desde un panel

## Instalar

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build y preview

```bash
npm run build
npm run preview
```

## Editar información del negocio

Actualiza `src/config/site.ts` para cambiar:

- Nombre del negocio
- WhatsApp / teléfono
- Email
- Instagram
- Dirección y área de cobertura
- Horarios
- SEO
- Colores base

Usa placeholders si falta información real:

```text
[CORREO PENDIENTE]
[DIRECCIÓN PENDIENTE]
[ÁREA DE COBERTURA PENDIENTE]
[HORARIO PENDIENTE]
[EQUIPO PENDIENTE]
```

No inventar dirección, correo, horario, flota, cantidad de camiones, años de experiencia, seguros, testimonios, precios ni garantías.

**WhatsApp**: confirmado como `6780-4453`. `siteConfig.whatsapp` está definido en formato internacional (`"50767804453"`) en `src/config/site.ts`, así que todos los CTA de WhatsApp ya arman un link `wa.me` real con mensaje precargado.

## Editar contenido

- Servicios: `src/content/services.ts`
- Preguntas frecuentes: `src/content/faqs.ts`
- Blog (fallback estático): `src/content/blog.ts`
- Configuración general: `src/config/site.ts`

Las imágenes públicas viven en `public/images`. Las fotos actuales de mudanzas fueron sourceadas de Unsplash como placeholders de alta calidad mientras se consiguen fotos reales de la operación (ver sección de imágenes más abajo).

## SEO sugerido

Título recomendado:

```text
Vecinos Plus | Mudanzas, Acarreos y Logística en Panamá
```

Meta description recomendada:

```text
Vecinos Plus ofrece servicios de mudanzas, reubicaciones, acarreos, envíos y logística local en Panamá con trato cercano, práctico y sin enredo.
```

Búsquedas objetivo:

- mudanzas en Panamá
- empresa de mudanzas en Panamá
- mudanza apartamento Panamá
- mudanza PH Panamá
- acarreo Panamá
- envíos Panamá
- logística local Panamá
- reubicaciones Panamá
- Vecinos Plus / Vecinos Plus Panamá

## Formulario con Web3Forms

1. Crea una cuenta o formulario en Web3Forms.
2. Copia el access key.
3. Crea `.env` local usando `.env.example` como referencia.
4. Define:

```env
PUBLIC_WEB3FORMS_ACCESS_KEY=tu_access_key
```

En Vercel, agrega la misma variable en `Project Settings > Environment Variables`.

No subir `.env` a GitHub.

## Instagram

Instagram confirmado:

```text
https://www.instagram.com/vecinosplus/
```

## Imágenes

Las fotos de mudanzas (`public/images/hero-bg.jpg`, `about-video.jpg`, `contact-pic.jpg`, `services/*.jpg`, `blog/*.jpg`) fueron sourceadas de Unsplash (licencia libre de uso) como placeholders de buena calidad mientras Vecinos Plus consigue fotos reales de su propia operación. Reemplázalas cuando tengas material real, manteniendo los mismos nombres de archivo para no tener que tocar el código.

El logo real de Vecinos Plus está en `public/images/logo.png` y se usa en el Header y el Footer. `public/images/footer-logo.png` es artwork del template anterior y quedó sin usar.

## Repositorio

```text
https://github.com/alfonsodelag/vecinos-plus.git
```

## Deploy en Vercel

1. Sube el proyecto a GitHub (ver repositorio arriba).
2. Importa el repositorio en Vercel.
3. Framework preset: Astro.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Configura `PUBLIC_WEB3FORMS_ACCESS_KEY` si usarás el formulario.
7. Actualiza `site` en `astro.config.mjs` y `siteConfig.url` en `src/config/site.ts` con el dominio final una vez desplegado.
8. Conecta el dominio del cliente.

## Sanity

El dataset de Sanity (`jdls3x4j` / `production`) es compartido entre varios proyectos demo del mismo estudio. No se cambiaron `projectId` ni `dataset`. El blog de Vecinos Plus todavía no tiene artículos propios cargados en Sanity, así que la query de blog (`src/lib/sanity.ts`) filtra por una lista de slugs vacía y el sitio usa los posts estáticos de `src/content/blog.ts` como contenido real mientras tanto. Si se cargan artículos de Vecinos Plus en el Studio, agrega sus slugs a `vecinosPlusPostSlugs` en `src/lib/sanity.ts`.

## Checklist antes de entregar

- No quedan referencias a SmileUp Dental Clinic, Clínica Derma, Odonto Panamá ni otras marcas anteriores.
- Header y footer usan Vecinos Plus.
- Servicios están actualizados (mudanzas, acarreos, reubicaciones, envíos).
- Instagram apunta a `https://www.instagram.com/vecinosplus/`.
- WhatsApp confirmado: 6780-4453 (`wa.me/50767804453`).
- Logo real de Vecinos Plus en Header y Footer.
- Colores usan la paleta Vecinos Plus (#01267E / #F47A0E / #FE2400).
- SEO title y meta description actualizados.
- Imágenes de mudanzas colocadas (Unsplash) como placeholder de calidad.
- Formulario de cotización funciona o queda documentado como pendiente.
- `npm run build` pasa correctamente.
- `.env`, `.vercel`, `node_modules`, `dist` y `.astro` no están en Git.

## Comandos útiles

Buscar referencias viejas:

```bash
grep -R "SmileUp\|Dental\|Odonto\|Derma\|Edysbell" -n src public . --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=.astro --exclude-dir=.git
```

Ver estado de Git:

```bash
git status
```

Compilar:

```bash
npm run build
```

Previsualizar build:

```bash
npm run preview
```
