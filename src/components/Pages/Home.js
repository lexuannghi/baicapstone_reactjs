import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Contents from "../Contents/Contents";
import Menu from "../Menu/Menu"; // Import Menu
import MenuItem from "../Menu/MenuItem"; // Import MenuItem
import MoviesDetail from "../MoviesDetail/MoviesDetail";
import { useSelector } from "react-redux";

function Home(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);

  useEffect(() => {
    setIsShowMovieDetail(MovieDetail ? true : false);
  }, [MovieDetail]);

  return (
    <div>
      <Banner />
      <Contents />
      <Menu>
        <MenuItem name="YourMenuItemName1" Icon="YourIconComponent1" to="YourTargetLocation1" />
        <MenuItem name="YourMenuItemName2" Icon="YourIconComponent2" to="YourTargetLocation2" />
      </Menu>
      <MoviesDetail movie={MovieDetail} showModal={isShowMovieDetail} />
    </div>
  );
}

export default Home;
