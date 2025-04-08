import { FetchState } from '../../data/constants';

export const HomePageTestData = {
  fetchState: FetchState.DEFAULT,
  data: {
    'flash-sale': {
      title: 'Test title',
      description: 'Test description',
      images: [{ image: 'image.jpg', name: 'Image alt' }],
    },
    categories: {
      each: [
        {
          key: 'products',
          title: 'Text title',
          items: [
            {
              image: 'image.jpg',
              name: 'Item 1',
              _uid: 'id',
            },
          ],
        },
        {
          key: 'arrivals',
          title: 'Text title',
          items: [
            {
              image: 'image.jpg',
              name: 'Item 1',
              _uid: 'id',
            },
          ],
        },
      ],
    },
    hero: {
      images: [
        {
          _uid: 'dff3628f-2c7c-473a-804f-b1abb5b8a3c2',
          name: 'Quality Orange Chair',
          image: '//a.storyblok.com/f/331937/525x473/b9f16e0b8f/quality-orange-chair.png',
          component: 'image',
          _editable:
            '<!--#storyblok#{"name": "image", "space": "331937", "uid": "dff3628f-2c7c-473a-804f-b1abb5b8a3c2", "id": "646199362"}-->',
        },
        {
          _uid: 'eb2557e3-e8a4-4906-b0b7-1fcfd98398fb',
          name: 'Single Sofa',
          image: '//a.storyblok.com/f/331937/526x405/3c12536293/yellow-single-sofa.png',
          component: 'image',
          _editable:
            '<!--#storyblok#{"name": "image", "space": "331937", "uid": "eb2557e3-e8a4-4906-b0b7-1fcfd98398fb", "id": "646199362"}-->',
        },
        {
          _uid: 'ff985cc0-ab3f-4afe-b56b-747710161037',
          name: 'Beautiful Yellow Chair',
          image: '//a.storyblok.com/f/331937/526x596/0f9eab4ab8/beautiful-yellow-chair.png',
          component: 'image',
          _editable:
            '<!--#storyblok#{"name": "image", "space": "331937", "uid": "ff985cc0-ab3f-4afe-b56b-747710161037", "id": "646199362"}-->',
        },
        {
          _uid: '7845d880-d4d4-456f-a8cb-77fd8f0436a4',
          name: 'Double Sofa',
          image: '//a.storyblok.com/f/331937/526x505/98113d54ed/double-sofa.png',
          component: 'image',
          _editable:
            '<!--#storyblok#{"name": "image", "space": "331937", "uid": "7845d880-d4d4-456f-a8cb-77fd8f0436a4", "id": "646199362"}-->',
        },
      ],
    },
  },
};
