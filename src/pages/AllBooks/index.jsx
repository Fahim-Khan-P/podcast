import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../redux/books/booksSlice";
import Book from "../../components/Book";

const AllBooks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);

  const renderBooks = () => {
    const renderedbooks = books.map((book) => {
      return <Book key={book.id} book={book} />;
    });
    return renderedbooks;
  };
  if (loading === "loading")
    return (
      <div className="d-flex justify-content-center m-5">
        <div
          className="spinner-border text-danger"
          style={{ width: "10rem", height: "10rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  return <div>{renderBooks()}</div>;
};

export default AllBooks;
