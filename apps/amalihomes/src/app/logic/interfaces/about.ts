export interface Showroom {
  id: string;
  name: string;
  image: string;
}

export interface ShowroomsData {
  [region: string]: Showroom[];
}

export interface StatItem {
  _uid: string;
  figure: string;
  component: string;
  statfield: string;
  _editable?: string;
}

export interface StatSection {
  _uid: string;
  title: string;
  description: string;
  component: string;
  statistics: StatItem[];
  _editable?: string;
}

export interface imageFile {
  id: number;
  name: string;
  filename: string;
}

export interface MeritsItem {
  _uid: string;
  title: string;
  description: string;
  component: string;
  image: string;
  _editable?: string;
  icon: imageFile;
}

export interface Merits {
  _uid: string;
  title: string;
  description: string;
  component: string;
  image: string;
  _editable?: string;
  items: MeritsItem[];
}

export interface GlobalPresence {
  heading: string;
  description: string;
}

export interface TeamItem {
  _uid: string;
  name: string;
  role: string;
  image: imageFile;
}

export interface LeadershipTeam {
  _uid: string;
  heading: string;
  description: string;
  team: TeamItem[];
}
