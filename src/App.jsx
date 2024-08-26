import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsDetails from './pages/NewsDetail';

function App() {
  return (
    <div className="font-sans">
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:newsId" element={<NewsDetails />} />
      </Routes>
    </Router>
    </div>
  
  )
}

export default App;
