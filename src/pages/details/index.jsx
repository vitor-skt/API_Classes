import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { APIKey } from '../../config/key'

function Details() {

    const id = useParams()

    const [movie, setMovie] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}`)
            .then(response => response.json())
            .then(data => {

                const movie = {
                    id,
                    title: data.title,
                    overview: data.overview,
                    image: `${image_path}${data.poster_path}`,
                    releaseDate: data.release_date,
                }
                setMovie(movie)

            })
        console.log(movie.data)
    }, [id])

    return (
        <>
            <h1>Pagina Details</h1>
        </>
    )
}

export default Details