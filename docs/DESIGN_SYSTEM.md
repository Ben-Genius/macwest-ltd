# Macwest Limited — Design System

> Premium civil engineering & construction · Accra, Ghana
> Deep navy authority × Ghanaian gold warmth

---

## Philosophy

The Macwest design system is built around three principles:

1. **Authority without coldness** — deep navy conveys institutional trust; gold keeps it warm and human.
2. **Precision in everything** — spacing, type scale, and color are systematic, not ad-hoc.
3. **Motion is purposeful** — animations guide attention, never decorate.

---

## Typography

**Primary font: Space Grotesk** — used for both body text and headings. Geometric, modern, confident.

| Token | Value | Use |
|-------|-------|-----|
| `font-display` | Space Grotesk | Headings, labels, UI |
| `font-sans`    | Space Grotesk | Body text, paragraphs |
| `font-body`    | Inter         | Long-form prose (optional override) |
| `font-mono`    | Geist Mono    | Code, data |

### Heading scale (`<Heading size="...">`)

| Size         | Output               | Use case |
|--------------|----------------------|----------|
| `display-2xl`| 60–72px, bold        | Hero mega-headline |
| `display-xl` | 48–60px, bold        | Hero sub-display |
| `display-lg` | 40–52px, semibold    | Section hero (above the fold) |
| `display-md` | 32–40px, semibold    | Section headings |
| `display-sm` | 28–36px, semibold    | Sub-section, sidebar headings |
| `xl`         | 24–28px, semibold    | Card / article headings |
| `lg`         | 20–24px, semibold    | Component headings |
| `md`         | 18–20px, medium      | Tight headings |
| `sm`         | 16px, medium         | Label headings |
| `xs`         | 14px, medium         | Caption headings |

All headings set `letter-spacing: -0.025em` and `text-wrap: balance`.

---

## Color Palette

Defined with OKLCH for perceptually-uniform colour steps.

### Brand — Deep Navy
Conveys engineering authority, institutional trust, West African sky.

| Token         | Approx. hex | Use |
|---------------|-------------|-----|
| `brand-50`    | #EFF3FD | Tinted backgrounds |
| `brand-100`   | #DAEAF8 | Hover tints |
| `brand-200`   | #B6D3F1 | Borders on light bg |
| `brand-300`   | #7BABDF | Decorative elements |
| `brand-400`   | #4080C8 | Secondary text on white |
| `brand-500`   | #2655A4 | Interactive elements |
| `brand-600`   | #1E4082 | Links, mid emphasis |
| `brand-700`   | #183263 | Headings on light bg |
| `brand-800`   | #112348 | Strong headings |
| `brand-900`   | #0B1630 | Primary dark elements |
| `brand-950`   | #070D1E | Hero/nav backgrounds |

### Accent — Ghanaian Gold
Connects to Ghana's gold heritage. Excellence, quality, warmth.

| Token       | Approx. hex | Use |
|-------------|-------------|-----|
| `gold-50`   | #FFFAEE | Gold-tinted backgrounds |
| `gold-100`  | #FFF3CC | Light accents |
| `gold-200`  | #FFE599 | Borders on gold sections |
| `gold-300`  | #FFD066 | Decorative glow |
| `gold-400`  | **#F5BB33** | **Primary CTA, accent on dark** |
| `gold-500`  | #D99E00 | Text on white bg |
| `gold-600`  | #B88200 | Muted gold on white |
| `gold-700`  | #926500 | Strong gold text |
| `gold-800`  | #6E4A00 | Dark gold |
| `gold-900`  | #4C3200 | Very dark |
| `gold-950`  | #321F00 | Near-black gold |

### Sand — Warm Neutral
Site surfaces, off-white warmth, earthy depth.

| Token       | Use |
|-------------|-----|
| `sand-50`   | Page background |
| `sand-100`  | Subtle dividers, hover states |
| `sand-200`  | Card borders, input borders |
| `sand-300`  | Placeholder text |
| `sand-500`  | Muted body text |
| `sand-700`  | Secondary text |
| `sand-900`  | Near-black text alternative |

---

## Shadows

| Token             | Use |
|-------------------|-----|
| `shadow-soft`     | Subtle, minimal lift |
| `shadow-card`     | Standard card elevation |
| `shadow-elevated` | Modals, popovers |
| `shadow-floating` | Navigation dropdowns |
| `shadow-brand`    | Buttons on light bg with brand hue |
| `shadow-gold`     | Gold CTAs |

---

## Animation

Easing constants in `src/lib/animations.ts`:

| Name        | Curve | Use |
|-------------|-------|-----|
| `EASE.spring`   | `cubic-bezier(0.22, 1, 0.36, 1)` | Default: all UI transitions |
| `EASE.smooth`   | `cubic-bezier(0.4, 0, 0.2, 1)`   | Material-style, overlay fades |
| `EASE.outExpo`  | `cubic-bezier(0.16, 1, 0.3, 1)`  | Long reveals, page enters |
| `EASE.bounce`   | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Micro-bounce, delight |

### Pre-built variants

