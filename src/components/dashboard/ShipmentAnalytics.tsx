'use client';

import React from 'react';
import Image from 'next/image';
import { mapData, shipments } from '@/utils/data';

const ShipmentAnalytics = () => {
  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 rounded-xl bg-white border-1 pt-1 border-[#E5E5E5] px-4 pb-2 shadow-card'>
      <div className='rounded-lg bg-card-bg p-4 shadow-card lg:col-span-1'>
        <div className='mb-4 flex items-center justify-between'>
          <h3 className='text-lg font-bold text-black'>Shipment Analytics</h3>
          <button className='flex cursor-pointer items-center space-x-1 rounded-md border border-gray-300 px-3 py-1 text-xs font-bold text-black  hover:bg-gray-50'>
            <Image
              src={'/icons/Filter.svg'}
              height={12}
              width={12}
              alt='icon'
            />

            <span>Filters</span>
          </button>
        </div>

        <div className='space-y-3'>
          {shipments.map((shipment) => (
            <div key={shipment.id} className='rounded-md p-3 bg-[#F7F9FB]'>
              <div className='mb-2 flex items-center justify-between'>
                <div>
                  <div className='text-xs text-black'>Shipment ID</div>
                  <div className='text-base font-bold text-black'>
                    {shipment.id}
                  </div>
                </div>
                <div className='relative'>
                  <Image
                    src={'/images/Truck.svg'}
                    height={52}
                    width={112}
                    alt='truck'
                  />
                  <div>
                    <Image
                      src={'/images/Mask.svg'}
                      height={35}
                      width={53}
                      alt='icon'
                      className='absolute top-2 right-7 bg-[#4F45E4]'
                    />
                    <p className='absolute top-5 right-11 text-[8px] text-white font-semibold'>
                      63%
                    </p>
                  </div>
                </div>
              </div>
              <div className='mb-2 flex items-center gap-2 text-xs text-black'>
                <div className='flex items-center'>
                  <Image
                    src={'/icons/FromAddress.svg'}
                    height={12}
                    width={12}
                    alt='icon'
                    className='mr-1'
                  />
                  <span>{shipment.from}</span>
                </div>
                <Image
                  src={'/icons/ArrowRight.svg'}
                  width={14}
                  alt='icon'
                  height={0}
                />
                <div className='flex items-center'>
                  <Image
                    src={'/icons/ToAddress.svg'}
                    height={12}
                    width={12}
                    alt='icon'
                    className='mr-1'
                  />
                  <span>{shipment.to}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='rounded-lg bg-card-bg p-4 shadow-card lg:col-span-2'>
        <div className='mb-3 h-58'>
          <div className='rounded-full border border-[#E9E9E9] px-3 py-1.5 text-xs w-fit  bg-[#F7F9FB] cursor-pointer  hover:bg-gray-50'>
            ID: <span className='font-bold text-black'>#003455MNP</span>
          </div>
          <div className='mb-3 h-64 w-full overflow-hidden rounded-lg'>
            <div className='relative h-48 w-full mt-2  overflow-hidden'>
              <Image
                src='/images/ShipmentMap.png'
                alt='Shipment Map Placeholder'
                fill={true}
              />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:grid-cols-5'>
          <div className='pr-1 pl-2 border-r-1 border-[#E5E5E5]'>
            <p className='text-xs text-black'>Shipment ID</p>
            <p className='font-semibold text-black text-sm mt-2'>
              {mapData.shipmentId}
            </p>
          </div>
          <div className='pr-1 pl-2  border-r-1 border-[#E5E5E5]'>
            <p className='text-xs text-black'>Category</p>
            <p className='font-semibold text-black text-sm mt-2'>
              {mapData.category}
            </p>
          </div>
          <div className='pr-1 pl-2  border-r-1 border-[#E5E5E5]'>
            <p className='text-xs text-black'>Total Weight</p>
            <p className='font-semibold text-black text-sm mt-2'>
              {mapData.totalWeight}
            </p>
          </div>
          <div className='pr-1 pl-2  border-r-1 border-[#E5E5E5] md:last:border-r-0'>
            <p className='text-xs text-black'>Destination</p>
            <p className='font-semibold text-black text-sm mt-2'>
              {mapData.destination}
            </p>
          </div>
          <div className='pl-2'>
            <p className=' text-xs text-black'>Est. Arrival</p>
            <p className='font-semibold text-black text-sm mt-2'>
              {mapData.estArrival}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentAnalytics;
