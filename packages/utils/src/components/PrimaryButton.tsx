import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  /** Size of the button */
  size?: 'sm' | 'md';
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  className = '',
  size = 'md',
  ...props
}) => {
  const sizeClasses = size === 'sm' ? 'py-1 px-2 text-sm' : 'py-2 px-4';
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses} ${className}`}
      {...props}
    />
  );
};
