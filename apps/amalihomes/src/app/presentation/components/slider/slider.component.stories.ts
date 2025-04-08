import type { Meta, StoryObj } from '@storybook/angular';
import { SliderComponent } from './slider.component';

const meta: Meta<SliderComponent> = {
  title: 'Slider',
  component: SliderComponent,
  tags: ['autodocs'],
  argTypes: {
    categoryType: {
      control: 'text',
      description: 'A value to determine the product category the slider will be displaying',
    },
    title: { control: 'text', description: 'Heading of the slider' },
    sliderImages: { control: 'object', description: 'Images to be displayed on the slider' },
  },
};

export default meta;
type Story = StoryObj<SliderComponent>;

export const ProductsCategory: Story = {
  args: {
    categoryType: 'products',
    title: 'Product Categories',
    sliderImages: [
      {
        _uid: 'd304cbb5-475a-42b6-aa2e-0fef78c2b43b',
        name: 'Living room',
        image: '//a.storyblok.com/f/331937/361x361/edd6fd793f/living-room.png',
        component: 'image',
        _editable:
          '<!--#storyblok#{"name": "image", "space": "331937", "uid": "d304cbb5-475a-42b6-aa2e-0fef78c2b43b", "id": "646299177"}-->',
      },
      {
        _uid: 'c129fef9-8b3a-424c-9721-abeb31416484',
        name: 'Office',
        image: '//a.storyblok.com/f/331937/361x361/9d2df2a072/office.png',
        component: 'image',
        _editable:
          '<!--#storyblok#{"name": "image", "space": "331937", "uid": "c129fef9-8b3a-424c-9721-abeb31416484", "id": "646299177"}-->',
      },
      {
        _uid: '6f389486-2351-4df5-a615-77b04cfa93ba',
        name: 'Bedroom',
        image: '//a.storyblok.com/f/331937/361x361/0bdd5b7170/bedroom.png',
        component: 'image',
        _editable:
          '<!--#storyblok#{"name": "image", "space": "331937", "uid": "6f389486-2351-4df5-a615-77b04cfa93ba", "id": "646299177"}-->',
      },
      {
        _uid: '5d6be33c-f1e2-4ac7-89b1-6dc6ef9ad697',
        name: 'Hall',
        image: '//a.storyblok.com/f/331937/361x361/aaf61645cf/hall.png',
        component: 'image',
        _editable:
          '<!--#storyblok#{"name": "image", "space": "331937", "uid": "5d6be33c-f1e2-4ac7-89b1-6dc6ef9ad697", "id": "646299177"}-->',
      },
    ],
  },
};

export const NewArrivals: Story = {
  args: {
    categoryType: 'arrivals',
    title: 'New Arrivals',
    sliderImages: [
      {
        _uid: '328f6990-0384-4ea9-b027-6f020daf491c',
        name: 'Living room',
        image: '//a.storyblok.com/f/331937/421x562/67810d19f4/living-room.png',
        component: 'image',
        _editable:
          '<!--#storyblok#{"name": "image", "space": "331937", "uid": "328f6990-0384-4ea9-b027-6f020daf491c", "id": "646299177"}-->',
      },
      {
        _uid: '955f9183-b7aa-498a-bec8-6e6c74384155',
        name: 'Bedroom',
        image: '//a.storyblok.com/f/331937/421x562/8f437b4add/bedroom.png',
        component: 'image',
        _editable:
          '<!--#storyblok#{"name": "image", "space": "331937", "uid": "955f9183-b7aa-498a-bec8-6e6c74384155", "id": "646299177"}-->',
      },
      {
        _uid: '2421b550-02ab-417a-8782-7c2fed93af43',
        name: 'Dining Hall',
        image: '//a.storyblok.com/f/331937/421x562/8c0da3644c/dinning-hall.png',
        component: 'image',
        _editable:
          '<!--#storyblok#{"name": "image", "space": "331937", "uid": "2421b550-02ab-417a-8782-7c2fed93af43", "id": "646299177"}-->',
      },
    ],
  },
};
