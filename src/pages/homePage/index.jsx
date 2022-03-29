import React from 'react'
import { Container, MovieList, MovieListItem } from './styles';

function HomePage() {

    const moviesArray = [
        {
            title: 'Spider-Man',
            image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg'
        },
        {
            title: 'Batman',
            image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg'
        },
        {
            title: 'Avengers',
            image_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg'
        },
    ];

    return (
        <>
            <Container>
                <h1>Movies</h1>
                <h1>
                    <MovieList>

                        {moviesArray.map((movie => {
                            return (
                                <MovieListItem key={movie.title}>
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