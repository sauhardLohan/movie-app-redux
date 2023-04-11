import React, { useEffect } from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import {addMovies,showFavouriteTab }  from '../store/slices';
import { useDispatch, useSelector } from "react-redux";
const App = ()=> {
  const storeData=useSelector((state)=>{return state});
  const dispatch=useDispatch();
  console.log(storeData);

  useEffect(()=>{
    dispatch(addMovies(data));

  },[dispatch])

   const onChangeTab=(val)=>
   {

  dispatch(showFavouriteTab(val));  
   }
   const isMovieFavourite=(movie)=>{

    const index=storeData.movies.favourites.indexOf(movie);  
    if(index!==-1)
    {
        return true;
    }
    return false;
  }


    const {movies,search}=storeData;
    const {list,favourites,showFavourite}=movies;
    const displayMovies=showFavourite?favourites:list;
      return (
      <div className="App">
        <Navbar dispatch={dispatch } search={search}/>
        <div className="main">
          <div className="tabs">
            <div  onClick={()=>{onChangeTab(false)}} className={`tab ${showFavourite?'':'active-tabs'}`}>Movies</div>
            <div  onClick={()=>{onChangeTab(true)}} className={`tab ${showFavourite?'active-tabs':''}`} >Favourites</div>
          </div>
          <div className="list">
           { displayMovies.map((movie,index)=>(<MovieCard  movie={movie} dispatch={dispatch} 
           isMovieFavourite={isMovieFavourite(movie)}  
           key={`movies-${index}`}/>)) }
          </div>
          {displayMovies.length===0?<div className="no-movies">No movies to display!</div>:null}
        </div>
      </div>
    );
  
  
}

export default App;
