import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { HomeFlashSaleComponent } from './home-flash-sale.component';
import { provideMockStore } from '@ngrx/store/testing';
import { provideRouter } from '@angular/router';

const mockedData = {
  component: 'flashSale',
  key: 'flashSale',
  title: 'FLASH SALE: 25% OFF All Living Room Furniture',
  description:
    'Refresh your space for less! Use code NEWSPACE at checkout. Ends March 31st. Free shipping on orders over $500.',
  buttonText: 'Learn More',
  buttonLink: '/shop',
  images: [
    {
      component: 'image',
      image: '//a.storyblok.com/f/331937/656x442/cd8e8de159/homepage-flash-sale.png',
      alt: 'Flash Sale Image',
      name: 'A man with his daughter in a sofa chair',
      _uid: 'b4b80f96-a6c0-4647-8b79-f8138f9c28ba',
    },
  ],
};
const meta: Meta<HomeFlashSaleComponent> = {
  title: 'FlashSale',
  component: HomeFlashSaleComponent,
  decorators: [
    applicationConfig({
      providers: [
        provideMockStore({
          initialState: {
            storyblokPage: {
              content: {
                body: [mockedData],
              },
            },
          },
        }),
        provideRouter([]),
      ],
    }),
  ],
  tags: ['autodocs'],
  args: {
    flashSaleSection: mockedData,
  },
};

export default meta;
type Story = StoryObj<HomeFlashSaleComponent>;

export const Primary: Story = {};
