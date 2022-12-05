import React, {Component} from "react";
import Slider from "react-slick";
import '../style/slick-theme.css'
import '../mobileStyle/mobileSlick.css'

export default class MobileAP extends Component {
    render() {
        const settings = {
            dots: true,
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
                        <img className="slideImg"  src="./imgGallery/world_1.png" alt="MMAI PUREWORLD_METAVERSE_RACING"/>
                    </div>
                    <div className="slideBox">
                        <img className="slideImg"  src="./imgGallery/world_2.png" alt="MMAI PUREWORLD_METAVERSE_2"/>
                    </div>
                    <div className="slideBox">
                        <img className="slideImg"  src="./imgGallery/world_3.png" alt="MMAI PUREWORLD_MAIN STREET__METAVERSE_AIRVIEW"/>
                    </div>
                    <div className="slideBox">
                        <img className="slideImg"  src="./imgGallery/world_4.png" alt="MMAI PUREWORLD_METAVERSE_COFFEE_INSIDE"/>
                    </div>
                    <div className="slideBox">
                        <img className="slideImg"  src="./imgGallery/world_5.png" alt="MMAI PUREWORLD_METAVERSE_1"/>
                    </div>
                </Slider>
            </div>
        );
    }
}