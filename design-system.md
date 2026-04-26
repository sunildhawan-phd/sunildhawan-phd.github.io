# Design System — Professional Profile Website
> Educator · Assistant Professor · Developer
> Maintained as a single source of truth for all UI decisions.

---

## Table of Contents

1. [Color Palette — Light Theme](#1-color-palette--light-theme)
2. [Color Palette — Dark Theme](#2-color-palette--dark-theme)
3. [Semantic / Status Colors](#3-semantic--status-colors)
4. [Typography](#4-typography)
5. [Spacing Scale](#5-spacing-scale)
6. [Border Radius](#6-border-radius)
7. [Shadows & Elevation](#7-shadows--elevation)
8. [Z-Index Scale](#8-z-index-scale)
9. [Animation & Transitions](#9-animation--transitions)
10. [Component Quick Reference](#10-component-quick-reference)
11. [CSS Custom Properties — Full Token Sheet](#11-css-custom-properties--full-token-sheet)
12. [Tailwind Config Extension](#12-tailwind-config-extension)
13. [Usage Rules & Do / Don't](#13-usage-rules--do--dont)

---

## 1. Color Palette — Light Theme

### 1.1 Canvas & Surfaces

| Token | Hex | Usage |
|---|---|---|
| `--bg-canvas` | `#F7F5F0` | Page background (warm parchment) |
| `--bg-surface` | `#FFFFFF` | Cards, modals, sidebars |
| `--bg-raised` | `#F0EDE6` | Hover states, table rows, code blocks |
| `--bg-sunken` | `#EAE6DF` | Input fields, tags, inactive tabs |

---

### 1.2 Primary Brand — Royal Indigo

| Stop | Hex | Usage |
|---|---|---|
| `--primary-50` | `#EDF0F7` | Light tinted backgrounds, hover overlays |
| `--primary-100` | `#C4CCE8` | Borders on primary-tinted elements |
| `--primary-300` | `#8A9ED4` | Disabled primary text, placeholder |
| `--primary-500` | `#5C7CFA` | **Default — buttons, links, active states** |
| `--primary-700` | `#3B5BDB` | Button hover, pressed states |
| `--primary-800` | `#2B4BCC` | Dark headings, navbar background (light mode) |
| `--primary-950` | `#0D1630` | Deepest indigo, rarely used directly |

**Semantic aliases:**
```
--primary-default  →  #5C7CFA  (primary-500)
--primary-hover    →  #3B5BDB  (primary-700)
--primary-active   →  #2B4BCC  (primary-800)
--primary-subtle   →  #EDF0F7  (primary-50)
```

---

### 1.3 Neutral — Parchment Gray Scale

| Stop | Hex | Usage |
|---|---|---|
| `#FFFFFF` | White | Card surfaces |
| `#F7F5F0` | Neutral 50 | Canvas |
| `#F0EDE6` | Neutral 100 | Raised surfaces |
| `#DDD9D0` | Neutral 200 | Dividers, borders |
| `#BAB5AA` | Neutral 400 | Placeholder text, disabled icons |
| `#8A857D` | Neutral 500 | Muted/tertiary text |
| `#4A4640` | Neutral 700 | Secondary body text |
| `#1E1C18` | Neutral 900 | Near-black body |
| `#0F0E0C` | Neutral 950 | Primary text, headings |

---

### 1.4 Typography Colors (Light)

| Token | Hex | Usage |
|---|---|---|
| `--text-primary` | `#0F0E0C` | Headings, body, default |
| `--text-secondary` | `#4A4640` | Subtitles, captions |
| `--text-tertiary` | `#8A857D` | Placeholders, meta, timestamps |
| `--text-disabled` | `#BAB5AA` | Disabled state text |
| `--text-on-primary` | `#FFFFFF` | Text on indigo buttons |
| `--text-link` | `#5C7CFA` | Hyperlinks |

---

## 2. Color Palette — Dark Theme ("Deep Scholar")

### 2.1 Canvas & Surfaces (Dark)

| Token | Hex | Usage |
|---|---|---|
| `--bg-canvas` | `#0B0E14` | Page background (Deep Midnight) |
| `--bg-surface` | `#161B26` | Cards, panels (Steel Slate) |
| `--bg-raised` | `#1C2130` | Elevated cards, dropdowns |
| `--bg-sunken` | `#0A0C10` | Input backgrounds, code blocks |

---

### 2.2 Primary Brand — Royal Indigo (Dark)

| Stop | Hex | Usage |
|---|---|---|
| `--primary-50` | `#D0E3FF` | Lightest tint on dark |
| `--primary-200` | `#99B8F0` | Primary hover text |
| `--primary-400` | `#7B9CFF` | **Default — buttons, active links (Cobalt Bright)** |
| `--primary-800` | `#1C1E22` | Background tint for primary elements |
| `--primary-900` | `#131417` | Deepest primary surface |

**Semantic aliases (dark):**
```
--primary-default  →  #7B9CFF  (primary-400)
--primary-hover    →  #99B8F0  (primary-200)
--primary-subtle   →  #1C1E22  (primary-800)
```

---

### 2.3 Neutral — Obsidian Scale (Dark)

| Stop | Hex | Usage |
|---|---|---|
| `#0B0E14` | Neutral 950 | Canvas |
| `#161B26` | Neutral 900 | Surface |
| `#1C2130` | Neutral 800 | Raised / elevated |
| `#2A2D32` | Neutral 700 | Borders (strong) |
| `#3C4048` | Neutral 600 | Dividers, outlines |
| `#5C5955` | Neutral 400 | Disabled, tertiary text |
| `#8B9BFF` | Neutral 200 | Secondary text (muted Cobalt-Gray) |
| `#D4D0C8` | Neutral 100 | Muted primary text |
| `#F8FAFC` | Neutral 50 | Primary text (Ghost White) |

---

### 2.4 Typography Colors (Dark)

| Token | Hex | Usage |
|---|---|---|
| `--text-primary` | `#F8FAFC` | Headings, body |
| `--text-secondary` | `#8B9BFF` | Subtitles, captions |
| `--text-tertiary` | `#5C5955` | Timestamps, meta |
| `--text-disabled` | `#3C4048` | Disabled state |
| `--text-on-primary` | `#0B0E14` | Text on indigo buttons |
| `--text-link` | `#7B9CFF` | Hyperlinks |

---

## 3. Semantic / Status Colors

### Light Mode
| State | Foreground | Background | Border | Usage |
|---|---|---|---|---|
| Success | `#2E7D32` | `#EDF7ED` | `#A5D6A7` | Published paper, form saved |
| Warning | `#E65100` | `#FFF8E1` | `#FFCC80` | Draft mode, attention required |
| Danger | `#C62828` | `#FDEDED` | `#EF9A9A` | Error, delete confirmation |
| Info | `#1565C0` | `#E8F4FD` | `#90CAF9` | Tips, informational banners |

### Dark Mode
| State | Foreground | Background | Border |
|---|---|---|---|
| Success | `#4CAF50` | `#112411` | `#2E7D32` |
| Warning | `#FFA726` | `#1E1408` | `#E65100` |
| Danger | `#EF5350` | `#1E0808` | `#C62828` |
| Info | `#42A5F5` | `#091220` | `#1565C0` |

---

## 4. Typography

### Font Stack

| Role | Font Family | Fallback | Where Used |
|---|---|---|---|
| Display / Headings | `Crimson Pro` | `Georgia, serif` | Hero text, section titles, name |
| Body / UI | `Geist`, `Inter` | `system-ui, sans-serif` | Paragraphs, nav, buttons, labels |
| Code / Mono | `JetBrains Mono` | `Fira Code, monospace` | Code blocks, tags, terminal snippets |

**Google Fonts import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=Inter:wght@100..900&display=swap" rel="stylesheet">
```

---

### Type Scale

| Token | Size | Line Height | Weight | Font | Usage |
|---|---|---|---|---|---|
| `--text-display` | `4rem / 64px` | 1.1 | 500 | Crimson Pro | Hero name, giant section opener |
| `--text-h1` | `2.5rem / 40px` | 1.2 | 600 | Crimson Pro | Page titles |
| `--text-h2` | `2rem / 32px` | 1.25 | 600 | Crimson Pro | Section headings |
| `--text-h3` | `1.5rem / 24px` | 1.3 | 500 | Sans | Sub-section titles |
| `--text-h4` | `1.25rem / 20px` | 1.35 | 500 | Sans | Card titles, widget headings |
| `--text-body-lg` | `1.125rem / 18px` | 1.75 | 400 | Sans | Lead paragraphs, intro text |
| `--text-body` | `1rem / 16px` | 1.7 | 400 | Sans | Default body |
| `--text-sm` | `0.875rem / 14px` | 1.6 | 400 | Sans | Captions, labels, secondary |
| `--text-xs` | `0.75rem / 12px` | 1.5 | 400 | Sans | Tags, badges, timestamps |

---

## 5. Spacing Scale
Base unit: `4px`. All spacing is a multiple of 4.

| Token | Value | Pixel | Usage |
|---|---|---|---|
| `--space-1` | `0.25rem` | `4px` | Icon gaps, tight padding |
| `--space-2` | `0.5rem` | `8px` | Small component padding |
| `--space-3` | `0.75rem` | `12px` | Button padding Y |
| `--space-4` | `1rem` | `16px` | Card padding, list gap |
| `--space-5` | `1.25rem` | `20px` | Form input padding X |
| `--space-6` | `1.5rem` | `24px` | Section element gap |
| `--space-8` | `2rem` | `32px` | Card padding (large), row gap |
| `--space-10` | `2.5rem` | `40px` | Section inner padding |
| `--space-12` | `3rem` | `48px` | Section gap, nav height |
| `--space-16` | `4rem` | `64px` | Large section spacing |
| `--space-20` | `5rem` | `80px` | Hero padding |
| `--space-24` | `6rem` | `96px` | Between major sections |
| `--space-32` | `8rem` | `128px` | Full-page vertical rhythm |

---

## 6. Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-none` | `0` | Sharp / editorial elements |
| `--radius-sm` | `4px` | Badges, code tags, small chips |
| `--radius-md` | `8px` | Buttons, inputs, small cards |
| `--radius-lg` | `12px` | Cards, modals, panels |
| `--radius-xl` | `16px` | Large feature cards, hero sections |
| `--radius-2xl` | `24px` | Image containers, hero cards |
| `--radius-full` | `9999px` | Pills, avatars, toggle switches |

---

## 7. Shadows & Elevation

### Light Mode
| Token | Value | Usage |
|---|---|---|
| `--shadow-xs` | `0 1px 2px rgba(15,14,12,0.04)` | Subtle hover lift |
| `--shadow-sm` | `0 1px 4px rgba(15,14,12,0.06)` | Default card resting |
| `--shadow-md` | `0 4px 20px rgba(15,14,12,0.10)` | Raised cards, dropdowns |
| `--shadow-lg` | `0 12px 40px rgba(15,14,12,0.14)` | Modals, floating panels |
| `--shadow-xl` | `0 24px 60px rgba(15,14,12,0.18)` | Hero feature elements |
| `--shadow-primary` | `0 8px 24px rgba(92,124,250,0.28)` | Primary button glow |

### Dark Mode
| Token | Value |
|---|---|
| `--shadow-xs` | `0 1px 2px rgba(0,0,0,0.30)` |
| `--shadow-sm` | `0 1px 4px rgba(0,0,0,0.40)` |
| `--shadow-md` | `0 4px 20px rgba(0,0,0,0.50)` |
| `--shadow-lg` | `0 12px 40px rgba(0,0,0,0.60)` |
| `--shadow-xl` | `0 24px 60px rgba(0,0,0,0.70)` |
| `--shadow-primary` | `0 8px 24px rgba(123,156,255,0.25)` |

---

## 8. Z-Index Scale
| Token | Value | Usage |
|---|---|---|
| `--z-base` | `0` | Default stacking |
| `--z-raised` | `10` | Cards with hover lift |
| `--z-dropdown` | `100` | Dropdown menus |
| `--z-sticky` | `200` | Sticky navbar |
| `--z-overlay` | `300` | Backdrop / overlay |
| `--z-modal` | `400` | Modal dialogs |
| `--z-toast` | `500` | Notifications, toasts |
| `--z-tooltip` | `600` | Tooltips (always on top) |

---

## 9. Animation & Transitions

### Duration
| Token | Value | Usage |
|---|---|---|
| `--duration-instant` | `80ms` | Micro feedback |
| `--duration-fast` | `150ms` | Button hover, color transitions |
| `--duration-normal` | `250ms` | Most UI transitions |
| `--duration-slow` | `400ms` | Panel slides, modal open |
| `--duration-slower` | `600ms` | Page-level transitions |
| `--duration-page` | `800ms` | Hero entrance animations |

### Easing
| Token | Value | Usage |
|---|---|---|
| `--ease-linear` | `linear` | Progress bars |
| `--ease-out` | `cubic-bezier(0.0, 0, 0.2, 1)` | Elements entering the screen |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Elements leaving the screen |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Toggles, expand/collapse |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bouncy interactions |
| `--ease-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Hero reveals |

---

## 10. Component Quick Reference

### Buttons
| Variant | Background | Text | Border | Hover BG |
|---|---|---|---|---|
| Primary | `--primary-500` | `#FFFFFF` | none | `--primary-700` |
| Ghost | `transparent` | `--primary-500` | `--primary-100` | `--primary-50` |

### Cards
```css
/* Default card */
background: var(--bg-surface);
border: 0.5px solid var(--border-default);
border-radius: var(--radius-lg);
padding: var(--space-6);
box-shadow: var(--shadow-sm);
transition: transform 250ms var(--ease-spring),
            box-shadow 250ms var(--ease-out);
```

---

## 11. CSS Custom Properties — Full Token Sheet

```css
:root {
  /* Backgrounds */
  --bg-canvas:     #F7F5F0;
  --bg-surface:    #FFFFFF;
  --bg-raised:     #F0EDE6;
  --bg-sunken:     #EAE6DF;

  /* Primary — Royal Indigo */
  --primary-50:      #EDF0F7;
  --primary-100:     #C4CCE8;
  --primary-300:     #8A9ED4;
  --primary-500:     #5C7CFA;
  --primary-700:     #3B5BDB;
  --primary-800:     #2B4BCC;
  --primary-950:     #0D1630;
  --primary-default: var(--primary-500);
  --primary-hover:   var(--primary-700);
  --primary-subtle:  var(--primary-50);

  /* Neutrals */
  --neutral-0:   #FFFFFF;
  --neutral-50:  #F7F5F0;
  --neutral-100: #F0EDE6;
  --neutral-200: #DDD9D0;
  --neutral-400: #BAB5AA;
  --neutral-500: #8A857D;
  --neutral-700: #4A4640;
  --neutral-900: #1E1C18;
  --neutral-950: #0F0E0C;

  /* Typography */
  --text-primary:     #0F0E0C;
  --text-secondary:   #4A4640;
  --text-tertiary:    #8A857D;
  --text-disabled:    #BAB5AA;
  --text-on-primary:  #FFFFFF;
  --text-link:        var(--primary-500);

  /* Borders */
  --border-subtle:  rgba(15,14,12,0.06);
  --border-default: rgba(15,14,12,0.10);
  --border-strong:  rgba(15,14,12,0.18);

  /* Typography Tokens */
  --font-display: 'Crimson Pro', Georgia, serif;
  --font-body:    'Geist', 'Inter', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', 'Fira Code', monospace;

  /* Spacing */
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  0.75rem;
  --space-4:  1rem;
  --space-5:  1.25rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;

  /* Border Radius */
  --radius-none: 0;
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-2xl:  24px;
  --radius-full: 9999px;
}

[data-theme="dark"] {
  /* Backgrounds */
  --bg-canvas:     #0B0E14;
  --bg-surface:    #161B26;
  --bg-raised:     #1C2130;
  --bg-sunken:     #0A0C10;

  /* Primary — Royal Indigo (Dark) */
  --primary-50:      #D0E3FF;
  --primary-200:     #99B8F0;
  --primary-400:     #7B9CFF;
  --primary-800:     #1C1E22;
  --primary-900:     #131417;
  --primary-default: #7B9CFF;
  --primary-hover:   #99B8F0;
  --primary-subtle:  #1C1E22;

  /* Neutrals */
  --neutral-50:  #F8FAFC;
  --neutral-100: #D4D0C8;
  --neutral-200: #8B9BFF;
  --neutral-400: #5C5955;
  --neutral-600: #3C4048;
  --neutral-700: #2A2D32;
  --neutral-800: #1C1E22;
  --neutral-900: #131417;
  --neutral-950: #0B0E14;

  /* Typography */
  --text-primary:     #F8FAFC;
  --text-secondary:   #8B9BFF;
  --text-tertiary:    #5C5955;
  --text-disabled:    #3C4048;
  --text-on-primary:  #0B0E14;
  --text-link:        #7B9CFF;

  /* Borders */
  --border-subtle:  rgba(248,250,252,0.04);
  --border-default: rgba(248,250,252,0.08);
  --border-strong:  rgba(248,250,252,0.14);
}
```

---

## 12. Tailwind Config Extension
```js
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        cobalt: {
          DEFAULT: '#5C7CFA',
          bright: '#7B9CFF',
        },
        obsidian: {
          DEFAULT: '#0B0E14',
          light: '#161B26',
        },
      },
      fontFamily: {
        serif: ['Crimson Pro', 'Georgia', 'serif'],
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}
```

---

## 13. Usage Rules & Do / Don't

### Typography
| ✅ Do | ❌ Don't |
|---|---|
| Use `Crimson Pro` for all high-level scholarly headings | Use italics for the last name in the Hero section |
| Pair serif headings with Geist/Inter body for modern clarity | Use `tracking-tight` on large headings |

### Dark Mode
| ✅ Do | ❌ Don't |
|---|---|
| Use `#F8FAFC` for primary text to avoid harsh white | Use pure black `#000000` as canvas |
| Use `Royal Indigo` accents to maintain professional depth | Use high-saturation neon colors |

---
*Last updated: April 2026 | Version 2.0 (Deep Scholar Update)*
