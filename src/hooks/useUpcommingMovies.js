import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcommingmovies } from "../utils/moviesSlice";

const useUpcommingMovies = () => {
      // Fetch the data from TMDB API and update store
  const dispatch = useDispatch();
  const getUpcommingmovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
    const json = await data.json();
    // console.log("jasonfile::>>", json.results)
    dispatch(addUpcommingmovies(json.results));
  };

  useEffect(() => {
    getUpcommingmovies();
  }, []);
};
export default useUpcommingMovies;