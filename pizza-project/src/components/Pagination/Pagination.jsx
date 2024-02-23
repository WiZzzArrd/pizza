import React from "react";
import style from "./pagination.module.scss";
import ReactPaginate from "react-paginate";

export default function Pagination({ onPageChanged }) {
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
}
