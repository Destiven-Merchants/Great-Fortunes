import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Components/home';
import Properties from './Components/properties';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/properties" element={<Properties />} />
      </Routes>
    </Router>
  );
}

export default App;
