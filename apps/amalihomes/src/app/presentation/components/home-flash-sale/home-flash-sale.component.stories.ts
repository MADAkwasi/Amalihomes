import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { HomeFlashSaleComponent } from './home-flash-sale.component';
import { provideMockStore } from '@ngrx/store/testing';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

const mockFlashSaleData = {
  buttonText: 'Learn More',
  component: 'flashSale',
  description:
    'Refresh your space for less! Use code NEWSPACE at checkout. Ends March 31st. Free shipping on orders over $500.',
  images: [
    {
      component: 'image',
      image: '//a.storyblok.com/f/331937/656x442/cd8e8de159/homepage-flash-sale.png',
      name: 'A man with his daughter in a sofa chair',
      _editable:
        '<!--#storyblok#{"name": "image", "space": "331937", "uid": "72a9f252-e87c-4ea2-b8d5-ca09ccc688c9", "id": "646375864"}-->',
      _uid: '72a9f252-e87c-4ea2-b8d5-ca09ccc688c9',
    },
  ],
  title: 'FLASH SALE: 25% OFF All Living Room Furniture',
  _editable:
    '<!--#storyblok#{"name": "flashSale", "space": "331937", "uid": "69ed1308-d7e9-4c1d-93ae-af032fa40c6e", "id": "646375864"}-->',
  _uid: '69ed1308-d7e9-4c1d-93ae-af032fa40c6e',
};

const meta: Meta<HomeFlashSaleComponent> = {
  title: 'Components/Home/Flash Sale',
  component: HomeFlashSaleComponent,
  decorators: [
    applicationConfig({
      providers: [provideMockStore({ initialState: {} }), importProvidersFrom(HttpClientModule)],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<HomeFlashSaleComponent>;

export const Primary: Story = {
  args: {
    externalData: mockFlashSaleData,
  },
};
