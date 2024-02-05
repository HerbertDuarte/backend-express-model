import { router } from "@/routes";
import logger from "./logger";

export default function listRoutes() {
  router.stack.map((item) => {
    logger.success(
      `LOG [Router] [${item.route.stack[0].method.toLocaleUpperCase()}] ${
        item.route.path
      }`
    );
  });
}
