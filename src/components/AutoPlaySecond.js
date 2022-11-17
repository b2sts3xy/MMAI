import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlaySecond extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 20000,
            autoplaySpeed: 20000,
            cssEase: "linear",
            draggable : false,
            arrows : false,
            pauseOnFocus: false,
            pauseOnHover: false,
            pauseOnDotsHover: false,
            waitForAnimate: true,
        };
        return (
            <div className="slide">
                <Slider {...settings}>
                    <div className="slideBox">
                        <img className="slideImg"  src="./imgGallery/1.png" alt=""/>
                    </div>
                    <div className="slideBox">
                        <img className="slideImg"  src="./imgGallery/2.png" alt=""/>
                    </div>
                    <div className="slideBox">
                        <img className="slideImg"  src="./imgGallery/3.png" alt=""/>
                    </div>
                    <div className="slideBox">
                        <img className="slideImg"  src="./imgGallery/4.png" alt=""/>
                    </div>
                </Slider>
            </div>
        );
    }
}