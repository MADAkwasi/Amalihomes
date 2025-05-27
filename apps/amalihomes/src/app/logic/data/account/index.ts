import { Order, OrderSummary } from '../../../types/account';

export const menuItems = [
  { label: 'Overview', route: 'overview' },
  { label: 'Personal Details', route: 'personal-details' },
  { label: 'Address', route: 'address' },
  { label: 'Order History', route: 'order-history' },
  { label: 'Message', route: 'message' },
  { label: 'Account Settings', route: 'account-settings' },
];

export const headerMenuItems = [
  { label: 'Overview', route: 'overview' },
  { label: 'Profile', route: 'personal-details' },
  { label: 'Account Settings', route: 'account-settings' },
];

export const countryCodes = [
  { code: '+233', label: 'Ghana' },
  { code: '+234', label: 'Nigeria' },
  { code: '+1', label: 'USA' },
  { code: '+44', label: 'UK' },
];

export const orderSummaries: OrderSummary[] = [
  { label: 'Orders', count: 5, icon: '/icons/order-box.svg' },
  { label: 'Shipment', count: 2, icon: '/icons/shipping-truck.svg' },
  { label: 'Returns', count: 1, icon: '/icons/returns-arrow.svg' },
];

export const recentOrders: Order[] = [
  { id: 'A80045', date: 'April 20, 2025', amount: 124.99, status: 'Delivered' },
  { id: 'A79983', date: 'April 18, 2025', amount: 89.95, status: 'Shipping' },
  { id: 'A79456', date: 'April 15, 2025', amount: 45.0, status: 'Processing' },
  { id: 'A79983', date: 'April 18, 2025', amount: 89.95, status: 'Shipping' },
];
