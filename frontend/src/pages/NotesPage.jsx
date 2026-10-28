import { Toaster } from "react-hot-toast";

import Header from "../components/notes/Header";
import Main from "../components/notes/Main";
import Footer from "../components/notes/Footer";

export default function NotesPage() {
  return (
    <div>
      <Toaster position="top-center" />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
