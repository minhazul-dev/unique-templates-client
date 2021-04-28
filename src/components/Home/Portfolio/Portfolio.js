import React from 'react';
import img1 from '../../../images/portfolio_pic1.jpg'
import img2 from '../../../images/portfolio_pic2.jpg'
// import img3 from '../../../images/portfolio_pic3.jpg'
import img4 from '../../../images/portfolio_pic4.jpg'
import img5 from '../../../images/portfolio_pic5.jpg'
// import img6 from '../../../images/portfolio_pic6.jpg'
import './Portfolio.css'



const Portfolio = () => {

  return (
    <section className="mb-5">

      <h2 className="text-center mb-3 text-info mt-3 mb-5">Some of our templates (Please hover)</h2>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div className="photo-frame">
              <img src={img1} alt="" />
            </div>
          </div>
          <div class="col-md-6">
            <div className="photo-frame">
              <img src={img2} alt="" />
            </div>
          </div>
          <div class="col-md-6">
            {/* <div className="photo-frame">
              <img src={img3} alt=""/>
            </div> */}
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-6">
            <div className="photo-frame">
              <img src={img4} alt="" />
            </div>
          </div>
          <div class="col-md-6">
            <div className="photo-frame">
              <img src={img5} alt="" />
            </div>
          </div>
          <div class="col-md-6">
            {/* <div className="photo-frame">
              <img src={img6} alt=""/>
            </div> */}
          </div>
        </div>
      </div>

    </section>

  )
  {/* <section className="d flex">
<div>
        <div className="photo-frame">
          <div className="photo">
            <img src={img1} alt="" />
          </div>
          <div className="photo-details">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nesciunt iure quisquam consectetur est hic at sed velit, voluptatum quasi nostrum qui ullam accusamus accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui velit dolorem cum enim corporis sequi perferendis, alias ratione dolor accusamus distinctio deserunt unde atque eius itaque pariatur expedita consectetur quo provident! Molestias, quisquam hic?</p>
          </div>
        </div>
        <div className="photo-frame">
          <div className="photo">
            <img src={img2} alt="" />
          </div>
          <div className="photo-details">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nesciunt iure quisquam consectetur est hic at sed velit, voluptatum quasi nostrum qui ullam accusamus accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui velit dolorem cum enim corporis sequi perferendis, alias ratione dolor accusamus distinctio deserunt unde atque eius itaque pariatur expedita consectetur quo provident! Molestias, quisquam hic?</p>
          </div>
        </div>
        <div className="photo-frame">
          <div className="photo">
            <img src={img3} alt="" />
          </div>
          <div className="photo-details">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nesciunt iure quisquam consectetur est hic at sed velit, voluptatum quasi nostrum qui ullam accusamus accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui velit dolorem cum enim corporis sequi perferendis, alias ratione dolor accusamus distinctio deserunt unde atque eius itaque pariatur expedita consectetur quo provident! Molestias, quisquam hic?</p>
          </div>
        </div>
        <div className="photo-frame">
          <div className="photo">
            <img src={img4} alt="" />
          </div>
          <div className="photo-details">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nesciunt iure quisquam consectetur est hic at sed velit, voluptatum quasi nostrum qui ullam accusamus accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui velit dolorem cum enim corporis sequi perferendis, alias ratione dolor accusamus distinctio deserunt unde atque eius itaque pariatur expedita consectetur quo provident! Molestias, quisquam hic?</p>
          </div>
        </div>
      </div>
</section> */}


};

export default Portfolio;