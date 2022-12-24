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
    req.body.tlp,
    req.body.jurusan,
    req.body.username,
    req.body.pass,
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
  let id = req.params.id;
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
  let id = req.params.id;
  const q = `UPDATE t_admin SET ? WHERE id_admin = ${id}`;
  let values = {
    nama_admin: req.body.nama,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
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
        JOIN t_buku ON t_pinjam.id_buku = t_buku.id_buku
        JOIN t_anggota ON t_pinjam.id_anggota = t_anggota.id_anggota
        where t_pinjam.status_pinjam = 'belum dikembalikan'
        `;
  db.query(query, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
};

export const addBorrow = (req, res) => {
  const queryAddBorrow = `insert into t_pinjam (id_anggota, id_buku, status_pinjam, tgl_pinjam, lama_pinjam) values (?)`;
  const values = [
    req.body.id_anggota,
    req.body.id_buku,
    req.body.status,
    req.body.tgl_pinjam,
    req.body.lama_pinjam,
  ];
  db.query(queryAddBorrow, [values], (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
};

export const deleteBorrow = (req, res) => {
  const id = req.params.id;
  const q = `delete from t_pinjam where id_pinjam = ${id}`;
  db.query(q, (err, data) => {
    if (err) throw err;
    return res.json("Peminjaman Berhasil dihapus!");
  });
};

export const editBorrow = (req, res) => {
  let id = req.params.id;
  const q = `UPDATE t_pinjam SET ? WHERE id_pinjam = ${id}`;
  let values = {
    status_pinjam: req.body.status,
    tgl_kembali: req.body.tgl_kembali,
  };
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Data peminjaman berhasil diubah");
  });
};

export const getBorrowById = (req, res) => {
  let id = req.params.id;
  const q = `Select * from t_pinjam WHERE id_pinjam = ${id}`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const getReturn = (req, res) => {
  const q = `select * from t_pinjam 
  join t_anggota on t_pinjam.id_anggota = t_anggota.id_anggota
  join t_buku on t_pinjam.id_buku = t_buku.id_buku
  where t_pinjam.status_pinjam = 'dikembalikan'
  `;
  db.query(q, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
};

export const count = (req, res) => {
  const q = `
  select count(*) as count_user from t_anggota;
  select count(*) as count_book from t_buku;
  select count(*) as count_return from t_pinjam where status_pinjam = 'dikembalikan';
  select count(*) as count_borrow from t_pinjam where status_pinjam = 'belum dikembalikan';
  `;

  db.query(q, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
};
