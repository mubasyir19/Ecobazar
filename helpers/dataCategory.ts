interface Category {
  id: string;
  name: string;
  slug: string;
  imageLink: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  sku_code: string;
  price: number;
  description: string;
  stockStatus: "IN_STOCK" | "OUT_OF_STOCK" | "LOW_STOCK";
  stockQuantity: number;
  imageProduct: string;
  createdAt: string;
  updatedAt: string;
  category?: Category;
}

export interface ProductWithCategory extends Product {
  category: Category;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Fresh Fruit",
    slug: "fresh-fruit",
    imageLink: "/images/category/fruits.webp",
  },
  {
    id: "2",
    name: "Fresh Vegetables",
    slug: "fresh-vegetables",
    imageLink: "/images/category/vegetables.webp",
  },
  {
    id: "3",
    name: "Meat & Fish",
    slug: "meat-fish",
    imageLink: "/images/category/meatFish.webp",
  },
  {
    id: "4",
    name: "Snacks",
    slug: "snacks",
    imageLink: "/images/category/snacks.webp",
  },
  {
    id: "5",
    name: "Beverages",
    slug: "beverages",
    imageLink: "/images/category/beverages.webp",
  },
  {
    id: "6",
    name: "Beauty & Health",
    slug: "beauty-healthy",
    imageLink: "/images/category/beautyHealth.webp",
  },
  {
    id: "7",
    name: "Bread & Bakery",
    slug: "bread-bakery",
    imageLink: "/images/category/breadBakery.webp",
  },
  {
    id: "8",
    name: "Baking Needs",
    slug: "baking-needs",
    imageLink: "/images/category/bakingNeeds.webp",
  },
  {
    id: "9",
    name: "Cooking",
    slug: "cooking",
    imageLink: "/images/category/cooking.webp",
  },
  {
    id: "10",
    name: "Diabetic Food",
    slug: "diabetic-food",
    imageLink: "/images/category/diabetic.webp",
  },
  {
    id: "11",
    name: "Dish Detergents",
    slug: "dish-detergents",
    imageLink: "/images/category/dish.webp",
  },
  {
    id: "12",
    name: "Oil",
    slug: "oil",
    imageLink: "/images/category/oil.webp",
  },
];

