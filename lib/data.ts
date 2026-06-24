// Central content + design data for the Saffron restaurant site.
// All imagery is sourced from Unsplash (free to use) via verified photo IDs.

export const img = (id: string, w = 800, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const site = {
  name: "Saffron",
  tagline: "Modern Mediterranean Dining",
  phone: "+1 (212) 555-0147",
  email: "hello@saffron.dining",
  address: "128 Marigold Avenue, West Village, New York",
  hours: [
    { day: "Mon – Thu", time: "5:00 PM – 11:00 PM" },
    { day: "Fri – Sat", time: "12:00 PM – 1:00 AM" },
    { day: "Sunday", time: "12:00 PM – 10:00 PM" },
  ],
  social: [
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "X", href: "#", icon: "x" },
    { label: "YouTube", href: "#", icon: "youtube" },
  ] as { label: string; href: string; icon: SocialIcon }[],
};

export type SocialIcon = "instagram" | "facebook" | "x" | "youtube";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Chefs", href: "#chefs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export type IconKey = "leaf" | "chef" | "clock" | "fire" | "wine" | "award";

export interface Feature {
  icon: IconKey;
  title: string;
  text: string;
}

export const features: Feature[] = [
  {
    icon: "leaf",
    title: "Seasonal Produce",
    text: "We source from local growers each morning, so every plate follows the rhythm of the season.",
  },
  {
    icon: "chef",
    title: "Master Chefs",
    text: "A brigade trained across the Mediterranean coast, plating with precision and soul.",
  },
  {
    icon: "fire",
    title: "Wood-Fired Craft",
    text: "Our open hearth and olive-wood embers give every dish its signature depth of flavour.",
  },
  {
    icon: "wine",
    title: "Curated Cellar",
    text: "Two hundred labels, hand-selected by our sommelier to meet each course note for note.",
  },
];

export const aboutStats = [
  { value: "18", label: "Years of Craft" },
  { value: "45", label: "Signature Dishes" },
  { value: "12", label: "Master Chefs" },
  { value: "9", label: "Culinary Awards" },
];

export const menuCategories = [
  "Starters",
  "Mains",
  "Desserts",
  "Drinks",
] as const;

export type MenuCategory = (typeof menuCategories)[number];

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image: string;
  tag?: string;
}

export const menuItems: MenuItem[] = [
  // Starters
  {
    name: "Burrata & Heirloom Tomato",
    description: "Creamy burrata, sun-ripened tomatoes, basil oil, aged balsamic.",
    price: "$14",
    category: "Starters",
    image: img("1540189549336-e6e99c3679fe", 600),
    tag: "Vegetarian",
  },
  {
    name: "Charred Octopus",
    description: "Smoked paprika, fingerling potato, salsa verde, lemon.",
    price: "$18",
    category: "Starters",
    image: img("1482049016688-2d3e1b311543", 600),
  },
  {
    name: "Truffle Arancini",
    description: "Saffron risotto pearls, black truffle, parmesan fonduta.",
    price: "$12",
    category: "Starters",
    image: img("1476224203421-9ac39bcb3327", 600),
  },
  {
    name: "Mezze Platter",
    description: "Hummus, baba ganoush, marinated olives, warm flatbread.",
    price: "$16",
    category: "Starters",
    image: img("1504674900247-0877df9cc836", 600),
    tag: "To Share",
  },
  // Mains
  {
    name: "Wood-Grilled Ribeye",
    description: "45-day dry-aged ribeye, charred shallot, bone-marrow butter.",
    price: "$38",
    category: "Mains",
    image: img("1600891964092-4316c288032e", 600),
    tag: "Chef's Pick",
  },
  {
    name: "Saffron Seafood Risotto",
    description: "Carnaroli rice, prawns, mussels, saffron, sea-herb gremolata.",
    price: "$26",
    category: "Mains",
    image: img("1473093295043-cdd812d0e601", 600),
  },
  {
    name: "Herb-Crusted Salmon",
    description: "Wild salmon, lemon beurre blanc, charred asparagus.",
    price: "$28",
    category: "Mains",
    image: img("1467003909585-2f8a72700288", 600),
  },
  {
    name: "Slow-Braised Short Rib",
    description: "Red-wine jus, truffle pomme purée, glazed root vegetables.",
    price: "$32",
    category: "Mains",
    image: img("1544025162-d76694265947", 600),
  },
  {
    name: "Wild Mushroom Pappardelle",
    description: "Hand-cut pasta, porcini, garden thyme, pecorino.",
    price: "$22",
    category: "Mains",
    image: img("1565299507177-b0ac66763828", 600),
    tag: "Vegetarian",
  },
  // Desserts
  {
    name: "Pistachio & Rose Panna Cotta",
    description: "Silky vanilla cream, crushed pistachio, rose syrup.",
    price: "$11",
    category: "Desserts",
    image: img("1432139555190-58524dae6a55", 600),
  },
  {
    name: "Dark Chocolate Fondant",
    description: "Molten 70% chocolate, salted caramel, vanilla gelato.",
    price: "$12",
    category: "Desserts",
    image: img("1551183053-bf91a1d81141", 600),
    tag: "Chef's Pick",
  },
  {
    name: "Seasonal Berry Bowl",
    description: "Marinated summer berries, citrus mascarpone, honeycomb.",
    price: "$10",
    category: "Desserts",
    image: img("1546069901-ba9599a7e63c", 600),
  },
  {
    name: "Honey & Fig Cheesecake",
    description: "Baked vanilla cheesecake, roasted figs, wildflower honey.",
    price: "$11",
    category: "Desserts",
    image: img("1567620905732-2d1ec7ab7445", 600),
  },
  // Drinks
  {
    name: "Saffron Negroni",
    description: "Gin, Campari, saffron-infused vermouth, orange twist.",
    price: "$13",
    category: "Drinks",
    image: img("1424847651672-bf20a4b0982b", 600),
    tag: "Signature",
  },
  {
    name: "Aged Old Fashioned",
    description: "Bourbon, demerara, aromatic bitters, smoked orange.",
    price: "$14",
    category: "Drinks",
    image: img("1481931098730-318b6f776db0", 600),
  },
  {
    name: "Sommelier's Red Selection",
    description: "Rotating glass of our cellar's finest — ask your server.",
    price: "$12",
    category: "Drinks",
    image: img("1505253716362-afaea1d3d1af", 600),
  },
  {
    name: "Garden Spritz",
    description: "Elderflower, cucumber, mint, soda — alcohol-free.",
    price: "$9",
    category: "Drinks",
    image: img("1490645935967-10de6ba17061", 600),
    tag: "Zero Proof",
  },
];

