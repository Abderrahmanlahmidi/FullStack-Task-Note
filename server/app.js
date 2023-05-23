import express from "express";
import router from "./routes/route.js";
import cors from "cors";



//create the port and url server 
const app = express();
const PORT = 5000;

app.use(cors());

app.use(express.json());

app.use("/tasks", router);

app.get("/", (req, res) => {
   res.send("hello world");
})




app.listen(PORT , () => {
  console.log(`Server is running on port: http://localhost:${PORT} `);
})