export type OrderStatus = 'Delivered' | 'Shipping' | 'Processing';

export interface OrderSummary {
  label: string;
  count: number;
  icon: string;
}

export interface Order {
  id: string;
  date: string;
  amount: number;
  status: OrderStatus;
}
