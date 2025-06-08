import React from 'react';
import { PrimaryButton } from './PrimaryButton';
import { InfoButton } from './InfoButton';

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
      <InfoButton
        onClick={handlePrev}
        disabled={isPrevDisabled}
        size="sm"
        className="px-4 py-2 text-sm"
      >
        Prev
      </InfoButton>
      {pages.map((p) => (
        p === currentPage ? (<PrimaryButton
          key={p}
          onClick={() => onPageChange(p)}
          className={`px-4 py-2 text-sm`}
        >
          {p}
        </PrimaryButton>) : (<InfoButton
          key={p}
          onClick={() => onPageChange(p)}
          className={`px-4 py-2 text-sm`}
        >
          {p}
        </InfoButton>)
        
      ))}
      <InfoButton
        onClick={handleNext}
        disabled={isNextDisabled}
        size="sm"
        className="px-4 py-2 text-sm"
      >
        Next
      </InfoButton>
    </div>
  );
};
