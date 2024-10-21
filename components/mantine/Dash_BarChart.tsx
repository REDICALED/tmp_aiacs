import { BarChart } from '@mantine/charts';
import { DailyData } from '@/lib/Dummy/DailyCameraData';

export function Dash_BarChart() {
  return (
    <div className='p-1 z-40'>
      <h1 className=' font-semibold pb-4'>
              카메라 별 조류 탐지 현황
      </h1>
    <BarChart
      h={300}
      data={DailyData}
      dataKey="Device"
      series={[
        { name: 'time', color: 'violet.6' },
      ]}
      tickLine="y"
      tooltipAnimationDuration={200}
    />
    </div>

  );
}