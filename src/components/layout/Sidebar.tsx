import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { bottomIcons, topIcons } from '@/utils/data';
import { GeistSans } from 'geist/font/sans';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`bg-white fixed left-0  z-40 h-full flex flex-col ${GeistSans.className}`}
    >
      <div className='mb-4 flex  items-center justify-center rounded-lg pl-4 pt-4 w-[72px]'>
        <Image src='/logo.svg' alt='Logo' height={40} width={40} />
      </div>
      <aside
        className={clsx(
          'fixed left-0 top-16 z-40 h-full flex flex-col justify-between bg-white py-4 text-black shadow-lg border-r border-gray-200', // Base classes, adjusted border color
          'transition-all duration-300 ease-in-out',
          isOpen ? 'w-44 px-4' : 'w-18 items-center px-2'
        )}
      >
        <div
          className={clsx(
            'flex flex-col space-y-4',
            isOpen ? 'items-start' : 'items-center'
          )}
        >
          <nav className='flex flex-col items-center space-y-3'>
            {topIcons.map((item, index) => (
              <button
                key={index}
                title={item.label}
                className={clsx(
                  'flex items-center rounded-md p-2 text-sm transition-colors duration-200 hover:bg-gray-100 cursor-pointer w-full', // Added flex, full width
                  !isOpen && 'justify-center',
                  item.label === 'Dashboard'
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'text-gray-700'
                )}
              >
                <Image src={item.icon} width={24} alt='icon' height={24} />
                {isOpen && <span className='ml-3'>{item.label}</span>}
              </button>
            ))}
          </nav>
        </div>

        <div className='flex flex-col  space-y-3 mb-16'>
          {bottomIcons.map((item, index) => (
            <div key={index}>
              {item.label === 'Settings' && (
                <div className='border-t-2 border-gray-200 mb-4' />
              )}
              <button
                key={index}
                title={item.label}
                className={clsx(
                  'flex items-center rounded-md p-2 text-sm transition-colors duration-200 hover:bg-gray-100 cursor-pointer w-full',
                  !isOpen && 'justify-center',
                  item.label === 'Settings' && isOpen
                    ? 'bg-gray-100 text-gray-800'
                    : 'text-gray-700'
                )}
              >
                <Image
                  src={item.icon}
                  width={item.label === 'Settings' ? 16 : 20}
                  alt='icon'
                  height={item.label === 'Settings' ? 16 : 20}
                />
                {isOpen && <span className='ml-3'>{item.label}</span>}
              </button>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
