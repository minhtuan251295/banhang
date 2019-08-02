import React, { Component } from "react";

import slide1 from "../img/slide_1.jpg";
import slide2 from "../img/slide_2.jpg";
import slide3 from "../img/slide_3.jpg";
//Statefull : class component

class Carousel extends Component {
  render() {
    return (
      <div id="demo" className="carousel slide myCarousel" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} alt="Los Angeles" />
          </div>
          <div className="carousel-item">
            <img src={slide2} alt="Chicago" />
          </div>
          <div className="carousel-item">
            <img src={slide3} alt="New York" />
          </div>
        </div>

        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    )
  }
}

export default Carousel;