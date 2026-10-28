import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

import Form from "../components/notes/Form";
import { editNote } from "../components/api/client";

function EditNotePage() {
  const note = useLoaderData();
  const params = useParams();
  const navigate = useNavigate();

  const [saving, setSaving] = useState(false);

  async function handleSubmit({ title, content }) {
    setSaving(true);
    try {
      await editNote(title, content, params.id);
      navigate("/notes");
    } finally {
      setSaving(false);
    }
  }
  return (
    <Form
      formName="Edit Note"
      formAction="edit"
      initialTitle={note.title}
      initialContent={note.content}
      submitText={saving ? "Saving..." : "Save Changes"}
      disabled={saving}
      onSubmit={handleSubmit}
    />
  );
}
export default EditNotePage;
