// Central content + design data for the K Bakery site.
// Storefront imagery is from Unsplash (free to use) via verified photo IDs.
// Design intent: big, appetising food photography with minimal supporting copy.

export const img = (id: string, w = 800, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export type SocialIcon = "instagram" | "facebook" | "x" | "youtube";

export const site = {
  name: "K Bakery",
  tagline: "Freshly Baked, Every Day",
  phone: "031-614246",
  email: "info@kbakery.com.bd",
  address: "4 Zakir Hossain Road, South Khulshi, Chattogram 4000",
  hours: [
    { day: "Saturday – Thursday", time: "8:00 AM – 10:00 PM" },
    { day: "Friday", time: "9:00 AM – 10:00 PM" },
  ],
  social: [
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "YouTube", href: "#", icon: "youtube" },
    { label: "X", href: "#", icon: "x" },
  ] as { label: string; href: string; icon: SocialIcon }[],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Popular", href: "#popular" },
  { label: "Cakes", href: "#cakes" },
  { label: "Categories", href: "#categories" },
  { label: "Offers", href: "#offers" },
  { label: "Stories", href: "#stories" },
];

/* ------------------------------------------------------------------ *
 * HERO CAROUSEL — the two flat-lay banners (Cake 1 & Cake 2)
 * ------------------------------------------------------------------ */
export interface HeroSlide {
  image: string;
  /** "light" banner → dark text scrim · "dark" banner → lighter scrim */
  tone: "light" | "dark";
  eyebrow: string;
  title: string;
  highlight: string;
  text: string;
}

export const heroSlides: HeroSlide[] = [
  {
    image: "/hero/cake-1.jpg",
    tone: "light",
    eyebrow: "Freshly Baked, Every Day",
    title: "Cakes Worth",
    highlight: "Celebrating",
    text: "Handcrafted gateaux, fresh-cream pastries and rich tarts — baked from scratch each morning.",
  },
  {
    image: "/hero/cake-2.jpg",
    tone: "dark",
    eyebrow: "The Taste of Chattogram",
    title: "A Bakery Full of",
    highlight: "Goodness",
    text: "From flaky croissants to golden sweets, discover treats made to make every moment sweeter.",
  },
];

/* ------------------------------------------------------------------ *
 * PRODUCT MODEL — image-forward, minimal text
 * ------------------------------------------------------------------ */
export interface Product {
  name: string;
  price: string;
  image: string;
  tag?: string;
  rating?: number;
}

// 1 · POPULAR PRODUCTS — the everyday bestsellers
export const popularProducts: Product[] = [
  {
    name: "Chocolate Fudge Cake",
    price: "৳ 850",
    image: img("1578985545062-69928b1d9587", 700),
    tag: "Bestseller",
    rating: 5,
  },
  {
    name: "Butter Croissant",
    price: "৳ 70",
    image: img("1623334044303-241021148842", 700),
    rating: 5,
  },
  {
    name: "Choco Chip Cookies",
    price: "৳ 220",
    image: img("1499636136210-6f4ee915583e", 700),
    tag: "Bestseller",
    rating: 5,
  },
  {
    name: "Red Velvet Slice",
    price: "৳ 120",
    image: img("1549903072-7e6e0bedb7fb", 700),
    rating: 4,
  },
  {
    name: "Glazed Donut",
    price: "৳ 65",
    image: img("1551024506-0bccd828d307", 700),
    tag: "Hot",
    rating: 5,
  },
  {
    name: "Blueberry Muffin",
    price: "৳ 95",
    image: img("1426869981800-95ebf51ce900", 700),
    rating: 4,
  },
  {
    name: "French Macarons",
    price: "৳ 360",
    image: img("1569864358642-9d1684040f43", 700),
    rating: 5,
  },
  {
    name: "Chicken Patties",
    price: "৳ 50",
    image: img("1555507036-ab1f4038808a", 700),
    tag: "Bestseller",
    rating: 5,
  },
];

// 2 · CELEBRATION CAKES — handcrafted for every occasion
export const celebrationCakes: Product[] = [
  {
    name: "Classic Chocolate Gateau",
    price: "৳ 1,200",
    image: img("1578985545062-69928b1d9587", 800),
    tag: "Signature",
    rating: 5,
  },
  {
    name: "Rose Garden Cake",
    price: "৳ 1,800",
    image: img("1535254973040-607b474cb50d", 800),
    tag: "Custom",
    rating: 5,
  },
  {
    name: "Tiered Wedding Cake",
    price: "৳ 4,500",
    image: img("1562440499-64c9a111f713", 800),
    tag: "Premium",
    rating: 5,
  },
  {
    name: "Birthday Confetti Cake",
    price: "৳ 1,450",
    image: img("1565958011703-44f9829ba187", 800),
    rating: 5,
  },
  {
    name: "Red Velvet Celebration",
    price: "৳ 1,350",
    image: img("1549903072-7e6e0bedb7fb", 800),
    rating: 5,
  },
  {
    name: "Fresh Fruit Gateau",
    price: "৳ 1,550",
    image: img("1535141192574-5d4897c12636", 800),
    tag: "Seasonal",
    rating: 4,
  },
];

