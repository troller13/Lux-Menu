# Conacul Domnesc

Site multi-page pentru un restaurant moldovenesc fictiv din Chișinău, construit cu **Next.js 14 (App Router)**, **TypeScript** și **Tailwind CSS**. Designul este inspirat din șablonul Figma „Restaurant Website (Community)" și adaptat pe specific moldovenesc (sarmale, plăcinte, mămăligă, vinuri de Cricova / Purcari).

## Pagini

Toate paginile sunt legate prin componenta `<Link>` din `next/link`:

| Rută            | Conținut                                                          |
| --------------- | ----------------------------------------------------------------- |
| `/`             | Hero cu widget de rezervare, premii, special, statistici, specialități, recomandarea chef-ului, evenimente, muzică live, poveste, testimoniale, presă, FAQ, CTA |
| `/meniu`        | Meniu complet cu **căutare**, filtre dietetice (vegan/vegetarian/fără gluten/picant) și navigare rapidă pe categorii |
| `/galerie`      | Galerie foto cu **filtre + lightbox** (taste săgeți + ESC)        |
| `/despre`       | Povestea, repere istorice, echipa                                 |
| `/evenimente`   | Pachete pentru evenimente private și corporative + saloane        |
| `/contact`      | Formular rezervare (auto-completat de pe widget hero), contact, hartă |

## Funcționalități fancy adăugate

### Animații & micro-interacțiuni
- **Reveal-on-scroll** (sus / stânga / dreapta / zoom) cu `IntersectionObserver`
- **Hover zoom** pe imagini (componente cu `group` + `zoom-img`)
- **Card lift** la hover cu glow auriu
- **Marquee strip** infinit cu valori-cheie
- **Animated counters** pentru statistici
- **Gold shimmer** pe butonul principal
- **Floating ornament** SVG (animație ușoară de plutire)
- **Indicator "deschis acum"** pulsant în hero
- **Underline animat** pe link-urile din navbar
- **Smooth scroll** și navbar transparent → solid la scroll
- **Film grain** subtil ca overlay global
- **Vignette** pe hero
- **Custom scrollbar** auriu

### Conținut tipic restaurant fancy
- 🏆 **Awards row** (Gault & Millau, TripAdvisor, Forbes…)
- 📊 **Stats animate** (76 ani de tradiție, 142 preparate, 38 vinuri…)
- 👨‍🍳 **Recomandarea chef-ului** cu fotografie și semnătură
- 🎶 **Program muzică live** (joi/vineri/sâmbătă)
- ⭐ **Testimoniale** carusel cu auto-play
- 📰 **Strip presă** (logo-uri text)
- ❓ **FAQ accordion** (rezervări, dress-code, parcare, animale…)
- 📧 **Newsletter** signup în footer
- 📞 **Floating reserve** + back-to-top
- 📅 **Hero booking widget** (data/ora/persoane → trimite la /contact)
- 🖼️ **Galerie cu lightbox** (filtre + navigație tastatură)
- 🥗 **Filtre dietetice** pe meniu (vegan, vegetarian, GF, picant)
- 🔍 **Căutare** în meniu

### Accesibilitate & UX
- `prefers-reduced-motion` respectat pentru reveal animations
- Aria-labels pe toate butoanele iconice
- Lightbox cu navigație prin tastele săgeți + ESC
- Auto-fill formular din parametri URL
- `loading.tsx` și `not-found.tsx` în branding propriu

## Cum se rulează

```bash
npm install
npm run dev
# → http://localhost:3000
```

Pentru build de producție:

```bash
npm run build
npm start
```

## Structura proiectului

```
app/
  layout.tsx              # Navbar + Footer + FloatingActions
  globals.css             # animații, grain, marquee, ornament etc.
  page.tsx                # /
  loading.tsx             # spinner branded
  not-found.tsx           # 404 branded
  meniu/
    page.tsx              # banner + MenuClient
    MenuClient.tsx        # filtre, căutare, sticky tabs
    data.ts               # categorii + iteme + diete
  galerie/page.tsx        # banner + Gallery
  despre/page.tsx
  evenimente/page.tsx
  contact/page.tsx        # form (Suspense) + map + info

components/
  Reveal.tsx              # IntersectionObserver wrapper
  Ornament.tsx            # SVG flourish
  Logo.tsx
  Navbar.tsx              # transparent → solid la scroll
  Footer.tsx              # newsletter + social + program
  Newsletter.tsx
  Hero.tsx + HeroBookingWidget.tsx
  TodaysSpecial.tsx
  InteriorStrip.tsx + TransitionPlate.tsx
  Stats.tsx               # contoare animate
  Specialities.tsx        # tabs + reveal alternativ
  ChefRecommendation.tsx
  DiningEvents.tsx        # privat / corporativ
  LiveMusic.tsx
  Testimonials.tsx        # carusel cu autoplay
  PressStrip.tsx
  AwardsRow.tsx
  OurStory.tsx
  FAQ.tsx
  CTASection.tsx
  ReservationForm.tsx     # auto-fill din ?date&time&guests
  FloatingActions.tsx     # FAB rezervare + back-to-top
  MarqueeStrip.tsx
  Gallery.tsx             # filtre + lightbox + tastatură
  SectionHeading.tsx
```

## TODO pentru producție

- înlocuiește URL-urile Unsplash cu fotografii proprii și folosește `<Image>` din `next/image`
- conectează `ReservationForm` și `Newsletter` la endpoint real (API route + email / Telegram)
- adaugă SEO suplimentar (`sitemap.ts`, `robots.ts`)
- traduceri (i18n) dacă vrei și varianta în engleză / rusă
