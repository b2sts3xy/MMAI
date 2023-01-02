import React, {Component} from "react";
import Slider from "react-slick";
import '../style/slick-theme.css'
import '../style/slick.css'

export default class AutoPlaySecond extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 20000,
            autoplaySpeed: 10,
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
                        <img className="slideImg"  src="./imgGallery/wallet_1.webp" alt="MMAI_PUREWALLET_1"/>
                    </div>
                    <div className="slideBox">
                        <img className="slideImg"  src="./imgGallery/wallet_2.png" alt="MMAI_PUREWALLET_2"/>
                    </div>
                    <div className="slideBox">
                        <img className="slideImg"  src="./imgGallery/wallet_3.webp" alt="MMAI_PUREWALLET_3"/> 
                    </div>
                    <div className="slideBox">
                        <img className="slideImg"  src="./imgGallery/wallet_4.webp" alt="MMAI_PUREWALLET_4"/>
                    </div>
                </Slider>
            </div>
        );
    }
}