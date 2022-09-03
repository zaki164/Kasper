import { NavLink } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import images from '../../constants';

import './Navbar.css';

const Navbar = () => {
  const inputref = useRef();
  const navref = useRef();
  const toggleref = useRef();
  const iconsearchref = useRef();
  const handlesearch = (x) => {
    x.current.classList.toggle('show');
  };
  const stopprop = (e) => {
    e.stopPropagation();
  }
  const handleshowsearch = (e) => {
    stopprop(e);
    handlesearch(inputref);
  }
  const handleshownav = (e) => {
    stopprop(e);
    handlesearch(navref);
  }
  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (e.target !== iconsearchref) {
        if (inputref.current.classList.contains('show')) {
          handlesearch(inputref);
        }
      }
    })
    document.addEventListener('click', (e) => {
      if (e.target !== toggleref && e.target !== navref) {
        if (navref.current.classList.contains('show')) {
          handlesearch(navref);
        }
      }
    })
  })
  return (
    <header>
      <div className="container">
        <NavLink exact="true" to="/" className="logo">
          <img src={images.logo} alt="logo" />
        </NavLink>
        <nav>
          <div ref={toggleref} onClick={handleshownav}>
            <i className="fas fa-bars toggle-menu"></i>
          </div>
          <ul ref={navref} onClick={handleshownav}>
            <li><NavLink exact="true" to="/">Home</NavLink></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
          <div className="form">
            <form action="">
              <input type="text" name='search' placeholder='search here' ref={inputref} onClick={stopprop} />
            </form>
            <div className='search_icon' ref={iconsearchref} onClick={handleshowsearch}>
              <i className="fas fa-search"></i>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
export default Navbar;
