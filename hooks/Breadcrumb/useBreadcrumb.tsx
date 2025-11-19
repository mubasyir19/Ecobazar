import { usePathname } from "next/navigation";

export function useBreadcrumb() {
  const pathname = usePathname() || "/";

  // Pisahkan path menjadi segment
  const segments = pathname.split("/").filter(Boolean);

  // Buat breadcrumb array
  const breadcrumbs = segments.map((segment, index) => {
    // Build path dari awal hingga segment ke-n
    const href = "/" + segments.slice(0, index + 1).join("/");

    // Buat label yang rapi: "product-list" -> "Product List"
    const label = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (x) => x.toUpperCase());

    return { label, href };
  });

  return breadcrumbs;
}
