import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  /** Size of the button */
  size?: 'sm' | 'md';
}

export const InfoButton: React.FC<ButtonProps> = ({
  className = '',
  size = 'md',
  ...props
}) => {
  const sizeClasses = size === 'sm' ? 'py-1 px-2 text-sm' : 'py-2 px-4';
  return (
    <button
      className={`px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses} ${className}`}
      {...props}
    />
  );
};
