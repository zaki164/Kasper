import './Subscribe.css';


const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <form action="">
          <i className="far fa-envelope fa-lg"></i>
          <input type="email" name="mail" placeholder="Your Email" />
          <input type="submit" value="subscribe" />
        </form>
        <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blan dit aliquet elit, eget
          tincidunt.</p>
      </div>
    </section>
  )
}

export default Subscribe