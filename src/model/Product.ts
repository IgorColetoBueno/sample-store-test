export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  installments: Installment[];
}

export interface Installment {
  quantity: number;
  value: number;
}
