import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LogoMovie from "../../assets/images/Logo.png";
import { MdSearch } from "react-icons/md";
import { FaUserSlash } from "react-icons/fa";

function Navbar() {
  const [keywords, setKeywords] = useState(localStorage.getItem("searchKeywords") || "");
  const [showModal, setShowModal] = useState(false);
  const [showOverlayUser, setShowOverlayUser] = useState(false);
  const [isSearchPage, setIsSearchPage] = useState(window.location.pathname === "/search");

  const handleChangeInput = (e) => {
    const newKeywords = e.target.value;
    setKeywords(newKeywords);

    if (isSearchPage) {
      const newUrl = `/search?keywords=${encodeURIComponent(newKeywords)}`;
      window.history.replaceState(null, "", newUrl);
    }
  };

  const handleUserIconClick = () => {
    setShowModal(!showModal);
    setShowOverlayUser(!showOverlayUser);
  };

  const handleOverlayClick = () => {
    setShowModal(false);
    setShowOverlayUser(false);
  };

  const navigateToSearch = () => {
    const trimmedKeywords = keywords.trim();
    const newUrl = trimmedKeywords
      ? `/search?keywords=${encodeURIComponent(trimmedKeywords)}`
      : "/";
    window.location.href = newUrl;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigateToSearch();
    }
  };

  useEffect(() => {
    localStorage.setItem("searchKeywords", keywords);
  }, [keywords]);

  const [scrollNav, setScrollNav] = useState(false);

  const handleScrollNav = () => {
    const scrollNav = window.scrollNav || document.documentElement.scrollTop;
    setScrollNav(scrollNav);
  };

  useEffect(() => {
    handleScrollNav();
    window.addEventListener("scroll", handleScrollNav);

    return () => {
      window.removeEventListener("scroll", handleScrollNav);
    };
  }, []);

  useEffect(() => {
    setIsSearchPage(window.location.pathname === "/search");

    const handlePathChange = () => {
      setIsSearchPage(window.location.pathname === "/search");
    };

    window.addEventListener("popstate", handlePathChange);

    return () => {
      window.removeEventListener("popstate", handlePathChange);
    };
  }, []);

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <Navigation
      style={{
        backgroundColor: scrollNav < 250 ? "transparent" : "var(--color-background)",
        boxShadow: scrollNav < 250 ? "none" : "0px 4px 6px rgba(0, 0, 0, 0.55)",
      }}>
      <div className="navContainer">
        <div className="logo" onClick={handleLogoClick}>
          <img src={LogoMovie} alt="" title="Home Page" />
        </div>
        <div className="navSearch">
          <MdSearch className="iconSearch" />
          <input
            type="text"
            placeholder=" Input title, genres, people!"
            title="Search"
            value={keywords}
            onChange={handleChangeInput}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="navUser" onClick={handleUserIconClick}>
          <FaUserSlash className="iconUser" title="Login" />
        </div>
        {showOverlayUser && <Overlay onClick={handleOverlayClick} />}
      </div>
    </Navigation>
  );
}

export default Navbar;

const Navigation = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  transition-timing-function: ease-in;
  transition: all 0.1s;

  @media only screen and (max-width: 600px) {
    height: 100px;
  }

  z-index: 100;

  .navContainer {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    height: 100%;

    .logo {
      max-width: 270px;
      cursor: pointer;

      img {
        width: 100%;
      }

      @media only screen and (max-width: 600px) {
        max-width: 210px;
      }
    }

    .navSearch {
      color: var(--color-white);
      padding-right: 20px;
      display: flex;
      justify-content: flex-end;

      &:hover .iconSearch {
        color: var(--color-white);
      }

      .iconSearch {
        width: 28px;
        height: 28px;
        cursor: pointer;
        color: #aaaaaa;
        transform: translateX(30px) translateY(6px);
      }

      input {
        font-size: 14px;
        color: var(--color-white);
        outline: none;
        width: 0;
        padding: 10px;
        border: 1px solid #ffffff;
        cursor: pointer;
        opacity: 0;
        background: var(--color-background);
        transition: width 0.5s ease;

        &:focus {
          padding-left: 26px;
          width: 300px;
          cursor: text;
          opacity: 1;
          border-radius: 4px;
        }
      }
    }

    .navUser {
      &:hover .iconUser {
        color: var(--color-white);
      }

      .iconUser {
        width: 20px;
        height: 20px;
        cursor: pointer;
        color: #aaaaaa;
        transform: translateY(2px);
      }
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;
