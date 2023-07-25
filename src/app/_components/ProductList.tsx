import ProductCard from "@/components/product-card";
import Typography from "@/components/typography";
import { Product } from "@/model/Product";
import fetcher from "@/util/fetcher";
import { twJoin } from "tailwind-merge";

const ProductList = async () => {
  const products: Product[] = await fetcher("/products").then((r) => r.json());

  return (
    <div className="max-w-3xl mx-auto mt-6 px-3 sm:px-0">
      <Typography variant="text-3" tag="h6" className="font-semibold">
        Ofertas especiais
      </Typography>
      <Typography variant="text-4" tag="p">
        Os melhores preços
      </Typography>
      <div className="flex flex-row flex-wrap mt-7 gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
