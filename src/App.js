import { Link, Route,  Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import logo from '../src/images/logo.svg'
// import About from './pages/About/About';
import Collection from './pages/Collections/Collection';
import Contact from './pages/Contact/Contact';
import Men from './pages/Mens/Men';
import Women from './pages/Womens/Women';


function App() {
  return(
  <>
 
  
{/* <Router> */}
{/* <nav> */}
<nav className="navbar">
<Link to="/"><img src={logo} alt="logo"></img></Link>
<ul className='nav_ul' >
  <li><Link to="/collection" style={{color:"orange", fontSize:"1.5rem", textDecoration:"none"}}>Collections</Link></li>
  <li><Link to="/men" style={{color:"orange", fontSize:"1.5rem", textDecoration:"none"}}>Men</Link></li>
  <li><Link to="/women" style={{color:"orange", fontSize:"1.5rem", textDecoration:"none"}}>Women</Link></li>
  <li><Link to="/contact" style={{color:"orange", fontSize:"1.5rem", textDecoration:"none"}}>Contact</Link></li>
</ul>
</nav>
<Routes>
  <Route path='/' element={<Home/>} />
<Route path='/collection' element={<Collection/>} />
<Route path='/men' element={<Men/>} />
<Route path='/women' element={<Women/>} />
<Route path='/contact' element={<Contact/>} />
</Routes>

{/* </Router> */}

 {/* <Collection />
 <Men />
 <Women />
 <About />
 <Contact /> */}
  </>
  )
}

export default App;
