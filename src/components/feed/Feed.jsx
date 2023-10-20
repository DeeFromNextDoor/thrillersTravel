import React, { useEffect, useState } from "react";
import "./Feed.css";
import SearchBar from "../searchbar/SearchBar";
import { Hero } from "../hero/Hero";
import TrendingDestination from "../hotelFeeds/TrendingDestination";
import BestOffer from "../hotelFeeds/BestOffer";
import { ExploreFrance } from "../hotelFeeds/ExploreFrance";

// importing my custom data since i cant find the right api for this project
import {
  bestOffers,
  exploreParis,
  trendingDestinations,
} from "../../assets/constants";

const Feed = ({ toggleSidebar, hotelData }) => {
  if (typeof hotelData !== "object" || hotelData === null) {
    return (
      <div className="feed">
        <SearchBar toggleSidebar={toggleSidebar} />
        <Hero />
        <div className="hotel-feeds">
          <p>No hotel data available.</p>
        </div>
      </div>
    );
  }

  const allCountryData = Object.values(hotelData);

  console.log(allCountryData);

  return (
    <div className="feed">
      <SearchBar toggleSidebar={toggleSidebar} />
      <Hero />
      <div className="hotel-feeds">
        <TrendingDestination
          className="trending-destinations"
          products={trendingDestinations}
          countryData={allCountryData}
        />
        <BestOffer products={bestOffers} countryData={allCountryData} />
        <ExploreFrance products={exploreParis} countryData={allCountryData} />
      </div>
    </div>
  );
};

export default Feed;
