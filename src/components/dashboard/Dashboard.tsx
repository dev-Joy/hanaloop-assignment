'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useCompanies } from '@/hooks/use-companies';
import LoadingSkeleton from '../chart/LoadingSkeleton';

const AreaChart = dynamic(() => import('../chart/AreaChart'), {
  ssr: false,
  loading: () => <LoadingSkeleton />,
});
const BarChart = dynamic(() => import('../chart/BarChart'), {
  ssr: false,
  loading: () => <LoadingSkeleton />,
});

const ChartContainer = ({ children }: { children: React.ReactNode }) => (
  <div className='rounded-lg bg-white p-6 shadow-md'>{children}</div>
);

export default function Dashboard() {
  const { data, isLoading, error } = useCompanies();

  if (error) {
    return (
      <section className='flex h-96 items-center justify-center rounded-lg bg-red-50 text-red-700'>
        <p>데이터를 불러오는 중 에러가 발생했습니다: {error.message}</p>
      </section>
    );
  }

  return (
    <section>
      <h1 className='mb-6 text-3xl font-bold text-gray-800'>
        Carbon Emissions Dashboard
      </h1>
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        <ChartContainer>
          <AreaChart
            data={data}
            isLoading={isLoading}
          />
        </ChartContainer>
        <ChartContainer>
          <BarChart
            data={data}
            isLoading={isLoading}
          />
        </ChartContainer>
      </div>
    </section>
  );
}
