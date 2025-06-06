import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ className = '', ...props }) => (
  <button
    className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded transition-colors ${className}`}
    {...props}
  />
);
