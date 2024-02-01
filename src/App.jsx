import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Homepage from "./pages/Homepage";
import Skills from "./pages/Skills";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
