import { Request, Response, NextFunction } from "express";

const minuto = 60 * 1000;
const HEARTBEAT_INTERVAL = 0.1 * minuto;
let intervalId: NodeJS.Timeout;

function HeartBeat(req: Request, res: Response, next: NextFunction) {
  if (!intervalId) {
    intervalId = setInterval(() => {
      fetch(process.env.SELF_URL, { method: "GET" });
    }, HEARTBEAT_INTERVAL);
  }
  next();
}

export default HeartBeat;
