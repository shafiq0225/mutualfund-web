export interface Fund {
  fundId: number;
  fundName: string;
  previousRate: string;
  currentRate: string;
  currentPercent: string;
  previousPercent: string;
  isPreviousGrowth: boolean;
  isCurrentGrowth: boolean;
  scheme: Scheme;
  ishidden: boolean;
  isvisible: boolean;
}

interface Scheme {
  schemeId: string;
  name: string;
}