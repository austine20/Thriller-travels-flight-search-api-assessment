import asyncHandler from "express-async-handler";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const getFlightInfo = asyncHandler(async (req, res) => {
  const { from, to, date, adult, type, currency } = req.query;

  if (!from || !to || !date || !adult) {
    res.status(400).json({
      errorMessage: "Validation error, please input all necessary parameters",
    });
  }

  const options = {
    method: "GET",
    url: "https://flight-fare-search.p.rapidapi.com/v2/flights/",
    params: {
      from,
      to,
      date,
      adult,
      type,
      currency,
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY_TWO,
      "X-RapidAPI-Host": process.env.RAPID_API_HOST_AIRPORTS_SEARCH,
    },
  };
  try {
    const response = await axios.request(options);
    const data = response.data;
    res.status(200).json({ data });
    console.log(response.data);
  } catch (error) {
    res.status(400).json({ errorMessage: "error fetching flight data" }, error);
  }
});

export default getFlightInfo;
