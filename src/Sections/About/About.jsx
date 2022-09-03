import images from '../../constants';
import './About.css';

const About = () => {
  return (
    <>
      <section className="about" id='about'>
        <div className="container">
          <div className="main-heading">
            <h2>About</h2>
            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
              tincidunt.</p>
          </div>
          <img src={images.about} alt="about" />
        </div>
      </section>
      <section className="statis">
        <div className="container">
          <div className="box">
            <i className="fas fa-mug-hot"></i>
            <div className="number">1.236</div>
            <p>Coffee Drinks</p>
          </div>
          <div className="box">
            <i className="far fa-folder"></i>
            <div className="number">256</div>
            <p>Completed Projects</p>
          </div>
          <div className="box">
            <i className="far fa-envelope"></i>
            <div className="number">1,743</div>
            <p>Mail Sent</p>
          </div>
          <div className="box">
            <i className="fas fa-trophy"></i>
            <div className="number">17</div>
            <p> Awards Received</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About