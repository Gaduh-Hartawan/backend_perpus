import db from "../config/Database.js";

// Ambil semua data buku
export const getBooks = (req, res) => {
  const b = `SELECT * FROM t_buku 
    INNER JOIN t_kategori ON t_buku.id_kategori = t_kategori.id_kategori
    INNER JOIN t_jenis ON t_buku.id_jenis = t_jenis.id_jenis;`;
  db.query(b, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

// Simpan data Add buku
export const addBook = (req, res) => {
  const b = `INSERT INTO t_buku (judul_buku, penerbit, tahun, pengarang, denda, jumlah, id_kategori, id_jenis) values (?);`;
  const values = [
    req.body.judul,
    req.body.penerbit,
    req.body.tahun,
    req.body.pengarang,
    req.body.denda,
    req.body.jumlah,
    req.body.id_kategori,
    req.body.id_jenis,
  ];

  db.query(b, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Data buku berhasil dibuat");
  });
};

// Render form Edit Buku
export const getBookById = (req, res) => {
  let id = req.params.id;
  let b = `select * from t_buku INNER JOIN t_kategori ON t_buku.id_kategori = t_kategori.id_kategori
    INNER JOIN t_jenis ON t_buku.id_jenis = t_jenis.id_jenis where id_buku = ${id}`;
  db.query(b, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

// Simpan data Edit Book
export const editBook = (req, res) => {
  let id = req.params.id;
  const b = `UPDATE t_buku SET ? WHERE id_buku = ${id}`;
  let values = {
    judul_buku: req.body.judul,
    penerbit: req.body.penerbit,
    tahun: req.body.tahun,
    denda: req.body.denda,
    pengarang: req.body.pengarang,
    jumlah: req.body.jumlah,
    id_kategori: req.body.id_kategori,
    id_jenis: req.body.id_jenis,
  };
  db.query(b, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Data buku berhasil diubah");
  });
};

// Hapus data Buku
export const deleteBook = (req, res) => {
  let id = req.params.id;
  let b = `DELETE FROM t_buku WHERE id_buku = ${id}`;
  db.query(b, (err, data) => {
    if (err) throw err;
    return res.json("Data buku berhasil dihapus");
  });
};

/**
 *
 * Controller Data Kategori Buku
 */

// Ambil Semua data Kategori
export const getKategori = (req, res) => {
  const b = `SELECT * FROM t_kategori;`;
  db.query(b, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

// Simpan Data Add Kategori
export const addKategori = (req, res) => {
  const b = `INSERT INTO t_kategori SET ?;`;
  const values = [req.body.nama_kategori];
  db.query(b, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Kategori berhasil dibuat");
  });
};

// Tampil Kategori By Id
export const getKategoriById = (req, res) => {
  let id = req.params.id;
  let b = `select * from t_kategori where id_kategori = ${id}`;
  db.query(b, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
};

// Simpan Data Edit Kategori
export const editKategori = (req, res) => {
  let id = req.body.id;
  const b = `UPDATE t_kategori SET ? WHERE id_kategori = ?;`;
  let values = {
    nama_kategori: req.body.nama_kategori,
  };
  db.query(b, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Data buku berhasil diubah");
  });
};

// Delete Kategori
export const deleteKategori = (req, res) => {
  let id = req.params.id;
  let b = `DELETE FROM t_kategori WHERE id_kategori = ?;`;
  db.query(b, (err, data) => {
    if (err) throw err;
    return res.json("Data kategori berhasil dihapus");
  });
};

/**
   * 
   * 
   * 
  Controller Data Jenis Buku
  */

// Ambil Semua data Jenis Buku
export const getJenis = (req, res) => {
  const b = `SELECT * FROM t_jenis;`;
  db.query(b, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

// Simpan data add jenis
export const addJenis = (req, res) => {
  const b = `INSERT INTO t_jenis SET ?;`;
  const values = [req.body.nama_jenis];
  db.query(b, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Jenis Buku berhasil dibuat");
  });
};

// Tampil Jenis By Id
export const getJenisById = (req, res) => {
  let id = req.params.id;
  let b = `select * from t_jenis where id_jenis = ${id}`;
  db.query(b, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
};

// Simpan data edit jenis
export const editJenis = (req, res) => {
  let id = req.body.id;
  const b = `UPDATE t_jenis SET ? WHERE id_jenis = ?;`;
  let values = {
    nama_jenis: req.body.nama_jenis,
  };
  db.query(b, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Data jenis berhasil diubah");
  });
};

// hapus jenis
export const deleteJenis = (req, res) => {
  let id = req.params.id;
  let b = `DELETE FROM t_jenis WHERE id_jenis = ?;`;
  db.query(b, (err, data) => {
    if (err) throw err;
    return res.json("Data jenis berhasil dihapus");
  });
};
