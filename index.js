import express from "express";
import AdminROute from "./routes/admin.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(AdminROute);

app.listen(5000, () => console.log("Server running on port 5000"));
