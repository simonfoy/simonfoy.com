import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { HashRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from "./pages/NotFoundPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/404" element={<NotFoundPage/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
