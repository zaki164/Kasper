import images from '../../constants';

import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <img src={images.logo} alt="logo" />
        <p>WE ARE SOCIAL</p>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fas fa-home"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        <p className="copyright">&copy; 2021 <span>Kasper</span> All Right Reserved</p>
    </div>
  </footer>
);

export default Footer;
