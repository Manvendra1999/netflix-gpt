import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import UseTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcommingMovies from '../hooks/useUpcommingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

function Browes() {
  const showGptSeatch = useSelector((store) => store.gpt.showGptSeatch);

  useNowPlayingMovies();
  usePopularMovies();
  UseTopRatedMovies();
  useUpcommingMovies();
  

  return (
    <div>
      <Header />
      {showGptSeatch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  )
}
export default Browes


