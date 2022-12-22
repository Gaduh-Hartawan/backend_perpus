import express from "express";
import {
  getUsers,
  addUser,
  editUser,
  getUserById,
  deleteUser,
  getAdmin,
  addAdmin,
  editAdmin,
  getAdminById,
  deleteAdmin,
  getBorrows,
  addBorrow,
} from "../controllers/admin.js";

const router = express.Router();

// Route untuk Controller Admin Kelola User
router.get("/users", getUsers);
router.post("/users", addUser);
router.get("/users/:id", getUserById);
router.put("/users/:id", editUser);
router.delete("/users/:id", deleteUser);

// Route Untuk Controller Admin kelola Admin
router.get("/admin", getAdmin);
router.post("/admin", addAdmin);
router.get("/admin/:id", getAdminById);
router.put("/admin/:id", editAdmin);
router.delete("/admin/:id", deleteAdmin);

// Route Untuk Controller Admin kelola Transaksi Peminjaman
router.get("/borrow", getBorrows);
router.post("/borrow", addBorrow);

export default router;
