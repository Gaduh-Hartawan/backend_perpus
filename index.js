import express from "express";
import cors from "cors";
import AdminRoute from "./routes/admin.js";
import UserRoute from "./routes/user.js";
import BookRoute from "./routes/books.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(AdminRoute);
app.use(UserRoute);
app.use(BookRoute);

app.listen(5000, () => console.log("Server running on port 5000"));
