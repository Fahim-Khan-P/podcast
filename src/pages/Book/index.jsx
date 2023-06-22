import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams} from 'react-router-dom'
import { getBook } from '../../redux/books/booksSlice'

function BookPage() {

  const { id } = useParams()
  const book = useSelector((state) => state.books.showBook)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getBook(id))
  },[dispatch, id])

  return (
    <div>
      {book.name}<br></br>
      {book.id}
    </div>
  )
}

export default BookPage