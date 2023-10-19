import axios from "axios";

const BASE_URL = "https://hotels4.p.rapidapi.com/v2/get-meta-data";
const RAPID_API_KEY = import.meta.env.VITE_REACT_APP_RAPID_API_KEY;

const options = {
  method: "GET",
  url: `${BASE_URL}/v2/get-meta-data`,
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": "apidojo-booking-v1.p.rapidapi.com",
  },
};

export const fetchHotelMetaData = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
