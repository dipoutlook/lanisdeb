

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
  featured?: boolean;
  sku?: string;
}

export interface Category {
  id: string;
  name: string;
  image?: string;
  productCount?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CustomerDetails {
  name:string;
  email: string;
  phone: string;
  address: string;
}

export type OrderStatus = 'Pending' | 'Completed' | 'Cancelled';

export type OrderOrigin = 'HUMAN' | 'AI';

export interface Order {
  id: string;
  origin: OrderOrigin;
  orderReference: string;
  items: CartItem[];
  total: number;
  customerDetails: CustomerDetails;
  paymentMethod: string;
  paymentId?: string;
  status: OrderStatus;
  date: string;
}
