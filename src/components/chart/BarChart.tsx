'use client';
import { useMemo } from 'react';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';
import { Company } from '@/types/company';
import LoadingSkeleton from './LoadingSkeleton';
import NoData from './NoData';

interface BarChartProps {
  data: Company[] | undefined;
  isLoading: boolean;
}

const BarChart = ({ data, isLoading }: BarChartProps) => {
  const options: EChartsOption = useMemo(() => {
    if (data && data.length > 0) {
      const emissionsBySource = data
        .flatMap((company) => company.emissions)
        .reduce((acc, emission) => {
          acc[emission.source] =
            (acc[emission.source] || 0) + emission.emissions;
          return acc;
        }, {} as Record<string, number>);

      const chartData = Object.entries(emissionsBySource);

      return {
        title: {
          text: '배출원별 탄소 배출량',
          left: 'center',
          textStyle: {
            color: '#333',
            fontWeight: 'bold',
            fontSize: 18,
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: { type: 'value', boundaryGap: [0, 0.01] },
        yAxis: { type: 'category', data: chartData.map(([source]) => source) },
        series: [
          {
            name: '배출량',
            type: 'bar',
            data: chartData.map(([, emissions]) => emissions),
            itemStyle: { color: '#91CC75' },
          },
        ],
      };
    }
    return {};
  }, [data]);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (!data || data.length === 0) {
    return <NoData />;
  }

  return (
    <ReactECharts
      option={options}
      opts={{ renderer: 'svg', width: 'auto', height: 'auto' }}
    />
  );
};

export default BarChart;
