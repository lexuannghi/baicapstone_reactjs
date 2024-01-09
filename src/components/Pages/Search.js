import React from "react";
import SearchMovies from "../SearchMovies/SearchMovies";
import MoviesDetail from "../MoviesDetail/MoviesDetail";
import { useSelector } from "react-redux";
function Search(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  return (
    <div>
      <SearchMovies />
      <MoviesDetail showModal={MovieDetail ? true : false} movie={MovieDetail} />
    </div>
  );
}

export default Search;
