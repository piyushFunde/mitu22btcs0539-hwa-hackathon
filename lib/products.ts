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
    slug: "clockwork-forage-tower",
    name: "Clockwork Forage Tower",
    tagline: "A slow puzzle for busy noses",
    price: 2499,
    description:
      "A wind-up dog puzzle tower that hides a meal and hands it out slowly. Turn the key, set it down, and small amounts of kibble drop through the tower over about three hours — enough to keep a curious nose busy and make mealtime last.",
    details: [
      "Wind-up mechanism releases food over about 3 hours",
      "Adjustable openings suit small or large kibble",
      "Holds up to 2 cups of dry food",
      "Wipe-clean base, no batteries",
    ],
  },
];

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
