import React from "react";
import style from "./pagination.module.scss";
import ReactPaginate from "react-paginate";

type PaginationProps = {
  onPageChanged: (page: { selected: number }) => void;
};

const Pagination: React.FC<PaginationProps> = ({ onPageChanged }) => {
  return (
    <ReactPaginate
      className={style.pagination}
      breakLabel='...'
      nextLabel='>'
      onPageChange={onPageChanged}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel='<'
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
