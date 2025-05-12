export const mockedTestImageData = [
  { id: '1', image: 'image1.jpg', name: 'Image 1' },
  { id: '2', image: 'image2.jpg', name: 'Image 2' },
  { id: '3', image: 'image3.jpg', name: 'Image 3' },
  { id: '4', image: 'image4.jpg', name: 'Image 4' },
  { id: '5', image: 'image5.jpg', name: 'Image 5' },
  { id: '7', image: 'image6.jpg', name: 'Image 6' },
  { id: '7', image: 'image7.jpg', name: 'Image 7' },
  { id: '8', image: 'image8.jpg', name: 'Image 8' },
  { id: '9', image: 'image9.jpg', name: 'Image 9' },
  { id: '10', image: 'image10.jpg', name: 'Image 10' },
  { id: '11', image: 'image11.jpg', name: 'Image 11' },
  { id: '12', image: 'image12.jpg', name: 'Image 12' },
];

const mockedEnquiryPageData = {
  title: 'Page Title',
  description: 'Description',
  thankyouMessage: 'Message',
  thankyouTitle: 'Thank you',
  submit_text: 'Submit',
};

const mockedEnquiryFieldData = {
  label: 'Type of Enquiry',
  placeholder: 'General Question',
  type: 'text',
};

const meritItems = [
  {
    _uid: '412ac3d1-6387-4668-a956-8f8ed49b39c1',
    title: 'Award Winning designs',
    component: 'meritsItem',
    icon: {
      id: 22045538,
      name: 'medal icon',
      filename: 'https://a.storyblok.com/f/331937/41x41/5b9ad9d2bb/medal.png',
    },
    description: 'Experience innovative and stylish furniture, recognized for excellence.',
  },
  {
    _uid: '88f267f1-0d64-4f9b-b5ba-cd59b0694a8f',
    title: '10-year warranty',
    component: 'meritsItem',
    description: 'Enjoy peace of mind with our durable furniture, backed by a 10-year warranty.',
    icon: {
      id: 22045566,
      name: 'security checkmark icon',
      filename: 'https://a.storyblok.com/f/331937/41x41/1ee5dd2b7f/security-check.png',
    },
  },
  {
    _uid: 'f2577024-2d27-456d-8b2c-e03a7e8c57ab',
    title: 'Sustainable materials',
    component: 'meritsItem',
    description: 'Designed for comfort and durability, our furniture is superior above all',
    icon: {
      id: 22045567,
      name: 'start trophy icon',
      filename: 'https://a.storyblok.com/f/331937/41x41/68453fd574/startrophy.png',
    },
  },
  {
    _uid: '870fd1e6-3fc2-442c-a627-c4a429c967b1',
    title: 'Quality furniture',
    component: 'meritsItem',
    description: 'Eco-friendly furniture made with responsibly sourced, high-quality materials',
    icon: {
      id: 22045568,
      name: 'arrows recycling icon',
      filename: 'https://a.storyblok.com/f/331937/41x41/55ab536d19/recycling.png',
    },
  },
];

const teamMembers = [
  {
    _uid: 'a240c4d6-07ad-4515-b957-e9f72046679d',
    name: 'Martin Hecker',
    role: 'Founder & Chief Executive Officer',
    image: {
      id: 22045629,
      filename: 'https://a.storyblok.com/f/331937/310x370/f07e4ca979/martinhecker.png',
    },
  },
  {
    _uid: 'b32aba2f-0402-4062-a776-ca065a92b07a',
    name: 'Marcus Chen',
    role: 'Chief Operations Officer',
    image: {
      id: 22045631,
      filename: 'https://a.storyblok.com/f/331937/310x370/c46b179d86/marcuschen.png',
    },
  },
  {
    _uid: 'ab5f2950-5340-461c-b827-761488fe2322',
    name: 'Adeline Drinkwater',
    role: 'Chief Design Officer',
    image: {
      id: 22045631,
      filename: 'https://a.storyblok.com/f/331937/310x370/18bfe392dc/adelinedrinkwater.png',
    },
  },
  {
    _uid: '7fa0fa6e-e067-491c-bc25-4300270732a3',
    name: 'Jasmine Hassan',
    role: 'Chief Financial Officer',
    image: {
      id: 22045628,
      filename: 'https://a.storyblok.com/f/331937/310x370/245a381b7b/jasminehassan.png',
    },
  },
];

