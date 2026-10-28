import Note from "../models/Note.js";

export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    if (!notes) return res.status(404).json({ message: "Notes not found!" });
    res.status(200).json({ message: "Notes fetched", notes });
  } catch (error) {
    console.log("get failed:", error);
    res.status(500).json({ message: "Internal server error!" });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const getNoteById = await Note.findById(req.params.id);
    if (!getNoteById)
      return res.status(404).json({ message: "Note not found!" });
    res.status(200).json({ message: "got note by id", getNoteById });
  } catch (error) {
    console.error("get note by id failed", error);
    res.status(500).json({ message: "Internal server error!" });
  }
};

export const postNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch (error) {
    console.error("post failed:", error);
    res.status(500).json({ message: "Internal server error!" });
  }
};

export const putNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updateNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true },
    );
    if (!updateNote)
      return res.status(404).json({ message: "Note not found!" });
    res.status(200).json({ message: "Note updated" });
  } catch (error) {
    console.error("put failed:", error);
    res.status(500).json({ message: "Internal server error!" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote)
      return res.status(404).json({ message: "Note not found!" });
    res.status(200).json({ message: "Note deleted" });
  } catch (error) {
    console.error("Delete failed", error);
    res.status(200).json({ message: "Internal server error!" });
  }
};
