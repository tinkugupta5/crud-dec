import './App.css';
import Home from './components/pages/Home'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
   
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      {/* <Home/>      */}
      </Routes>
    </div>
    
    </>
  );
}

export default App;
