import { RiMovie2Line } from "react-icons/ri";
import { LiaHotjar } from "react-icons/lia";
import { GoStar } from "react-icons/go";
import { FaTheaterMasks } from "react-icons/fa";
import { GiNinjaHead, GiBandageRoll } from "react-icons/gi";
import { FaUserSecret } from "react-icons/fa6";
import { PiGhost } from "react-icons/pi";
import styled from "styled-components";
import MenuItem from "./MenuItem";

function Menus(props) {
  return (
    <MenuPane>
      <MenuItem name="Movie Origionals" Icon={RiMovie2Line} to="origionals" />
      <MenuItem name="Trending" Icon={LiaHotjar} to="trendingMovies" />
      <MenuItem name="Top Rated" Icon={GoStar} to="topRate" />
      <MenuItem name="Actions Movies" Icon={GiNinjaHead} to="actionMovies" />
      <MenuItem name="Comedy Movies" Icon={FaTheaterMasks} to="comedyMovies" />
      <MenuItem name="Horror Movies" Icon={PiGhost} to="horrorMovies" />
      <MenuItem name="Romance Movies" Icon={FaUserSecret} to="romanceMovies" />
      <MenuItem name="Documentaries" Icon={GiBandageRoll} to="documentaries" />
    </MenuPane>
  );
}

const MenuPane = styled.div`
  position: fixed;
  right: 0;
  top: 18%;
  width: 46px;
  padding: 4px 0;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  transform-origin: right center;
  transition: all 0.3s linear;
  overflow: hidden;

  &:hover {
    width: 180px;
    background: rgba(0, 0, 0, 0.91);
  }

  .subMenu {
    display: flex;
    align-items: center;
    width: max-content;
    padding: 4px 6px;
    cursor: pointer;

    .icon {
      font-size: 34px;
      margin-right: 10px; /* Đặt margin-right thay vì margin-left */
    }

    span {
      font-size: 16px;
      font-weight: 400;
      color: rgba(300, 300, 300, 0.7);

      &:hover {
        color: #fff;
      }
    }
  }
`;

export default Menus;
