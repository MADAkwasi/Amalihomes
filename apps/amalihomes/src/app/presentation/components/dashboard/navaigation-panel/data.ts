export enum DashboardNavigationTabs {
  Messages = 'Messages',
  Promotions = 'Promotions',
  Reports = 'Reports',
  Settings = 'Settings',
  Logout = 'Logout',
}

export const DashboardNavigationMainTabs = [
  DashboardNavigationTabs.Messages,
  DashboardNavigationTabs.Promotions,
  DashboardNavigationTabs.Reports,
];

export const DashboardNavigationSubTabs = [DashboardNavigationTabs.Settings, DashboardNavigationTabs.Logout];
