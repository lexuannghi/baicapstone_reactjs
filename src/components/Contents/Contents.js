import React, { useEffect, useState } from "react";
import MoviesRow from "./MoviesRow";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import * as ACTIONS from "../store/action";

const ScrollToTop = () => {
  scroll.scrollToTop();
};

function Contents(props) {
  const dispatch = useDispatch();
  const [showGoToTop, setShowGoToTop] = useState(false);

  const {
    MovieOriginals,
    TrendingMovies,
    TopRatedMovies,
    ActionMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    Documentaries,
  } = useSelector((state) => state.infoMovies);

  useEffect(() => {
    dispatch(ACTIONS.getMovieOriginals());
    dispatch(ACTIONS.getTrendingMovies());
    dispatch(ACTIONS.getTopRatedMovies());
    dispatch(ACTIONS.getActionMovies());
    dispatch(ACTIONS.getComedyMovies());
    dispatch(ACTIONS.getHorrorMovies());
    dispatch(ACTIONS.getRomanceMovies());
    dispatch(ACTIONS.getDocumentaries());
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setShowGoToTop(scrollTop > 900);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Kiểm tra cả null và undefined
  if (
    MovieOriginals == null ||
    TrendingMovies == null ||
    TopRatedMovies == null ||
    ActionMovies == null ||
    ComedyMovies == null ||
    HorrorMovies == null ||
    RomanceMovies == null ||
    Documentaries == null
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <MoviesRow
        movies={MovieOriginals}
        title="Movie Originals"
        isMovie={true}
        idSection="origionals"
      />
      <MoviesRow
        movies={TrendingMovies}
        title="Trending Movies"
        isMovie={true}
        idSection="trendingMovies"
      />
      <MoviesRow movies={TopRatedMovies} title="Top Rated Movies" idSection="topRate" />
      <MoviesRow movies={ActionMovies} title="Action Movies" idSection="actionMovies" />
      <MoviesRow movies={ComedyMovies} title="Comedy Movies" idSection="comedyMovies" />
      <MoviesRow movies={HorrorMovies} title="Horror Movies" idSection="horrorMovies" />
      <MoviesRow movies={RomanceMovies} title="Romance Movies" idSection="romanceMovies" />
      <MoviesRow movies={Documentaries} title="Documentaries" idSection="documentaries" />
      {showGoToTop && (
        <GoToTop onClick={() => ScrollToTop()}>
          <FaRegArrowAltCircleUp />
        </GoToTop>
      )}
    </div>
  );
}

export default Contents;

const GoToTop = styled.div`
  position: fixed;
  z-index: 10;
  right: 70px;
  bottom: 40px;
  font-size: 48px;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s linear;
  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
  @media screen and (max-width: 600px) {
    right: 40px;
  }
`;