// 3 · SWEET DELIGHTS — traditional Bengali mishti, freshly made
export const sweetDelights: Product[] = [
  {
    name: "Saffron Motichoor Laddu",
    price: "৳ 420",
    image: "/Sweets/motichoor-laddu.png",
    tag: "Signature",
    rating: 5,
  },
  {
    name: "Cream Chom Chom",
    price: "৳ 340",
    image: "/Sweets/cream-chomchom.png",
    tag: "Bestseller",
    rating: 5,
  },
  {
    name: "Kaju Barfi",
    price: "৳ 480",
    image: "/Sweets/kaju-barfi.png",
    tag: "Premium",
    rating: 5,
  },
  {
    name: "Malai Cream Sandwich",
    price: "৳ 360",
    image: "/Sweets/malai-sandwich.png",
    tag: "Traditional",
    rating: 5,
  },
  {
    name: "Rose Pantua",
    price: "৳ 320",
    image: "/Sweets/rose-pantua.png",
    rating: 5,
  },
  {
    name: "Rose Coconut Laddu",
    price: "৳ 260",
    image: "/Sweets/rose-laddu.png",
    rating: 4,
  },
];

/* ------------------------------------------------------------------ *
 * 4 · SHOP BY CATEGORY — the seven K Bakery aisles
 * ------------------------------------------------------------------ */
export interface Category {
  name: string;
  image: string;
  items: string;
}

export const categories: Category[] = [
  { name: "Cake & Pastry", image: img("1578985545062-69928b1d9587", 800), items: "40+ items" },
  { name: "Sweet", image: "/Sweets/motichoor-laddu.png", items: "30+ items" },
  { name: "Biscuits", image: img("1499636136210-6f4ee915583e", 800), items: "25+ items" },
  { name: "Snacks", image: img("1555507036-ab1f4038808a", 800), items: "20+ items" },
  { name: "Bread", image: img("1598373182133-52452f7691ef", 800), items: "18+ items" },
  { name: "Frozen Food", image: img("1551183053-bf91a1d81141", 800), items: "15+ items" },
  { name: "Dairy", image: img("1628088062854-d1870b4553da", 800), items: "12+ items" },
];

/* ------------------------------------------------------------------ *
 * 5 · NEW ARRIVALS & OFFERS
 * ------------------------------------------------------------------ */
export const newArrivals: Product[] = [
  {
    name: "Pistachio Cream Cake",
    price: "৳ 1,150",
    image: img("1535254973040-607b474cb50d", 700),
    tag: "New",
    rating: 5,
  },
  {
    name: "Cinnamon Bread Twist",
    price: "৳ 130",
    image: img("1608198093002-ad4e005484ec", 700),
    tag: "New",
    rating: 5,
  },
  {
    name: "Artisan Cheese Wheel",
    price: "৳ 520",
    image: img("1563636619-e9143da7973b", 700),
    tag: "New",
    rating: 4,
  },
  {
    name: "Strawberry Glazed Donut",
    price: "৳ 75",
    image: img("1551024506-0bccd828d307", 700),
    tag: "New",
    rating: 5,
  },
];

export interface Offer {
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  tone: "yellow" | "brown" | "green";
}

export const offers: Offer[] = [
  {
    title: "Weekend Cake Festival",
    subtitle: "Flat 20% off on all celebration cakes",
    badge: "20% OFF",
    image: img("1562440499-64c9a111f713", 900),
    tone: "brown",
  },
  {
    title: "Sweet Hour, Every Evening",
    subtitle: "Buy 1kg sweets, get 250g free",
    badge: "FREE 250g",
    image: "/Sweets/kaju-barfi.png",
    tone: "green",
  },
];

/* ------------------------------------------------------------------ *
 * 6 · WHY CHOOSE US
 * ------------------------------------------------------------------ */
export type IconKey = "bread" | "wheat" | "store" | "heart" | "truck" | "leaf";

export interface Feature {
  icon: IconKey;
  title: string;
  text: string;
}

export const whyChooseUs: Feature[] = [
  {
    icon: "bread",
    title: "Baked Fresh Daily",
    text: "Never frozen, never yesterday's — every batch is baked each morning.",
  },
  {
    icon: "leaf",
    title: "Premium Ingredients",
    text: "Real butter, fresh cream and quality flour in everything we bake.",
  },
  {
    icon: "store",
    title: "30+ Outlets",
    text: "The largest food chain in Chattogram, always close to home.",
  },
  {
    icon: "heart",
    title: "Made With Love",
    text: "Three decades of family baking, crafted by hand with care.",
  },
];

export const whyStats = [
  { value: "35+", label: "Years Baking" },
  { value: "30+", label: "Outlets" },
  { value: "150+", label: "Products Daily" },
  { value: "1M+", label: "Happy Customers" },
];

/* ------------------------------------------------------------------ *
 * 7 · OUR BAKING STORIES
 * ------------------------------------------------------------------ */
export interface Story {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export const stories: Story[] = [
  {
    title: "The Secret Behind Our Everyday Fresh Bread",
    excerpt: "A peek inside the early-morning routine that gets warm loaves onto our shelves before sunrise.",
    date: "June 14, 2026",
    category: "Baking",
    image: img("1486427944299-d1955d23e34d", 800),
  },
  {
    title: "How to Order the Perfect Custom Cake",
    excerpt: "From flavours to fondant — a simple guide to designing a show-stopping celebration cake.",
    date: "May 30, 2026",
    category: "Tips",
    image: img("1535254973040-607b474cb50d", 800),
  },
  {
    title: "Now Open: Our Newest Outlet in Chattogram",
    excerpt: "We're growing again! Discover what's in store at the latest addition to the K Bakery family.",
    date: "May 12, 2026",
    category: "News",
    image: img("1517433670267-08bbd4be890f", 800),
  },
];
