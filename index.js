import express from "express";
import dotenv from "dotenv";
import flightInfo from "./routes/flightInfo.js";
import bodyParser from "body-parser";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(errorHandler);

app.use("/api/v1/flight", flightInfo);

app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
});
