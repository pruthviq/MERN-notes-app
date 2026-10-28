import { useState } from "react";

import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const Form = ({
  formName = "Note Form",
  formAction = "create",
  titlePlaceHolder,
  contentPlaceHolder,
  initialTitle = "",
  initialContent = "",
  submitText,
  disabled,
  onSubmit,
  ...props
}) => {
  const [title, setTitle] = useState(
    (initialTitle !== "NO TITLE" && initialTitle) || "",
  );
  const [content, setContent] = useState(initialContent || "");
  const [info, setInfo] = useState("");

  const errorStr = `${formAction === "create" ? "Note create failed!" : "Note edit failed!"}`;
  const noContentStr = `${"Content is required!"}`;
  const successStr = `${formAction === "create" ? "Note created successfully!" : "Note edited successfully!"}`;

  const isUnChanged = title !== initialTitle || content !== initialContent;

  return (
    <main className="px-4 py-8 dark:text-zinc-100 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-4xl">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <SecondaryButton />
        </header>

        <section className="rounded-2xl dark:bg-zinc-900 px-5 py-7 shadow-[0_16px_50px_rgba(0,0,0,0.16)] sm:px-8 sm:py-8">
          <h1 className="mb-8 text-2xl font-semibold tracking-tight dark:text-zinc-100">
            {formName}
          </h1>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (!content.trim()) return setInfo(noContentStr);
              const finalTitle = title || "NO TITLE";
              try {
                await onSubmit({
                  title: finalTitle.trim(),
                  content: content.trim(),
                });
                setInfo(successStr);
                if (formAction === "create") {
                  setTitle("");
                  setContent("");
                }
                console.log("FORM SUBMITTED");
              } catch {
                setInfo(errorStr);
                console.log("Error Submitting");
              }
            }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="note-title"
                className="mb-2 block text-sm font-medium dark:text-zinc-300"
              >
                Title
              </label>
              <input
                id="note-title"
                type="text"
                placeholder={titlePlaceHolder}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-full border border-[#39302e] bg-transparent px-4 py-3 text-sm dark:text-zinc-100 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10"
              />
            </div>

            <div>
              <label
                htmlFor="note-content"
                className="mb-2 block text-sm font-medium dark:text-zinc-300"
              >
                Content
              </label>
              <textarea
                id="note-content"
                rows="5"
                placeholder={contentPlaceHolder}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full resize-y rounded-[1.75rem] border border-[#39302e] bg-transparent px-4 py-4 text-sm leading-6 dark:text-zinc-100 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10"
              />
            </div>

            <div className="flex justify-between pt-1">
              <p
                className={
                  info === successStr ? "text-green-500" : "text-red-500"
                }
              >
                {info}
              </p>

              <PrimaryButton type="submit" disabled={disabled || !isUnChanged}>
                {submitText}
              </PrimaryButton>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Form;
