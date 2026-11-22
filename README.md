# Slowbowl — The Clockwork Forage Tower

> A wind-up mechanical dog puzzle that turns a 30-second meal into three hours of quiet mental foraging. No batteries, no screens, no Wi-Fi.

- **Live Application:** [https://mitu22btcs0539-hwa-hackathon.vercel.app](https://mitu22btcs0539-hwa-hackathon.vercel.app/)
- **Hackathon:** Built for the **Hack While Away (HWA) 2026** Challenge

---

## The Problem: The 6-Hour Gap

Dogs are evolutionary foragers. Their ancestors spent hours sniffing, tracking, and working for food. Today, most domesticated dogs eat from a standard bowl in under 45 seconds, then spend 6 to 8 hours alone at home with nothing to occupy their brains.

When an energetic, curious dog gets under-stimulated, they find their own outlets:
- **Scratching at doors** and pacing out of restlessness
- **Chewing shoes, trim, and baseboards** to release soothing endorphins
- **Digging at rugs and couch cushions** to mimic natural ground-foraging instincts
- **Alert-barking** at every hallway noise because their attention is unfocused

Most "smart" feeders on the market rely on wall outlets, Wi-Fi connectivity, or lithium-ion batteries that present serious safety hazards if a dog decides to chew them. We wanted a completely mechanical solution.

---

## What We Built: The Clockwork Forage Tower

**Slowbowl** is a slow-feeding enrichment device powered by a brass-and-steel clockwork escapement. 

1. **100% Mechanical Escapement:** Turn the winding key, fill the hopper with dry kibble, and place it down. The internal escapement meters out tiny rations gradually over roughly three hours.
2. **Interactive Foraging Chambers:** Dogs must nudge, slide, and flip food-safe silicone lids to access the released kibble, turning mealtime into a problem-solving game.
3. **No Lithium, No Cords, No Apps:** Can be left safely on the floor without worry of electric shocks or punctured batteries.
4. **Honest Animal Welfare Copy:** We make it clear that the tower is built for mental enrichment and boredom relief — it is **not** a fix for severe separation anxiety (which requires professional behavioral/vet care), nor is it a substitute for physical walks.

**Retail Price:** ₹2,499 (Includes free shipping across India)

---

### Pages Included

- **Home (`/`)**: Editorial visual identity with a misty-orchid gradient (`#E4D0EA` &rarr; `#F8F1F9`), live animated marquee ticker, interactive problem cards explaining dog behavior, and product spotlight.
- **Product (`/product`)**: Studio product photography, technical specs, numbered 3-step breakdown (`Load` &rarr; `Wind` &rarr; `Forage`), safety boundaries (dry food only, medium/large dogs, initial supervision), and FAQ accordions.
- **Checkout (`/checkout`)**: Clean order form with shipping address fields, interactive quantity stepper (1–10) with live subtotal calculation, and instant validation feedback.
- **Order Confirmation (`/confirmation`)**: Accessible success page displaying the confirmed UUID badge (`Order #<uuid>`) and return links.
- **Footer & Legal Modal**: Global footer with quick navigation links, mailto support link, and an accessible in-page modal dialog covering privacy, terms, and pet safety guidelines.

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** TypeScript 5 (Strict type checking)
- **Hosting:** [Vercel](https://vercel.com/) Edge Network
- **Icons & Visuals:** Handcrafted SVG vector graphics and custom luxury product renders

---

## Backend API Specification

The application includes an automated order processing endpoint designed for evaluation scripts and judges:

### `POST /api/order`

Processes order requests and generates a unique tracking reference.

#### Request Headers
```http
Content-Type: application/json
```
---
## Application Architecture & Flow

The web store is built as a focused, high-conversion direct-to-consumer experience:
