import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get('https://dummyapi.online/api/movies')
  return response.data
})

const thunkSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMovies.pending, (state, _) => {
      state.isLoading = true
      state.isError = false
    }).addCase(fetchMovies.fulfilled, (state, action) => {
      const { payload } = action

      state.isLoading = false
      state.isError = false
      state.movies = [...payload]
    }).addCase(fetchMovies.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
    })
  }
})

export default thunkSlice