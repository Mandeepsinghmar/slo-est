'use client';

import React, { useState } from 'react';
import ToggleButton from '../ToggleButton';

interface Item {
  rank: number;
  name: string;
  volume: number;
  value: string;
}

interface TopItemsListProps {
  title: string;
  items: Item[];
  initialView: 'value' | 'volume';
  valueLabel?: string;
  volumeLabel?: string;
}

const TopItemsList: React.FC<TopItemsListProps> = ({
  title,
  items,
  initialView,
  valueLabel = 'Value',
  volumeLabel = 'Vol.',
}) => {
  const [view, setView] = useState<'value' | 'volume'>(initialView);

  const primaryToggleLabel = initialView === 'value' ? valueLabel : volumeLabel;
  const secondaryToggleLabel =
    initialView === 'value' ? volumeLabel : valueLabel;
  const primaryViewType = initialView;
  const secondaryViewType = initialView === 'value' ? 'volume' : 'value';

  return (
    <div className='rounded-lg bg-card-bg px-4 py-2 shadow-card'>
      <div className='mb-4 flex items-center justify-between'>
        <h3 className='text-base font-bold text-black'>{title}</h3>
        <div className='flex items-center space-x-1 rounded-full bg-gray-100 p-1 border-[0.92px] border-[#E5E5E5]'>
          <ToggleButton
            isActive={view === secondaryViewType}
            onClick={() => setView(secondaryViewType)}
            weight='bold'
            size='wide'
          >
            {secondaryToggleLabel}
          </ToggleButton>

          <ToggleButton
            isActive={view === primaryViewType}
            onClick={() => setView(primaryViewType)}
            weight='bold'
            size='wide'
          >
            {primaryToggleLabel}
          </ToggleButton>
        </div>
      </div>
      <ul className='space-y-3'>
        {items.map((item) => (
          <li
            key={item.rank}
            className='flex items-center justify-between text-sm bg-[#F7F9FB] p-4 rounded-lg'
          >
            <div className='flex items-center'>
              <span className='mr-3 w-4 text-sm font-bold text-black'>
                #{item.rank}
              </span>
              <span className=' text-sm text-black'>{item.name}</span>
            </div>
            <span className='font-medium text-black text-sm border-1 border-[#E9E9E9] bg-[#F7F9FB] rounded-lg px-2 py-1'>
              {view === 'value' ? `${item.value}` : `${item.volume} Units`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopItemsList;
