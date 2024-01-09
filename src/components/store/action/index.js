import { type } from "@testing-library/user-event/dist/type";
import * as Types from "../types";

import axios from "axios";

const API_KEY = "174d27949ef5b9045b7027f6ec40c03c";
const BASE_URL = "https://api.themoviedb.org/3";

export const getMovieOriginals = () => async (dispatch) => {
  try {
    const result = await axios.get(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`);
    dispatch({ type: Types.GET_MOVIE_ORIGINALS, payload: result.data.results });
  } catch (error) {
    console.log("Get Movie Api error:", error);
  }
};

export const getTrendingMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`
    );
    dispatch({ type: Types.GET_TRENDING_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Trending Api error:", error);
  }
};

export const getTopRatedMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`);
    dispatch({ type: Types.GET_TOPRATED_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Top Rated Api error:", error);
  }
};
export const getActionMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`);
    dispatch({ type: Types.GET_ACTION_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Action Movies Api error:", error);
  }
};
export const getComedyMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`);
    dispatch({ type: Types.GET_COMEDY_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Comedy Movies Api error:", error);
  }
};

export const getHorrorMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`);
    dispatch({ type: Types.GET_HORROR_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Horror Movies Api error:", error);
  }
};

export const getRomanceMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
    );
    dispatch({ type: Types.GET_ROMANCE_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Romance Movies Api error:", error);
  }
};

export const getDocumentaries = () => async (dispatch) => {
  try {
    const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=18`);
    dispatch({ type: Types.GET_DOCUMENTARIES_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Documentaries Movies Api error:", error);
  }
};

export const setMovieDetail = (movie) => (dispatch) => {
  dispatch({ type: Types.SET_MOVIE_DETAIL, payload: movie });
};

export const getSearchMovies = (keywords) => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&page=1&query=${keywords}`
    );
    dispatch({ type: Types.GET_SEARCH_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Search Movies error:", error);
  }
};
