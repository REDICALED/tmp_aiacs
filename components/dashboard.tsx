"use client";

import {StatsRing} from '@/components/mantine/Dash_StatsTing';
import {Dash_AreaChart} from '@/components/mantine/Dash_AreaChart';
import {Dash_BarChart} from '@/components/mantine/Dash_BarChart';
import {Dash_VideoEmbed} from '@/components/mantine/Dash_VideoEmbed';
import {Dash_DoughnutChart} from '@/components/mantine/Dash_DoughnutChart';
import {Dash_NVR} from '@/components/mantine/Dash_NVR';
import {NavbarMinimal} from '@/components/dashboard/Navbar';
import {HeaderSimple} from '@/components/dashboard/HeaderSimple';

import Image from 'next/image';


import React from "react";

import ClockComponent from "./ClockComponent";

export function DashboardComponent() {


  return (
    <>
    <div className="min-h-screen bg-gray-900 text-white lg:p-4 lg:w-full w-full">
        <div className='lg:flex grid grid-cols-2 justify-between items-center mb-4 px-2'>
        <div className='flex items-center'>
            <div className=' relative lg:w-[150px] w-[75px] h-[25px] lg:h-[50px] block '>
                        <Image className="mr-4" src="/rian.png" alt="logo" layout="fill" />
                      </div>
              <h1 className=" lg:ml-10 ml-2 lg:text-2xl text-xs font-extrabold">AI-ACS</h1>
        </div>

        <div className="hidden lg:block">
        <ClockComponent />
        </div>
        <div className="block lg:hidden">
        <HeaderSimple />
        </div>
        </div>

    <div className='flex'>
    <div className="hidden lg:block">
    <NavbarMinimal />
      </div>
    <div className="lg:grid lg:grid-cols-4 lg:gap-4 rounded">

            <div className="lg:col-span-1 lg:grid lg:grid-rows-3 space-y-4">

            <div className='pl-1 py-2 bg-gray-800 rounded lg:w-full w-[100vw]'>
                <div className='px-2'>
                  <Dash_BarChart/>
                </div>
            </div>

            <div className='pl-1 py-2 bg-gray-800 rounded lg:w-full w-[100vw]'>
              <div className='px-2'>
                <Dash_AreaChart/>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded lg:w-full w-[100vw]">
                <Dash_VideoEmbed />
            </div>
          </div>

            <div className="lg:col-span-2 lg:w-full w-[100vw] my-4 lg:my-0">
              <div className="bg-gray-800 p-4 rounded h-full">
                <h2 className="text-lg font-semibold mb-2"></h2>
                <div className="bg-gray-700 h-full rounded"></div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-4 lg:h-full">
              <div className="bg-gray-800 p-4 rounded lg:w-full w-[100vw]">
                <h2 className="text-lg font-semibold mb-2">조류 근접 현황</h2>
                <StatsRing /> 
              </div>

              <div className="bg-gray-800 p-4 rounded lg:w-full w-[100vw]">
                <h2 className="text-lg font-semibold mb-2">네트워크 상태</h2>
                      <Dash_DoughnutChart />
              </div>

              <div className="bg-gray-800 p-4 rounded lg:w-full w-[100vw]">
                <Dash_NVR />
              </div>

            </div>
          </div>
    </div>
          
    </div>
    </>
    
  );
}
