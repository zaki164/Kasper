import { Link } from 'react-scroll';
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
      if (e.target !== toggleref) {
        if (navref.current.classList.contains('show')) {
          handlesearch(navref);
        }
      }
    })
  })
  return (
    <header>
      <div className="container">
        <Link to="/" spy={true} smooth={true} offset={-100} duration={500} className="logo">
          <img src={images.logo} alt="logo" />
        </Link>
        <nav>
          <div ref={toggleref} onClick={handleshownav}>
            <i className="fas fa-bars toggle-menu"></i>
          </div>
          <ul ref={navref}>
            <li><Link to="/" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
            <li><Link to="portfolio" spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link></li>
            <li><Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link></li>
            <li><Link to="services" spy={true} smooth={true} offset={-100} duration={500}>Services</Link></li>
            <li><Link to="pricing" spy={true} smooth={true} offset={-100} duration={500}>Pricing</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
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
