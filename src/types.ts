export interface Product {
  id: string;
  name: string;
  alias: string;
  formula?: string;
  color: string; // Theme color (e.g., oxygen blue, LPG orange, nitrogen silver, etc.)
  pressure: string; // standard pressure rating eg 150 bar
  purity: string; // purity index eg 99.999%
  description: string;
  applications: string[];
  specs: string[];
  valveType: string;
}

export interface Industry {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  gasUtilization: string[];
  metric: string;
}

export interface Certification {
  id: string;
  name: string;
  authority: string;
  regNo: string;
  description: string;
  accentColor: string;
}

export interface Metric {
  label: string;
  value: string;
  suffix: string;
  subtext: string;
}
