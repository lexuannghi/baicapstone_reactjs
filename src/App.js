import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Search from "./components/Pages/Search";
import Footer from "./components/Footer/Footer";

function App() {
  const [isSearchPage, setIsSearchPage] = useState(false);

  useEffect(() => {
    const isSearchPath = window.location.pathname === "/search";
    setIsSearchPage(isSearchPath);
  }, []);

  return (
    <div className="App">
      <Navbar />
      {isSearchPage ? (
        <Search />
      ) : (
        <>
          <Home />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
