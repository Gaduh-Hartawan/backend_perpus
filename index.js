import express from "express";
import cors from "cors";
import AdminRoute from "./routes/admin.js";
import UserRoute from "./routes/user.js";
import BookRoute from "./routes/books.js";
import Auth from "./routes/auth.js";
import session from "express-session";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(AdminRoute);
app.use(UserRoute);
app.use(BookRoute);
app.use(Auth);

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "g4duhh@rt4w@n",
    name: "secretName",
    cookie: {
      path: "/",
    },
  })
);

app.listen(5000, () => console.log("Server running on port 5000"));
