import React from 'react';

const TableHeaders = ({props}) => {
    return (
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN-13</th>
                <th>Comments</th>
                <th>Actions</th>
            </tr>
        </thead>  
    );
}

export default TableHeaders;