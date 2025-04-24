import React from 'react';
import Image from 'next/image';
import { GeistSans } from 'geist/font/sans';

import StatCard from '@/components/dashboard/StatCard';
import InventoryChart from '@/components/dashboard/InventoryChart';
import ShipmentAnalytics from '@/components/dashboard/ShipmentAnalytics';
import SpotlightMap from '@/components/dashboard/SpotlightMap';
import TopItemsList from '@/components/dashboard/TopItemsList';
import { topPurchasedItems, topSoldItems } from '@/utils/data';

const MoneyBag = '/icons/MoneyBag.svg';
const Payments = '/icons/Payments.svg';
const Purchases = '/icons/Purchases.svg';
const ChartLine = '/icons/ChartLine.svg';

export default function DashboardPage() {
  return (
    <div
      className={`flex h-screen bg-[#F7F9FB] bg-primary text-primary ${GeistSans.className} `}
    >
      <div className='flex flex-1 flex-col  pl-16'>
        <main className='flex-1 bg-[#F7F9FB]  py-20 '>
          <div className='mb-4 -px-6 flex items-start justify-between border-b-1 border-[#0000001A] pb-6 p-6'>
            <div className='flex items-center space-x-3'>
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-white'>
                <Image
                  src='/icons/Logo.svg'
                  alt='User Avatar'
                  width={28}
                  height={28}
                  className='object-cover'
                />
              </div>
              <div className='flex  space-x-2'>
                <div>
                  <h1 className='text-2xl font-semibold text-black'>
                    Hello, Rahul
                  </h1>
                  <span className='text-sm text-gray-500'>ORUE PVT. LTD.</span>
                </div>
                <span className='ml-2 rounded h-7 bg-[#4F45E4] px-2.5 pt-1.5 text-xs font-semibold uppercase text-white shadow-sm'>
                  customer
                </span>
              </div>
            </div>
            <div className='hidden lg:flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-bold text-black shadow-sm cursor-pointer hover:bg-gray-50'>
              <span>Last 30 Days</span>
              <Image
                src='/icons/ArrowDown.svg'
                alt='Arrow down'
                width={16}
                height={16}
                className='object-cover'
              />
            </div>
          </div>
          <div className='p-6'>
            <div className='mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              <StatCard
                title='Payment Receivables'
                value='₹12,40,000'
                change={3.87}
                subText='OVERDUE PAYMENTS: ₹1,40,000'
                icon={MoneyBag}
              />
              <StatCard
                title='Payments Made'
                value='₹9,50,000'
                subText='NEXT PAYMENT DUE: 1 WEEK'
                icon={Payments}
              />
              <StatCard
                title='Total Purchases'
                value='₹15,20,000'
                change={3.87}
                subText='SUPPLIERS: 6'
                icon={Purchases}
              />
              <StatCard
                title='Total Sales'
                value='₹18,00,000'
                change={3.87}
                subText='TOP SELLING PRODUCT: ELECTRONICS'
                icon={ChartLine}
              />
            </div>
            <div className='mb-6 grid grid-cols-1 gap-6 lg:grid-cols-5'>
              <div className='lg:col-span-2'>
                <InventoryChart />
              </div>
              <div className='lg:col-span-3'>
                <ShipmentAnalytics />
              </div>
            </div>
            <div className='mb-6 grid grid-cols-1 gap-6 xl:grid-cols-5 xl:col-span-5 bg-white rounded-3xl  border-1 border-[#E5E5E5] pt-40 pb-10 -mx-4 -mt-40'>
              <div className='xl:col-span-2 pl-4'>
                <SpotlightMap />
              </div>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:col-span-3 pr-4 border-l-1 border-[#E5E5E5]'>
                <div className='px-4'>
                  <TopItemsList
                    title='Top Items Sold'
                    items={topSoldItems}
                    initialView='value'
                    valueLabel='Value'
                    volumeLabel='Vol.'
                  />
                </div>

                <div className='border-l-1 border-[#E5E5E5] px-4'>
                  <TopItemsList
                    title='Top Items Purchased'
                    items={topPurchasedItems}
                    initialView='volume'
                    volumeLabel='Vol.'
                    valueLabel='Value'
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
