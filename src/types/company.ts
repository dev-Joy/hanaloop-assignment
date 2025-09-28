import { GhgEmission } from './emission';

export interface Company {
  id: string;
  name: string;
  country: string; // Country.code
  emissions: GhgEmission[];
}
