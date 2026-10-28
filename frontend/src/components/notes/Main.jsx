import { useLoaderData } from "react-router-dom";
import NoteCard from "./NoteCard";
import EmptyNotesState from "../ui/EmptyNotesState";

const Main = () => {
  const notes = useLoaderData();
  return <main>{notes.length ? <NoteCard /> : <EmptyNotesState />}</main>;
};

export default Main;
