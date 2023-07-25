import Typography from "@/components/typography";
import { Product } from "@/model/Product";
import fetcher from "@/util/fetcher";
import ProductBanner from "./_components/ProductBanner";
import RelatedProducts from "./_components/RelatedProducts";

interface ProductDetailProps {
  params: { id: string };
}

const ProductDetail = async ({ params: { id } }: ProductDetailProps) => {
  const product: Product = await fetcher(`/products/${id}`).then((r) =>
    r.json()
  );

  return (
    <main className="pb-16 pt-9 max-w-screen-md mx-auto space-y-8">
      <div className="flex justify-center">
        <Typography className="text-center" tag="h1" variant="text-h4">
          {product.name}
        </Typography>
      </div>
      <ProductBanner product={product} />
      <RelatedProducts product={product} />
    </main>
  );
};

export default ProductDetail;
