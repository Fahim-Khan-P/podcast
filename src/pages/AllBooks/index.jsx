import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../redux/booksSlice';
import Book from '../../components/Book';


const AllBooks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading)

 const renderBooks = () => {
    const renderedbooks = books.map((book) => {
      return <Book key = {book.id} book = {book} />
    }
    )
    return renderedbooks
  }
  if (loading === 'loading') return <h1>loading</h1>  
  return (
    <div>
      {renderBooks()}
    </div>
  );
};

export default AllBooks;