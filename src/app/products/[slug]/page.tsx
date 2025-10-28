import { notFound } from "next/navigation";
import { products, ProductData } from "@/app/data/productsData";
import ProductPage from "@/components/ProductPage";

type ParamsType = Promise<{ slug: string }>;

export default async function ProductSlugPage(props: { params: ParamsType }) {
  const { slug } = await props.params;

  const product: ProductData | undefined = products.find(
    (p) => p.slug === slug
  );

  if (!product) return notFound();

  return <ProductPage product={product} />;
}
