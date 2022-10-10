import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="main-heading">
          <h3>Pricing</h3>
          <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
            tincidunt.</p>
        </div>
        <div className="plans">
          <div className="plan">
            <div className="head">
              <h3>Basic</h3>
              <span>19</span>
            </div>
            <ul>
              <li>Feature No 1</li>
              <li>Extra Feature</li>
              <li>Extra Feature No 2</li>
              <li>Feature</li>
            </ul>
            <div className="foot">
              <a href="#/">Buy Now</a>
            </div>
          </div>
          <div className="plan">
            <div className="head">
              <h3>Premium</h3>
              <span>29</span>
            </div>
            <ul>
              <li>Feature No 1</li>
              <li>Extra Feature</li>
              <li>Extra Feature No 2</li>
              <li>Feature</li>
            </ul>
            <div className="foot">
              <a href="#/">Buy Now</a>
            </div>
          </div>
          <div className="plan">
            <div className="head">
              <h3>Pro</h3>
              <span>39</span>
            </div>
            <ul>
              <li>Feature No 1</li>
              <li>Extra Feature</li>
              <li>Extra Feature No 2</li>
              <li>Feature</li>
            </ul>
            <div className="foot">
              <a href="#/">Buy Now</a>
            </div>
          </div>
          <div className="plan">
            <div className="head">
              <h3>Platinum</h3>
              <span>49</span>
            </div>
            <ul>
              <li>Feature No 1</li>
              <li>Extra Feature</li>
              <li>Extra Feature No 2</li>
              <li>Feature</li>
            </ul>
            <div className="foot">
              <a href="#/">Buy Now</a>
            </div>
          </div>
        </div>
        <p className="contact-text">Contact us if you have special request</p>
        <a href="#/" className="contact-link">Contact Us</a>
      </div>
    </section>
  )
}

export default Pricing