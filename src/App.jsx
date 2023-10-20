import { useEffect, useState } from "react";
import "./index.css";
import Home from "./components/home/Home";
import { fetchHotelMetaData } from "./api/hotelApi";

function App() {
  const [hotelData, setHotelData] = useState(null);

  // fetch from api but coulnt find the right api for the data i need
  useEffect(() => {
    const searchParams = {
      q: "New York",
      locale: "en_US",
      langid: "1033",
      siteid: "300000001",
    };

    fetchHotelMetaData("/locations/v3/search", searchParams)
      .then((data) => {
        setHotelData(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="app">
      <Home hotelData={hotelData} />
    </div>
  );
}

export default App;
