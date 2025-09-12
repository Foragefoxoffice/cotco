import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./Routes/Routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", routes);

app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
});
