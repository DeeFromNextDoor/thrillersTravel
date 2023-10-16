import React from "react";
import "./SideBar.css";
import { profileDetails, routes } from "../../assets/constants";

const SideBar = () => {
  const { profileImage, profileName, editIcon } = profileDetails;

  return (
    <div className="side-bar">
      <h2 className="title">VictorBooking</h2>
      <div className="user-profile">
        <div className="profile-image">
          <img src={profileImage} alt={profileName} />
          <i className={editIcon}></i>
        </div>
        <p className="profile-name">{profileName}</p>
      </div>
      <div className="routes">
        {routes.map((route) => {
          <button className="" />;
        })}
      </div>
    </div>
  );
};

export default SideBar;