const regionTabs = [
  {
    _uid: '7caeac87-3af9-4aa7-b2a3-a30b8f7afd89',
    tabName: 'Africa',
    component: 'regionTabs',
    showroomItem: [],
  },
  {
    _uid: '6b802145-00e0-4a21-bd87-7db8d7d9d375',
    tabName: 'Europe',
    component: 'regionTabs',
    showroomItem: [
      {
        _uid: 'a17e7ce8-3327-4181-a775-14cb3228e73b',
        image: {
          id: 22045678,
          name: 'german living room',
          filename: 'https://a.storyblok.com/f/331937/310x348/6eaa915e45/germanroom-1.png',
        },
        component: 'showroomItems',
        countryName: 'Germany',
      },
      {
        _uid: '43658c84-7a9a-4709-b67c-b9b4681ed44e',
        image: {
          id: 22045670,
          name: 'Belgian living room',
          filename: 'https://a.storyblok.com/f/331937/310x348/7617f8bc42/belgianroom-1.png',
        },
        component: 'showroomItems',
        countryName: 'Belgium',
      },
      {
        _uid: 'c5ce00dc-ff5b-4dc6-8864-52445f1ede9d',
        image: {
          id: 22045667,
          name: 'swizz living room',
          filename: 'https://a.storyblok.com/f/331937/310x348/e75c6b4209/swizzroom-1.png',
        },
        component: 'showroomItems',
        countryName: 'Switzerland',
      },
      {
        _uid: 'b6e05ff3-f541-4928-bf11-a2c2f85db0d5',
        image: {
          id: 22045666,
          name: 'french living room',
          filename: 'https://a.storyblok.com/f/331937/310x348/207b79477b/frenchroom-1.png',
        },
        component: 'showroomItems',
        countryName: 'France',
      },
      {
        _uid: '07e9ee98-5910-4948-9a2f-dbbbc7ede753',
        image: {
          id: 22045669,
          name: 'italian living room',
          filename: 'https://a.storyblok.com/f/331937/310x348/7ba5204855/italianroom-1.png',
        },
        component: 'showroomItems',
        countryName: 'Italy',
      },
      {
        _uid: '897c1968-c847-473c-91e1-6012f5fcb0be',
        image: {
          id: 22045665,
          name: 'spanish living room',
          filename: 'https://a.storyblok.com/f/331937/310x348/106fc0adf3/spanishroom-1.png',
        },
        component: 'showroomItems',
        countryName: 'Spain',
      },
    ],
  },
  {
    _uid: '9e3811ef-d312-45d9-9e82-7dcdccb19191',
    tabName: 'North America',
    component: 'regionTabs',
    showroomItem: [],
  },
  {
    _uid: 'd29d7d46-828b-42e0-9619-015917696c55',
    tabName: 'South America',
    component: 'regionTabs',
    showroomItem: [],
  },
];

const statistics = [
  {
    _uid: '5be84adc-05d0-4ec2-9112-09c00406b562',
    figure: '30+',
    component: 'stats',
    statfield: 'Years of Excellence',
    _editable:
      '<!--#storyblok#{"name": "stats", "space": "331937", "uid": "5be84adc-05d0-4ec2-9112-09c00406b562", "id": "661713809"}-->',
  },
  {
    _uid: 'd1a0c1d0-f3d4-424c-831a-84e5b29ad864',
    figure: '15,000+',
    component: 'stats',
    statfield: 'Clients',
    _editable:
      '<!--#storyblok#{"name": "stats", "space": "331937", "uid": "d1a0c1d0-f3d4-424c-831a-84e5b29ad864", "id": "661713809"}-->',
  },
  {
    _uid: '7c69baf6-d7a9-45b4-bbd4-ae55dcb5f748',
    figure: '12',
    component: 'stats',
    statfield: 'Countries',
    _editable:
      '<!--#storyblok#{"name": "stats", "space": "331937", "uid": "7c69baf6-d7a9-45b4-bbd4-ae55dcb5f748", "id": "661713809"}-->',
  },
  {
    _uid: 'f41a2205-8e73-4034-a7d4-4840446f514b',
    figure: '98%',
    component: 'stats',
    statfield: 'Satisfied clients',
    _editable:
      '<!--#storyblok#{"name": "stats", "space": "331937", "uid": "f41a2205-8e73-4034-a7d4-4840446f514b", "id": "661713809"}-->',
  },
];

