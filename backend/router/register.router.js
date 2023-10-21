import express from "express";
import { addRegister, getAllRegister } from "../controller/register.controller";

const router = express.Router();

router.post("/add-register", addRegister);
router.get("/get-register", getAllRegister);
export default router;
