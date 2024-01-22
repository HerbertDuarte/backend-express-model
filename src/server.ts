import express from "express";
import { router } from "./routes";
import cors from "cors";

const PORT = Number(process.env.PORT || 3000);
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.get("/", (request, response) => {
  response.send("Hello world!");
});

app.listen(PORT, () => {
  console.log("\x1b[32m") 
  listRoutes()
  console.log("🚀 HTTP server running on port " + PORT + "...");
  console.log("\x1b[0m");
});

function listRoutes(){
  router.stack.map((item)=>{
    console.log(`[OK] ${item.route.stack[0].method.toLocaleUpperCase()} => ${item.route.path}`)
  })
  console.log()
}
