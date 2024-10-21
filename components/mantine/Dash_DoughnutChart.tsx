import { NetworkData } from '@/lib/Dummy/NetworkData';
import GaugeChart from 'react-gauge-chart'


export function Dash_DoughnutChart() {

  return (
    <div className='text-xs w-full'>
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