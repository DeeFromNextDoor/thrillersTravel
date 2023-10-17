import React, { useState, useEffect } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="search-bar">
      <form className="search-form">
        <button type="submit" className="search-button">
          <i className="bi bi-search"></i>
        </button>
        <input className="search-input" placeholder="search anything... " />
      </form>
      <div className="date-notification">
        <div className="date">{formatDate(currentDateTime)}</div>
        <div className="notification">
          <span>3</span>
          <i className="bi bi-bell"></i>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
