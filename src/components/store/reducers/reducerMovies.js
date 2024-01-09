import * as Types from "../types";

const reducerMoviesInitialState = {
  MovieOriginals: null,
  TrendingMovies: null,
  TopRatedMovies: null,
  ActionMovies: null,
  ComedyMovies: null,
  HorrorMovies: null,
  RomanceMovies: null,
  Documentaries: null,
  MovieDetail: null,
  SearchMovies: null,
};

const reducerMovies = (state = reducerMoviesInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_MOVIE_ORIGINALS:
      return { ...state, MovieOriginals: payload };
    case Types.GET_TRENDING_MOVIES:
      return { ...state, TrendingMovies: payload };
    case Types.GET_TOPRATED_MOVIES:
      return { ...state, TopRatedMovies: payload };
    case Types.GET_ACTION_MOVIES:
      return { ...state, ActionMovies: payload };
    case Types.GET_COMEDY_MOVIES:
      return { ...state, ComedyMovies: payload };
    case Types.GET_HORROR_MOVIES:
      return { ...state, HorrorMovies: payload };
    case Types.GET_ROMANCE_MOVIES:
      return { ...state, RomanceMovies: payload };
    case Types.GET_DOCUMENTARIES_MOVIES:
      return { ...state, Documentaries: payload };
    case Types.SET_MOVIE_DETAIL:
      return { ...state, MovieDetail: payload };
    case Types.GET_SEARCH_MOVIES:
      return { ...state, SearchMovies: payload };

    default:
      return state;
  }
};
export default reducerMovies;
