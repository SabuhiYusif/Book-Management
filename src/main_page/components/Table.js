import React, { Component } from 'react';

class Table extends Component {
  render() {
    const { book } = this.props;
    return (
        <tr>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.isbn}</td>
            <td>Number of comments</td>
            <td><i className="far fa-trash-alt"></i> <i className="fas fa-pen"></i></td>
        </tr>
    );
  }
}

export default Table;