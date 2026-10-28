import express from "express";
import dotenv from "dotenv";
import path from "path";

import homeRoutes from "./src/routes/notesRoutes.js";
import notesRoutes from "./src/routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./src/middleware/rateLimiter.js";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const __filePath = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filePath);
const frontendPath = path.join(__dirname, "../frontend/dist");

// middleware
app.use(express.json());

// routes
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);

// dynamic hosting
if (process.env.NODE_ENV === "production") {
  app.use(express.static(frontendPath));
  app.get("/{*splat}", (_, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

// erros handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error!" });
});

// run server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server started on PORT", PORT);
  });
});
