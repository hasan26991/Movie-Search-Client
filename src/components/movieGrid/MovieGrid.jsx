import React from 'react'
import './movieGrid.css'
import { useNavigate } from 'react-router-dom'
import { imageHost } from '../../config'

const MovieGrid = ({ movie, index }) => {
    const navigate = useNavigate()
    return (
        <div key={index} className='gridContainer' onClick={() => navigate('/movie', { state: { id: movie?.id } })}>
            <div className='imgCaontainer'>
                <img className='gridImage' src={`${imageHost}${movie?.backdrop_path}`} alt='' />
            </div>
            <div className='infooContainer'>
                <div className='titleContainer'>
                    <label className='title'>{movie?.title}</label>
                </div>
                <div className='release-popularityContainer'>
                    <label>{movie?.release_date}</label>
                    <label>{movie?.popularity}</label>
                </div>
                <div className=''>
                    <label className='overview'>{movie?.overview}</label>
                </div>
            </div>

        </div>
    )
}

export default MovieGrid