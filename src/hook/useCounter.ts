import { useState } from "react";

export const usePagination = (data: any, resultsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data.length / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return {
    pageNumbers,
    paginate,
    currentPage,
    indexOfFirstResult,
    indexOfLastResult,
  };
};
