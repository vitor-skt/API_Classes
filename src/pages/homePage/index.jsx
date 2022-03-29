import React from 'react'
import { Container, MovieList, MovieListItem } from './styles';
import { useState } from 'react';

function HomePage() {

    const [moviesArray, setMoviesArray] = useState([]);

    return (
        <>
            <Container>
                <h1>Movies</h1>
                <h1>
                    <MovieList>

                        {moviesArray.map((movie => {
                            return (
                                <MovieListItem key={movie.id}>
                                    <a href=""><img src={movie.image_url} alt={movie.title} /></a>
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