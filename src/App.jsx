import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { HashRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from "./pages/NotFoundPage";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/404" element={<NotFoundPage/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
