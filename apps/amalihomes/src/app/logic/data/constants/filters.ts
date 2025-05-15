export interface Filter {
  name: string;
  value: string;
}

export const categories = [
  { name: 'Office funiture', value: 'officeFuniture' },
  { name: 'Dinning', value: 'dinning' },
  { name: 'Living room', value: 'livingRoom' },
  { name: 'Bedroom', value: 'bedroom' },
  { name: 'Outdoor', value: 'outdoor' },
];

export const sizes = [
  { name: 'Small', value: 'small' },
  { name: 'Medium', value: 'medium' },
  { name: 'Large', value: 'large' },
];

export const availability = [
  { name: 'In stock', value: 'inStock' },
  { name: 'Pre-order', value: 'preOrder' },
];

export const styles = [
  { name: 'Modern', value: 'modern' },
  { name: 'Traditional', value: 'traditional' },
  { name: 'Bohemian', value: 'bohemian' },
  { name: 'Industrial', value: 'industrial' },
  { name: 'Scandinavian', value: 'scandinavian' },
];

export const sortingOptions = [
  { name: 'Newest Arrivals', value: 'newestArrivals' },
  { name: 'Price: Low to High', value: 'priceLowToHigh' },
  { name: 'Price: High to Low', value: 'priceHighToLow' },
  { name: 'A to Z', value: 'ascending' },
];
