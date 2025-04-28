import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    movies && (
      <div className='bg-gradient-to-b from-black via-gray-900 to-black'>
        <div className='-mt-52'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingmovies} />
          <MovieList title={"Top Rated"} movies={movies.nowTopRatedmovies} />
          <MovieList title={"Popular"} movies={movies.nowPopularmovies} />
          <MovieList title={"Upcoming"} movies={movies.nowUpcommingmovies} />
          <MovieList title={"New Releases"} movies={movies.nowPlayingmovies} />
        </div>
      </div>

    )
  )
}

export default SecondaryContainer;
