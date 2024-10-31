import { LineChart } from '@mantine/charts';
import { data } from '@/lib/Dummy/LineChartData';

export function Dash_LineChart({title }: { title: string }) {
  return (
    

    <div className='p-1 z-40 pr-4'>
      <h1 className=' font-semibold pb-4'>
              {title}
      </h1>
      <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
      curveType="natural"
      className='p-2'
    />
    </div>
  );
}