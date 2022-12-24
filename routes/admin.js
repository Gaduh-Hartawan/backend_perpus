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
  deleteBorrow,
  getBorrowById,
  editBorrow,
  getReturn,
  count,
} from "../controllers/admin.js";

const router = express.Router();

router.get("/count", count);

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
router.get("/borrow/:id", getBorrowById);
router.post("/borrow", addBorrow);
router.delete("/borrow/:id", deleteBorrow);
router.put("/borrow/:id", editBorrow);
router.get("/return", getReturn);

export default router;
