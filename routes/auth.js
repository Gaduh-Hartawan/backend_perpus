import { logout } from "../controllers/auth.js";
import express from "express";

const router = express.Router();

router.get("/logout", logout);
