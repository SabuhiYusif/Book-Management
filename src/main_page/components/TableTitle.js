import React from 'react';
import AddBookButton from './AddBookButton';

const TableTitle = ({props}) => {
    return (
      <div className="table-title">
          <div className="row">
              <div className="col-sm-8"><h2>Books</h2></div>
              <AddBookButton />
          </div>
      </div>   
    );
}

export default TableTitle;