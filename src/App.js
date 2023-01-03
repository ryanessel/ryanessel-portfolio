import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProfileCard from './components/ProfileCard';
import Testdrag from './components/Testdrag';


import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App bg-sky-900">
      <Navbar/>


    <Routes>

    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>

    </Routes>



    </div>
  );
}

export default App;
