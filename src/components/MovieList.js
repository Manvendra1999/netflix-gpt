import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    // console.log("object", movies)
    return (
        <div className="md:px-8 md:py-6">
            <h1 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll gap-3 scrollbar-hide">
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                ))}
            </div>
        </div>



    )
}

export default MovieList
