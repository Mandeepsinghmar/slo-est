import React from 'react';
import Image from 'next/image';
import { GeistSans } from 'geist/font/sans';

interface NavbarProps {
  toggleSidebar: () => void;
}

const TopNavbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <header
      className={`fixed left-16 right-0 top-0 z-30 bg-[#4F45E4] flex h-16 items-center justify-between bg-navbar-bg px-6 text-white shadow-md ${GeistSans.className}`}
    >
      <div className='flex flex-grow items-center space-x-3 lg:flex-grow-0'>
        <button className='rounded-full p-2 hover:bg-white/10 cursor-pointer'>
          <Image
            src='/icons/Sidebar.svg'
            alt='calendar'
            width={25}
            height={25}
            className='object-cover '
            onClick={toggleSidebar}
          />
        </button>

        <div className='relative min-w-[250px] flex-grow md:min-w-[350px] lg:min-w-[362px]'>
          <Image
            src='/icons/Search.svg'
            alt='calendar'
            width={20}
            height={20}
            className='object-cover absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2'
          />
          <input
            type='text'
            placeholder='Search'
            className='w-full rounded-lg bg-indigo-700 py-2 pl-10 pr-4 text-white placeholder-white focus:bg-indigo-800 focus:outline-none focus:ring-1 focus:ring-indigo-400'
          />
        </div>
      </div>

      <div className='flex-grow'></div>

      <div className='hidden lg:flex lg:items-center '>
        <button
          className='rounded-full p-2 hover:bg-white/10 cursor-pointer'
          title='Calendar'
        >
          <Image
            src='/icons/Calendar.svg'
            alt='calendar'
            width={35}
            height={35}
            className='object-cover'
          />
        </button>
        <button
          className='relative rounded-full p-2 hover:bg-white/10 cursor-pointer'
          title='Notifications'
        >
          <Image
            src='/icons/Bell.svg'
            alt='calendar'
            width={25}
            height={25}
            className='object-cover'
          />
        </button>
        <button
          className='rounded-full p-2 hover:bg-white/10 cursor-pointer'
          title='Settings'
        >
          <Image
            src='/icons/NavSetting.svg'
            alt='calendar'
            width={25}
            height={25}
            className='object-cover'
          />
        </button>

        <div className='ml-2 flex items-center space-x-3 rounded-lg bg-indigo-700 px-3 py-1.5 shadow-inner cursor-pointer'>
          <div className='text-right'>
            <p className='text-[11px] leading-tight text-white'>
              rohan@etls.xyz
            </p>
            <p className='text-xs leading-tight text-white font-bold'>
              ETLS PVT. LTD.
            </p>
          </div>

          <div className='h-8 w-8 overflow-hidden rounded-full bg-gray-600 '>
            <Image
              src='/icons/IconSet.png'
              alt='User Avatar'
              width={28}
              height={28}
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
