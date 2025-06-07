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
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      <Button
        onClick={handlePrev}
        disabled={isPrevDisabled}
        size="sm"
        className="px-3"
      >
        Prev
      </Button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <Button
        onClick={handleNext}
        disabled={isNextDisabled}
        size="sm"
        className="px-3"
      >
        Next
      </Button>
    </div>
  );
};
