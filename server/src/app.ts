import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./db";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Export both app and db for use in routes
export default app;
export { db };
