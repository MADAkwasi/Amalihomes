export interface Order {
  orderId: string;
  cost: string;
}

export const mockedOrders: Order[] = [
  { orderId: '#ORD1234', cost: '$1435' },
  { orderId: '#ORD1235', cost: '$1132' },
  { orderId: '#ORD1236', cost: '$1635' },
  { orderId: '#ORD1237', cost: '$935' },
  { orderId: '#ORD1238', cost: '$2142' },
];
