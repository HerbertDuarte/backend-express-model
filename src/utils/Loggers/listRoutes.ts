import { router } from "@/routes";

export default function listRoutes() {
  router.stack.map((item) => {
    console.log(
      `\x1b[32mLOG [Router] [${item.route.stack[0].method.toLocaleUpperCase()}] ${
        item.route.path
      }\x1b[0m`
    );
  });
}
