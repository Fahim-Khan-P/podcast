// import React from 'react'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams} from 'react-router-dom'
import { getBook } from '../../redux/booksSlice'

function BookPage() {

  const { id } = useParams()
  const book = useSelector((state) => state.books.showBook)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBook(id))
  },[dispatch, id])

  return (
    <div>
      {book.name}
    </div>
  )
}

export default BookPage