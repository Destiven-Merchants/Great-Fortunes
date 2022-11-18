import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Components/home';
import Properties from './Components/properties';
import Contact from './Components/contact';
import Blog from './Components/blog';
import About from './Components/about';
import ActualBlog from './Components/actualBlog';
import ActualProperty from './Components/actualProperty';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/properties" element={<Properties />} />
        <Route exact path="/blogpost/:slug" element={<ActualBlog />} />
        <Route exact path="/property/:id" element={<ActualProperty />} />
      </Routes>
    </Router>
  );
}

export default App;
