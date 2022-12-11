import React, {Component} from "react";
import Slider from "react-slick";
import '../style/slick-theme.css'
import '../style/slick.css'

export default class MobileAP extends Component {
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
                        <img className="MslideImg"  src="./imgMobile/mobileworld1.webp" alt="MMAI PUREWORLD_METAVERSE_RACING"/>
                    </div>
                    <div className="slideBox">
                        <img className="MslideImg"  src="./imgMobile/mobileworld2.webp" alt="MMAI PUREWORLD_METAVERSE_2"/>
                    </div>
                    <div className="slideBox">
                        <img className="MslideImg"  src="./imgMobile/mobileworld3.webp" alt="MMAI PUREWORLD_MAIN STREET__METAVERSE_AIRVIEW"/>
                    </div>
                    <div className="slideBox">
                        <img className="MslideImg"  src="./imgMobile/mobileworld4.webp" alt="MMAI PUREWORLD_METAVERSE_COFFEE_INSIDE"/>
                    </div>
                </Slider>
            </div>
        );
    }
}