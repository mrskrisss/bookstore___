import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchBook } from '../redux/book-slice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { CardPreview } from '../components/cardPreview'
import { ICardPreview } from '../types/ICardPreview'

export function Book (bookInfo: ICardPreview): string {
  const { postId } = useParams<{postId: string}>()
  const dispatch = useDispatch<AppDispatch>()
  const book = useSelector((state: RootState) => state.book.book)

  useEffect(() => {
    if (!book && (book.isbn13 === postId)) return

    dispatch(fetchBook(postId))
  }, [dispatch])

  if (!book) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
        <CardPreview isbn13={bookInfo.isbn13}/>
    </>
  )
}