export const mockedStore = {
  page: '',
  isFetchingContent: false,
  content: {
    body: [
      {
        component: 'cookie_consent_banner',
        cookie_settings: [{ component: 'cookie_settings', functionality: 'Functionality', analytics: 'Analytics' }],
        banner_title: 'Cookie Banner Title',
        cmp_partner_badge: 'CMP Partner Badge',
        cmp_badge_alt_text: 'CMP Badge Alt Text',
        banner_message: 'Banner Message',
        list_title: 'List Title',
        expand_btn_text: 'Expand Button Text',
        expanded_btn_text: 'Expanded Button Text',
        reject_all_btn_text: 'Reject All Button Text',
        close_banner_label: 'Close Banner Label',
      },
      {
        component: 'contact',
        salesRep: [
          {
            country: 'Country',
            name: 'Name',
            profilePic: [{ image: 'image.png' }],
          },
        ],
      },
      {
        component: 'chatbot',
        order_enquiry: [
          {
            orders: [],
            page_data: [mockedEnquiryPageData],
          },
        ],
        general_enquiry: [
          {
            questions: ['Question 1', 'Question 2'],
            page_data: [mockedEnquiryPageData],
          },
        ],
        product_enquiry: [
          {
            questions: [],
            page_data: [mockedEnquiryPageData],
          },
        ],
        form_fields: [
          {
            question: [mockedEnquiryFieldData],
            orderId: [mockedEnquiryFieldData],
            email: [mockedEnquiryFieldData],
            subject: [mockedEnquiryFieldData],
            message: [mockedEnquiryFieldData],
          },
        ],
        form_field_errors: [
          {
            required: 'This field is required',
            email: 'Please enter a valid email address',
            minlength: 'The input is too short',
            maxlength: 'The input is too long',
            pattern: 'The format is invalid',
          },
        ],
        home_page: [
          {
            back_btn_text: 'back',
            exit_btn_text: 'exit',
            message_title: 'message title',
            avatar_alt_text: 'text',
            message: 'message',
            tabs: [
              {
                home: [{ vaule: 'tab title' }],
                chat: [{ vaule: 'tab title' }],
                help: [{ vaule: 'tab title' }],
              },
            ],
            enquiries: [
              {
                product: [{ vaule: 'enquiry title' }],
                orders: [{ vaule: 'enquiry title' }],
                general: [{ vaule: 'enquiry title' }],
              },
            ],
          },
        ],
        faq_page: [
          {
            message_title: 'message title',
            message: 'message',
            categories_tiltle: 'title',
            categories: [{ available_questions: 'question', title: 'title', _uid: '' }],
          },
        ],
      },
      {
        _uid: 'a240c4d6-07ad-4515-b957-e9f72046679d',
        title: "What We're known For",
        component: 'merits',
        image_url: '//a.storyblok.com/f/331937/770x560/bf070f6dd0/featured-image.png',
        description:
          'For over three decades, AmaliHomes has been dedicated to building dream homes that surpass expectations in quality, design, and sustainability.',
        image_alt_text: 'Modern living room with minimalist decor and beige wall background',
        items: meritItems,
      },
      {
        _uid: '288eeb49-ad50-46e0-88b1-b52797407ae1',
        heading: 'Our Leadership Team',
        component: 'leadership_team',
        description:
          'AmaliHomes has expanded globally, bringing exceptional craftsmanship and timeless designs to families around the world. Experience comfort, quality, and style—wherever you are',
        team: teamMembers,
      },
      {
        _uid: 'b14efb2b-882b-44dc-b267-195b3b9c1086',
        heading: 'Global Presence',
        component: 'global_presence',
        description:
          'AmaliHomes has expanded globally, bringing exceptional craftsmanship and timeless designs to families around the world. Experience comfort, quality, and style—wherever you are',
      },
      {
        _uid: '4a955b70-a103-4dcd-a8eb-3ccce7c50d91',
        heading: 'Visit Our Showrooms',
        norooms: 'No showrooms available for this region',
        component: 'show_room',
        regionTabs: regionTabs,
        description:
          'Experience the AmaliHomes difference firsthand at one of our global showrooms. Discover premium furniture, expert design advice, and stylish inspirations to transform your space. Step in today',
      },
      {
        _uid: 'b280aca8-2341-4036-b471-9251f4f365ea',
        title: 'Building Dreams Since 1990',
        component: 'aboutLandingSection',
        statistics: statistics,
        description:
          'Founded with a vision to redefine modern living, AmaliHomes has evolved from a small family business to a global leader in premium home construction. Our journey has been guided by an unwavering commitment to excellence, innovation, and creating spaces that truly feel like home.',
      },
    ],
  },
  locale: 'en',
  error: null,
};
