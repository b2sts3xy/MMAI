import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/Gallery.css"

const WalletGallery = () => {

    const settings = {
        slide: 'div',
        row: 1,
        arrows : false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        pauseOnHover : false,
        initialSlide: 1,
        speed: 10000,
        cssEase: "linear",
        draggable : false
    };

    return (
        <div className="gallery_container">
            <Slider {...settings}>
                <div className="gallery_box">
                    <img src="./images/imgNew/wallet_slide_1.png" alt="MMAI PUREWORLD"/>
                </div>
                <div className="gallery_box">
                    <img src="./images/imgNew/wallet_slide_2.png" alt="MMAI PUREWORLD"/>
                </div>
                <div className="gallery_box">
                    <img src="./images/imgNew/wallet_slide_3.png" alt="MMAI PUREWORLD"/>
                </div>
                <div className="gallery_box">
                    <img src="./images/imgNew/wallet_slide_4.png" alt="MMAI PUREWORLD"/>
                </div>
                <div className="gallery_box">
                    <img src="./images/imgNew/wallet_slide_5.png" alt="MMAI PUREWORLD"/>
                </div>
            </Slider>
        </div>
    );
};

export default WalletGallery;