import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ className = '', ...props }) => (
  <button
    className={`bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${className}`}
    {...props}
  />
);
