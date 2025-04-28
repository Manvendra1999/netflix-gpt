import { useDispatch } from "react-redux";
import { addNowPlayingmovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
      // Fetch the data from TMDB API and update store
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    // console.log("jasonfile::>>", json.results)
    dispatch(addNowPlayingmovies(json.results));
  };
  

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;