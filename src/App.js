
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import About from './About';




function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/"></Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;