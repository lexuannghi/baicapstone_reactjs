import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useViewport } from "../hooks/useViewport";
import { useDispatch, useSelector } from "react-redux";
import { getSearchMovies, setMovieDetail } from "../store/action";

function SearchMovies(props) {
  const [windowWidth] = useViewport();
  const dispatch = useDispatch();
  const { SearchMovies } = useSelector((state) => state.infoMovies);
  const [keywords, setKeywords] = useState(getQueryParameter("keywords") || "");
  const [searching, setSearching] = useState(false); // Thêm state searching

  const handleChangeInput = (e) => {
    const newKeywords = e.target.value;
    setKeywords(newKeywords);

    const newUrl = `${window.location.pathname}?keywords=${encodeURIComponent(newKeywords)}`;
    window.history.replaceState(null, "", newUrl);
  };

  useEffect(() => {
    if (keywords) {
      setSearching(true);
      dispatch(getSearchMovies(keywords));
    } else {
      setSearching(false);
    }
  }, [keywords, dispatch]);

  return (
    <SearchPane>
      {searching ? (
        <div className="searchInfo">
          <p>Search results "{keywords}"</p>
        </div>
      ) : null}
      {SearchMovies && SearchMovies.length > 0 ? (
        <div
          className="searchContent"
          style={{
            gridTemplateColumns: `repeat(${
              windowWidth > 1200
                ? 5
                : windowWidth > 992
                ? 4
                : windowWidth > 768
                ? 3
                : windowWidth > 600
                ? 2
                : 1
            }, auto)`,
          }}>
          {SearchMovies.map((movie, index) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  className="movieItem"
                  key={index}
                  onClick={() => dispatch(setMovieDetail(movie))}>
                  <img src={imageUrl} alt="" />
                  <span>{movie.title || movie.name}</span>
                </div>
              );
            }
            return null;
          })}
        </div>
      ) : (
        <NotFound>
          <h1>Your search for "{keywords}" did not have any matches.</h1>
        </NotFound>
      )}
    </SearchPane>
  );
}

export default SearchMovies;

const SearchPane = styled.div`
  width: 100%;
  min-height: 88.8vh;
  padding-top: 90px;
  background-color: var(--color-background);
  transition: all 0.3s linear;
  .searchInfo {
    width: 100%;
    padding: 0 40px;
    margin: 0 auto;
    margin-top: 10px;
    color: var(--color-white);
    font-weight: 500;
    font-size: 22px;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
  .searchContent {
    padding: 10px 40px 50px 40px;
    display: grid;
    gap: 10px;
    overflow: hidden;

    &:hover .movieItem {
      opacity: 0.7;
    }

    .movieItem {
      position: relative;
      max-width: 400px;
      width: 100%;
      height: 200px;
      border-radius: 12px;
      margin: 20px 0;
      transform: scale(1);
      transition: all 0.3s linear;

      &:hover {
        transform: scale(1.2);
        z-index: 10;
        opacity: 1;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }

      span {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        padding: 4px;
        background: rgba(0, 0, 0, 0.5);
        color: var(--color-white);
        font-weight: 600;
        border-radius: 0 0 5px 5px;
      }
    }
  }
`;

const NotFound = styled.div`
  color: var(--color-white);
  width: 100%;
  text-align: center;
  padding-top: 20px;
`;

// Hàm lấy tham số từ URL
function getQueryParameter(name) {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(name);
}
