"use client";

import {Dash_BarChart} from '@/components/mantine/Dash_BarChart';
import {Dash_LineChart} from '@/components/mantine/Dash_LineChart';
import { Divider } from '@mantine/core';
import { ReactNode } from 'react';
import {Dash_Carousel} from '@/components/mantine/Dash_Carousel';
import '@mantine/carousel/styles.css';
import ReactPlayer from 'react-player'
import {Dash_card} from '@/components/mantine/Dash_Card';

function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
    <h1 className='px-7 pt-2'>{title}</h1>
    <Divider color='gray' className=' mx-7 opacity-45 ' my="md" />
    {children}
    </div>
  )
}
export default function Page() {
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
    <div className="lg:grid lg:grid-rows-4 lg:gap-4 rounded lg:ml-[80px] mt-4 space-y-2 " style={{ width: "100vw" }}>
    <SectionCard title='실시간 영상'>
      <div className=" lg:grid lg:grid-cols-4 " >

            <div className='px-4 lg:w-full w-full my-4'>
                <div className='px-4 '>
                  <Dash_card url='/DummyDB/Egret_test.mp4' />
                </div>
            </div>

            <div className='px-4 lg:w-full w-full my-4'>
                <div className='px-4 '>
                  <Dash_card url='/DummyDB/Ardea.mp4' />
                </div>
            </div>

            <div className='px-4 lg:w-full w-full my-4'>
                <div className='px-4 '>
                  <Dash_card url='/DummyDB/Doyo.mp4' />
                </div>
            </div>

          </div>
    </SectionCard>
          <SectionCard title='주간 조류 관찰 차트 1'>
            <div className=" lg:grid lg:grid-cols-3 space-y-2" >
            <div className='px-4 lg:w-full w-full'>
            <div className='pl-1  bg-gray-800 rounded'>
                <div className='px-4 '>
                  <Dash_BarChart title={''}/>
                </div>
            </div>
            </div>

            <div className='px-4 lg:w-full w-full'>
            <div className='pl-1  bg-gray-800 rounded'>
              <div className='px-4'>
              <Dash_BarChart title={''}/>
              </div>
            </div>
            </div>

            <div className='px-4 lg:w-full w-full'>
            <div className='pl-1  bg-gray-800 rounded'>
              <div className='px-4'>
              <Dash_BarChart title={''}/>
              </div>
            </div>
            </div>
          </div>
        </SectionCard>
          
        <SectionCard title='주간 조류 관찰 차트 2'>
        <div className=" lg:grid lg:grid-cols-2 space-y-2 ">
          <div className='px-4 lg:w-full w-full'>
          <div className='pl-1  bg-gray-800 rounded'>
              <div className='px-4 '>
                <Dash_BarChart title={''}/>
              </div>
          </div>
          </div>

          <div className='px-4 lg:w-full w-full'>
          <div className='pl-1  bg-gray-800 rounded'>
            <div className='px-4'>
            <Dash_BarChart title={''}/>
            </div>
          </div>
          </div>
        </div>
        </SectionCard>


        <SectionCard title='월간 조류 데이터 추이'>
        <div className=" ">
          <div className='px-4 lg:w-full w-full'>
          <div className='pl-1  bg-gray-800 rounded'>
            <div className='px-4'>
            <Dash_LineChart title=''/>
            </div>
          </div>
          </div>
        </div>
        </SectionCard>

          </div>
    </div>
          
    </div>
    </>
  )
}