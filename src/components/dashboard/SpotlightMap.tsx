import React from 'react';
import Image from 'next/image';

const SpotlightMap = () => {
  return (
    <div className='rounded-lg bg-card-bg p-4 shadow-card'>
      <div className='mb-4 flex items-center justify-between'>
        <h3 className='text-lg font-bold text-black'>Spotlight</h3>
        <button className='rounded-lg border border-[#E9E9E9] px-3 py-1.5 text-xs font-bold bg-[#F7F9FB] cursor-pointer text-black hover:bg-gray-50'>
          All Regions
        </button>
      </div>
      <div className='relative h-68 w-full  overflow-hidden'>
        <Image
          src='/images/WorldMap.svg'
          alt='World Map Placeholder'
          fill={true}
          className='opacity-50'
        />
      </div>
    </div>
  );
};

export default SpotlightMap;
