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
