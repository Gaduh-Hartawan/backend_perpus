import db from "../config/Database.js";

export const login = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  const q = `select * from t_admin where username = '${username}' and password = '${password}';
  select * from t_anggota where username = '${username}' and password = '${password}'
  `;
  db.query(q, (err, data) => {
    if (err) throw err;
    let role = "";
    if (data[0].length > 0) {
      // req.session.isAdmin = true;
      // req.session.adminId = data.id_admin;
      // req.session.username = data.username;
      role = "admin";
      res.send([data[0], { role }]);
    } else if (data[1].length > 0) {
      role = "user";
      res.json([data[1], { role }]);
    } else {
      res.json("Tidak Ditemukan");
    }
  });
};

export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) return console.log(err);
    res.clearCookie("secretname");
    res.redirect("/login");
  });
};
