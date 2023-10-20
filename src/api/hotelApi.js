import axios from "axios";

const BASE_URL = "https://hotels4.p.rapidapi.com";
const RAPID_API_KEY = import.meta.env.VITE_REACT_APP_RAPID_API_KEY;

export const fetchHotelMetaData = async (url, params) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}${url}`,
    params,
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return fetchHotelMetaData(url, params);
    } else {
      console.error(error);
      throw error;
    }
  }
};
