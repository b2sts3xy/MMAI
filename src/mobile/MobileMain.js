import React from 'react';
import '../mobileStyle/MobileMain.css'

const MobileMain = () => {

    const mobileReload = () => {
        window
            .location
            .replace('/');
    }

    return (
        <section>
            <div className='mobileMainContainer'>
                <img className='mobile_main' src='./images/imgMobile/mobile_main.webp' alt='MMAI MAIN'/>
                <div className='mobileMainContents'>
                    <div className='mobileHeader'>
                        <div className='mobileTitle' onClick={mobileReload}><img className='mobile_main' src='./images/imgMobile/mmai_logo.webp' alt='MMAI MAIN LOGO' /></div>
                        <div className='mobileTab'>
                            <div className="mTab">
                                <a href='https://twitter.com/MMAIPure' aria-label='mmaipure twitter'>twitter</a>
                            </div>
                            <div className="mTab">
                                <a href='https://t.me/MMAI_Official' aria-label='mmaipure telegram'>telegram</a>
                            </div>
                            <div className="mTab">
                                <a href='https://www.youtube.com/channel/UCp0Bou6D571oZ_LTeUBd0EQ' aria-label='mmaipure youtube'>Youtube</a>
                            </div>
                            <div className='mTab'>
                                <a href='https://mmaipure.com/marketplace/' target="_blank" rel="noopener noreferrer" aria-label="Go MMAI MARKETPLACE">Marketplace</a>
                            </div>
                            <div className="mTab">
                                <a href='https://blog.mmaipure.com' aria-label='mmaipure blog'>blog</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileMain;