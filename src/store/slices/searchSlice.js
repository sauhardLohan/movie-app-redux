import { createSlice } from "@reduxjs/toolkit";

  const searchSlice =createSlice({
    name:"movies",
    initialState:{
        results:{},
        showSearchResults:false,
    },
    reducers:{
        addSearchResult(state,action){
            state.results=action.payload;
            state.showSearchResults=true;
        },
        addMovieToList(state,action){
            state.showSearchResults=false
        }
    }
 })


export const {addSearchResult,addMovieToList}=searchSlice.actions;

 export default searchSlice 