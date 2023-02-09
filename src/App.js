import './App.css';
import Navbar from './components/navbar/Navbar';
// import Projects from './container/projects/Projects';
import Resume from './container/resume/Resume';
import About from './container/about/About';
import Contact from './container/contact/Contact';
import Header from './container/header/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Projects from './container/projects/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} /> 
            <Route path="/projects" element={<Projects />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
