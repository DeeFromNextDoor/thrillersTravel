import React, { useEffect, useState } from "react";
import "./Feed.css";
import SearchBar from "../searchbar/SearchBar";
import { Hero } from "../hero/Hero";
import HotelContainer from "../hotelContainer/HotelContainer";
import {
  bestOffers,
  exploreParis,
  trendingDestinations,
} from "../../assets/constants";

// import { fetchHotelMetaData } from "../../api/hotelApi";

const Feed = () => {
  // const [hotelMetaData, setHotelMetaData] = useState(null);

  // useEffect(() => {
  //   fetchHotelMetaData()
  //     .then((data) => {
  //       setHotelMetaData(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching hotel metadata:", error);
  //     });
  // }, []);

  // console.log(hotelMetaData);

  const hotelContainers = [];
  return (
    <div className="feed">
      <SearchBar />
      <Hero />
      <div className="hotel-feeds">
        <HotelContainer
          className="trending-destinations"
          products={trendingDestinations}
        />
        {/* <HotelContainer className="best-offers" products={bestOffers} />
        <HotelContainer className="explore-france" products={exploreParis} /> */}
      </div>
    </div>
  );
};

export default Feed;
