# GUASAPALO

Sitio de [guasapalo.com](https://guasapalo.com). Entrenamiento práctico por video: qué decir, cómo dirigir, cómo no desaparecer cuando ella está lejos y pide que le hables.

No es terapia. No hay PDF. No hay checkout. La web convierte a WhatsApp: se escribe **GUASA**.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · `next dev --turbopack`

## 1. Pegar WhatsApp en `.env.local`

Copia el ejemplo y pon el número real, solo dígitos, sin `+` ni espacios:

```bash
cp .env.example .env.local
```

```bash
NEXT_PUBLIC_WHATSAPP=381641409093
```

El número vive en un solo archivo de config: `lib/site.ts` (lee `NEXT_PUBLIC_WHATSAPP`). Todos los botones abren `https://wa.me/NUMERO?text=` con un mensaje prefijado según la página.

Mensaje por defecto:

```text
GUASA. Vi guasapalo.com. Relación a distancia. Quiero la sesión.
```

## 2. Correr en local

```bash
npm i
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). El script usa Turbopack.

## 3. Deploy en Vercel

1. Sube el repo a GitHub / GitLab / Bitbucket.
2. En [vercel.com](https://vercel.com) → Add New Project → importa el repo.
3. Framework: Next.js (lo detecta solo; hay un `vercel.json` mínimo).
4. Environment variable: `NEXT_PUBLIC_WHATSAPP` = el número real (mismos dígitos que en `.env.local`).
5. Deploy. Anota la URL `*.vercel.app`.
6. En el proyecto: Settings → Domains → agrega `guasapalo.com` y `www.guasapalo.com`. Vercel te dirá los records exactos (A / ALIAS / CNAME).

Cada vez que cambies el número, actualiza la env en Vercel y vuelve a desplegar: `NEXT_PUBLIC_` se incrusta en el build.

## 4. DNS en Cloudflare

El dominio se queda en Cloudflare. El sitio se sirve en Vercel. No hace falta un Worker.

1. Cuenta Cloudflare → Add a domain → `guasapalo.com`.
2. Cambia los nameservers del registrador a los que Cloudflare te dé. Espera a que propague.
3. SSL/TLS → **Full (strict)**. HTTPS always / Always Use HTTPS: on.
4. Redirect `www` → apex: Redirect Rules (o Page Rule) `www.guasapalo.com/*` → `https://guasapalo.com/$1`. En Vercel, marca `guasapalo.com` como dominio primario y `www` como redirect.
5. Records (copia los del panel de Vercel; no inventes IPs):

   | Tipo  | Nombre | Contenido              | Proxy                         |
   | ----- | ------ | ---------------------- | ----------------------------- |
   | A     | `@`    | IP que dé Vercel       | DNS only (gris) si hay duda   |
   | CNAME | `www`  | `cname.vercel-dns.com` | DNS only (gris) si hay duda   |

   **Proxy naranja (nube) solo si no rompe el SSL de Vercel.** Si el certificado falla, el sitio da error 525/526 o “too many redirects”: pasa apex y `www` a **DNS only** y deja SSL en Full (strict). No pongas Flexible.

6. No montes Workers, WAF custom ni Page Rules de cache agresivo sobre HTML de Next.js. El cache de assets lo resuelve Vercel.

## Páginas

| Ruta          | Qué es                                      |
| ------------- | ------------------------------------------- |
| `/`           | Home: definición, dolor, precio, FAQ corto  |
| `/sesion`     | Promesa, 45 min, qué traer, incluye / no    |
| `/guias`      | Índice de guías públicas                    |
| `/guias/[slug]` | Cinco textos orientativos                 |
| `/faq`        | Preguntas                                   |
| `/aviso`      | No es terapia, +18, confidencialidad        |
| `/privacidad` | WhatsApp, no vendemos listas, cookies mínimas |

## Marca (color)

Noche + calor + control. No es sitio rojo de webcam.

- Fondo `#140E0C` / `#1A1410`
- Superficie `#211A16`
- Texto `#F4EDE4` · secundario `#C4B6A8`
- Vino `#8E2F33` · ámbar `#C9842A` · líneas `#3A2F28`
- Verde WhatsApp solo en el icono del botón flotante

Tipografía: Fraunces (display) + Outfit (cuerpo).

## Qué no hay a propósito

- Formularios de email
- Stripe / checkout
- PDF descargable
- Calendario embebido
- Tracking de mentira (hay un `TODO` en `app/layout.tsx` para Pixel/GA4)
- Oferta para mujeres en esta versión

## Estructura

```text
app/            páginas, SEO, sitemap, robots
components/     header, footer, WhatsApp, precio, FAQ
lib/site.ts     config: WhatsApp, precios, metadata, JSON-LD
lib/guides.ts   guías públicas
lib/faq.ts      preguntas
public/og.png   1200×630
```
