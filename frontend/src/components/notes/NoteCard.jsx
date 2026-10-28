import { SquarePenIcon, Trash } from "lucide-react";
import { Link, useLoaderData, useRevalidator } from "react-router-dom";
import toast from "react-hot-toast";

import Container from "../UI/Container";
import { deleteNote } from "../api/client";

const NoteCard = () => {
  const notes = useLoaderData();
  const revalidator = useRevalidator();

  async function handleDelete(e, _id) {
    e.preventDefault();

    try {
      await deleteNote(_id);
      toast.success("Note deleted");
      console.log("note deleted");
    } catch {
      toast.error("Note deletion failed!");
    } finally {
      revalidator.revalidate();
    }
  }

  return (
    <Container>
      <section className="grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <article
            key={note._id}
            className="min-h-40 rounded-2xl border-t-[3px] border-emerald-400 dark:bg-zinc-900 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 dark:hover:bg-white/5 hover:bg-black/2"
          >
            <h2 className="text-base font-semibold">{note.title}</h2>
            <p className="mt-2 text-sm leading-6">{note.content}</p>
            <div className="mt-5 flex items-center justify-between gap-4">
              <time className="text-xs font-medium text-zinc-500">
                {note.date}
              </time>
              <div className="flex items-center gap-3">
                <Link
                  to={`/notes/${note._id}/edit`}
                  aria-label={`Edit ${note.title}`}
                  className="cursor-pointer rounded-md p-1 text-zinc-400 transition dark:hover:bg-white/5 hover:bg-black/5 dark:hover:text-zinc-100 hover:text-zinc-900"
                >
                  <SquarePenIcon />
                </Link>
                <Link
                  to={`/notes/${note._id}`}
                  aria-label={`Delete ${note.title}`}
                  className="cursor-pointer rounded-md p-1 text-rose-400/70 transition hover:bg-rose-400/10 hover:text-rose-300"
                  onClick={(e) => handleDelete(e, note._id)}
                >
                  <Trash />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </Container>
  );
};

export default NoteCard;
