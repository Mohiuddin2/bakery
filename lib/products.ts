import {
  celebrationCakes,
  newArrivals,
  popularProducts,
  sweetDelights,
  type Product,
} from "@/lib/data";

export type ProductSection = "popular" | "cakes" | "sweets" | "new-arrivals";

export interface ProductWithMeta extends Product {
  slug: string;
  section: ProductSection;
  sectionLabel: string;
}

export interface NutritionFact {
  label: string;
  perServing: string;
  dailyIntake?: string;
  per100g: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductDetails extends ProductWithMeta {
  images: string[];
  description: string;
  longDescription: string;
  tip?: string;
  ingredients: string;
  nutrition: NutritionFact[];
  faqs: ProductFAQ[];
}

const SECTIONS: {
  key: ProductSection;
  label: string;
  products: Product[];
}[] = [
  { key: "popular", label: "Popular Products", products: popularProducts },
  { key: "cakes", label: "Celebration Cakes", products: celebrationCakes },
  { key: "sweets", label: "Sweet Delights", products: sweetDelights },
  { key: "new-arrivals", label: "New Arrivals", products: newArrivals },
];

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildCatalog(): ProductWithMeta[] {
  return SECTIONS.flatMap(({ key, label, products }) =>
    products.map((product) => ({
      ...product,
      slug: slugify(product.name),
      section: key,
      sectionLabel: label,
    })),
  );
}

const catalog = buildCatalog();

const detailOverrides: Partial<
  Record<
    string,
    Partial<
      Pick<
        ProductDetails,
        | "description"
        | "longDescription"
        | "tip"
        | "ingredients"
        | "nutrition"
        | "faqs"
        | "images"
      >
    >
  >
> = {
  "red-velvet-celebration": {
    images: ["/Cakes/red-velvet-celebration.png"],
    description:
      "A show-stopping red velvet cake with cream cheese frosting, finished with red velvet crumbs and piped rosettes — perfect for birthdays, anniversaries and every celebration in between.",
    longDescription:
      "Our Red Velvet Celebration cake brings together everything you love about this classic flavour. Layers of moist, ruby-red sponge are paired with rich cream cheese frosting, then finished with a ring of piped rosettes and a generous coating of red velvet crumbs for that signature look.\n\nSoft, velvety and beautifully balanced — not too sweet, with a gentle cocoa note and a creamy finish that keeps every bite satisfying. Baked fresh in our kitchen using real butter, fresh cream and premium ingredients.\n\nIdeal for birthdays, family gatherings or any moment that deserves something a little more special. Order whole or customise the message on top for your occasion.",
    tip: "Pair with a pot of freshly brewed tea or a glass of cold milk for the perfect afternoon treat.",
    ingredients:
      "Wheat Flour, Sugar, Butter, Eggs, Buttermilk, Cocoa Powder, Cream Cheese (Milk, Cream, Salt, Culture), Vegetable Oil, Baking Soda, Vanilla Extract, Red Food Colour, Iodised Salt.\n\nContains: Wheat, Gluten, Milk, Eggs.\n\nMay Contain: Nuts, Soy, Sesame.",
    nutrition: [
      { label: "Energy", perServing: "1,420 kJ", dailyIntake: "16%", per100g: "1,180 kJ" },
      { label: "Protein", perServing: "5.8g", dailyIntake: "12%", per100g: "4.9g" },
      { label: "Fat, Total", perServing: "18.4g", dailyIntake: "26%", per100g: "15.2g" },
      { label: "- Saturated", perServing: "11.2g", dailyIntake: "47%", per100g: "9.3g" },
      { label: "Carbohydrate", perServing: "42.6g", dailyIntake: "14%", per100g: "35.4g" },
      { label: "- Sugars", perServing: "28.4g", dailyIntake: "32%", per100g: "23.6g" },
      { label: "Sodium", perServing: "320mg", dailyIntake: "14%", per100g: "265mg" },
    ],
    faqs: [
      {
        question: "Can I order a custom message on the cake?",
        answer:
          "Yes! Add your personalised message when ordering at any K Bakery outlet or call ahead for custom celebration cakes.",
      },
      {
        question: "How far in advance should I order?",
        answer:
          "We recommend ordering at least 24 hours ahead for celebration cakes. Same-day pickup may be available depending on your local bakery.",
      },
      {
        question: "What size is the Red Velvet Celebration cake?",
        answer:
          "Our standard celebration size serves 8–10 people. Larger sizes are available on request at your nearest outlet.",
      },
    ],
  },
  "chocolate-fudge-cake": {
    description:
      "Rich, moist chocolate sponge layered with silky fudge frosting — a timeless bestseller baked fresh every morning.",
    tip: "Warm a slice for 15 seconds in the microwave for an extra indulgent dessert experience.",
  },
  "saffron-motichoor-laddu": {
    description:
      "Delicate saffron-infused boondi pearls bound with ghee and sugar into melt-in-your-mouth laddus — a signature Bengali sweet.",
    tip: "Serve at room temperature alongside mishti doi for a classic Bengali dessert platter.",
  },
};

function defaultDescription(product: ProductWithMeta): string {
  const kind =
    product.section === "cakes"
      ? "celebration cake"
      : product.section === "sweets"
        ? "traditional sweet"
        : "bakery favourite";

  return `Our ${product.name} is a ${kind} baked fresh at K Bakery using premium ingredients. ${product.tag ? `Marked as ${product.tag.toLowerCase()} by our customers.` : "A customer-loved treat, crafted by hand every day."}`;
}

function defaultLongDescription(product: ProductWithMeta): string {
  return `${defaultDescription(product)}\n\nFrom the first bite to the last crumb, every batch is made in our kitchen with real butter, fresh cream and quality flour. Whether you are sharing with family or treating yourself, this is baked to turn everyday moments into something worth savouring.\n\nAvailable at all K Bakery outlets across Chattogram. Contact your local bakery for availability and pricing.`;
}

function defaultIngredients(product: ProductWithMeta): string {
  if (product.section === "sweets") {
    return "Milk, Sugar, Ghee, Wheat Flour, Cardamom, Saffron, Nuts (where applicable), Iodised Salt.\n\nContains: Milk, Wheat, Gluten.\n\nMay Contain: Nuts, Soy.";
  }
  if (product.section === "cakes") {
    return "Wheat Flour, Sugar, Butter, Eggs, Fresh Cream, Cocoa Powder (where applicable), Baking Powder, Vanilla Extract, Iodised Salt.\n\nContains: Wheat, Gluten, Milk, Eggs.\n\nMay Contain: Nuts, Soy.";
  }
  return "Wheat Flour, Sugar, Butter, Eggs, Milk Solids, Vegetable Oil, Baking Powder, Iodised Salt, Natural Flavourings.\n\nContains: Wheat, Gluten, Milk, Eggs.\n\nMay Contain: Nuts, Soy, Sesame.";
}

function defaultNutrition(): NutritionFact[] {
  return [
    { label: "Energy", perServing: "980 kJ", dailyIntake: "11%", per100g: "1,240 kJ" },
    { label: "Protein", perServing: "4.2g", dailyIntake: "8%", per100g: "5.8g" },
    { label: "Fat, Total", perServing: "12.6g", dailyIntake: "18%", per100g: "14.2g" },
    { label: "- Saturated", perServing: "7.4g", dailyIntake: "31%", per100g: "8.6g" },
    { label: "Carbohydrate", perServing: "32.8g", dailyIntake: "11%", per100g: "38.4g" },
    { label: "- Sugars", perServing: "18.6g", dailyIntake: "21%", per100g: "22.1g" },
    { label: "Sodium", perServing: "280mg", dailyIntake: "12%", per100g: "340mg" },
  ];
}

function defaultFaqs(product: ProductWithMeta): ProductFAQ[] {
  return [
    {
      question: `Is the ${product.name} baked fresh daily?`,
      answer:
        "Yes — all K Bakery products are baked fresh in-store each morning using real ingredients for that just-baked quality you know and love.",
    },
    {
      question: "Where can I purchase this product?",
      answer:
        "Available at all K Bakery outlets across Chattogram. Visit your nearest bakery or call us to check availability.",
    },
    {
      question: "Do you offer delivery?",
      answer:
        "Yes, contact your local K Bakery outlet to arrange delivery within Chattogram. Delivery availability and fees may vary by location.",
    },
  ];
}

function enrichProduct(product: ProductWithMeta): ProductDetails {
  const override = detailOverrides[product.slug];

  return {
    ...product,
    images: override?.images ?? [product.image],
    description: override?.description ?? defaultDescription(product),
    longDescription: override?.longDescription ?? defaultLongDescription(product),
    tip: override?.tip,
    ingredients: override?.ingredients ?? defaultIngredients(product),
    nutrition: override?.nutrition ?? defaultNutrition(),
    faqs: override?.faqs ?? defaultFaqs(product),
  };
}

export function getAllProducts(): ProductDetails[] {
  return catalog.map(enrichProduct);
}

export function getProductBySlug(slug: string): ProductDetails | undefined {
  const product = catalog.find((item) => item.slug === slug);
  return product ? enrichProduct(product) : undefined;
}

export function getRelatedProducts(slug: string, limit = 4): ProductDetails[] {
  const current = catalog.find((item) => item.slug === slug);
  if (!current) return getAllProducts().slice(0, limit);

  const sameSection = catalog.filter(
    (item) => item.section === current.section && item.slug !== slug,
  );
  const others = catalog.filter(
    (item) => item.section !== current.section && item.slug !== slug,
  );

  return [...sameSection, ...others].slice(0, limit).map(enrichProduct);
}

export function getAllProductSlugs(): string[] {
  return catalog.map((item) => item.slug);
}
