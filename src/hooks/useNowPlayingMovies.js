import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingmovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingmovies = useSelector((store) => store.movies.nowPlayingmovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingmovies(json.results));
  };

  useEffect(() => {
    if (!nowPlayingmovies) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
