import Button from "@/components/button";
import MoneyDisplay from "@/components/money-display";
import Typography from "@/components/typography";
import { Product } from "@/model/Product";
import formatMoney, { centsToBRL } from "@/util/money";
import Image from "next/image";

interface ProductBannerProps {
  product: Product;
}

const ProductBanner = ({ product }: ProductBannerProps) => {
  const installments = product.installments || [];
  const lastPosition = installments[installments.length - 1];

  return (
    <div className="flex justify-around flex-wrap">
      <Image
        priority
        loading="eager"
        src={product.image}
        height={400}
        width={400}
        alt={product.name}
        className="h-43 w-auto"
      />
      <div className="flex items-start flex-col justify-center space-y-7">
        <div>
          <span>
            <MoneyDisplay
              value={product.price}
              valueDisplay={(value) => (
                <Typography
                  variant="text-1"
                  className="uppercase text-gray-4 leading-tight font-semibold"
                >
                  {value}
                </Typography>
              )}
              valueDisplayCents={(value) => (
                <Typography
                  variant="text-4"
                  className="uppercase text-gray-4 leading-tight font-semibold"
                >
                  ,{value}
                </Typography>
              )}
              complementaryText={() => (
                <Typography
                  variant="text-3"
                  className="ml-0.5 text-gray-4 leading-tight self-center font-light"
                >
                  à vista
                </Typography>
              )}
            />
          </span>

          {!!lastPosition && (
            <>
              <Typography
                tag="p"
                variant="text-4"
                className="leading-tight text-gray-4"
              >
                {lastPosition.quantity}x de{" "}
                {formatMoney(centsToBRL(lastPosition.value))}
              </Typography>
              <Typography
                tag="p"
                variant="text-4"
                className="leading-normal text-gray-4"
              >
                sem juros
              </Typography>
            </>
          )}
        </div>
        <Button className="bg-cyan-2 hover:bg-cyan-1 text-white w-41">
          Comprar
        </Button>
      </div>
    </div>
  );
};

export default ProductBanner;
