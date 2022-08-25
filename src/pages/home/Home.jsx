import React from 'react'
import { useState } from "react";
import axios from 'axios';
import './home.css'
import MovieGrid from '../../components/movieGrid/MovieGrid';
import { API_KEY } from '../../config'
import { useDispatch, useSelector } from "react-redux";
import { getMovieFailure, getMovieStart, getMovieSuccess } from '../../redux/movieRedux';



const Home = () => {
    const [searchInput, setSearchInput] = useState('')
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movie.movies);

    const handleSearch = async (e) => {
        e.preventDefault()
        dispatch(getMovieStart);
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchInput}`);
            dispatch(getMovieSuccess(res?.data?.results));
        } catch (error) {
            console.log(error);
            dispatch(getMovieFailure);
        }
    }
    return (

        <div>
            <div className='searchContainer'>
                <input className='searchInput' type='text' placeholder='Search...' onChange={(e) => setSearchInput(e.target.value)}></input>
                <button className='searchButton' onClick={handleSearch}>Search Movies</button>
            </div>
            <div className='noMovieContainer'>
                {movies.length === 0 && <span className='notMovieSpan'>No movies were found !</span>}
            </div>
            <div className='MovieListontainer'>
                {movies.map((movie, index) => (
                    <MovieGrid key={index} movie={movie} />
                ))}
            </div>
        </div>

    )
}

export default Home