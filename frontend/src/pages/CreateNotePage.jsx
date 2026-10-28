import { useState } from "react";

import { postNote } from "../components/api/client";
import Form from "../components/notes/Form";

const CreateNotePage = () => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit({ title, content }) {
    setLoading(true);
    try {
      await postNote(title, content);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form
      formName="Create New Note"
      titlePlaceHolder={"Note title"}
      contentPlaceHolder={"Write your note here..."}
      submitText={loading ? "Creating..." : "Create Note"}
      disabled={loading}
      onSubmit={handleSubmit}
    />
  );
};

export default CreateNotePage;
