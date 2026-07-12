import { img } from "@/lib/data";

export type AdminProductStatus = "published" | "draft";
export type ProductStockLevel = "in_stock" | "low" | "out_of_stock";
export type ResumeStatus = "new" | "reviewed" | "shortlisted" | "rejected";
export type StockStatus = "healthy" | "low" | "critical";

export interface AdminProduct {
  id: string;
  sku: string;
  name: string;
  category: string;
  price: string;
  tag?: string;
  image: string;
  status: AdminProductStatus;
  stock: number;
  minStock: number;
  soldTotal: number;
  soldThisMonth: number;
  updatedAt: string;
}

export interface AdminResume {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  message: string;
  cvFileName: string;
  submittedAt: string;
  status: ResumeStatus;
}

export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  unit: string;
  stock: number;
  minStock: number;
  supplier: string;
  lastRestocked: string;
}

export const adminProductCategories = [
  "Cakes",
  "Pastries",
  "Bread",
  "Sweets",
  "Snacks",
  "Beverages",
] as const;

export const adminNav = [
  { label: "Dashboard", href: "/admin", icon: "layout" as const },
  { label: "Products", href: "/admin/products", icon: "cake" as const },
  { label: "Resumes", href: "/admin/resumes", icon: "users" as const },
  { label: "Inventory", href: "/admin/inventory", icon: "package" as const },
];

export const dummyAdminProducts: AdminProduct[] = [
  {
    id: "prd-001",
    sku: "CAK-101",
    name: "Chocolate Fudge Cake",
    category: "Cakes",
    price: "৳ 850",
    tag: "Bestseller",
    image: img("1578985545062-69928b1d9587", 400),
    status: "published",
    stock: 24,
    minStock: 10,
    soldTotal: 1842,
    soldThisMonth: 186,
    updatedAt: "2026-07-10",
  },
  {
    id: "prd-002",
    sku: "PST-204",
    name: "Butter Croissant",
    category: "Pastries",
    price: "৳ 70",
    image: img("1623334044303-241021148842", 400),
    status: "published",
    stock: 68,
    minStock: 30,
    soldTotal: 3204,
    soldThisMonth: 412,
    updatedAt: "2026-07-11",
  },
  {
    id: "prd-003",
    sku: "CAK-118",
    name: "Pistachio Cream Cake",
    category: "Cakes",
    price: "৳ 920",
    tag: "New",
    image: img("1535254973040-607b474cb50d", 400),
    status: "published",
    stock: 8,
    minStock: 12,
    soldTotal: 96,
    soldThisMonth: 96,
    updatedAt: "2026-07-12",
  },
  {
    id: "prd-004",
    sku: "SWT-045",
    name: "Saffron Motichoor Laddu",
    category: "Sweets",
    price: "৳ 420",
    tag: "Signature",
    image: "/Sweets/motichoor-laddu.png",
    status: "published",
    stock: 35,
    minStock: 15,
    soldTotal: 756,
    soldThisMonth: 88,
    updatedAt: "2026-07-09",
  },
  {
    id: "prd-005",
    sku: "PST-312",
    name: "Seasonal Mango Tart",
    category: "Pastries",
    price: "৳ 180",
    image: img("1551024506-0bccd828d307", 400),
    status: "draft",
    stock: 0,
    minStock: 8,
    soldTotal: 0,
    soldThisMonth: 0,
    updatedAt: "2026-07-12",
  },
];

