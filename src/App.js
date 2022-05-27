import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Menu
import Menu from './Pages/SubComponents/Menu';

//Pages
import Home from './Pages/Home/Home.js';
import About from './Pages/About/About.js';
import Work from './Pages/Work/Work.js';
import News from './Pages/News/News.js';

function App() {
  return (
    //Navigation
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>      
  );
}

export default App;
