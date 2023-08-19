import asyncHandler from "express-async-handler";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/airports/list",
  headers: {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY_ONE,
    "X-RapidAPI-Host": process.env.RAPID_API_HOST_AIRPORTS,
  },
};

const getAirports = asyncHandler(async (req, res) => {
  try {
    const response = await axios.request(options);
    const data = response.data;

    const filteredData = data.rows.map((el) => {
      return {
        name: el.name,
        city: el.city,
        country: el.country,
        iata: el.iata,
      };
    });
    res.status(200).json({
      resultsData: data,
      filteredData,
    });
    console.log(data);
  } catch (error) {
    res
      .status(400)
      .json({ errorMessage: "error fetching airport list" }, error);
  }
});

export default getAirports;
