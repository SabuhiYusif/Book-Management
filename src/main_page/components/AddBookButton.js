import React from 'react';

const AddBookButton = ({props}) => {
    return (
      <div className="col-sm-4">
          <button type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Add Book</button>
      </div>
    );
}

export default AddBookButton;