import React from 'react';
import {Carousel} from 'react-bootstrap';
import ReactPlayer from 'react-player'
import "../style/MainCarousel.css"

const MainCarousel = () => {
    return (
        <div className='maincarousel_container'>
            <Carousel fade="fade">
                <Carousel.Item>
                    <ReactPlayer
                        className='react-player'
                        url={process.env.PUBLIC_URL + '/videos/MMAImp4.mp4'}
                        width='100%'
                        height='100%'
                        playing={true}
                        muted={true}
                        loop={true}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src='/img/MainCarousel2.png' alt="사진2"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src='/img/MainCarousel3.png' alt="사진3"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MainCarousel;