import { Product } from '../../../types/chatbot';
import { dummyData } from '../../stores/mocked-data';

export function applyFilters(
  products: typeof dummyData,
  filters: {
    category?: string[];
    size?: string[];
    availability?: string[];
    styles?: string[];
  },
) {
  return products.filter((product) => {
    const categoryPass = !filters.category || filters.category.includes(product.category.toLowerCase());
    const sizePass = !filters.size || filters.size.includes(product.size);
    const availabilityPass =
      !filters.availability ||
      (filters.availability.includes('in stock') && product.stock) ||
      (filters.availability.includes('pre order') && !product.stock);
    const stylesPass = !filters.styles || filters.styles.includes(product.style.toLowerCase());

    return categoryPass && sizePass && availabilityPass && stylesPass;
  });
}

export type SortOption = 'newest arrivals' | 'low to high' | 'high to low' | 'ascending';

export function sortProducts(products: Product[], sortBy: SortOption): Product[] {
  const getDiscountedPrice = (product: Product) =>
    product.discount ? product.price * (1 - product.discount / 100) : product.price;

  switch (sortBy) {
    case 'newest arrivals':
      return [...products].sort((a, b) => new Date(b.arrivalDate).getTime() - new Date(a.arrivalDate).getTime());

    case 'low to high':
      return [...products].sort((a, b) => getDiscountedPrice(a) - getDiscountedPrice(b));

    case 'high to low':
      return [...products].sort((a, b) => getDiscountedPrice(b) - getDiscountedPrice(a));

    case 'ascending':
      return [...products].sort((a, b) => a.name.localeCompare(b.name));

    default:
      return products;
  }
}

export function filterAndSortProducts(
  products: Product[],
  filters: { category?: string[]; size?: string[]; availability?: string[]; styles?: string[] },
  sortBy: SortOption,
): Product[] {
  const filtered = applyFilters(products, filters);
  return sortProducts(filtered, sortBy);
}
