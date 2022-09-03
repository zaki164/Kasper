import images from '../../constants';
import './OurVideo.css';

const OurVideo = () => {
  return (
    <section className="video">
      <video autoPlay loop muted>
        <source src={images.vid} type="video/mp4" />
      </video>
      <div className="text">
        <h2>SUPER AWESOME VIDEO HERE</h2>
        <p>Its All You Need</p>
        <button>SEE MORE</button>
      </div>
    </section>
  )
}

export default OurVideo