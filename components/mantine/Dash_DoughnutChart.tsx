import { NetworkData } from '@/lib/Dummy/NetworkData';
import GaugeChart from 'react-gauge-chart'


export function Dash_DoughnutChart({ title }: { title: string }) {

  return (
    <div className='text-xs w-full'>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="grid grid-cols-2  gap-2">
      {
      NetworkData.datasets.map((data, i) => (
        <div key={i} className="bg-gray-700 rounded items-center justify-center">
        <GaugeChart
          nrOfLevels={7} 
          arcPadding={0.05} 
          cornerRadius={3} 
          percent={data.percent} 
        />
        <div className=' grid place-items-center'>{data.name}</div>
        </div>
      )
    )}
        </div>
</div>
  );
}