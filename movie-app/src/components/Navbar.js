import React from 'react';
import {addMovieToList , handleMovieSearch} from '../actions';
class Navbar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }
    handleAddToMovies = (movie) => {
        this.props.dispatch(addMovieToList(movie.imdbID));
        this.setState({
            showSearchResults: false,
            searchText: ''
        })
    }
    handleSearch = () => {
        const {searchText}  = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
        console.log(this.props);
    }
    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }
    render () {
        const {result: movie , showSearchResults} = this.props.search;
        return (
            <div className="nav">
                <div className='search-container'>
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>

                    {showSearchResults && 
                        <div className='search-results'>
                            <div className='search-result'>
                                <img src = {movie.poster} alt = "search-pic"/>
                                <div className='movie-info'>
                                    <span>{movie.title}</span>
                                    <button onClick={() => this.handleAddToMovies(movie)}>
                                        Add To Movies
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Navbar;
