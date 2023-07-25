import {
    ClassAttributes,
    PropsWithChildren,
    createElement
} from "react";
import { twJoin } from "tailwind-merge";

interface TypographyProps extends ClassAttributes<HTMLElement> {
  tag?: keyof HTMLElementTagNameMap;
  className?: string;
  variant?:
    | "text-1"
    | "text-2"
    | "text-3"
    | "text-4"
    | "text-5"
    | "text-h6"
    | "text-h5"
    | "text-h4"
    | "text-h3"
    | "text-h2"
    | "text-h1";
    font?: 'font-sans' | 'font-serif'
}

const Typography = ({
  tag = "span",
  variant = "text-1",
  font = 'font-sans',
  className,
  ...rest
}: PropsWithChildren<TypographyProps>) => {
  const finalClassName = twJoin(className, variant, font)

  return createElement(tag, {
    ...rest,
    className: finalClassName
  });
};

export default Typography;
