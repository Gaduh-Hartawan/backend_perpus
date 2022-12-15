import db from "../config/Database.js";

export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) return console.log(err);
    res.clearCookie("secretname");
    res.redirect("/login");
  });
};
