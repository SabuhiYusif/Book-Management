
import React, { Component } from 'react';
// import TableTitle from './TableTitle';
// import Table from './Table';
import {connect} from "react-redux";
import {createBook} from "../../actions/bookActions";
import PropTypes from "prop-types";
// import TableHeaders from './TableHeaders';
// import TablePagination from './TablePagination';
// import { Link } from "react-router-dom";

class AddBook extends Component {

	constructor() {
    super();

    this.state = {
      title: "",
      author: "",
      isbn: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newBook = {
      title: this.state.title,
      author: this.state.author,
      isbn: this.state.isbn
    };

    this.props.createBook(newBook, this.props.history);
  }
  render() {
    
    return (
      <div class="signup-form">
    <form onSubmit={this.onSubmit} method="post">
		<h2>Add Book</h2>
        <div class="form-group">
        	<input 
					type="text" 
					class="form-control"
					 name="title" 
					 placeholder="Title" 
					 required="required"
					 value={this.state.title}
					 onChange={this.onChange}
					 />
        </div>
		<div class="form-group">
            <input
						  type="text"
						  class="form-control" 
							name="author" 
							placeholder="Author" 
							required="required"
							value={this.state.author}
					     onChange={this.onChange}
							/>
        </div>
		<div class="form-group">
            <input 
							type="text" 
							class="form-control"
							name="isbn"
							placeholder="ISBN" 
							required="required"
							value={this.state.isbn}
					    onChange={this.onChange}
							/>
        </div>        
        <div class="form-group">
		</div>
		<div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block">Add</button>
        </div>
    </form>
</div>
    );
  }
}
// MainPage.propTypes = {
//   book: PropTypes.object.isRequired,
//   getBooks: PropTypes.func.isRequired
// }
// const mapStateToProps = state => ({
//   book: state.book
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getBooks: ({pageNumber}) => dispatch(getBooks({pageNumber})),
    
//   };
// };

export default connect(
  null,
  { createBook }
)(AddBook);