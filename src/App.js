import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import logo from '../src/images/logo.svg'
import Collection from './pages/Collections/Collection';
import Contact from './pages/Contact/Contact';
import Men from './pages/Mens/Men';
import Women from './pages/Womens/Women';
import Shoes from './pages/Collections/Shoes/Shoes';
import Sneakers from './pages/Collections/Sneakers/Sneakers';
import Slippers from './pages/Collections/Slippers/Slippers';


function App() {
  return (
    <>
      <nav className="navbar">

        <Link to="/"><img src={logo} alt="logo"></img></Link>
        <ul className='nav_ul' >
          <li><Link to="/collection" style={{ color: "orange", fontSize: "1.5rem", textDecoration: "none" }}>Collections</Link></li>
          <li><Link to="/men" style={{ color: "orange", fontSize: "1.5rem", textDecoration: "none" }}>Men</Link></li>
          <li><Link to="/women" style={{ color: "orange", fontSize: "1.5rem", textDecoration: "none" }}>Women</Link></li>
          <li><Link to="/contact" style={{ color: "orange", fontSize: "1.5rem", textDecoration: "none" }}>Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} >
          <Route path='/collection/shoes' element={<Shoes />} />
          <Route path='/collection/sneakers' element={<Sneakers />} />
          <Route path='/collection/slippers' element={<Slippers />} />
        </Route>
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;
