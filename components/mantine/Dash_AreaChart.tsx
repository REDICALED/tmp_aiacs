import { AreaChart } from '@mantine/charts';
import { DailyData } from '@/lib/Dummy/DailyData';

export function Dash_AreaChart({ title }: { title: string }) {
  return (
    <div className='p-1 z-40 pr-4'>
            <h1 className=' font-semibold pb-4'>
              {title}
      </h1>
    <AreaChart
      h={300}
      data={DailyData}
      dataKey="time"
      series={[
        { name: 'Counts', color: 'indigo.6' },
      ]}
      dotProps={{ r: 6, strokeWidth: 2, stroke: '#000000' }}
      activeDotProps={{ r: 8, strokeWidth: 1, fill: '#000000' }}
      curveType="bump"
      tooltipAnimationDuration={200}
      className='p-2'
    />
    </div>

  );
}