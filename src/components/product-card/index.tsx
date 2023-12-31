import { Product } from "@/model/Product";
import styles from "./styles.module.css";
import { twJoin } from "tailwind-merge";
import Image from "next/image";
import Typography from "../typography";
import formatMoney, { centsToBRL } from "@/util/money";
import Link from "next/link";
import MoneyDisplay from "../money-display";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const installments = product.installments || [];
  const lastPosition = installments[installments.length - 1];

  return (
    <Link href={`/detail/${product.id}`}>
      <div className={twJoin("p-2 pb-3 bg-white rounded-lg w-25", styles.card)}>
        <Image
          loading="eager"
          src={product.image}
          height={150}
          width={150}
          alt={product.name}
          className="h-18 w-auto mx-auto"
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

        <MoneyDisplay
          className="mt-1"
          value={product.price}
          valueDisplay={(value) => (
            <Typography
              variant="text-4"
              className="uppercase text-gray-4 leading-tight"
            >
              {value}
            </Typography>
          )}
          valueDisplayCents={(value) => (
            <Typography variant="text-5">,{value}</Typography>
          )}
        />
        {!!lastPosition && (
          <Typography
            tag="p"
            variant="text-5"
            className="uppercase leading-tight text-gray-1"
          >
            {lastPosition.quantity}x de {formatMoney(centsToBRL(lastPosition.value))}
          </Typography>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
