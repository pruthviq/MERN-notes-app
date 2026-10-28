const API = "/api";

export async function getNotes() {
  const res = await fetch(`${API}/notes`);

  if (!res.ok) {
    const err = new Error("Failed to fetch notes!");
    err.status = res.status;
    err.message = res.message;
    throw err;
  }

  const data = await res.json();
  return data.notes;
}

export async function getNoteById(id) {
  const res = await fetch(`${API}/notes/${id}`);

  if (!res.ok) {
    const err = new Error("Failed to fetch note!");
    err.status = res.status;
    err.message = res.message;
    throw err;
  }

  const data = await res.json();
  return data.getNoteById;
}

export async function postNote(title, content) {
  const res = await fetch(`${API}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  });

  if (!res.ok) {
    const err = new Error("Failed to post note!");
    err.status = res.status;
    err.message = res.message;
    throw err;
  }
}

export async function editNote(title, content, id) {
  const res = await fetch(`${API}/notes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  });

  if (!res.ok) {
    const err = new Error("Failed to edit note!");
    err.status = res.status;
    err.message = res.message;
    throw err;
  }
}

export async function deleteNote(id) {
  const res = await fetch(`${API}/notes/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const err = new Error("Failed to delete note!");
    err.status = res.status;
    err.message = res.message;
    throw err;
  }
}
