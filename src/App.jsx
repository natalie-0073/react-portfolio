import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
//import Project from "./components/Project/Project";
import Gallery from "./components/Project Gallery/Gallery";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="app">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path="projects" element={<Gallery/>} />
          <Route path="skills" element={<Skills/>} />
          <Route path="contact" element={<Contact/>} />
      
      </Routes>
      <Footer/>
    </div>

    </Router>
  )
}

export default App;
