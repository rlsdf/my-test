import React from 'react';
import { Button } from './Button';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}) => {
  const isPrevDisabled = currentPage <= 1;
  const isNextDisabled = currentPage >= totalPages;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrev = () => {
    if (!isPrevDisabled) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (!isNextDisabled) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={`flex items-center justify-center space-x-1 ${className}`}>
      <Button
        onClick={handlePrev}
        disabled={isPrevDisabled}
        size="sm"
        className="py-1 px-3 text-sm"
      >
        Prev
      </Button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`px-3 py-1 text-sm rounded-md border border-neutral-300 bg-white text-gray-800 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
            p === currentPage ? 'font-semibold' : ''
          }`}
        >
          {p}
        </button>
      ))}
      <Button
        onClick={handleNext}
        disabled={isNextDisabled}
        size="sm"
        className="py-1 px-3 text-sm"
      >
        Next
      </Button>
    </div>
  );
};
