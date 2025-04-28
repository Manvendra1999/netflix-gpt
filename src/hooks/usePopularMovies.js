import { useDispatch } from "react-redux";
import { addPopularmovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
      // Fetch the data from TMDB API and update store
  const dispatch = useDispatch();
  const getPopularmovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    const json = await data.json();
    // console.log("jasonfile::>>", json.results)
    dispatch(addPopularmovies(json.results));
  };

  useEffect(() => {
    getPopularmovies();
  }, []);
};
export default usePopularMovies;