export interface FeaturedDish {
  name: string;
  description: string;
  price: string;
  image: string;
}

export const featuredDishes: FeaturedDish[] = [
  {
    name: "Wood-Grilled Ribeye",
    description:
      "Our hallmark cut, kissed by olive-wood flame and finished with bone-marrow butter.",
    price: "$38",
    image: img("1600891964092-4316c288032e", 900),
  },
  {
    name: "Herb-Crusted Salmon",
    description:
      "Line-caught salmon under a fragrant herb crust with bright lemon beurre blanc.",
    price: "$28",
    image: img("1467003909585-2f8a72700288", 900),
  },
  {
    name: "Saffron Seafood Risotto",
    description:
      "Carnaroli rice slow-stirred with saffron, prawns, mussels and sea-herb gremolata.",
    price: "$26",
    image: img("1473093295043-cdd812d0e601", 900),
  },
];

export const gallery = [
  img("1565299624946-b28f40a0ae38", 700),
  img("1414235077428-338989a2e8c0", 700),
  img("1551782450-a2132b4ba21d", 700),
  img("1517248135467-4c7edcad34c4", 700),
  img("1495147466023-ac5c588e2e94", 700),
  img("1552566626-52f8b828add9", 700),
  img("1567620905732-2d1ec7ab7445", 700),
  img("1543353071-873f17a7a088", 700),
];

export interface Chef {
  name: string;
  role: string;
  image: string;
}

export const chefs: Chef[] = [
  {
    name: "Marco Alvarez",
    role: "Executive Chef",
    image: img("1577219491135-ce391730fb2c", 600),
  },
  {
    name: "Lina Hoffmann",
    role: "Head Chef",
    image: img("1494790108377-be9c29b29330", 600),
  },
  {
    name: "Sofia Marin",
    role: "Pastry Chef",
    image: img("1438761681033-6461ffad8d80", 600),
  },
  {
    name: "Daniel Okafor",
    role: "Head Sommelier",
    image: img("1500648767791-00dcc994a43e", 600),
  },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Eleanor Whitfield",
    role: "Food Critic, The Daily Plate",
    quote:
      "Saffron plates the Mediterranean with rare confidence. The ribeye alone is worth the journey across town.",
    rating: 5,
    avatar: img("1438761681033-6461ffad8d80", 200),
  },
  {
    name: "James Carter",
    role: "Regular Guest",
    quote:
      "Every visit feels like a celebration. Warm service, a cellar that never disappoints, and desserts I dream about.",
    rating: 5,
    avatar: img("1500648767791-00dcc994a43e", 200),
  },
  {
    name: "Priya Nair",
    role: "Travel Writer",
    quote:
      "From the first bite of burrata to the last sip of negroni, the evening was flawless. A genuine destination restaurant.",
    rating: 5,
    avatar: img("1494790108377-be9c29b29330", 200),
  },
];

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "From Farm to Table: How We Source Each Season",
    excerpt:
      "A look at the growers and fishermen who make our menu possible, and why provenance shapes every plate.",
    date: "June 12, 2026",
    category: "Sourcing",
    author: "Marco Alvarez",
    image: img("1466637574441-749b8f19452f", 800),
  },
  {
    title: "Behind the Pass: A Night in the Saffron Kitchen",
    excerpt:
      "Service moves fast. Step inside the brigade's choreography during a sold-out Saturday dinner.",
    date: "May 28, 2026",
    category: "Kitchen",
    author: "Lina Hoffmann",
    image: img("1543353071-873f17a7a088", 800),
  },
  {
    title: "Pairing Notes: Spring Wines for Lighter Plates",
    excerpt:
      "Our sommelier shares the bottles he's reaching for as the menu turns toward brighter, greener flavours.",
    date: "May 9, 2026",
    category: "Cellar",
    author: "Daniel Okafor",
    image: img("1505253716362-afaea1d3d1af", 800),
  },
];
