import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import UseTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcommingMovies from '../hooks/useUpcommingMovies';

function Browes() {
  useNowPlayingMovies();
  usePopularMovies();
  UseTopRatedMovies();
  useUpcommingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}
export default Browes


