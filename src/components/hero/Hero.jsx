import React from "react";
import "./Hero.css";
import {
  adultsOptions,
  checkinDateOptions,
  destinationOptions,
} from "../../assets/constants";
import Select from "../selects/Select";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="select-options">
          <Select label="Where are you going?" options={destinationOptions} />
          <Select label="Check-in date" options={checkinDateOptions} />
          <Select label="Number of adults" options={adultsOptions} />
        </div>
      </div>
    </div>
  );
};
