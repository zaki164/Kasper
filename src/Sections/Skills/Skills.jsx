import images from '../../constants';
import './Skills.css';

const Skills = () => {
  return (
    <section className="our-skills" id="skills">
      <div className="container">
        <div className="testimonials">
          <h3>Testimonials</h3>
          <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
            tincidunt.
          </p>
          <figure className="content">
            <img src={images.skills1} alt="skills" />
              <figcaption className="text">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit,
                egettincidunt.
                <p>John Doe, CEO</p>
              </figcaption>
          </figure>
          <figure className="content">
            <img src={images.skills2} alt="skills" />
              <figcaption className="text">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit,
                egettincidunt.
                <p>John Doe, CEO</p>
              </figcaption>
          </figure>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
            tincidunt.
          </p>
          <div className="prog-holder">
            <h4>Adobe</h4>
            <div className="prog">
              <span style={{width: "90%"}} data-progress="90%"></span>
            </div>
          </div>
          <div className="prog-holder">
            <h4>Html &amp; Css</h4>
            <div className="prog">
              <span style={{width: "85%"}} data-progress="85%"></span>
            </div>
          </div>
          <div className="prog-holder">
            <h4>Javascript</h4>
            <div className="prog">
              <span style={{width: "80%"}} data-progress="80%"></span>
            </div>
          </div>
          <div className="prog-holder">
            <h4>Php</h4>
            <div className="prog">
              <span style={{width: "90%"}} data-progress="90%"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills