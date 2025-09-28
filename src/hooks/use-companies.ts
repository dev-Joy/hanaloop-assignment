import { fetchCompanies } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

export function useCompanies() {
  return useQuery({
    queryKey: ['companies'],
    queryFn: () => fetchCompanies(),
  });
}
