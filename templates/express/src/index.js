import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { formatUptime } from "./utils/formatUptime.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  const uptimeSeconds = process.uptime();

  res.json({
    status: "ok",
    uptime: formatUptime(uptimeSeconds)
  });
});

app.get("/", (__, res) => {
  res.json({ message: "API running 🚀" });
});

app.use((__, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
