import { createSlice } from "@reduxjs/toolkit";

  const movieSlice =createSlice({
    name:"movies",
    initialState:{
        list:[],
        favourites:[],
        showFavourite:false
    },
    reducers:{
        addMovies(state,action){
            console.log(action);
            state.list=action.payload
        },
        addFavourite(state,action){
            state.favourites=[action.payload,...state.favourites]
        },
        deleteFavourite(state,action){
            state.favourites=state.favourites.filter((favourite)=>favourite.Title!==action.payload.Title)
        },
        showFavouriteTab(state,action){
            state.showFavourite=action.payload
        },
        addMovieToList(state,action){
            state.list=[action.payload,...state.list]
        }
    }
 })
export const {addMovies,addFavourite,deleteFavourite,showFavouriteTab,addMovieToList}=movieSlice.actions;
 export default movieSlice 