export const dummyProducts: ProductWithCategory[] = [
  // Fresh Fruit Products
  {
    id: "prod-1",
    categoryId: "cat-2",
    name: "Big potatoes",
    sku_code: "VEGI-POT-001",
    price: 18000,
    description:
      "Big potatoes fresh from farm, perfect for frying and boiling, per kg",
    stockStatus: "IN_STOCK",
    stockQuantity: 35,
    imageProduct: "/images/products/big-potatoes.webp",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    category: categories[1],
  },
  {
    id: "prod-2",
    categoryId: "cat-2",
    name: "Chinese cabbage",
    sku_code: "VEGI-CAB-002",
    price: 12000,
    description:
      "Chinese cabbage fresh and crunchy, great for stir fry and soup, per kg",
    stockStatus: "IN_STOCK",
    stockQuantity: 28,
    imageProduct: "/images/products/chinese-cabbage.webp",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    category: categories[1],
  },
  {
    id: "prod-3",
    categoryId: "cat-2",
    name: "Sweet corn",
    sku_code: "VEGI-CRN-003",
    price: 15000,
    description: "Sweet corn fresh, perfect for boiling or grilling, per kg",
    stockStatus: "IN_STOCK",
    stockQuantity: 42,
    imageProduct: "/images/products/corn.webp",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    category: categories[1],
  },
  {
    id: "prod-4",
    categoryId: "cat-2",
    name: "Fresh eggplant",
    sku_code: "VEGI-EGP-004",
    price: 14000,
    description:
      "Fresh eggplant, perfect for curry and stir fry dishes, per kg",
    stockStatus: "IN_STOCK",
    stockQuantity: 25,
    imageProduct: "/images/products/eggplant.webp",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    category: categories[1],
  },
  {
    id: "prod-5",
    categoryId: "cat-2",
    name: "Fresh cauliflower",
    sku_code: "VEGI-CAU-005",
    price: 22000,
    description:
      "Fresh cauliflower, great for soups and vegetable dishes, per kg",
    stockStatus: "IN_STOCK",
    stockQuantity: 18,
    imageProduct: "/images/products/fresh-cauliflower.webp",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    category: categories[1],
  },
  {
    id: "prod-6",
    categoryId: "cat-1",
    name: "Fresh Indian Malta oranges",
    sku_code: "FRUIT-MAL-006",
    price: 35000,
    description: "Fresh Indian Malta oranges, sweet and juicy, per kg",
    stockStatus: "IN_STOCK",
    stockQuantity: 32,
    imageProduct: "/images/products/fresh-indian-malta.webp",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    category: categories[0],
  },
  {
    id: "prod-7",
    categoryId: "cat-1",
    name: "Green apples",
    sku_code: "FRUIT-GAP-007",
    price: 28000,
    description:
      "Green apples crisp and slightly tart, perfect for snacks, per kg",
    stockStatus: "IN_STOCK",
    stockQuantity: 40,
    imageProduct: "/images/products/green-apple.webp",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    category: categories[0],
  },
  {
    id: "prod-8",
    categoryId: "cat-2",
    name: "Green capsicum",
    sku_code: "VEGI-CAP-008",
    price: 16000,
    description:
      "Green capsicum fresh and crunchy, great for salads and cooking, per kg",
    stockStatus: "IN_STOCK",
    stockQuantity: 30,
    imageProduct: "/images/products/green-capsicum.webp",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    category: categories[1],
  },
  {
    id: "prod-9",
    categoryId: "cat-2",
    name: "Green chili",
    sku_code: "VEGI-GCH-009",
    price: 8000,
    description:
      "Green chili fresh and spicy, perfect for seasoning, per 250gr",
    stockStatus: "IN_STOCK",
    stockQuantity: 55,
    imageProduct: "/images/products/green-chili.webp",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    category: categories[1],
  },
  {
    id: "prod-10",
    categoryId: "cat-2",
    name: "Green lettuce",
    sku_code: "VEGI-LET-010",
    price: 12000,
    description:
      "Green lettuce fresh and crispy, perfect for salads and burgers, per kg",
    stockStatus: "IN_STOCK",
    stockQuantity: 38,
    imageProduct: "/images/products/green-letuce.webp",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    category: categories[1],
  },
  {
    id: "prod-11",
    categoryId: "cat-2",
    name: "Red chili",
    sku_code: "VEGI-RCH-011",
    price: 9000,
    description:
      "Red chili hot and spicy, perfect for sambal and cooking, per 250gr",
    stockStatus: "IN_STOCK",
    stockQuantity: 45,
    imageProduct: "/images/products/red-chili.webp",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    category: categories[1],
  },
  {
    id: "prod-12",
    categoryId: "cat-2",
    name: "Red tomatoes",
    sku_code: "VEGI-TOM-012",
    price: 15000,
    description:
      "Red tomatoes fresh and juicy, perfect for salads and cooking, per kg",
    stockStatus: "IN_STOCK",
    stockQuantity: 33,
    imageProduct: "/images/products/red-tomatos.webp",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    category: categories[1],
  },
  {
    id: "prod-13",
    categoryId: "cat-1",
    name: "Surjapur mangoes",
    sku_code: "FRUIT-MAN-013",
    price: 42000,
    description:
      "Surjapur mangoes sweet and fiberless, premium quality, per kg",
    stockStatus: "IN_STOCK",
    stockQuantity: 20,
    imageProduct: "/images/products/surjapur-mangos.webp",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    category: categories[0],
  },

  // Additional products untuk melengkapi kategori lainnya
  {
    id: "prod-14",
    categoryId: "cat-3",
    name: "Fresh chicken",
    sku_code: "MEAT-CHK-014",
    price: 45000,
    description:
      "Fresh chicken breast, boneless and skinless, premium quality, per kg",
    stockStatus: "IN_STOCK",
    stockQuantity: 15,
    imageProduct: "/images/products/chicken-breast.webp",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    category: categories[2],
  },
  {
    id: "prod-15",
    categoryId: "cat-5",
    name: "Fresh orange",
    sku_code: "BEV-ORA-015",
    price: 18000,
    description:
      "Fresh orange juice, 100% natural without preservatives, 1L bottle",
    stockStatus: "IN_STOCK",
    stockQuantity: 25,
    imageProduct: "/images/products/orange-juice.webp",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    category: categories[4],
  },
  {
    id: "prod-16",
    categoryId: "cat-7",
    name: "Fresh white bread",
    sku_code: "BRED-WHT-016",
    price: 25000,
    description:
      "Fresh white bread, soft and delicious, perfect for breakfast, 450gr",
    stockStatus: "IN_STOCK",
    stockQuantity: 30,
    imageProduct: "/images/products/white-bread.webp",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    category: categories[6],
  },
];
