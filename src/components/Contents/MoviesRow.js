import styled from "styled-components";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import React, { useEffect, useRef, useState } from "react";
import { SmoothHorizontalScrolling } from "../../Utility";
import { useViewport } from "../hooks/useViewport";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../store/action";

function MoviesRow(props) {
  const { movies, title, isMovie, idSection } = props;
  const sliderRef = useRef();
  const movieRefs = useRef([]);
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const windowWidth = useViewport()[0];
  const dispatch = useDispatch();

  const handleSetMovie = (movie) => {
    dispatch(setMovieDetail(movie));
  };

  const handleScrollRight = () => {
    const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (movieRefs.current[0] && sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        10,
        movieRefs.current[0].clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };

  const handleScrollLeft = () => {
    if (movieRefs.current[0] && sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        10,
        -movieRefs.current[0].clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };
  const [touchStart, setTouchStart] = useState(0);
  const onTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const onTouchMove = (e) => {
    const touchMove = e.touches[0].clientX;
    const delta = touchStart - touchMove;

    if (delta > 30) {
      handleScrollRight();
    } else if (delta < -30) {
      handleScrollLeft();
    }
  };

  const onTouchEnd = () => {
    setTouchStart(0);
  };
  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handleScrollRight();
      if (dragMove > dragDown) handleScrollLeft();
    }
  }, [dragDown, dragMove, isDrag]);

  const onDragStart = (e) => {
    setIsDrag(true);
    setDragDown(e.screenX);
  };

  const onDragEnd = (e) => {
    setIsDrag(false);
  };

  const onDragEnter = (e) => {
    setDragMove(e.screenX);
  };

  return (
    <MoviesRowContainer draggable="false" id={idSection}>
      <h1 className="heading">{title}</h1>
      <MoviesSlider
        ref={sliderRef}
        draggable="true"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          gridTemplateColumns: `repeat(${movies.length},
          ${
            windowWidth > 1200
              ? "360px"
              : windowWidth > 992
              ? "300px"
              : windowWidth > 768
              ? "280px"
              : windowWidth > 600
              ? "250px"
              : windowWidth > 425
              ? "200px"
              : "185px"
          })`,
        }}>
        {movies &&
          Array.isArray(movies) &&
          movies.length > 0 &&
          movies.map((movie, index) => {
            if (movie.poster_path && movie.backdrop_path !== null) {
              let imageUrl = isMovie
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  key={index}
                  className="movieItem"
                  ref={(el) => (movieRefs.current[index] = el)}
                  draggable="false"
                  onClick={() => handleSetMovie(movie)}>
                  <img src={imageUrl} alt="" draggable="false" />
                  <div className="movieName">{movie.title || movie.name}</div>
                </div>
              );
            }
          })}
      </MoviesSlider>
      <div className={`btnLeft ${isMovie ? "isMovie" : ""}`} onClick={handleScrollLeft}>
        <LuChevronLeft />
      </div>
      <div className={`btnRight ${isMovie ? "isMovie" : ""}`} onClick={handleScrollRight}>
        <LuChevronRight />
      </div>
    </MoviesRowContainer>
  );
}

export default MoviesRow;

const MoviesRowContainer = styled.div`
  background-color: var(--color-background);
  color: var(--color-white);
  margin-top: -4px;
  padding: 20px 20px 0;
  position: relative;
  width: 100%;
  height: 100%;
  .heading {
    font-size: 18px;
    user-select: none;
  }
  .btnLeft {
    position: absolute;
    top: 50%;
    left: 45px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.6);
    width: 45px;
    height: 55px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    transform: translateY(-30%);

    @media screen and (max-width: 600px) {
      width: 45px !important;
      height: 62px !important;
    }
    @media screen and (max-width: 425px) {
      width: 40px !important;
      height: 60px !important;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.89);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }
    svg {
      opacity: 0.7;
      font-size: 46px;
      transition: all 0.2s linear;
    }
    &.isMovie {
      height: 80px;
      width: max-content;
    }
  }

  .btnRight {
    position: absolute;
    top: 50%;
    right: 45px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.6);
    width: 45px;
    height: 55px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    transform: translateY(-30%);
    @media screen and (max-width: 600px) {
      width: 45px !important;
      height: 62px !important;
    }
    @media screen and (max-width: 425px) {
      width: 40px !important;
      height: 60px !important;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.89);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }
    svg {
      opacity: 0.7;
      margin-left: 3px;
      font-size: 46px;
      transition: all 0.2s linear;
    }
    &.isMovie {
      height: 80px;
      width: max-content;
    }
  }
`;

const MoviesSlider = styled.div`
  display: grid;
  gap: 10px;
  transition: all 0.4s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: scroll;
  overflow: hidden;
  padding-top: 28px;
  padding-bottom: 28px;
  scroll-behavior: smooth;

  &:hover .movieItem {
    opacity: 0.4;
  }
  .movieItem {
    transform: scale(1);
    max-width: 400px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    transition: all 0.2s linear;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;
    position: relative;
    transform: scale(1) translateZ(0);
    @media screen and (max-width: 425px) {
      max-width: 1000px !important;
      max-height: 5000px !important;
    }

    &:hover {
      opacity: 1;
      transform: scale(1.11);
      z-index: 10;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .movieName {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 4px;
    text-align: center;
    font-size: 18px;
    background-color: rgba(0, 0, 0, 0.67);
  }
`;
