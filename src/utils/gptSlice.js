import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState: {
        showGptSeatch: false,
    },
    reducers: {
        toggleGptSearchView : (state) =>{
            state.showGptSeatch = !state.showGptSeatch;

        }
    }
})

export const {toggleGptSearchView} = gptSlice.actions
export default gptSlice.reducer