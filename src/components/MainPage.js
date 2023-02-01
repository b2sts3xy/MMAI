import React, { useState, useRef } from 'react';
import AutoPlaySecond from './AutoPlaySecond';
import AutoPlay from './AutoPlay'
import Footer from './Footer';
import Partners from './Partners';
import Whitepapers from './Whitepapers';
import Solution from './Solution';
import Main from './Main';
import "../style/MainPage.css"
import MarketPlacePopUp from './MarketPlacePopUp';

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
  
    const [rendNum, setRendNum] = useState(false);

    return (
        <>
          <Main onSolutionClick={onSolutionClick} onGalleryClick={onGalleryClick} onPartnerClick={onPartnerClick}/>
          <MarketPlacePopUp />
          <div className='middle'>
              <div ref={solutionRef}><span className="MMAI-Solution">MMAI SOLUTION</span></div>      
              <Solution/> 
          </div>
          <div className='gallBody'>
              <div className='gallBox'>
                  <div ref={galleryRef} className='gallText'>MMAI Gallery</div>
                  <div className='but'>
                    <button className={rendNum ? 'gallBtn' : 'gallBtn_active'} onClick={() => {setRendNum(false)}}>MMAI WORLD</button>
                    <button className={rendNum ? 'gallBtn_active' : 'gallBtn'} onClick={() => {setRendNum (true)}}>MMAI PUREWALLET</button>
                  </div>
              </div>
              {rendNum ? <AutoPlaySecond/> : <AutoPlay/>}
          </div>
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