```ts
import { fadeInUp, staggerContainer, scaleIn, clipRevealUp } from "@/lib/animations";

// Usage in Framer Motion:
<m.div variants={staggerContainer} initial="hidden" animate="show">
  <m.h1 variants={fadeInUp}>Heading</m.h1>
  <m.p  variants={fadeInUp}>Body text</m.p>
</m.div>
```

---

## Component Reference

### `<Button>`

```tsx
import { Button } from "@/components/ui";

// Variants
<Button variant="primary">Primary</Button>
<Button variant="gold">Get a quote</Button>
<Button variant="outline">Learn more</Button>
<Button variant="outline-gold">Verify certs</Button>
<Button variant="ghost-white">Get in touch</Button>  // dark bg only
<Button variant="ghost">Subtle action</Button>
<Button variant="link">Inline link</Button>

// Sizes
<Button size="xs" />
<Button size="sm" />
<Button size="md" />   // default
<Button size="lg" />
<Button size="xl" />
<Button size="icon" />

// asChild — renders inner element
<Button asChild><Link href="/contact">CTA</Link></Button>
```

### `<Badge>`

```tsx
import { Badge } from "@/components/ui";

<Badge variant="default">Label</Badge>
<Badge variant="brand">Navy</Badge>
<Badge variant="gold">Gold</Badge>
<Badge variant="gold-soft">Subtle gold</Badge>
<Badge variant="dark-outline">On dark bg</Badge>
<Badge variant="success">Active</Badge>
<Badge size="sm" />  // sm | md | lg
```

### `<Chip>`

Small inline pill with optional color dot.

```tsx
import { Chip } from "@/components/ui";

<Chip dot="gold" theme="dark">ISO 9001:2015</Chip>
<Chip dot="brand" theme="light">Civil works</Chip>
```

### `<Card>`

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui";

<Card variant="default" padding="lg">
  <CardHeader>
    <CardTitle>Service Name</CardTitle>
    <CardDescription>Short description</CardDescription>
  </CardHeader>
  <CardContent>…</CardContent>
  <CardFooter>…</CardFooter>
</Card>

// Variants: default | elevated | brand | dark | gold | outline | flat
```

### `<Section>`

```tsx
import { Section } from "@/components/ui";

// theme: light | white | tinted | dark | brand | gold | none
// spacing: none | sm | md | lg | xl
<Section theme="dark" spacing="lg">
  …
</Section>
```

### `<Container>`

```tsx
import { Container } from "@/components/ui";

// size: sm | md | lg | xl (default) | 2xl | fluid
<Container size="xl">…</Container>
```

### `<Heading>`

```tsx
import { Heading } from "@/components/ui";

// as: h1–h6 (semantic level)
// size: display-2xl → xs (visual size, decoupled from semantic)
// tone: default | muted | white | white-muted | gold | brand
<Heading as="h1" size="display-xl" tone="white">
  Building Ghana's Infrastructure
</Heading>
```

### `<Stat>`

```tsx
import { Stat } from "@/components/ui";

<Stat value="14+" label="Years" description="Delivering excellence" theme="dark" />
// theme: light | dark
```

### `<Separator>`

```tsx
import { Separator } from "@/components/ui";

<Separator theme="light" />  // light | dark | gold
<Separator orientation="vertical" />
```

---

## Section Themes

| Page area          | `<Section theme>` | Notes |
|--------------------|-------------------|-------|
| Hero               | `dark`            | brand-950 bg, fixed header overlays |
| Services intro     | `white`           | Pure white for certification badges |
| Service grid       | `light`           | sand-50 warmth |
| Project highlights | `tinted`          | brand-50 subtle tint |
| Stats / proof      | `dark`            | Navy for impact |
| Quote / CTA band   | `brand`           | brand-900 |
| Contact            | `gold`            | Gold warmth for conversion |
| Footer             | `dark` (custom)   | brand-950, defined in SiteFooter |

---

## Layout Grid

- **Max width:** 1280px (`max-w-6xl`) for content, 1536px (`max-w-7xl`) for wide layouts
- **Horizontal padding:** `px-4 sm:px-6 lg:px-8`
- **Column gutter:** `gap-6` standard, `gap-8 lg:gap-12` for card grids
- **Header height:** `h-18` (72px), fixed, overlays hero sections
- **Section vertical rhythm:** `py-20 sm:py-28 lg:py-32` for major sections

---

## File Structure

```
src/
├── app/
│   └── globals.css          # @theme tokens + base styles
├── components/
│   ├── ui/                  # Design system primitives
│   │   ├── index.ts         # Barrel export
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   ├── chip.tsx
│   │   ├── card.tsx
│   │   ├── container.tsx
│   │   ├── section.tsx
│   │   ├── heading.tsx
│   │   ├── stat.tsx
│   │   └── separator.tsx
│   ├── layout/
│   │   ├── site-header.tsx  # Fixed, scroll-aware, dropdown nav, mobile menu
│   │   ├── site-footer.tsx  # Dark navy, ISO certs, full links
│   │   └── site-shell.tsx   # Layout wrapper
│   └── home/
│       └── hero-section.tsx # Dark hero with stats
└── lib/
    └── animations.ts        # Framer Motion variant library
```
