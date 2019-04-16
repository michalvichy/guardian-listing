export function generatePages(
  currentPage: number,
  pageCount: number,
  delta: number = 1
): number[] {
  const left = currentPage - delta;
  const right = currentPage + delta + 1;

  return Array.from({ length: pageCount }, (v, k) => k + 1).filter(
    i => i && i >= left && i < right
  );
}

export function countDelta(currentPage: number, pageCount: number): number {
  if (currentPage === 1) {
    return 2;
  }

  if (currentPage === pageCount) {
    return 3;
  }

  if (currentPage + 1 === pageCount) {
    return 2;
  }

  return 1;
}
