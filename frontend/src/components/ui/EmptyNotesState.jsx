import { Notebook } from "lucide-react";
import PrimaryButton from "../notes/PrimaryButton";
import Container from "./Container";

export default function EmptyNotesState() {
  return (
    <Container>
      <section className="flex flex-col items-center text-center">
        <div
          className="flex h-28 w-28 items-center justify-center rounded-full
    bg-green-100 text-green-700
    dark:bg-green-950/40 dark:text-green-500"
        >
          <Notebook size={48} />
        </div>
        <h1
          className="mt-7 text-2xl font-semibold tracking-tight
    text-gray-900 dark:text-gray-100"
        >
          No notes yet
        </h1>
        <p
          className="mt-7 max-w-lg text-base leading-relaxed
    text-gray-600 dark:text-gray-400"
        >
          Ready to organize your thoughts? Create your first note to get started
          on your journey.
        </p>
        <PrimaryButton to="/notes/create" className="mt-7 px-4 py-4">
          Create Your First Note
        </PrimaryButton>
      </section>
    </Container>
  );
}
