import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import NotesPage from "./pages/NotesPage";
import CreateNotePage from "./pages/CreateNotePage";
import EditNotePage from "./pages/EditNotePage";
import { getNoteById, getNotes } from "./components/api/client";
import LoadingSpinner from "./components/ui/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "notes",
        children: [
          { index: true, element: <NotesPage />, loader: getNotes },
          { path: ":id", element: <NotesPage /> },
          { path: "create", element: <CreateNotePage /> },
          {
            path: ":id/edit",
            element: <EditNotePage />,
            loader: ({ params }) => getNoteById(params.id),
          },
        ],
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
