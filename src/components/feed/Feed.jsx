import React, { useEffect, useState } from "react";
import "./Feed.css";
import SearchBar from "../searchbar/SearchBar";
import { Hero } from "../hero/Hero";
import TrendingDestination from "../hotelFeeds/TrendingDestination";
import BestOffer from "../hotelFeeds/BestOffer";
import { ExploreFrance } from "../hotelFeeds/ExploreFrance";
import {
  bestOffers,
  exploreParis,
  trendingDestinations,
} from "../../assets/constants";

const Feed = ({ toggleSidebar }) => {
  return (
    <div className="feed">
      <SearchBar toggleSidebar={toggleSidebar} />
      <Hero />
      <div className="hotel-feeds">
        <TrendingDestination
          className="trending-destinations"
          products={trendingDestinations}
        />
        <BestOffer products={bestOffers} />
        <ExploreFrance products={exploreParis} />
      </div>
    </div>
  );
};

export default Feed;
