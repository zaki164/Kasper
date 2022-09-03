import images from '../../constants';

import './OurDesign.css';

const OurDesign = () => {
  return (
    <section className="design">
      <div className="image">
        <img src={images.mobile} alt="mobile" />
      </div>
      <div className="text">
        <h2>OUR DESIGN COMES WITH...</h2>
        <ul>
          <li>Responsive Design</li>
          <li>Modern And Clean Design</li>
          <li>Clean Code</li>
          <li>Browser Friendly</li>
        </ul>
      </div>
    </section>
  )
}

export default OurDesign