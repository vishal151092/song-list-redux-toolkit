import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name: 'songs',
    initialState: [],
    reducers: {
        addSong(state, action){
            state.push(action.payload)
        },
        removeSong(state, action){
            let index = state.indexOf(action.payload)
            state.splice(index,1)
        }
    }
})

export  const  songReducer  =  songSlice.reducer ;

export const { addSong , removeSong} = songSlice.actions;
