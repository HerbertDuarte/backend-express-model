import express, { Request, Response } from "express";
import { router } from "./routes";
import cors from "cors";
import listRoutes from "./utils/Loggers/listRoutes";
import logger from "./utils/Loggers/logger";
import HeartBeat from "./middlewares/HeartBeat";

const PORT = Number(process.env.PORT || 3000);
const app = express();
app.use(cors());
app.use(express.json());
app.use(HeartBeat);
app.use(router);


app.get("/", (request, response) => {
  response.send("Hello world!");
});

app.listen(PORT, () => {
  listRoutes();
  logger.success(
    "LOG [Express] 🚀 HTTP server running on port " + PORT + "..."
  );
});
