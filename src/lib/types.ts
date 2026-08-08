export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  old_price: number;
  sku: string;
  stock: number;
  sold: number;
  rating: number;
  reviews: number;
  image: string;
  images: string;
  short_desc: string;
  description: string;
  features: string;
  specs: string;
  colors: string;
  sizes: string;
  tags: string;
  delivery_dhaka: number;
  delivery_outside: number;
  warranty: string;
  status: string;
  is_featured: number;
  is_bestseller: number;
  is_new: number;
  is_trending: number;
  is_flash: number;
  created_at: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  color?: string;
  size?: string;
}

export interface Order {
  id: string;
  order_number: string;
  customer_name: string;
  phone: string;
  alt_phone: string;
  email: string;
  division: string;
  district: string;
  thana: string;
  address: string;
  items: string;
  subtotal: number;
  discount: number;
  delivery_charge: number;
  total: number;
  payment_method: string;
  transaction_id: string;
  sender_number: string;
  status: string;
  notes: string;
  delivery_note: string;
  created_at: string;
}

export interface Coupon {
  id: string;
  code: string;
  type: "percent" | "fixed" | "free_delivery";
  value: number;
  min_purchase: number;
  max_discount: number;
  expires_at: string;
  usage_limit: number;
  used: number;
  status: string;
}

export interface Review {
  id: string;
  product_id: string;
  customer_name: string;
  rating: number;
  title: string;
  review: string;
  verified: number;
  helpful: number;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  count: number;
}

export const CATEGORIES: Category[] = [
  { id: "clothing", name: "Clothing", slug: "clothing", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop", count: 6 },
  { id: "home-decoration", name: "Home Decoration", slug: "home-decoration", image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600&auto=format&fit=crop", count: 5 },
  { id: "accessories", name: "Accessories", slug: "accessories", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop", count: 5 },
  { id: "gaming-accessories", name: "Gaming Accessories", slug: "gaming-accessories", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop", count: 6 },
];

export const DIVISIONS = [
  "Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh"
];

export const DISTRICTS: Record<string, string[]> = {
  Dhaka: ["Dhaka", "Gazipur", "Narayanganj", "Manikganj", "Munshiganj", "Narsingdi", "Tangail", "Faridpur", "Gopalganj", "Madaripur", "Rajbari", "Shariatpur", "Kishoreganj"],
  Chittagong: ["Chittagong", "Cox's Bazar", "Rangamati", "Bandarban", "Khagrachhari", "Feni", "Lakshmipur", "Comilla", "Chandpur", "Brahmanbaria", "Noakhali"],
  Rajshahi: ["Rajshahi", "Bogra", "Naogaon", "Natore", "Sirajganj", "Pabna", "Joypurhat", "Chapainawabganj"],
  Khulna: ["Khulna", "Bagerhat", "Satkhira", "Jessore", "Magura", "Jhenaidah", "Kushtia", "Chuadanga", "Meherpur", "Narail"],
  Barisal: ["Barisal", "Bhola", "Jhalakathi", "Patuakhali", "Pirojpur", "Barguna"],
  Sylhet: ["Sylhet", "Moulvibazar", "Habiganj", "Sunamganj"],
  Rangpur: ["Rangpur", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Thakurgaon"],
  Mymensingh: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"],
};
