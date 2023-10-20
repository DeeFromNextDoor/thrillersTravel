import React, { useState } from "react";
import Feed from "../feed/Feed";
import SideBar from "../sidebar/SideBar";
import "./Home.css";
import { fetchHotelMetaData } from "../../api/hotelApi";

const Home = ({ hotelData }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="home">
      <div className={`side-bar ${showSidebar ? "active" : ""}`}>
        <SideBar toggleSidebar={toggleSidebar} />
      </div>
      <div className="home-feed">
        <Feed toggleSidebar={toggleSidebar} hotelData={hotelData} />
      </div>
    </div>
  );
};

export default Home;
