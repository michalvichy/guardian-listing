import React from 'react';
import {
  Pagination as Paginator,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';

import { countDelta, generatePages } from '../helpers/pagination';

interface Props {
  maxPages: number;
  currentPage: number;
  onPageChange(page: number): void;
}

export const Pagination = (props: Props) => {
  const { maxPages, currentPage, onPageChange } = props;
  const numberOfPagesBeforeDivider = 3;
  const numberOfPagesToDisplay = numberOfPagesBeforeDivider + 1;
  const delta = countDelta(currentPage, maxPages);
  const pages = generatePages(currentPage, maxPages, delta);

  return (
    <div className="pagination-wrapper">
      <Paginator size="sm">
        {pages.map((page, i) => (
          <PaginationItem key={i} active={currentPage === page}>
            <PaginationLink onClick={() => onPageChange(page)}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < maxPages - 2 && maxPages > numberOfPagesToDisplay && (
          <PaginationItem>
            <PaginationLink>...</PaginationLink>
          </PaginationItem>
        )}

        {currentPage < maxPages - 1 && maxPages > numberOfPagesBeforeDivider && (
          <PaginationItem>
            <PaginationLink onClick={() => onPageChange(maxPages)}>
              {maxPages}
            </PaginationLink>
          </PaginationItem>
        )}
      </Paginator>
    </div>
  );
};
