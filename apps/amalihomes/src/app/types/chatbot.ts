export interface ChatBotSalesRep {
  name: string;
  image: string;
}

export enum ChatBotTabs {
  home = 'home',
  chat = 'chat',
  help = 'help',
}

export enum ChatBotEnquiryType {
  product = 'product',
  orders = 'orders',
  general = 'general',
}
