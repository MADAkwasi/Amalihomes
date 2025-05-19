export enum DashboardMessageTab {
  All = 'All',
  Read = 'Read',
  Unread = 'Unread',
  Forwarded = 'Forwarded',
  Trash = 'Trash',
}

export const AllDashboardMessageTabs = [
  DashboardMessageTab.All,
  DashboardMessageTab.Read,
  DashboardMessageTab.Unread,
  DashboardMessageTab.Forwarded,
  DashboardMessageTab.Trash,
];

export interface DashboardMessage {
  username: string;
  id: string;
  date: number;
  subject: string;
  message: string;
  status: 'received';
  priority: 'high' | 'low' | 'moderate';
}

const message: DashboardMessage = {
  date: Date.now(),
  id: '1',
  message: "Hi, I wanted to check the status of my order. It's been a week since I placed it.",
  priority: 'high',
  status: 'received',
  username: 'John Doe',
  subject: 'Order #ORD-2023-1001 Inquiry',
};

export const AllMessages: Record<DashboardMessageTab, DashboardMessage[]> = {
  [DashboardMessageTab.All]: new Array(8).fill(message).map((m, i) => {
    return { ...m, id: `${i}`, username: `${m.username} ${i}` };
  }),
  [DashboardMessageTab.Read]: [],
  [DashboardMessageTab.Unread]: [],
  [DashboardMessageTab.Forwarded]: [],
  [DashboardMessageTab.Trash]: [],
};
