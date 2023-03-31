import { ADD_MOVIES } from "../actions";
import { ADD_FAVOURITE } from "../actions";
import { REMOVE_FROM_FAVOURITES } from "../actions";
import { SET_SHOW_FAVOURITES } from "../actions";
import { combineReducers } from "redux";

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false,
}
export function movies (state = initialMoviesState, action) {
    switch (action.type) {
        case ADD_MOVIES: 
            return {
                ...state , 
                list: action.movies
            }
        case ADD_FAVOURITE: 
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES: 
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );

            return {
                ...state,
                favourites : filteredArray
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }
        default: 
            return state;
    }



    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;
}


const initialSearchState = {
    result: {}
}
export function search(state = initialSearchState , action){
    return state;
}

const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
}

// export default function rootReducer (state = initialRootState , action) {
//     return {
//         movies: movies(state.movies , action),
//         search: search(state.search , action) 

//     }
// }

export default combineReducers({
    movies,
    search
});