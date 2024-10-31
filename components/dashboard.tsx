"use client";

import {StatsRing} from '@/components/mantine/Dash_StatsTing';
import {Dash_AreaChart} from '@/components/mantine/Dash_AreaChart';
import {Dash_BarChart} from '@/components/mantine/Dash_BarChart';
import {Dash_VideoEmbed} from '@/components/mantine/Dash_VideoEmbed';
import {Dash_DoughnutChart} from '@/components/mantine/Dash_DoughnutChart';
import {Dash_NVR} from '@/components/mantine/Dash_NVR';


import React from "react";

export function DashboardComponent() {


  return (
    <>
    <div className="min-h-screen bg-gray-900 text-white lg:p-4 lg:w-full w-full">
        <div className='lg:flex grid grid-cols-2 justify-between items-center mb-4 px-4'>
        <div className='flex items-center'>
            <div className=' relative lg:w-[150px] w-[75px] h-[25px] lg:h-[80px] block '>
            </div>
        </div>

        <div className="hidden lg:block">
        </div>
        <div className="flex justify-end  lg:hidden right-0 pt-2">
        </div>
        </div>

    <div className='flex'>
    <div className="lg:grid lg:grid-cols-4 lg:gap-4 rounded lg:ml-[80px]">

            <div className="lg:col-span-1 lg:grid lg:grid-rows-3 space-y-4">

            <div className='px-4 lg:w-full w-full'>
            <div className='pl-1 py-2 bg-gray-800 rounded'>
                <div className='px-4 '>
                  <Dash_BarChart title={''}/>
                </div>
            </div>
            </div>

            <div className='px-4 lg:w-full w-full'>
            <div className='pl-1 py-2 bg-gray-800 rounded'>
              <div className='px-4'>
                <Dash_AreaChart title={''}/>
              </div>
            </div>
            </div>

            <div className='px-4 lg:w-full w-full'>
            <div className="bg-gray-800 p-4 rounded ">
                <Dash_VideoEmbed title={''} />
            </div>
            </div>

          </div>

            <div className="lg:col-span-2 lg:w-full w-full my-4 lg:my-0">
              <div className="bg-gray-800 p-4 rounded h-full">
                <h2 className="text-lg font-semibold mb-2"></h2>
                <div className="bg-gray-700 h-full rounded"></div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-4 lg:h-full">

            <div className='px-4 lg:w-full w-full'>
              <div className="bg-gray-800 p-4 rounded lg:w-full w-full">
                <h2 className="text-lg font-semibold mb-2">조류 근접 현황</h2>
                <StatsRing title={''} /> 
              </div>
              </div>

            <div className='px-4 lg:w-full w-full'>
            <div className="bg-gray-800 p-4 rounded lg:w-full w-full">
                <h2 className="text-lg font-semibold mb-2">네트워크 상태</h2>
                      <Dash_DoughnutChart title={''} />
              </div>
              </div>

            <div className='px-4 lg:w-full w-full pb-2'>
            <div className="bg-gray-800 p-4 rounded lg:w-full w-full">
                <Dash_NVR title={''} />
              </div>
              </div>

            </div>
          </div>
    </div>
          
    </div>
    </>
    
  );
}
