import React, { Component } from 'react';
import TableTitle from './TableTitle';
import Table from './Table';
import {connect} from "react-redux";
import {getBooks} from "../actions/bookActions";
import PropTypes from "prop-types";
import TableHeaders from './TableHeaders';
import TablePagination from './TablePagination';
import { Link } from "react-router-dom";


class MainPage extends Component {

  componentDidMount(){
    const pageNumber = 2;
    this.props.getBooks({pageNumber});
  }

  onPageChange(pageNumber) {
    this.props.getBooks({pageNumber});
  }

  render() {
    let content = [];
    let pageSize = 0;
    if (this.props.book.books.content){
      content = this.props.book.books.content;
      pageSize = this.props.book.books.totalPages;
    };
    const pages = [...Array(pageSize).keys()];
    return (
      <div className="container">
        <div className="table-wrapper">
						<TableTitle />
            <table className="table table-bordered">
              <TableHeaders />
              <tbody>
                {content.map(book => (
                  <Table key={book.id} book={book} />
                ))}
              </tbody>
            </table>  
             
                <ul className="pagination">
                   <li className="page-item"><a className="page-link" href="#" onClick={() => {this.onPageChange(0)}}>{'<<<'}</a></li>
                   {pages.map(number => (
                  <li className="page-item"><a className="page-link" href="#" onClick={() => {this.onPageChange(number)}} >{number}</a></li>
                  ))}
                  <li className="page-item"><a className="page-link" href="#"onClick={() => {this.onPageChange(pages.length - 1)}}>{'>>>'}</a></li>
                </ul>       
        </div>       
    </div>     
    );
  }
}
MainPage.propTypes = {
  book: PropTypes.object.isRequired,
  getBooks: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  book: state.book
});

const mapDispatchToProps = (dispatch) => {
  return {
    getBooks: ({pageNumber}) => dispatch(getBooks({pageNumber})),
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);