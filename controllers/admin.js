import db from "../config/Database.js";

/**
 *
 * Controller Admin kelola Data User
 *
 */

// Ambil semua data user
export const getUsers = (req, res) => {
  const q = "SELECT * FROM t_anggota";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

// Menambahkan data user
export const addUser = (req, res) => {
  const q =
    "insert into t_anggota (`nama_anggota`, `nim`, `no_tlp`, `jurusan`, `username`, `password`) values (?)";
  const values = [
    req.body.nama,
    req.body.nim,
    req.body.telp,
    req.body.jurusan,
    req.body.username,
    req.body.password,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Data user berhasil dibuat");
  });
};

// Tampilkan User berdasarkan ID
export const getUserById = (req, res) => {
  let id = req.params.id;
  let q = `select * from t_anggota where id_anggota = ${id}`;
  db.query(q, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
};

// Update / Ubah data user berdasarkan id
export const editUser = (req, res) => {
  let id = req.body.id;
  const q = `UPDATE t_anggota SET ? WHERE id_anggota = ${id}`;
  let values = {
    nama_anggota: req.body.nama,
    nim: req.body.nim,
    no_tlp: req.body.no_tlp,
    jurusan: req.body.jurusan,
    username: req.body.username,
    password: req.body.pass,
    status: req.body.status,
  };
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Data user berhasil diubah");
  });
};

// Hapus data user berdasarkan id
export const deleteUser = (req, res) => {
  let id = req.params.id;
  let q = `DELETE FROM t_anggota WHERE id_anggota = ${id}`;
  db.query(q, (err, data) => {
    if (err) throw err;
    return res.json("Data user berhasil dihapus");
  });
};

/**
 *
 * Controller Admin kelola Data Admin
 *
 */

// Ambil semua data user
export const getAdmin = (req, res) => {
  const q = "SELECT * FROM t_admin";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

// Menambahkan data user
export const addAdmin = (req, res) => {
  const q =
    "insert into t_admin (`nama_admin`, `email`, `username`, `password`) values (?)";
  const values = [
    req.body.nama,
    req.body.email,
    req.body.username,
    req.body.password,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Data user berhasil dibuat");
  });
};

// Tampilkan User berdasarkan ID
export const getAdminById = (req, res) => {
  let id = req.params.id;
  let q = `select * from t_admin where id_admin = ${id}`;
  db.query(q, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
};

// Update / Ubah data user berdasarkan id
export const editAdmin = (req, res) => {
  let id = req.body.id;
  const q = `UPDATE t_admin SET ? WHERE id_admin = ${id}`;
  let values = {
    nama_admin: req.body.nama,
    email: req.body.email,
    username: req.body.username,
    password: req.body.pass,
  };
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Data user berhasil diubah");
  });
};

// Hapus data user berdasarkan id
export const deleteAdmin = (req, res) => {
  let id = req.params.id;
  let q = `DELETE FROM t_admin WHERE id_admin = ${id}`;
  db.query(q, (err, data) => {
    if (err) throw err;
    return res.json("Data user berhasil dihapus");
  });
};

/**
 *
 * Controller Admin kelola Data Transaksi
 *
 */

export const getBorrows = (req, res) => {
  let query = `SELECT * FROM t_pinjam 
        INNER JOIN t_buku ON t_pinjam.id_buku = t_buku.id_buku
        INNER JOIN t_anggota ON t_pinjam.id_anggota = t_anggota.id_anggota;`;
  db.query(query, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
};

export const addBorrow = (req, res) => {
  const queryAddBorrow = `insert into t_pinjam (lama_pinjam, id_anggota, id_buku) values ?`;
  const values = [req.body.lama_pinjam, req.body.id_anggota, req.body.id_buku];
  db.query(queryAddBorrow, values, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
};
