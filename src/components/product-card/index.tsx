import { Product } from "@/model/Product";
import styles from "./styles.module.css";
import { twJoin } from "tailwind-merge";
import Image from "next/image";
import Typography from "../typography";
import formatMoney from "@/util/money";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const installments = product.installments || [];
  const lastPosition = installments[installments.length - 1];

  return (
    <div className={twJoin("p-2 pb-3 bg-white rounded-lg w-26", styles.card)}>
      <Image
        loading="eager"
        src={product.image}
        height={100}
        width={100}
        alt={product.name}
        className="h-18 mx-auto"
      />
      <div className="relative overflow-hidden text-clip whitespace-nowrap">
        <div
          className={twJoin(
            "absolute w-full h-full z-2",
            styles.cardTitleGradient
          )}
        ></div>
        <Typography
          variant="text-4"
          className="font-semibold text-clip overflow-hidden"
        >
          {product.name}
        </Typography>
      </div>
      <Typography
        tag="p"
        variant="text-4"
        className="uppercase text-gray-4 leading-tight mt-1"
      >
        {formatMoney(product.price)}
      </Typography>
      {!!lastPosition && (
        <Typography
          tag="p"
          variant="text-5"
          className="uppercase leading-tight text-gray-1"
        >
          {lastPosition.quantity}x de {formatMoney(product.price)}
        </Typography>
      )}
    </div>
  );
};

export default ProductCard;
