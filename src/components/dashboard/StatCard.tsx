import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

interface StatCardProps {
  title: string;
  value: string;
  change?: number;
  subText: string;
  icon: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  subText,
  icon,
}) => {
  const isPositive = change !== undefined && change >= 0;

  return (
    <div className='rounded-xl bg-white border-1 border-[#E5E5E5] p-4 shadow-card'>
      <div className='flex items-start justify-between mb-2'>
        <p className='text-base text-black'>{title}</p>

        <Image src={icon} height={34} width={34} alt='icon' />
      </div>
      <div className='flex items-baseline space-x-2 mb-2'>
        <p className={'text-[26px] font-semibold text-[#4F45E4]'}>{value}</p>
        {change !== undefined && (
          <span
            className={clsx(
              'flex items-center text-xs font-medium',
              isPositive ? 'text-green-500' : 'text-accent-red'
            )}
          >
            {isPositive ? '+' : ''}
            {change}%
            {isPositive && (
              <Image
                src='/icons/ArrowUpRight.svg'
                height={13}
                width={13}
                alt='icon'
                className='ml-0.5'
              />
            )}
          </span>
        )}
      </div>
      <p className='text-xs text-gray-900 font-semibold uppercase'>{subText}</p>{' '}
    </div>
  );
};

export default StatCard;
