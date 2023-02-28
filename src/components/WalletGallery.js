import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/Gallery.css"

const WalletGallery = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear"
    };

    return (
        <div className="gallery_container">
            <Slider {...settings}>
                <div className="gallery_box">
                    <img src="./images/imgNew/wallet_slide_1.webp" alt="MMAI PUREWORLD"/>
                </div>
                <div className="gallery_box">
                    <img src="./images/imgNew/wallet_slide_2.webp" alt="MMAI PUREWORLD"/>
                </div>
                <div className="gallery_box">
                    <img src="./images/imgNew/wallet_slide_3.webp" alt="MMAI PUREWORLD"/>
                </div>
                <div className="gallery_box">
                    <img src="./images/imgNew/wallet_slide_4.webp" alt="MMAI PUREWORLD"/>
                </div>
                <div className="gallery_box">
                    <img src="./images/imgNew/wallet_slide_5.webp" alt="MMAI PUREWORLD"/>
                </div>
            </Slider>
        </div>
    );
};

export default WalletGallery;