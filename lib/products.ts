export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  description: string;
  details: string[];
};

export const products: Product[] = [
  {
    slug: "tower-bed",
    name: "The Tower Bed",
    tagline: "A quiet place to land",
    price: 129,
    description:
      "A deep, bolstered bed with a removable, washable cover. The raised rim gives dogs something to lean into, and the low front makes it easy to step in.",
    details: [
      "Orthopedic foam base with a soft bolster",
      "Removable, machine-washable cover",
      "Non-slip base for hardwood floors",
      "Small, medium, and large sizes",
    ],
  },
  {
    slug: "rope-tug",
    name: "Everyday Rope Tug",
    tagline: "Built for the long game",
    price: 24,
    description:
      "A chunky cotton rope with a knotted core that holds up to daily tugging. Machine washable, and it flosses teeth while it plays.",
    details: [
      "Natural cotton, no dyes",
      "Reinforced center knot",
      "Machine washable",
      "Medium and large sizes",
    ],
  },
  {
    slug: "trail-bowl",
    name: "Trail Bowl",
    tagline: "Water, anywhere",
    price: 38,
    description:
      "A collapsible silicone bowl that clips to a leash or pack. Wide enough to drink from, stable enough to leave on the ground.",
    details: [
      "Food-grade silicone",
      "Collapses flat with a carabiner clip",
      "Dishwasher safe",
      "Holds 750 ml",
    ],
  },
];

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(value);
}
