import logger from "@/utils/Loggers/logger";
import { Request, Response, NextFunction } from "express";

const minuto = 60 * 1000;
const HEARTBEAT_INTERVAL = 5 * minuto;
let intervalId: NodeJS.Timeout;

function HeartBeat(req: Request, res: Response, next: NextFunction) {
  if (!intervalId) {
    intervalId = setInterval(() => {
      fetch(process.env.SELF_URL, { method: "GET" });
      logger.alert("Heart Beat");
    }, HEARTBEAT_INTERVAL);
  }
  next();
}

export default HeartBeat;
