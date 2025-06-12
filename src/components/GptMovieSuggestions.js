import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"
import Shimmer from './Shimmer';

const GptMovieSuggestions = ({ isLoading }) => {
  const { movieNames, movieResults } = useSelector(store => store.gpt);

  if (isLoading) return <Shimmer />;
  if (!movieNames) return null;

  return (
    <div className='p-4 mt-2 md:m-4 bg-black text-white opacity-90 '>
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  )
}

export default GptMovieSuggestions;
