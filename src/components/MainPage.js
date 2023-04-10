import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Partners from './Partners';
import Technologypapers from './Technologypapers';
import MainCarousel from './MainCarousel';
import "../style/MainPage.css"
import Headers from './Headers';
import MainRenewal from './MainRenewal';
import KeyModal from './KeyModal';
import MoreInfo from './MoreInfo';

const MainPage = () => {
    const [modalState, setModalState] = useState(false);
    const [infoState, setInfoState] = useState(false);
    const [whatInfo, setWhatInfo] = useState("");

    return (
        <>
          <Headers />
          <MainCarousel setModalState={setModalState}/>
          {modalState && <KeyModal modalState={modalState} setModalState={setModalState}/>}
          {infoState && <MoreInfo whatInfo={whatInfo} setInfoState={setInfoState} />}
          <MainRenewal setInfoState={setInfoState} setWhatInfo={setWhatInfo} />
          <div className='middle'>
            <Technologypapers/>
            <div className="AI-Technology-Partners">
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