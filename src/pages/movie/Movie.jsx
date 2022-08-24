import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './movie.css'
import { imageHost } from '../../config'
import { API_KEY } from '../../config'


const Movie = () => {
    const location = useLocation()
    const id = location?.state?.id
    const [movie, setMovie] = useState();

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
                setMovie(res?.data);
            } catch (error) {
                console.log(error)
            }
        }
        getMovie();
    }, [id])


    return (
        <div>
            <div className='movieContiner'>
                <div className='imgContainer'>
                    <img className='movieImg' src={`${imageHost}${movie?.backdrop_path}`} alt=''></img>
                </div>
                <div className='infoContainer'>
                    <div className='genresRow'>
                        <span className='movieKeyName'>Genres</span>
                        <div className='movieData'>
                            {movie?.genres?.map((data, i) => {
                                return (<span key={i}>{data?.name}</span>)
                            })}
                        </div>
                    </div>
                    <hr class="lineBreak"></hr>
                    <div className='genresRow'>
                        <span className='movieKeyName'>Rating</span>
                        <div className='movieData'>
                            <span>{movie?.vote_average}</span>
                        </div>
                    </div>
                    <hr class="lineBreak"></hr>
                    <div className='genresRow'>
                        <span className='movieKeyName'>Overview</span>
                        <div className='movieData'>
                            <span className='desc'>{movie?.overview}</span>
                        </div>
                    </div>
                    <hr class="lineBreak"></hr>
                    <div className='genresRow'>
                        <span className='movieKeyName'>Release Date</span>
                        <div className='movieData'>
                            <span>{movie?.release_date}</span>
                        </div>
                    </div>
                    <hr class="lineBreak"></hr>
                    <div className='genresRow'>
                        <span className='movieKeyName'>Creators</span>
                        <div className='movieData'>
                            {movie?.production_companies?.map((data, i) => {
                                return (<span key={i}>{data?.name}</span>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie