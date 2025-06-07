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
        className="px-2"
      >
        Prev
      </Button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`px-3 py-1 rounded border border-gray-300 bg-white text-gray-800 ${
            p === currentPage ? 'font-bold' : ''
          }`}
        >
          {p}
        </button>
      ))}
      <Button
        onClick={handleNext}
        disabled={isNextDisabled}
        size="sm"
        className="px-2"
      >
        Next
      </Button>
    </div>
  );
};
