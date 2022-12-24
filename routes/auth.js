import { logout, login } from "../controllers/auth.js";
import express from "express";

const router = express.Router();

router.post("/authadmin", login);
router.get("/logout", logout);

export default router;
