import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => (
    <input
      ref={ref}
      className={`border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 ${className}`}
      {...props}
    />
  )
);
Input.displayName = 'Input';
