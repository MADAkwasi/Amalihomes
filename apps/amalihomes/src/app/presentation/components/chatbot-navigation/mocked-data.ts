import { ChatBotSalesRep, ChatBotTabs } from '../../../types/chatbot';

export const salesRepresentativeMock: ChatBotSalesRep = {
  name: 'John Evan',
  image: '',
};

export const mockedChatbotPages: Record<ChatBotTabs, string> = {
  home: 'Enquiries - Home',
  chat: 'Enquiries - Chat with sales personnel',
  help: 'Enquiries - Frequently asked questions',
};
