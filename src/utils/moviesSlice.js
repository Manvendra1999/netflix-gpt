import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice ({
    name: "movie",
    initialState: {
        nowPlayingmovies: null,
        trailerVideo: null,
    },
  
    reducers: {
        addNowPlayingmovies : (state, action) => {
            state.nowPlayingmovies = action.payload;
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        }

    },
});
export const {addNowPlayingmovies, addTrailerVideo} = moviesSlice.actions; 

export default moviesSlice.reducer; 