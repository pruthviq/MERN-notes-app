import express from "express";
import {
  deleteNote,
  getAllNotes,
  getNoteById,
  postNote,
  putNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", postNote);
router.get("/:id", getNoteById);
router.put("/:id", putNote);
router.delete("/:id", deleteNote);

export default router;
