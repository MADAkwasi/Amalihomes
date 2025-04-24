import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { FooterComponent } from './footer.component';
import { provideMockStore } from '@ngrx/store/testing';
import { provideRouter } from '@angular/router';

const mockedData = {
  component: 'footer',
  buttonText: 'Subscribe',
  contactEmail: 'amalihomes@gmail.com',
  contactHeading: 'Contact Us',
  contactPhoneNumber: '+233 6355 9553',
  inputErrorText: 'Enter a valid email',
  inputPlaceholder: 'Enter your email',
  legalRights: '© 2024 Amalihomes. All rights reserved',
  linksSection: [
    {
      component: 'groupedLinks',
      key: 'quickLinks',
      title: 'Quick Links',
      _uid: '8092344d-c142-468f-998f-3ec65c3fad99',
      links: [
        {
          component: 'textLink',
          href: { cached_url: '/', fieldtype: 'multilink', id: '', linktype: 'url', url: '/' },
          text: 'Home',
          _uid: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
        },
        {
          component: 'textLink',
          href: {
            cached_url: '/shop',
            fieldtype: 'multilink',
            id: '',
            linktype: 'url',
            url: '/shop',
          },
          text: 'Shop',
          _uid: 'b1c2d3e4-f5g6-h7i8-j9k0-l1m2n3o4p5q6',
        },
        {
          component: 'textLink',
          href: {
            cached_url: '/cart',
            fieldtype: 'multilink',
            id: '',
            linktype: 'url',
            url: '/cart',
          },
          text: 'Cart',
          _uid: 'c1d2e3f4-g5h6-i7j8-k9l0-m1n2o3p4q5r6',
        },
        {
          component: 'textLink',
          href: {
            cached_url: '/FAQs',
            fieldtype: 'multilink',
            id: '',
            linktype: 'url',
            url: '/faqs',
          },
          text: 'FAQs',
          _uid: 'd1e2f3g4-h5i6-j7k8-l9m0-n1o2p3q4r5s6',
        },
        {
          component: 'textLink',
          href: {
            cached_url: '/offers',
            fieldtype: 'multilink',
            id: '',
            linktype: 'url',
            url: '/offers',
          },
          text: 'Offers & Details',
          _uid: 'd1e2f3g4-h5i6-j7k8-l9m0-n1o2p3q4r5s6',
        },
      ],
    },
    {
      component: 'groupedLinks',
      key: 'company',
      title: 'Company',
      _uid: '8092344d-c142-468f-998f-3ecsd65c3fad99',
      links: [
        {
          component: 'textLink',
          href: {
            cached_url: '/aboutus',
            fieldtype: 'multilink',
            id: '',
            linktype: 'url',
            url: '/',
          },
          text: 'About Us',
          _uid: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
        },
        {
          component: 'textLink',
          href: {
            cached_url: '/Careers',
            fieldtype: 'multilink',
            id: '',
            linktype: 'url',
            url: '/Careers',
          },
          text: 'Careers',
          _uid: 'b1c2d3e4-f5g6-h7i8-j9k0-l1m2n3o4p5q6',
        },

        {
          component: 'textLink',
          href: {
            cached_url: '/News',
            fieldtype: 'multilink',
            id: '',
            linktype: 'url',
            url: '/News',
          },
          text: 'News',
          _uid: 'd1e2f3g4-h5i6-j7k8-l9m0-n1o2p3q4r5s6',
        },
      ],
    },
    {
      component: 'groupedLinks',
      key: 'legalServices',
      title: 'Legal Services',
      _uid: '8092344d-c142-468f-998f-3ecsd65c3fad99',
      links: [
        {
          component: 'textLink',
          href: {
            cached_url: '/TermsConditions',
            fieldtype: 'multilink',
            id: '',
            linktype: 'url',
            url: '/',
          },
          text: 'Terms & Conditions',
          _uid: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
        },
        {
          component: 'textLink',
          href: {
            cached_url: '/PrivacyPolicy',
            fieldtype: 'multilink',
            id: '',
            linktype: 'url',
            url: '/PrivacyPolicy',
          },
          text: 'Privacy Policy',
          _uid: 'b1c2d3e4-f5g6-h7i8-j9k0-l1m2n3o4p5q6',
        },

        {
          component: 'textLink',
          href: {
            cached_url: '/News',
            fieldtype: 'multilink',
            id: '',
            linktype: 'url',
            url: '/News',
          },
          text: 'Cookie Policy',
          _uid: 'd1e2f3g4-h5i6-j7k8-l9m0-n1o2p3q4r5s6',
        },
      ],
    },
  ],
  privacyLink: [
    {
      component: 'textLink',
      href: {
        cached_url: '/privacy-policy',
        fieldtype: 'multilink',
        id: '',
        linktype: 'url',
        target: '_blank',
        url: '/privacy-policy',
      },

      text: 'Privacy Policy',
      _uid: 'f04fc5e2-1e6e-4c7c-9adb-cc73e942e7fe',
    },
  ],
  reservedRightsText: 'All rights reserved',
  subscriptionText:
    'Sign up for exclusive deals, latest arrivals, and stylish home inspiration. Be the first to know about special offers and new collections',
  subscriptionTitle: 'Join our newsletter',

  privacyAcceptanceText: 'By Subscribing you agree to our ',
  _uid: '8b4e9e34-06b7-4ebb-ad98-43944b2f3e4d',
};

