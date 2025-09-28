'use client';
import { useMemo } from 'react';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption, LineSeriesOption } from 'echarts';
import { Company } from '@/types/company';
import LoadingSkeleton from './LoadingSkeleton';
import NoData from './NoData';

interface AreaChartProps {
  data: Company[] | undefined;
  isLoading: boolean;
}

const AreaChart = ({ data, isLoading }: AreaChartProps) => {
  const options: EChartsOption = useMemo(() => {
    if (data && data.length > 0) {
      const xAxisData = data[0]?.emissions.map((e) => e.yearMonth) || [];
      const seriesData: LineSeriesOption[] = data.map((company) => ({
        name: company.name,
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: company.emissions.map((e) => e.emissions),
      }));

      return {
        title: {
          text: '월별 탄소 배출량',
          left: 'center',
          textStyle: {
            color: '#333',
            fontWeight: 'bold',
            fontSize: 18,
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        legend: {
          data: data.map((c) => c.name),
          bottom: 10,
          itemGap: 20,
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '15%',
          containLabel: true,
        },
        color: ['#5470C6', '#91CC75', '#EE6666'],
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xAxisData,
        },
        yAxis: {
          type: 'value',
          name: '배출량 (tCO2e)',
        },
        series: seriesData,
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

export default AreaChart;