export const dummyResumes: AdminResume[] = [
  {
    id: "res-001",
    fullName: "Fatima Rahman",
    email: "fatima.r@email.com",
    phone: "01712345678",
    position: "Pastry Chef",
    experience: "3-5",
    message:
      "Trained in fondant work and celebration cakes. Previously at a boutique bakery in Dhaka.",
    cvFileName: "Fatima_Rahman_CV.pdf",
    submittedAt: "2026-07-12T09:14:00",
    status: "new",
  },
  {
    id: "res-002",
    fullName: "Rahim Uddin",
    email: "rahim.u@email.com",
    phone: "01898765432",
    position: "Counter Sales Associate",
    experience: "1-3",
    message: "Friendly with customers, familiar with POS systems and outlet operations.",
    cvFileName: "Rahim_Uddin_Resume.docx",
    submittedAt: "2026-07-11T16:42:00",
    status: "reviewed",
  },
  {
    id: "res-003",
    fullName: "Nusrat Jahan",
    email: "nusrat.j@email.com",
    phone: "01955667788",
    position: "Outlet Manager",
    experience: "5+",
    message: "Managed two food outlets in Chattogram. Strong team leadership background.",
    cvFileName: "Nusrat_Jahan_CV.pdf",
    submittedAt: "2026-07-10T11:05:00",
    status: "shortlisted",
  },
  {
    id: "res-004",
    fullName: "Karim Hassan",
    email: "karim.h@email.com",
    phone: "01633445566",
    position: "Kitchen Helper",
    experience: "0-1",
    message: "Eager to learn baking. Available for early morning shifts.",
    cvFileName: "Karim_Hassan_CV.pdf",
    submittedAt: "2026-07-09T08:30:00",
    status: "new",
  },
];

export const dummyInventory: InventoryItem[] = [
  {
    id: "inv-001",
    name: "Premium Bread Flour",
    sku: "FLR-001",
    category: "Flour & Grains",
    unit: "kg",
    stock: 240,
    minStock: 80,
    supplier: "Fresh Mills Co.",
    lastRestocked: "2026-07-11",
  },
  {
    id: "inv-002",
    name: "Unsalted Butter",
    sku: "DRY-014",
    category: "Dairy",
    unit: "kg",
    stock: 42,
    minStock: 50,
    supplier: "FarmFresh Dairy",
    lastRestocked: "2026-07-10",
  },
  {
    id: "inv-003",
    name: "Fresh Cream",
    sku: "DRY-022",
    category: "Dairy",
    unit: "litre",
    stock: 18,
    minStock: 25,
    supplier: "FarmFresh Dairy",
    lastRestocked: "2026-07-12",
  },
  {
    id: "inv-004",
    name: "Dark Chocolate Couverture",
    sku: "CHC-008",
    category: "Fillings & Toppings",
    unit: "kg",
    stock: 35,
    minStock: 20,
    supplier: "Cocoa Traders",
    lastRestocked: "2026-07-08",
  },
  {
    id: "inv-005",
    name: "Pistachio Paste",
    sku: "NUT-003",
    category: "Fillings & Toppings",
    unit: "kg",
    stock: 8,
    minStock: 15,
    supplier: "Nut House BD",
    lastRestocked: "2026-07-05",
  },
  {
    id: "inv-006",
    name: "Cake Boxes (8 inch)",
    sku: "PKG-112",
    category: "Packaging",
    unit: "pcs",
    stock: 520,
    minStock: 200,
    supplier: "PackPro",
    lastRestocked: "2026-07-12",
  },
  {
    id: "inv-007",
    name: "Active Dry Yeast",
    sku: "FLR-009",
    category: "Flour & Grains",
    unit: "kg",
    stock: 12,
    minStock: 10,
    supplier: "Fresh Mills Co.",
    lastRestocked: "2026-07-07",
  },
  {
    id: "inv-008",
    name: "Saffron Strands",
    sku: "SPC-001",
    category: "Fillings & Toppings",
    unit: "g",
    stock: 45,
    minStock: 30,
    supplier: "Spice Lane",
    lastRestocked: "2026-07-06",
  },
];

export function getStockStatus(item: InventoryItem): StockStatus {
  if (item.stock <= item.minStock * 0.5) return "critical";
  if (item.stock <= item.minStock) return "low";
  return "healthy";
}

export function getProductStockLevel(product: AdminProduct): ProductStockLevel {
  if (product.stock <= 0) return "out_of_stock";
  if (product.stock <= product.minStock) return "low";
  return "in_stock";
}

export function parsePriceNumber(price: string) {
  return Number(price.replace(/[^\d]/g, "")) || 0;
}

export function formatAdminDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatAdminDateTime(iso: string) {
  return new Date(iso).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}
