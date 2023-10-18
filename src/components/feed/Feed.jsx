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

const Feed = () => {
  return (
    <div className="feed">
      <SearchBar />
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
