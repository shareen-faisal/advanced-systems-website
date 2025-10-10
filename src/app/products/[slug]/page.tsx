import { notFound } from "next/navigation";
import { products } from "@/app/data/productsData";
import ProductPage from "@/components/ProductPage";

interface ProductSlugPageProps {
  params: {
    slug: string;
  };
}

export default function ProductSlugPage({ params }: ProductSlugPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return notFound(); // Shows Next.js 404 page
  }

  return <ProductPage product={product} />;
}
