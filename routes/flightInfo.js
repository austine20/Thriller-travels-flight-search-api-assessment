import express from "express";
import getFlightInfo from "../controllers/getFlightInfo.js";
import getAirports from "../controllers/getAirports.js";

const route = express.Router();

route.get("/search", getFlightInfo);
route.get("/airports", getAirports);

export default route;
