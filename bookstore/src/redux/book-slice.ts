import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { requestBook } from '../services/book'

interface BookState {
  book: object,
  isLoading: boolean,
  error: string | null | undefined,
}

const initialState: BookState = {
  book: {},
  isLoading: false,
  error: null
}

// Thunks
export const fetchBook = createAsyncThunk('/books/{isbn13}/fetchPosts', async (isbn13: string, { rejectWithValue }) => {
  try {
    return await requestBook(isbn13)
  } catch (e) {
    return rejectWithValue((e as Error).message)
  }
})

const BookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBook.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchBook.fulfilled, (state, action: PayloadAction<object>) => {
        state.isLoading = false
        state.book = action.payload
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const bookReducer = BookSlice.reducer
