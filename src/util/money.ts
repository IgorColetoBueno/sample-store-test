const formatMoney = (value: number, options?: Intl.NumberFormatOptions) => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    ...options,
  });
};
export const centsToBRL = (value: number) => {
  return value / 100;
};

export default formatMoney;
