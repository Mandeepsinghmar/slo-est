import React from 'react';
import clsx from 'clsx';

type ToggleButtonProps = {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  size?: 'default' | 'wide';
  weight?: 'medium' | 'bold';
  className?: string;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({
  children,
  isActive,
  onClick,
  size = 'default',
  weight = 'bold',
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'rounded-full text-xs cursor-pointer transition-colors uppercase',
        size === 'default' ? 'px-3 py-1' : 'px-5 py-1',
        weight === 'bold' ? 'font-bold' : 'font-medium',
        isActive
          ? 'bg-[#4F45E4] text-white shadow-sm'
          : 'text-gray-500 hover:text-gray-700',
        className
      )}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
