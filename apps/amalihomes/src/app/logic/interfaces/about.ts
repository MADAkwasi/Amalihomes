export interface Showroom {
  id: string;
  name: string;
  image: string;
}

export interface ShowroomsData {
  [region: string]: Showroom[];
}

export interface StatItem {
  value: string;
  label: string;
}
