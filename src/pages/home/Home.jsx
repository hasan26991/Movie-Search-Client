import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import './home.css'
import MovieGrid from '../../components/movieGrid/MovieGrid';
import { API_KEY } from '../../config'



const Home = () => {
    const [searchInput, setSearchInput] = useState('')
    const [movieList, setMovieList] = useState([]);



    useEffect(() => {
    }, []);

    const handleSearch = async (e) => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchInput}`);
            setMovieList(res?.data?.results);
        } catch (error) {
            console.log(error);
        }
    }
    return (

        <div>
            <div className='searchContainer'>
                <input className='searchInput' type='text' placeholder='Search...' onChange={(e) => setSearchInput(e.target.value)}></input>
                <button className='searchButton' onClick={handleSearch}>Search Movies</button>
            </div>
            <div className='noMovieContainer'>
                {movieList.length === 0 && <span className='notMovieSpan'>No movies were found !</span>}
            </div>
            <div className='MovieListontainer'>
                {movieList.map((movie, index) => (
                    <MovieGrid index={index} movie={movie} />
                ))}
            </div>
        </div>

    )
}

export default Home