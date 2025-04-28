import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log("object", movies)
    return (
        <div className="px-8 py-6">
            <h1 className="text-2xl font-bold mb-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll gap-6 scrollbar-hide">
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                ))}
            </div>
        </div>



    )
}

export default MovieList
