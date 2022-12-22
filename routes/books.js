import express from "express";
import {
  getBooks,
  addBook,
  getBookById,
  editBook,
  deleteBook,
  getKategori,
  addKategori,
  getKategoriById,
  editKategori,
  deleteKategori,
  getJenis,
  addJenis,
  getJenisById,
  editJenis,
  deleteJenis,
} from "../controllers/books.js";

const router = express.Router();

router.get("/books", getBooks);
router.post("/books", addBook);
router.get("/books/:id", getBookById);
router.put("/books/:id", editBook);
router.delete("/books/:id", deleteBook);

router.get("/category", getKategori);
router.post("/category", addKategori);
router.get("/category/:id", getKategoriById);
router.put("/category/:id", editKategori);
router.delete("/category/:id", deleteKategori);

router.get("/type", getJenis);
router.post("/type", addJenis);
router.get("/type/:id", getJenisById);
router.put("/type/:id", editJenis);
router.delete("/type/:id", deleteJenis);

export default router;
