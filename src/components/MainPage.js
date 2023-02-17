import React, { useState, useRef } from 'react';
import Footer from './Footer';
import Partners from './Partners';
import Whitepapers from './Whitepapers';
import MainCarousel from './MainCarousel';
import "../style/MainPage.css"
import MarketPlacePopUp from './MarketPlacePopUp';
import Headers from './Headers';
import MainRevewal from './MainRevewal';

const MainPage = () => {

    // 각 항목 태그에 들어감
    const solutionRef = useRef(null);
    const galleryRef = useRef(null);
    const partnerRef = useRef(null);
  
    // 헤더에서 각 메뉴 클릭이벤트에 들어감
    const onSolutionClick = () => {
      solutionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const onGalleryClick = () => {
      galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const onPartnerClick = () => {
      partnerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <>
          <Headers onSolutionClick={onSolutionClick} onGalleryClick={onGalleryClick} onPartnerClick={onPartnerClick} />
          <MainCarousel />
          <MarketPlacePopUp />
          <MainRevewal />
          <div className='middle'>
            <Whitepapers/>
            <div ref={partnerRef} className="AI-Technology-Partners">
                <span>AI Technology Partners</span>
            </div>
            <Partners/>
          </div>
          <div className='bottom'>
            <Footer/>
          </div>
        </>
    );
};

export default MainPage;