import React from 'react';
import { Link } from "react-router-dom";

const TablePagination = ({props}) => {

  const handlePageChange = () => {
    props.onPageChange(props.number);
  };
  console.log(props)
  

    return (
      <ul className="pagination">
        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
        <li className="page-item"><a className="page-link" onclick={handlePageChange}>{props.pageNumber}</a></li>
        <li className="page-item"><a className="page-link" href="#">Next</a></li>
      </ul> 
    );
}

export default TablePagination;