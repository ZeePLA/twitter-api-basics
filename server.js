import { config } from "dotenv";
config({ path: `${process.cwd()}/live.env` });
import express from "express";
const app = express();
import router from "./api-router.js";

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API-Router
app.use("/apiv2", router);

// Server-Listening-On
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
