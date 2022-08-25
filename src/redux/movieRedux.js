import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: [],
    isFetching: false,
    error: false,
}

export const movieSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getMovieStart: (state) => {
            state.isFetching = true;
        },
        getMovieSuccess: (state, action) => {
            state.isFetching = false;
            state.movies = action.payload;
        },
        getMovieFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
})


export const { getMovieStart, getMovieSuccess, getMovieFailure } = movieSlice.actions

export default movieSlice.reducer