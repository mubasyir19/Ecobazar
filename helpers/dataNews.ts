import { v4 as uuidv4 } from "uuid";

export interface Blog {
  id: string;
  categoryBlogId: string;
  thumbnail?: string;
  title: string;
  slug: string;
  content: string;
  adminId: string;
  author?: string;
  createdAt: Date;
  updatedAt: Date;
  category: CategoryBlog;
}

interface CategoryBlog {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

interface commentBlog {
  id: string;
  userId: string;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}

export const categoryBlogs: CategoryBlog[] = [
  {
    id: uuidv4(),
    name: "Fruits",
    slug: "fruits",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    name: "Vegetables",
    slug: "vegetables",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    name: "Healthy Living",
    slug: "healthy-living",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    name: "Recipes",
    slug: "recipes",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const blogs: Blog[] = [
  {
    id: uuidv4(),
    categoryBlogId: categoryBlogs[0].id,
    thumbnail: "/images/news/news1.webp",
    title: "7 Manfaat Buah Alpukat untuk Kesehatan Tubuh",
    slug: "7-manfaat-buah-alpukat-untuk-kesehatan-tubuh",
    content:
      "Alpukat kaya akan lemak sehat, serat, dan vitamin. Konsumsi alpukat secara rutin dapat membantu menurunkan kolesterol, menjaga kesehatan jantung, serta meningkatkan penyerapan nutrisi dalam tubuh.",
    adminId: uuidv4(),
    createdAt: new Date(),
    updatedAt: new Date(),
    category: {
      id: uuidv4(),
      name: "Fruits",
      slug: "fruits",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: uuidv4(),
    categoryBlogId: categoryBlogs[1].id,
    thumbnail: "/images/news/news2.webp",
    title: "Sayuran Hijau yang Wajib Dikonsumsi Setiap Hari",
    slug: "sayuran-hijau-yang-wajib-dikonsumsi-setiap-hari",
    content:
      "Sayuran seperti bayam, kangkung, dan brokoli mengandung banyak zat besi dan antioksidan yang baik untuk metabolisme tubuh. Ketahui manfaatnya dan cara mengolah agar gizinya tetap terjaga.",
    adminId: uuidv4(),
    createdAt: new Date(),
    updatedAt: new Date(),
    category: {
      id: uuidv4(),
      name: "Vegetables",
      slug: "vegetables",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: uuidv4(),
    categoryBlogId: categoryBlogs[2].id,
    thumbnail: "/images/news/news3.webp",
    title: "5 Tips Gaya Hidup Sehat di Era Modern",
    slug: "5-tips-gaya-hidup-sehat-di-era-modern",
    content:
      "Gaya hidup sehat bukan hanya tentang makanan, tetapi juga keseimbangan antara pola tidur, olahraga, dan kesehatan mental. Yuk mulai dari hal-hal kecil untuk tubuh yang lebih bugar dan bahagia.",
    adminId: uuidv4(),
    createdAt: new Date(),
    updatedAt: new Date(),
    category: {
      id: uuidv4(),
      name: "Healthy Living",
      slug: "healthy-living",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: uuidv4(),
    categoryBlogId: categoryBlogs[3].id,
    thumbnail: "/images/news/news4.webp",
    title: "Resep Jus Detoks Segar untuk Hari yang Lebih Enerjik",
    slug: "resep-jus-detoks-segar-untuk-hari-yang-lebih-enerjik",
    content:
      "Cobalah kombinasi apel hijau, seledri, dan lemon untuk membuat jus detoks yang menyegarkan. Minuman ini membantu membersihkan racun dalam tubuh dan meningkatkan energi sepanjang hari.",
    adminId: uuidv4(),
    createdAt: new Date(),
    updatedAt: new Date(),
    category: {
      id: uuidv4(),
      name: "Recipes",
      slug: "recipes",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: uuidv4(),
    categoryBlogId: categoryBlogs[1].id,
    thumbnail: "/images/news/news5.webp",
    title: "Rahasia Menyimpan Sayur Agar Tetap Segar Lebih Lama",
    slug: "rahasia-menyimpan-sayur-agar-tetap-segar-lebih-lama",
    content:
      "Sayuran mudah layu jika disimpan dengan cara yang salah. Simak cara terbaik menyimpan sayur di kulkas agar tetap segar, renyah, dan tidak cepat busuk.",
    adminId: uuidv4(),
    createdAt: new Date(),
    updatedAt: new Date(),
    category: {
      id: uuidv4(),
      name: "Fruits",
      slug: "fruits",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
];

export const comments: commentBlog[] = [
  {
    id: uuidv4(),
    userId: uuidv4(),
    comment:
      "Artikelnya sangat informatif! Sekarang saya tahu kenapa alpukat itu superfood.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    userId: uuidv4(),
    comment:
      "Saya coba resep jus detoksnya, rasanya enak banget dan bikin segar!",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    userId: uuidv4(),
    comment:
      "Tips menyimpan sayur sangat membantu, biasanya sayur saya cepat layu di kulkas.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
