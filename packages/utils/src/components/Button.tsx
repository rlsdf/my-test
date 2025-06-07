import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  /** Size of the button */
  size?: 'sm' | 'md';
}

export const Button: React.FC<ButtonProps> = ({
  className = '',
  size = 'md',
  ...props
}) => {
  const sizeClasses = size === 'sm' ? 'py-1 px-2 text-sm' : 'py-2 px-4';
  return (
    <button
      className={`bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses} ${className}`}
      {...props}
    />
  );
};
