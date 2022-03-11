import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function Paginator({
  perPage,
  total,
  currentPage,
  setCurrentPage,
}) {
  const totalPages = Math.ceil(total / perPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let isPageNumberOutOfRange;

  const pageNumbers = [...new Array(totalPages)].map((_, index) => {
    const pageNumber = index + 1;
    console.log(currentPage);
    if (totalPages > 7) {
      // Номер текущей страницы
      const isPageNumberFirst = pageNumber === 1;
      const isPageNumberLast = pageNumber === totalPages;
      const isCurrentPageFirst = currentPage === 1;
      const isCurrentPageLast = currentPage === totalPages;
      const isCurrentPageSecond = (currentPage === 2);
      const isCurrentPagePreLast = (currentPage === totalPages - 1);
      const isCurrentPageBetweenLeft = ((currentPage > 1) && (currentPage < 4));
      const isCurrentPageBetweenRight = ((currentPage > totalPages - 3)
      && (currentPage <= totalPages));
      const isCurrentPageMiddle = ((currentPage >= 4) && (currentPage <= totalPages - 3));

      // Отображение номеров страниц в зависимости от положения текущей страницы
      const isCurrentPageFirstLast = Math.abs(pageNumber - currentPage) <= 4;
      const isCurrentPageBetween = Math.abs(pageNumber - currentPage) <= 2;
      const isCurrentPageSecondPreLast = Math.abs(pageNumber - currentPage) <= 3;
      const isCurrentPageMiddlePos = Math.abs(pageNumber - currentPage) <= 1;

      if (
        ((isCurrentPageFirst || isCurrentPageLast) && isCurrentPageFirstLast)
        || (isPageNumberFirst || isPageNumberLast)
      ) {
        isPageNumberOutOfRange = false;
        return (
          <Pagination.Item
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            active={pageNumber === currentPage}
          >
            {pageNumber}
          </Pagination.Item>
        );
      }
      if (
        (isCurrentPageSecond || isCurrentPagePreLast) && isCurrentPageSecondPreLast
      ) {
        isPageNumberOutOfRange = false;
        return (
          <Pagination.Item
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            active={pageNumber === currentPage}
          >
            {pageNumber}
          </Pagination.Item>
        );
      }
      if (
        (isCurrentPageBetweenLeft || isCurrentPageBetweenRight) && isCurrentPageBetween
      ) {
        isPageNumberOutOfRange = false;
        return (
          <Pagination.Item
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            active={pageNumber === currentPage}
          >
            {pageNumber}
          </Pagination.Item>
        );
      }
      if (
        isCurrentPageMiddle && isCurrentPageMiddlePos
      ) {
        isPageNumberOutOfRange = false;
        return (
          <Pagination.Item
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            active={pageNumber === currentPage}
          >
            {pageNumber}
          </Pagination.Item>
        );
      }

      if (!isPageNumberOutOfRange) {
        isPageNumberOutOfRange = true;
        return (
          <Pagination.Ellipsis
            key={pageNumber}
            className="muted"
            disabled
          />
        );
      }
    } else {
      return (
        <Pagination.Item
          key={pageNumber}
          onClick={() => paginate(pageNumber)}
          active={pageNumber === currentPage}
        >
          {pageNumber}
        </Pagination.Item>
      );
    }

    return null;
  });

  return (
    <Pagination className="pagination justify-content-center">
      {totalPages > 0
        ? (
          <Pagination.Prev onClick={
            () => paginate((pageNumber) => (pageNumber === 1
              ? 1
              : pageNumber - 1))
          }
          />
        )
        : null}
      {pageNumbers}
      {totalPages > 0
        ? (
          <Pagination.Next onClick={
          () => paginate((pageNumber) => (pageNumber === Math.ceil(total / perPage)
            ? pageNumber
            : pageNumber + 1))
}
          />
        ) : null}
    </Pagination>
  );
}
export default Paginator;
