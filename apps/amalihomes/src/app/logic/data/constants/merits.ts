import { ValuePropIconName } from '../../../presentation/components/value-prop-icon/constants';

type Merit = { iconName: ValuePropIconName; title: string; description: string };

export const merits: Merit[] = [
  {
    iconName: ValuePropIconName.Award,
    title: 'Premium Quality & Durability',
    description:
      'Our furniture is crafted from top-quality materials, ensuring long-lasting durability, comfort, and timeless style for your home or office.',
  },
  {
    iconName: ValuePropIconName.Couch,
    title: 'Wide Selection for Every Space',
    description:
      "From modern to classic designs, we offer a diverse range of furniture to match your taste, whether you're furnishing your living room, bedroom, or workspace.",
  },
  {
    iconName: ValuePropIconName.Truck,
    title: 'Seamless Shopping & Reliable Delivery',
    description:
      'We make furniture shopping effortless with an easy-to-use website, secure payment options, and fast, reliable delivery straight to your doorstep.',
  },
  {
    iconName: ValuePropIconName.MoneyBag,
    title: 'Affordable Prices & Exclusive Discounts',
    description:
      "Style shouldn't break the bank! Enjoy competitive pricing, seasonal promotions, and exclusive discounts to make your dream space a reality at the best value.",
  },
];
