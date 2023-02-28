import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/Gallery.css"

const GamesGallery = () => {

    const settings = {
        slide: 'div',
        row: 1,
        dots: false,
        infinite: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        initialSlide: 1,
        speed: 10000,
        cssEase: "linear"
    };

    return (
        <div className="gallery_container">
            <Slider {...settings}>
                <div className="gallery_box">
                    <img src="./images/imgNew/games_slide_1.webp" alt="MMAI PUREWORLD"/>
                </div>
                <div className="gallery_box">
                    <img src="./images/imgNew/games_slide_2.webp" alt="MMAI PUREWORLD"/>
                </div>
                <div className="gallery_box">
                    <img src="./images/imgNew/games_slide_3.webp" alt="MMAI PUREWORLD"/>
                </div>
                <div className="gallery_box">
                    <img src="./images/imgNew/games_slide_4.webp" alt="MMAI PUREWORLD"/>
                </div>
                <div className="gallery_box">
                    <img src="./images/imgNew/games_slide_5.webp" alt="MMAI PUREWORLD"/>
                </div>
            </Slider>
        </div>
    );
};

export default GamesGallery;