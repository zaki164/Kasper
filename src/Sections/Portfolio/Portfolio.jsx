import { useEffect, useRef } from 'react';
import images from '../../constants';
import './Portfolio.css';

const Portfolio = () => {

  const imgref = useRef();
  const shuffleref = useRef();
  useEffect(() => {
    const imgs = [...imgref.current.children];
    const shuffles = [...shuffleref.current.children];
    shuffles.forEach(ele => {
      ele.addEventListener('click', () => {
        const category = ele.dataset.cat;
        shuffles.forEach(li => li.classList.remove('active'));
        ele.classList.add('active');
        imgs.forEach(img => {
          if (!img.classList.contains(category)) {
            img.classList.remove('show')
            img.classList.add('hide');
            setTimeout(() => {
              img.style.display = "none";
            }, 500)
          } else {
            img.style.display = "block";
            img.classList.remove('hide')
            img.classList.add('show')
          }
        })
      })
    });
  })

  return (
    <section className="portfolio">
      <div className="container">
        <div className="main-heading">
          <h2>portfolio</h2>
          <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
            tincidunt.</p>
        </div>
        <ul className="shuffle" ref={shuffleref}>
          <li data-cat="All" className="active">All</li>
          <li data-cat="App">App</li>
          <li data-cat="Web">Web</li>
          <li data-cat="Print">Print</li>
        </ul>
      </div>
      <div className="imgs-content" ref={imgref}>
        <figure className="box All Web">
          <img src={images.shuffle1} alt="shuffle"/>
            <figcaption className="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </figcaption>
        </figure>
        <figure className="box All App">
          <img src={images.shuffle2} alt="shuffle"/>
            <figcaption className="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </figcaption>
        </figure>
        <figure className="box All Web">
          <img src={images.shuffle3} alt="shuffle"/>
            <figcaption className="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </figcaption>
        </figure>
        <figure className="box All App">
          <img src={images.shuffle4} alt="shuffle"/>
            <figcaption className="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </figcaption>
        </figure>
        <figure className="box All Web">
          <img src={images.shuffle5} alt="shuffle"/>
            <figcaption className="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </figcaption>
        </figure>
        <figure className="box All Print">
          <img src={images.shuffle6} alt="shuffle"/>
            <figcaption className="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </figcaption>
        </figure>
        <figure className="box All Web">
          <img src={images.shuffle7} alt="shuffle"/>
            <figcaption className="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </figcaption>
        </figure>
        <figure className="box All App">
          <img src={images.shuffle8} alt="shuffle"/>
            <figcaption className="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </figcaption>
        </figure>
      </div>
      <a href="#/" className="more">more</a>
    </section>
  )
}

export default Portfolio