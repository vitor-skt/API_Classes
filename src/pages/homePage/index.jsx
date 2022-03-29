import React from 'react'
import { Container, MovieList, MovieListItem } from './styles';
import { useState, useEffect } from 'react';
import { APIKey } from '../../config/key';

function HomePage() {

    const [moviesArray, setMoviesArray] = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}`)
            .then(response => response.json())
            .then(data => setMoviesArray(data.results))
    }, []);

    return (
        <>
            <Container>
                <h1>Movies</h1>
                <h1>
                    <MovieList>

                        {moviesArray.map((movie => {
                            return (
                                <MovieListItem key={movie.id}>
                                    <a href=""><img src={`${image_path}${movie.poster_path}`} alt={movie.title} /></a>
                                    <span>{movie.title}</span>
                                </MovieListItem>
                            )
                        }))}
                    </MovieList>
                </h1>
            </Container>
        </>
    )
}

export default HomePage