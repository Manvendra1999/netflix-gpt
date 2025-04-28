import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedmovies } from "../utils/moviesSlice";

const UseTopRatedMovies = () => {
      // Fetch the data from TMDB API and update store
  const dispatch = useDispatch();
  const getTopRatedmovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const json = await data.json();
    // console.log("jasonfile::>>", json.results)
    dispatch(addTopRatedmovies(json.results));
  };

  useEffect(() => {
    getTopRatedmovies();
  }, []);
};
export default UseTopRatedMovies;