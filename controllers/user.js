import db from "../config/Database.js";

export const listBorrow = (req, res) => {
  const id = req.session.userid;
  const query = `SELECT * FROM t_pinjam 
    JOIN t_buku ON t_pinjam.id_buku = t_buku.id_buku
    JOIN t_anggota ON t_pinjam.id_anggota = t_anggota.id_anggota
    where t_anggota.id_anggota = ${id}
    `;

  db.query(query, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
};

export const historyUser = (req, res) => {
  const id = req.session.userid;
  const query = `SELECT * FROM t_pinjam 
    JOIN t_buku on t_pinjam.id_buku = t_buku.id_buku 
    JOIN t_anggota ON t_pinjam.id_anggota = t_anggota.id_anggota
    WHERE t_anggota.id_anggota = 1 && t_pinjam.status_pinjam = 'dikembalikan'`;

  db.query(query, (err, data) => {
    if (err) throw err;
    return res.json(data);
  });
};
