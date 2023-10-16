import React from "react";
import Feed from "../feed/Feed";
import SideBar from "../sidebar/SideBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="home-feed">
        <Feed />
      </div>
    </div>
  );
};

export default Home;
