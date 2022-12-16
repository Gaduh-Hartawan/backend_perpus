import express from "express";
import { listBorrow, historyUser } from "../controllers/user.js";

const router = express.Router();

router.get("/listborrow", listBorrow);
router.get("/history", historyUser);

export default router;
