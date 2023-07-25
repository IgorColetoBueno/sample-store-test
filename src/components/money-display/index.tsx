import formatMoney, { centsToBRL } from "@/util/money";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { twJoin } from "tailwind-merge";

interface MoneyDisplayProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value: number;
  valueDisplay: (test: string) => ReactNode;
  valueDisplayCents: (test: string) => ReactNode;
  complementaryText?: () => ReactNode;
}

function separateBRLAndCents(value: number) {
  const brl = Math.floor(value);
  const cents = Math.round((value - brl) * 100);
  return { brl, cents };
}

const MoneyDisplay = ({
  value,
  valueDisplay,
  valueDisplayCents,
  className,
  complementaryText,
  ...rest
}: MoneyDisplayProps) => {
  const valueinBRL = centsToBRL(value);
  const { brl, cents } = separateBRLAndCents(valueinBRL);

  return (
    <div {...rest} className={twJoin(className, "flex items-start")}>
      {valueDisplay(
        formatMoney(brl, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      )}
      {!!cents && valueDisplayCents(cents.toString())}
      {!!complementaryText && complementaryText()}
    </div>
  );
};

export default MoneyDisplay;
