import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="main-heading">
          <h2>services</h2>
          <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
            tincidunt.</p>
        </div>
        <div className="services-content">
          <article className="srv-box">
            <i className="fas fa-tablet-alt fa-3x"></i>
            <div className="text">
              <h3>Vorem amet intuitive</h3>
              <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit,
                eget tincidunt nibh pulvinar a. Curabitur aliquet quam.</p>
            </div>
          </article>
          <article className="srv-box">
            <i className="fas fa-cog fa-3x"></i>
            <div className="text">
              <h3>Vorem amet intuitive</h3>
              <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit,
                eget tincidunt nibh pulvinar a. Curabitur aliquet quam.</p>
            </div>
          </article>
          <article className="srv-box">
            <i className="fas fa-pencil-ruler fa-3x"></i>
            <div className="text">
              <h3>Vorem amet intuitive</h3>
              <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit,
                eget tincidunt nibh pulvinar a. Curabitur aliquet quam.</p>
            </div>
          </article>
          <article className="srv-box">
            <i className="fas fa-camera fa-3x"></i>
            <div className="text">
              <h3>Vorem amet intuitive</h3>
              <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit,
                eget tincidunt nibh pulvinar a. Curabitur aliquet quam.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Services