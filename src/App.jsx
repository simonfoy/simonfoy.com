import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { HashRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from "./pages/NotFoundPage";
import ProjectsPage from "./pages/ProjectsPage";
import ReviewsPage from "./pages/ReviewsPage";
import VouchesPage from "./pages/VouchesPage";
import NewsletterPage from "./pages/NewsletterPage";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/reviews" element={<ReviewsPage/>}/>
        <Route path="/vouches" element={<VouchesPage/>}/>
        <Route path="/newsletter" element={<NewsletterPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/404" element={<NotFoundPage/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
