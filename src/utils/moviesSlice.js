import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice ({
    name: "movie",
    initialState: {
        nowPlayingmovies: null,
        nowPopularmovies: null,
        nowTopRatedmovies: null,
        nowUpcommingmovies: null,
        trailerVideo: null,
    },
  
    reducers: {
        addNowPlayingmovies : (state, action) => {
            state.nowPlayingmovies = action.payload;
        },
        addPopularmovies : (state, action) => {
            state.nowPopularmovies = action.payload;
        },
        addTopRatedmovies : (state, action) => {
            state.nowTopRatedmovies = action.payload;
        },
        addUpcommingmovies : (state, action) => {
            state.nowUpcommingmovies = action.payload;
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        }

    },
});
export const {addNowPlayingmovies, addTrailerVideo, addPopularmovies, addTopRatedmovies, addUpcommingmovies} = moviesSlice.actions; 

export default moviesSlice.reducer; 