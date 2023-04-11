import { addSearchResult } from "../store/slices";

export function handleMovieSearch (movie)
{
    const url=`https://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
    return function(dispatch){
        fetch(url)
        .then(response=>response.json())
        .then(movie =>{
            // console.log(movie);
            dispatch(addSearchResult(movie));
        });
    }
    

}

