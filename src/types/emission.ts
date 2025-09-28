export interface GhgEmission {
  yearMonth: string; // "2025-01", "2025-02", etc.
  source: string; // "gasoline", "lpg", "diesel", etc.
  emissions: number; // tons of CO2 equivalent
}
