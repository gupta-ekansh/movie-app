import { data } from "../data";

export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITES= 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FACOURITES';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';

export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies: data
    }
}

export function addFavourite (movie) {
    return {
        type: ADD_FAVOURITE,
        movie
    }
}

export function removeFromFavourites(movie) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}

export function setShowFavourites(val){
    return {
        type: SET_SHOW_FAVOURITES,
        val
    }
}

export function addMovieToList(movie) {
    return {
        type: ADD_MOVIE_TO_LIST,
        movie
    };
}

export function handleAddMovieToList(id) {
    const url = `https://www.omdbapi.com/?apikey=b83d9993&t=${id}`;
    return function (dispatch) {
        fetch(url)
        .then((response) => response.json())
        .then((movie) => {
            dispatch(addMovieToList(movie));
        })
    }
}

export function handleMovieSearch (movie) {
    const url = `https://www.omdbapi.com/?apikey=b83d9993&t=${movie}`;


    return function (dispatch){
        fetch(url)
        .then(response => response.json())
        .then(movie =>{
            console.log(movie);
        })
        dispatch(addMovieSearchResult(movie));
    }

}

export function addMovieSearchResult(movie) {
    return {
        type: ADD_SEARCH_RESULT,
        movie,
    };
}