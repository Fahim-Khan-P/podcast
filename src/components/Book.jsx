/* eslint-disable react/prop-types */
// import { fetchBooks } from '../redux/booksSlice';

import { Link } from 'react-router-dom';


const Book = ({ book }) => {
 
  return (
    <Link to = {`${book.id}`}>

        <div className="book-container">
          <h2 className="title">{book?.name}</h2>
          <h3 className="author">{book?.id}</h3>
         
      </div>
    </Link>

  );
};

export default Book;