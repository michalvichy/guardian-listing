import React from 'react';
import {
  Pagination as Paginator,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';

interface Props {
  pages: number;
  onPageChange(page: string): void;
}

export const Pagination = (props: Props) => {
  const pages = Array.from(new Array(props.pages));

  console.log(pages);

  return (
    <div className="pagination-wrapper">
      <Paginator size="sm">
        {pages.map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink onClick={() => props.onPageChange(`${i + 1}`)}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
      </Paginator>
    </div>
  );
};
