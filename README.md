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
```
flowchart TD

subgraph group_storefront["Storefront"]
  node_home["Home page<br/>[page.tsx]"]
  node_product["Product page<br/>[page.tsx]"]
  node_product_guide["Use and safety guide<br/>[how-it-works.tsx]"]
  node_catalog["Product catalog<br/>[products.ts]"]
  node_dog_avatar["Dog avatars<br/>[dog-avatar.tsx]"]
end

subgraph group_ordering["Order flow"]
  node_checkout["Checkout form<br/>[page.tsx]"]
  node_order_api["Order endpoint<br/>[route.ts]"]
  node_confirmation["Order confirmation<br/>[page.tsx]"]
end

subgraph group_shared["Shared experience"]
  node_app_shell["App layout<br/>[layout.tsx]"]
  node_header["Site header<br/>[site-header.tsx]"]
  node_footer["Site footer<br/>[site-footer.tsx]"]
  node_legal["Legal modal<br/>[footer-legal.tsx]"]
  node_icons["Shared icons<br/>[icons.tsx]"]
  node_motion["Motion behavior<br/>[motion.tsx]"]
end

node_shopper(("Shopper"))

node_shopper -->|"browses"| node_home
node_home -->|"reads product"| node_catalog
node_home -->|"renders"| node_dog_avatar
node_home -->|"links to"| node_product
node_product -->|"reads product"| node_catalog
node_product -->|"renders"| node_product_guide
node_product -->|"links to"| node_checkout
node_shopper -->|"enters order"| node_checkout
node_checkout -->|"reads product"| node_catalog
node_checkout -->|"submits order"| node_order_api
node_checkout -->|"routes on success"| node_confirmation
node_app_shell -->|"renders"| node_header
node_app_shell -->|"renders"| node_footer
node_app_shell -->|"renders"| node_motion
node_footer -->|"renders"| node_legal
node_footer -->|"uses"| node_icons
node_header -->|"uses"| node_icons
node_confirmation -->|"uses"| node_icons

click node_home "https://github.com/piyushfunde/mitu22btcs0539-hwa-hackathon/blob/main/app/page.tsx"
click node_product "https://github.com/piyushfunde/mitu22btcs0539-hwa-hackathon/blob/main/app/product/page.tsx"
click node_product_guide "https://github.com/piyushfunde/mitu22btcs0539-hwa-hackathon/blob/main/components/how-it-works.tsx"
click node_catalog "https://github.com/piyushfunde/mitu22btcs0539-hwa-hackathon/blob/main/lib/products.ts"
click node_dog_avatar "https://github.com/piyushfunde/mitu22btcs0539-hwa-hackathon/blob/main/components/dog-avatar.tsx"
click node_checkout "https://github.com/piyushfunde/mitu22btcs0539-hwa-hackathon/blob/main/app/checkout/page.tsx"
click node_order_api "https://github.com/piyushfunde/mitu22btcs0539-hwa-hackathon/blob/main/app/api/order/route.ts"
click node_confirmation "https://github.com/piyushfunde/mitu22btcs0539-hwa-hackathon/blob/main/app/confirmation/page.tsx"
click node_app_shell "https://github.com/piyushfunde/mitu22btcs0539-hwa-hackathon/blob/main/app/layout.tsx"
click node_header "https://github.com/piyushfunde/mitu22btcs0539-hwa-hackathon/blob/main/components/site-header.tsx"
click node_footer "https://github.com/piyushfunde/mitu22btcs0539-hwa-hackathon/blob/main/components/site-footer.tsx"
click node_legal "https://github.com/piyushfunde/mitu22btcs0539-hwa-hackathon/blob/main/components/footer-legal.tsx"
click node_icons "https://github.com/piyushfunde/mitu22btcs0539-hwa-hackathon/blob/main/components/icons.tsx"
click node_motion "https://github.com/piyushfunde/mitu22btcs0539-hwa-hackathon/blob/main/components/motion.tsx"

classDef toneNeutral fill:#f8fafc,stroke:#334155,stroke-width:1.5px,color:#0f172a
classDef toneBlue fill:#dbeafe,stroke:#2563eb,stroke-width:1.5px,color:#172554
classDef toneAmber fill:#fef3c7,stroke:#d97706,stroke-width:1.5px,color:#78350f
classDef toneMint fill:#dcfce7,stroke:#16a34a,stroke-width:1.5px,color:#14532d
classDef toneRose fill:#ffe4e6,stroke:#e11d48,stroke-width:1.5px,color:#881337
classDef toneIndigo fill:#e0e7ff,stroke:#4f46e5,stroke-width:1.5px,color:#312e81
classDef toneTeal fill:#ccfbf1,stroke:#0f766e,stroke-width:1.5px,color:#134e4a
class node_home,node_product,node_product_guide,node_catalog,node_dog_avatar toneBlue
class node_checkout,node_order_api,node_confirmation toneAmber
class node_app_shell,node_header,node_footer,node_legal,node_icons,node_motion toneMint
class node_shopper toneIndigo
```
The web store is built as a focused, high-conversion direct-to-consumer experience:
