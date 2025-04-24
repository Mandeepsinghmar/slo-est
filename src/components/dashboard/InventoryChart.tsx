'use client';

import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import clsx from 'clsx';
import { weeklyData } from '@/utils/data';
import ToggleButton from '../ToggleButton';

const dailyData = weeklyData.map((d) => ({
  ...d,
  Sales: d.Sales / 7,
  Purchases: d.Purchases / 7,
}));

const InventoryChart = () => {
  const [timeframe, setTimeframe] = useState<'DAILY' | 'WEEKLY'>('WEEKLY');
  const data = timeframe === 'WEEKLY' ? weeklyData : dailyData;

  return (
    <div className='rounded-xl bg-white border-1 border-[#E5E5E5] px-4 pt-4 pb-2 shadow-card'>
      <div className='mb-4 flex items-center justify-between'>
        <div>
          <h3 className='text-lg font-bold text-black'>Inventory Overview</h3>
          <p className='text-xs text-gray-500'>
            In-Stock Products:{' '}
            <span className='font-semibold'>3,200 Units</span>
          </p>
        </div>
        <div className='flex items-center space-x-1 rounded-full bg-gray-100 p-1 border-[0.92px] border-[#E5E5E5] '>
          {/* <button
            onClick={() => setTimeframe('DAILY')}
            className={clsx(
              'rounded-full px-5 py-1 text-xs cursor-pointer font-bold transition-colors',
              timeframe === 'DAILY'
                ? 'bg-[#4F45E4] text-white shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            )}
          >
            Daily
          </button>
          <button
            onClick={() => setTimeframe('WEEKLY')}
            className={clsx(
              'rounded-full px-5 py-1 text-xs font-bold cursor-pointer transition-colors',
              timeframe === 'WEEKLY'
                ? 'bg-[#4F45E4]  text-white shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            )}
          >
            Weekly
          </button> */}

          <ToggleButton
            isActive={timeframe === 'DAILY'}
            onClick={() => setTimeframe('DAILY')}
            size='wide'
            weight='bold'
          >
            Daily
          </ToggleButton>

          <ToggleButton
            isActive={timeframe === 'WEEKLY'}
            onClick={() => setTimeframe('WEEKLY')}
            size='wide'
            weight='bold'
          >
            Weekly
          </ToggleButton>
        </div>
      </div>
      <div style={{ width: '100%', height: 250 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 5, right: 0, left: -20 }}
            barGap={4}
            barCategoryGap='25%'
          >
            <CartesianGrid
              strokeDasharray='3 3'
              vertical={false}
              stroke='#e5e7eb'
            />
            <XAxis
              dataKey='name'
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <Tooltip
              cursor={{ fill: 'rgba(229, 231, 235, 0.5)' }}
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '0.375rem',
                fontSize: '12px',
                padding: '8px',
              }}
            />
            <Legend
              verticalAlign='bottom'
              align='right'
              iconSize={8}
              iconType='circle'
              wrapperStyle={{ fontSize: '12px', color: '#4F45E4' }}
            />
            <Bar dataKey='Sales' fill='#4F45E4' radius={[4, 4, 0, 0]} />

            <Bar dataKey='Purchases' fill='#D6D4F5' radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InventoryChart;
