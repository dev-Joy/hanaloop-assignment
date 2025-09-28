import { Company } from '@/types/company';
import { Post } from '@/types/post';

export const companies: Company[] = [
  {
    id: 'c1',
    name: 'Acme Corp',
    country: 'US',
    emissions: [
      { yearMonth: '2024-01', source: 'gasoline', emissions: 120 },
      { yearMonth: '2024-02', source: 'diesel', emissions: 110 },
      { yearMonth: '2024-03', source: 'electricity', emissions: 95 },
    ],
  },
  {
    id: 'c2',
    name: 'Globex',
    country: 'DE',
    emissions: [
      { yearMonth: '2024-01', source: 'electricity', emissions: 80 },
      { yearMonth: '2024-02', source: 'natural_gas', emissions: 105 },
      { yearMonth: '2024-03', source: 'diesel', emissions: 120 },
    ],
  },
];

export const posts: Post[] = [
  {
    id: 'p1',
    title: 'Q1 Sustainability Report',
    resourceUid: 'c1',
    dateTime: '2024-02',
    content:
      "We've reduced our carbon emissions by 20% this quarter through renewable energy initiatives.",
  },
];

export const countries = [
  { code: 'US', name: 'United States' },
  { code: 'DE', name: 'Germany' },
  { code: 'KR', name: 'South Korea' },
  { code: 'JP', name: 'Japan' },
];

export const emissionSources = [
  { value: 'gasoline', label: 'Gasoline', color: '#FF6B6B' },
  { value: 'diesel', label: 'Diesel', color: '#4ECDC4' },
  { value: 'electricity', label: 'Electricity', color: '#45B7D1' },
  { value: 'natural_gas', label: 'Natural Gas', color: '#96CEB4' },
  { value: 'lpg', label: 'LPG', color: '#FFEAA7' },
];
