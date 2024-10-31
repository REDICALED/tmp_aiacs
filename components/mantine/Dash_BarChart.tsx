import { BarChart } from '@mantine/charts';
import { DailyData } from '@/lib/Dummy/DailyCameraData';

export function Dash_BarChart({ title }: { title: string }) {
  return (
    <div className='p-1 z-40 pr-4'>
      <h1 className=' font-semibold pb-4'>
              {title}
      </h1>
    <BarChart
      h={300}
      data={DailyData}
      dataKey="Device"
      series={[
        { name: 'time', color: 'indigo.6' },
      ]}
      tickLine="y"
      tooltipAnimationDuration={200}
      className='p-2'
    />
    </div>

  );
}