import React from 'react';
import { Pagination } from 'react-bootstrap';

const CustomPagination = (props) => {
  const { currentPage, totalPages, onPageChange } = props;

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageItems = () => {
    const PageItems = [];
    for (let i = 1; i <= totalPages; i++) {
      PageItems.push(
        <Pagination.Item key={i} active={i === currentPage} onClick={() => handlePageClick(i)}>
          {i}
        </Pagination.Item>
      );
    }
    return PageItems;
  };

  return (
    <div className='d-flex justify-content-center'>
      <Pagination>
        <Pagination.Prev disabled={currentPage === 1} onClick={() => handlePageClick(currentPage - 1)} />
        {renderPageItems()}
        <Pagination.Next disabled={currentPage === totalPages} onClick={() => handlePageClick(currentPage + 1)} />
      </Pagination>
    </div>
  );
};

export default CustomPagination;
