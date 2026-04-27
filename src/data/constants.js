// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
export const C = {
  bg:       "#FAF7F0",
  white:    "#FFFFFF",
  black:    "#0A0A0A",
  text:     "#1C1C1C",
  muted:    "#7A7A7A",
  faint:    "#B8B0A6",
  border:   "#E8E2DA",
  gold:     "#C9A96E",
  goldBg:   "#F5EDD8",
  goldDark: "#9F7A42",
  dark:     "#111111",
};

export const serif = "'Cormorant Garamond', Georgia, serif";
export const sans  = "'Jost', sans-serif";
export const fmt   = (n) => `₹${Number(n).toLocaleString("en-IN")}`;

// ─── FALLBACK GRADIENTS ───────────────────────────────────────────────────────
export const FALLBACKS = {
  Women:       "linear-gradient(150deg,#F4E4D6 0%,#E8CEB8 100%)",
  Men:         "linear-gradient(150deg,#D4E0EC 0%,#BED0E0 100%)",
  Shoes:       "linear-gradient(150deg,#EDE0CC 0%,#DDD0B8 100%)",
  Accessories: "linear-gradient(150deg,#EEE4CC 0%,#E0D4B4 100%)",
};

// ─── PRODUCTS DATA ────────────────────────────────────────────────────────────
export const PRODUCTS = [
  // ── Women
  {
    id: 1, name: "Silk Wrap Dress", brand: "Maison Élite",
    price: 2890, orig: null, cat: "Women",
    sizes: ["XS","S","M","L"], colors: ["Ivory","Black","Sage"],
    rating: 4.8, reviews: 124, isNew: true,
    img: "https://images.unsplash.com/photo-1515372602834-e434c1e3b2d3?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 2, name: "Tailored Blazer", brand: "Atelier Nord",
    price: 3450, orig: 4200, cat: "Women",
    sizes: ["XS","S","M","L","XL"], colors: ["Black","Camel","Navy"],
    rating: 4.9, reviews: 89, isNew: false,
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 3, name: "Cashmere Knit", brand: "Soft House",
    price: 1890, orig: null, cat: "Women",
    sizes: ["XS","S","M","L"], colors: ["Cream","Caramel","Forest"],
    rating: 4.7, reviews: 203, isNew: true,
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 4, name: "Wide Leg Trousers", brand: "Maison Élite",
    price: 2200, orig: null, cat: "Women",
    sizes: ["XS","S","M","L","XL"], colors: ["Black","Ecru","Olive"],
    rating: 4.6, reviews: 156, isNew: false,
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4b4857?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 5, name: "Linen Shirt Dress", brand: "Plage Studio",
    price: 1650, orig: 2100, cat: "Women",
    sizes: ["XS","S","M","L"], colors: ["White","Sand","Blue"],
    rating: 4.5, reviews: 78, isNew: false,
    img: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 6, name: "Structured Coat", brand: "Atelier Nord",
    price: 5900, orig: null, cat: "Women",
    sizes: ["XS","S","M","L"], colors: ["Camel","Black","Grey"],
    rating: 4.9, reviews: 67, isNew: true,
    img: "https://images.unsplash.com/photo-1544441893675-973e31985b72?w=420&h=560&fit=crop&q=80",
  },
  // ── Men
  {
    id: 7, name: "Oxford Shirt", brand: "Brummel Co.",
    price: 980, orig: null, cat: "Men",
    sizes: ["S","M","L","XL","XXL"], colors: ["White","Blue","Pink"],
    rating: 4.7, reviews: 234, isNew: false,
    img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 8, name: "Slim Chinos", brand: "Brummel Co.",
    price: 1290, orig: 1600, cat: "Men",
    sizes: ["28","30","32","34","36"], colors: ["Navy","Khaki","Olive"],
    rating: 4.6, reviews: 189, isNew: false,
    img: "https://images.unsplash.com/photo-1617137984326-d86eb62a7591?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 9, name: "Merino Crewneck", brand: "Soft House",
    price: 1800, orig: null, cat: "Men",
    sizes: ["S","M","L","XL"], colors: ["Navy","Grey","Forest"],
    rating: 4.8, reviews: 145, isNew: true,
    img: "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 10, name: "Linen Suit", brand: "Maison Élite",
    price: 6800, orig: null, cat: "Men",
    sizes: ["46","48","50","52","54"], colors: ["Sand","Navy","Charcoal"],
    rating: 4.9, reviews: 43, isNew: true,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 11, name: "Field Jacket", brand: "Atelier Nord",
    price: 3200, orig: 4000, cat: "Men",
    sizes: ["S","M","L","XL"], colors: ["Olive","Black","Tan"],
    rating: 4.7, reviews: 98, isNew: false,
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 12, name: "Polo Shirt", brand: "Brummel Co.",
    price: 890, orig: null, cat: "Men",
    sizes: ["S","M","L","XL"], colors: ["White","Navy","Green"],
    rating: 4.5, reviews: 312, isNew: false,
    img: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=420&h=560&fit=crop&q=80",
  },
  // ── Shoes
  {
    id: 13, name: "Leather Loafers", brand: "Sole Atelier",
    price: 2400, orig: null, cat: "Shoes",
    sizes: ["36","37","38","39","40","41"], colors: ["Black","Tan","Burgundy"],
    rating: 4.8, reviews: 176, isNew: false,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 14, name: "Suede Chelsea Boot", brand: "Sole Atelier",
    price: 3100, orig: 3800, cat: "Shoes",
    sizes: ["36","37","38","39","40","41","42"], colors: ["Tan","Black","Grey"],
    rating: 4.7, reviews: 134, isNew: false,
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 15, name: "Minimalist Sneaker", brand: "Veloce",
    price: 1600, orig: null, cat: "Shoes",
    sizes: ["36","37","38","39","40","41","42","43","44"], colors: ["White","Black","Cream"],
    rating: 4.9, reviews: 421, isNew: true,
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 16, name: "Block Heel Mule", brand: "Sole Atelier",
    price: 2100, orig: null, cat: "Shoes",
    sizes: ["36","37","38","39","40"], colors: ["Ivory","Black","Nude"],
    rating: 4.6, reviews: 87, isNew: true,
    img: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=420&h=560&fit=crop&q=80",
  },
  // ── Accessories
  {
    id: 17, name: "Structured Tote", brand: "Maison Élite",
    price: 4800, orig: null, cat: "Accessories",
    sizes: ["One Size"], colors: ["Black","Tan","White"],
    rating: 4.9, reviews: 203, isNew: false,
    img: "https://images.unsplash.com/photo-1548036161-18ae4bed8d9e?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 18, name: "Silk Scarf", brand: "Maison Élite",
    price: 980, orig: null, cat: "Accessories",
    sizes: ["One Size"], colors: ["Floral","Geometric","Solid"],
    rating: 4.7, reviews: 156, isNew: true,
    img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 19, name: "Leather Belt", brand: "Brummel Co.",
    price: 650, orig: 850, cat: "Accessories",
    sizes: ["75","80","85","90","95"], colors: ["Black","Tan","Burgundy"],
    rating: 4.6, reviews: 289, isNew: false,
    img: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 20, name: "Mini Shoulder Bag", brand: "Maison Élite",
    price: 3600, orig: 4500, cat: "Accessories",
    sizes: ["One Size"], colors: ["Black","Cognac","White"],
    rating: 4.9, reviews: 97, isNew: true,
    img: "https://images.unsplash.com/photo-1614179818081-f25ffe41c1fe?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 21, name: "Cashmere Scarf", brand: "Soft House",
    price: 1200, orig: null, cat: "Accessories",
    sizes: ["One Size"], colors: ["Camel","Grey","Black"],
    rating: 4.8, reviews: 178, isNew: false,
    img: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 22, name: "Wool Beanie", brand: "Soft House",
    price: 450, orig: null, cat: "Accessories",
    sizes: ["One Size"], colors: ["Charcoal","Cream","Forest"],
    rating: 4.5, reviews: 234, isNew: false,
    img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 23, name: "Sunglasses", brand: "Optique Maison",
    price: 1800, orig: null, cat: "Accessories",
    sizes: ["One Size"], colors: ["Black","Tortoise","Gold"],
    rating: 4.7, reviews: 145, isNew: true,
    img: "https://images.unsplash.com/photo-1511499767150-a4d1237291c5?w=420&h=560&fit=crop&q=80",
  },
  {
    id: 24, name: "Eau de Parfum", brand: "Maison Élite",
    price: 3200, orig: null, cat: "Accessories",
    sizes: ["50ml","100ml","150ml"], colors: ["Classic","Intense","Light"],
    rating: 4.9, reviews: 89, isNew: true,
    img: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=420&h=560&fit=crop&q=80",
  },
];
