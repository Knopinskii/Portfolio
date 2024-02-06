import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Homepage from "./pages/Homepage";
import Skills from "./pages/Skills";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="/project/:id" element={<ProjectDisplay />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
