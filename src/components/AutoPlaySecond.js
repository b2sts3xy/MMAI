import React, {Component} from "react";
import Slider from "react-slick";
import styled from "styled-components";
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
            autoplaySpeed: 10,
            cssEase: "linear",
            draggable : false,
            arrows : false,
            pauseOnFocus: false,
            pauseOnHover: false,
            pauseOnDotsHover: false,
            waitForAnimate: true,
        };

        // styled(Slider) `
        //     .slideImg {
        //         overflow-x : hidden;
        //     }
        // `;

        return (
            <div className="slide">
                <Slider {...settings}>
                    <div className="slideBox">
                        <img className="slideImg"  src="./imgGallery/wallet_1.png" alt=""/>
                    </div>
                    <div className="slideBox">
                        <img className="slideImg"  src="./imgGallery/wallet_2.jpg" alt=""/>
                    </div>
                    <div className="slideBox">
                        <img className="slideImg"  src="./imgGallery/wallet_3.png" alt=""/> 
                    </div>
                    <div className="slideBox">
                        <img className="slideImg"  src="./imgGallery/wallet_4.png" alt=""/>
                    </div>
                </Slider>
            </div>
        );
    }
}