const meta: Meta<FooterComponent> = {
  title: 'Footer',
  component: FooterComponent,

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
  args: {
    quickLinks: mockedData.linksSection[0],
    companyLinks: mockedData.linksSection[1],
    legalServicesLinks: mockedData.linksSection[2],
    mobileViewLinks: mockedData.linksSection[3],
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<FooterComponent>;

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
  },
};

export const TwoLinks: Story = {
  decorators: [
    applicationConfig({
      providers: [
        provideMockStore({
          initialState: {
            storyblokPage: {
              content: {
                body: [
                  {
                    ...mockedData,
                    linksSection: [
                      {
                        component: 'groupedLinks',
                        key: 'quickLinks',
                        title: 'Quick Links',
                        _uid: '8092344d-c142-468f-998f-3ec65c3fad99',
                        links: [
                          {
                            component: 'textLink',
                            href: {
                              cached_url: '/',
                              fieldtype: 'multilink',
                              id: '',
                              linktype: 'url',
                              url: '/',
                            },
                            text: 'Home',
                            _uid: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
                          },
                          {
                            component: 'textLink',
                            href: {
                              cached_url: '/shop',
                              fieldtype: 'multilink',
                              id: '',
                              linktype: 'url',
                              url: '/shop',
                            },
                            text: 'Shop',
                            _uid: 'b1c2d3e4-f5g6-h7i8-j9k0-l1m2n3o4p5q6',
                          },
                          {
                            component: 'textLink',
                            href: {
                              cached_url: '/cart',
                              fieldtype: 'multilink',
                              id: '',
                              linktype: 'url',
                              url: '/cart',
                            },
                            text: 'Cart',
                            _uid: 'c1d2e3f4-g5h6-i7j8-k9l0-m1n2o3p4q5r6',
                          },
                          {
                            component: 'textLink',
                            href: {
                              cached_url: '/FAQs',
                              fieldtype: 'multilink',
                              id: '',
                              linktype: 'url',
                              url: '/faqs',
                            },
                            text: 'FAQs',
                            _uid: 'd1e2f3g4-h5i6-j7k8-l9m0-n1o2p3q4r5s6',
                          },
                          {
                            component: 'textLink',
                            href: {
                              cached_url: '/offers',
                              fieldtype: 'multilink',
                              id: '',
                              linktype: 'url',
                              url: '/offers',
                            },
                            text: 'Offers & Details',
                            _uid: 'd1e2f3g4-h5i6-j7k8-l9m0-n1o2p3q4r5s6',
                          },
                        ],
                      },
                      {
                        component: 'groupedLinks',
                        key: 'company',
                        title: 'Company',
                        _uid: '8092344d-c142-468f-998f-3ecsd65c3fad99',
                        links: [
                          {
                            component: 'textLink',
                            href: {
                              cached_url: '/aboutus',
                              fieldtype: 'multilink',
                              id: '',
                              linktype: 'url',
                              url: '/',
                            },
                            text: 'About Us',
                            _uid: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
                          },
                          {
                            component: 'textLink',
                            href: {
                              cached_url: '/Careers',
                              fieldtype: 'multilink',
                              id: '',
                              linktype: 'url',
                              url: '/Careers',
                            },
                            text: 'Careers',
                            _uid: 'b1c2d3e4-f5g6-h7i8-j9k0-l1m2n3o4p5q6',
                          },

                          {
                            component: 'textLink',
                            href: {
                              cached_url: '/News',
                              fieldtype: 'multilink',
                              id: '',
                              linktype: 'url',
                              url: '/News',
                            },
                            text: 'News',
                            _uid: 'd1e2f3g4-h5i6-j7k8-l9m0-n1o2p3q4r5s6',
                          },
                        ],
                      },
                    ],
                    subscriptionText: '',
                    buttonText: 'Subscribe',
                    contactEmail: '',
                    contactHeading: '',
                    contactPhoneNumber: '',
                  },
                ],
              },
            },
          },
        }),
        provideRouter([]),
      ],
    }),
  ],
};
