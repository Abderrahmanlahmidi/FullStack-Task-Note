import express from "express";
import { deletetsk,gettsk,posttsk } from "../controllers/tskcontrollers.js";

const router = express.Router();



router.get("/", gettsk) 


router.post("/createTask", posttsk)


router.delete("/:id", deletetsk)




export default router