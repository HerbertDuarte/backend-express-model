import listRoutes from "./listRoutes";
export default function print(content) {
  console.log("\x1b[32m");
  listRoutes();
  console.log(content);
  console.log("\x1b[0m");
}
