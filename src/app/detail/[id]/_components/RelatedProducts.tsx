import ProductCard from "@/components/product-card";
import Typography from "@/components/typography";
import { Product } from "@/model/Product";
import fetcher from "@/util/fetcher";

interface RelatedProductsProps {
  product: Product;
}

const RelatedProducts = async ({
  product: { category, id },
}: RelatedProductsProps) => {
  const products: Product[] = await fetcher(
    `/products?category=${category}`
  ).then((r) => r.json());

  return (
    <div className="space-y-7 mx-5">
      <Typography tag="p" variant="text-1" className="font-semibold">
        Produtos relacionados
      </Typography>
      <div className="max-w-3xl flex flex-row flex-wrap gap-3 mx-auto sm:justify-start justify-center">
        {products
          .filter((q) => q.id !== id)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
