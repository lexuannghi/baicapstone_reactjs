import React from "react";
import styled, { keyframes } from "styled-components";
import { setMovieDetail } from "../store/action";
import { useDispatch } from "react-redux";

// const showModal = false;
function MoviesDetail(props) {
  const { movie, showModal } = props;
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setMovieDetail(null));
  };

  return (
    <MoviesDetailModal>
      <div
        className={`backdrop ${showModal ? "showBackdrop" : "hideBackdrop"}`}
        onClick={handleCloseModal}></div>
      <div
        className={`modal ${showModal ? "showModal" : "hideModal"}`}
        style={
          movie
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path || movie.poster_path
                })`,
                backgroundSize: "cover",
              }
            : {}
        }>
        <div className="container">
          <div className="movieInfo">
            <h1 className="movieTitle">{movie && (movie.title || movie.name)}</h1>
            <p className="statistical">
              <span className="rating">Rating: {movie && movie.vote_average}</span>
              <span className="verticalText">|</span>
              <span className="popularity">Popularity: {movie && movie.popularity}</span>
            </p>
            <p className="voteCount">Vote Count: {movie && movie.vote_count}</p>
            <p className="releaseDate">
              Release Date:{" "}
              {movie &&
                new Date(movie.release_date || movie.first_air_date).toLocaleDateString("vi-VN", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
            </p>
            <p className="overview"> {movie && movie.overview}</p>
          </div>
        </div>
      </div>
    </MoviesDetailModal>
  );
}
export default MoviesDetail;

const fadeIn = keyframes`
  0% { background: rgba(0,0,0,0); }
  100% { background: rgba(0,0,0,0.6); }
`;
const MoviesDetailModal = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    background-color: rgba(0, 0, 0, 0.7);
    animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;
  }
  .showBackdrop {
    display: block;
  }
  .hideBackdrop {
    display: none;
  }
  .modal {
    position: fixed;
    width: 100%;
    top: 15%;
    left: 0;
    z-index: 350;
    height: 65%;
    margin: 0 auto;
    color: white;
    box-shadow: 0 15px 40px rgba(var(--color-dark), 0.2);
    transition: all 0.3s ease;
    @media screen and (max-width: 1184px) {
      height: 70%;
    }
    @media screen and (max-width: 600px) {
      height: 80%;
    }
  }
  .container {
    position: relative;
    width: 70%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.9) 60%, transparent);

    @media screen and (max-width: 1184px) {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.9) 40%, rgba(0, 0, 0, 0.73), transparent);
      width: 88%;
    }

    @media screen and (max-width: 980px) {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.9) 50%, transparent);
      width: 100%;
    }
    @media screen and (max-width: 600px) {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.85) 60%, transparent);
    }
    .movieInfo {
      width: 65%;
      height: 100%;
      padding-left: 24px;
      color: var(--color-white);
      font-size: 20px;
      padding-top: 30px;

      @media screen and (max-width: 600px) {
        font-size: 16px;
        width: 80%;
      }
      .movieTitle {
        margin-top: 30px;
      }
      .statistical {
        margin-top: 20px;
        display: flex;
        .rating {
          color: red;
        }
        .popularity {
          color: yellow;
          margin-left: 12px;
        }
        .verticalText {
          margin-left: 11px;
        }
      }
      .releaseDate,
      .voteCount {
        margin-top: 12px;
      }
      .voteCount {
        color: var(--color-green);
      }
      .overview {
        margin-top: 20px;
        color: rgba(255, 255, 255, 0.6);
        line-height: 1.4;
        font-size: 18px;
        @media screen and (max-width: 600px) {
          font-size: 14px;
        }
      }
    }
  }
  .showModal {
    top: 15%;
    opacity: 1;
    left: 0;
    visibility: visible;
    transition: 0.45s ease-in-out;
  }
  .hideModal {
    top: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.45s ease-in-out;
  }
`;
