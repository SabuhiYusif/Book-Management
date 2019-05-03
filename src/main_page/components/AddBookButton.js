import React from 'react';
import { Link } from "react-router-dom";


const AddBookButton = ({props}) => {
    return (
      <div className="col-sm-4">
      <React.Fragment>
      <Link to="/addBook" className="btn btn-lg btn-info">
          Add Book
      </Link>
    </React.Fragment>
          {/* <button type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Add Book</button> */}
      </div>
    );
}

export default AddBookButton;