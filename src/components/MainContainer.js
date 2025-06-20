import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingmovies);

  // if (movies == null) return;   this is also known as early return
  if (!movies) return;              //this is also known as early return

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return ( 
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;
