// Central content + design data for the K Bakery site.
// Imagery is from Unsplash (free to use) via verified photo IDs.

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
  { label: "About", href: "#about" },
  { label: "Products", href: "#menu" },
  { label: "Our Bakers", href: "#chefs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export type IconKey =
  | "bread"
  | "wheat"
  | "store"
  | "heart"
  | "cake"
  | "cookie"
  | "truck"
  | "cup";

export interface Feature {
  icon: IconKey;
  title: string;
  text: string;
}

export const features: Feature[] = [
  {
    icon: "bread",
    title: "Baked Fresh Daily",
    text: "Every loaf, cake and pastry is baked from scratch each morning — never frozen, never yesterday's.",
  },
  {
    icon: "wheat",
    title: "Premium Ingredients",
    text: "Real butter, fresh cream and quality flour. We never cut corners on what goes into your treats.",
  },
  {
    icon: "store",
    title: "30+ Outlets",
    text: "The largest food chain in Chattogram — there's always a K Bakery close to home.",
  },
  {
    icon: "heart",
    title: "Made With Love",
    text: "Three decades of family baking, crafted by hand and served with a smile every single day.",
  },
];

export const aboutStats = [
  { value: "35+", label: "Years of Baking" },
  { value: "30+", label: "Outlets in Chattogram" },
  { value: "150+", label: "Products Daily" },
  { value: "1M+", label: "Happy Customers" },
];

export interface ProductCategory {
  name: string;
  description: string;
  image: string;
  items: string;
}

// "Explore Our Range" — the six K Bakery categories.
export const productCategories: ProductCategory[] = [
  {
    name: "Cake & Pastry",
    description: "Celebration cakes, fresh-cream pastries and rich gateaux.",
    image: img("1578985545062-69928b1d9587", 800),
    items: "40+ items",
  },
  {
    name: "Cookies & Muffin",
    description: "Crunchy butter cookies and soft, fluffy baked muffins.",
    image: img("1499636136210-6f4ee915583e", 800),
    items: "25+ items",
  },
  {
    name: "Sweets",
    description: "Traditional mishti and fusion sweets, prepared daily.",
    image: img("1569864358642-9d1684040f43", 800),
    items: "30+ items",
  },
  {
    name: "Fast Food",
    description: "Patties, rolls, sandwiches and hot savoury snacks.",
    image: img("1555507036-ab1f4038808a", 800),
    items: "20+ items",
  },
  {
    name: "Frozen",
    description: "Ice cream, frozen treats and ready-to-bake favourites.",
    image: img("1551183053-bf91a1d81141", 800),
    items: "15+ items",
  },
  {
    name: "Dessert",
    description: "Puddings, tarts and irresistible everyday indulgences.",
    image: img("1535141192574-5d4897c12636", 800),
    items: "20+ items",
  },
];

export const productCategoryNames = productCategories.map((c) => c.name);

export interface Product {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  tag?: string;
}

export const products: Product[] = [
  // Cake & Pastry
  {
    name: "Chocolate Fudge Cake",
    description: "Moist chocolate sponge layered with rich fudge (per pound).",
    price: "৳ 850",
    category: "Cake & Pastry",
    image: img("1578985545062-69928b1d9587", 600),
    tag: "Bestseller",
  },
  {
    name: "Vanilla Cream Pastry",
    description: "Light sponge filled with fresh whipped vanilla cream.",
    price: "৳ 60",
    category: "Cake & Pastry",
    image: img("1563729784474-d77dbb933a9e", 600),
  },
  {
    name: "Red Velvet Slice",
    description: "Velvety cocoa sponge with cream-cheese frosting.",
    price: "৳ 120",
    category: "Cake & Pastry",
    image: img("1549903072-7e6e0bedb7fb", 600),
  },
  {
    name: "Butter Croissant",
    description: "Flaky, all-butter croissant baked golden each morning.",
    price: "৳ 70",
    category: "Cake & Pastry",
    image: img("1623334044303-241021148842", 600),
  },
  // Cookies & Muffin
  {
    name: "Choco Chip Cookies",
    description: "Crisp-edged, chewy cookies loaded with chocolate (250g).",
    price: "৳ 220",
    category: "Cookies & Muffin",
    image: img("1499636136210-6f4ee915583e", 600),
    tag: "Bestseller",
  },
  {
    name: "Double Chocolate Muffin",
    description: "Soft chocolate muffin with melting chocolate chunks.",
    price: "৳ 90",
    category: "Cookies & Muffin",
    image: img("1607958996333-41aef7caefaa", 600),
  },
  {
    name: "Almond Butter Cookies",
    description: "Melt-in-the-mouth shortbread topped with roasted almond.",
    price: "৳ 250",
    category: "Cookies & Muffin",
    image: img("1558961363-fa8fdf82db35", 600),
  },
  {
    name: "Blueberry Muffin",
    description: "Buttery muffin bursting with sweet blueberries.",
    price: "৳ 95",
    category: "Cookies & Muffin",
    image: img("1426869981800-95ebf51ce900", 600),
  },
  // Sweets
  {
    name: "Assorted Mishti Box",
    description: "A hand-picked selection of our finest traditional sweets.",
    price: "৳ 450",
    category: "Sweets",
    image: img("1576618148400-f54bed99fcfd", 600),
    tag: "Traditional",
  },
  {
    name: "French Macarons",
    description: "Delicate almond macarons in six seasonal flavours (6 pcs).",
    price: "৳ 360",
    category: "Sweets",
    image: img("1569864358642-9d1684040f43", 600),
  },
  {
    name: "Cream Caramel Bites",
    description: "Bite-sized caramel sweets with a silky centre.",
    price: "৳ 280",
    category: "Sweets",
    image: img("1464349095431-e9a21285b5f3", 600),
  },
  // Fast Food
  {
    name: "Chicken Patties",
    description: "Flaky pastry parcel with spiced minced chicken.",
    price: "৳ 50",
    category: "Fast Food",
    image: img("1555507036-ab1f4038808a", 600),
    tag: "Bestseller",
  },
  {
    name: "Veg Spring Roll",
    description: "Crispy rolls packed with fresh seasoned vegetables.",
    price: "৳ 40",
    category: "Fast Food",
    image: img("1543353071-873f17a7a088", 600),
  },
  {
    name: "Chicken Sandwich",
    description: "Soft milk bread, grilled chicken and garden salad.",
    price: "৳ 120",
    category: "Fast Food",
    image: img("1601000938259-9e92002320b2", 600),
  },
  // Frozen
  {
    name: "Vanilla Ice Cream",
    description: "Creamy slow-churned vanilla ice cream (500 ml).",
    price: "৳ 280",
    category: "Frozen",
    image: img("1551183053-bf91a1d81141", 600),
  },
  {
    name: "Chocolate Cornetto",
    description: "Crunchy cone with chocolate ice cream and a fudge tip.",
    price: "৳ 60",
    category: "Frozen",
    image: img("1488477181946-6428a0291777", 600),
  },
  {
    name: "Frozen Paratha",
    description: "Ready-to-fry flaky parathas for a quick warm breakfast (5 pcs).",
    price: "৳ 150",
    category: "Frozen",
    image: img("1530610476181-d83430b64dcd", 600),
  },
  // Dessert
  {
    name: "Caramel Pudding",
    description: "Classic steamed pudding under a glossy caramel layer.",
    price: "৳ 110",
    category: "Dessert",
    image: img("1535141192574-5d4897c12636", 600),
  },
  {
    name: "Fresh Fruit Tart",
    description: "Crisp tart shell, vanilla custard and seasonal fruit.",
    price: "৳ 140",
    category: "Dessert",
    image: img("1432139555190-58524dae6a55", 600),
    tag: "Seasonal",
  },
  {
    name: "Tiramisu Cup",
    description: "Coffee-soaked sponge with mascarpone cream and cocoa.",
    price: "৳ 160",
    category: "Dessert",
    image: img("1567620905732-2d1ec7ab7445", 600),
  },
];

export interface Baker {
  name: string;
  role: string;
  image: string;
}

export const bakers: Baker[] = [
  {
    name: "Rahim Uddin",
    role: "Master Baker",
    image: img("1577219491135-ce391730fb2c", 600),
  },
  {
    name: "Nasrin Akter",
    role: "Head Pastry Chef",
    image: img("1494790108377-be9c29b29330", 600),
  },
  {
    name: "Sadia Islam",
    role: "Cake Artist",
    image: img("1438761681033-6461ffad8d80", 600),
  },
  {
    name: "Karim Hossain",
    role: "Production Head",
    image: img("1500648767791-00dcc994a43e", 600),
  },
];

export const gallery = [
  img("1517433670267-08bbd4be890f", 700),
  img("1568254183919-78a4f43a2877", 700),
  img("1486427944299-d1955d23e34d", 700),
  img("1509440159596-0249088772ff", 700),
  img("1578985545062-69928b1d9587", 700),
  img("1499636136210-6f4ee915583e", 700),
  img("1551024601-bec78aea704b", 700),
  img("1556910103-1c02745aae4d", 700),
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
    name: "Tasnia Rahman",
    role: "Regular Customer",
    quote:
      "K Bakery's chocolate fudge cake is a fixture at every family birthday. Always fresh, always perfect — nothing else in Chattogram comes close.",
    rating: 5,
    avatar: img("1438761681033-6461ffad8d80", 200),
  },
  {
    name: "Imran Chowdhury",
    role: "Office Manager",
    quote:
      "We order patties and pastries for office events every week. The quality is consistent and the team always delivers right on time.",
    rating: 5,
    avatar: img("1500648767791-00dcc994a43e", 200),
  },
  {
    name: "Farzana Akter",
    role: "Home Maker",
    quote:
      "The freshest bread and the friendliest staff. My kids won't have breakfast without a K Bakery muffin on the table.",
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
    title: "The Secret Behind Our Everyday Fresh Bread",
    excerpt:
      "A peek inside the early-morning routine that gets warm, golden loaves onto our shelves before sunrise.",
    date: "June 14, 2026",
    category: "Baking",
    author: "Rahim Uddin",
    image: img("1486427944299-d1955d23e34d", 800),
  },
  {
    title: "How to Order the Perfect Custom Celebration Cake",
    excerpt:
      "From flavours to fondant — a simple guide to designing a show-stopping cake for your next big day.",
    date: "May 30, 2026",
    category: "Tips",
    author: "Sadia Islam",
    image: img("1578985545062-69928b1d9587", 800),
  },
  {
    title: "Now Open: Our Newest Outlet in Chattogram",
    excerpt:
      "We're growing again! Discover what's in store at the latest addition to the K Bakery family.",
    date: "May 12, 2026",
    category: "News",
    author: "K Bakery Team",
    image: img("1517433670267-08bbd4be890f", 800),
  },
];
