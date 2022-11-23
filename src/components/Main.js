import React from 'react';
import MainCarousel from './MainCarousel';
import '../style/Main.css'

const Main = ({onSolutionClick,onGalleryClick, onPartnerClick}) => {
    return (
        <section>
            <div className='main_carousel'>
                <MainCarousel onSolutionClick={onSolutionClick} onGalleryClick={onGalleryClick} onPartnerClick={onPartnerClick}/>
            </div>
            <div className='main_text'>
                <div className='main_coldwallet'>
                    <p className='main_text_title'>Cold Wallet</p>
                    <p className='main_text_content'>No additional hardware for cold storage. Download our PureWallet for free and get cold wallet storage without the purchase of any additional hardware. </p>
                </div>
                <div className='main_realworldmetaverse'>
                    <p className='main_text_title'>Real World Metaverse</p>
                    <p className='main_text_content'>The MMAI PureWorld is based on bringing real world technology and business into the metaverse. </p>
                </div>
                <div className='main_blockchain'>
                    <p className='main_text_title'>Blockchain Payment Processing</p>
                    <p className='main_text_content'>Our blockchain based payment processing system is aimed at bridging Web2 & Web3 eCom business. Increasing adoption for real cash flow</p>
                </div>
            </div>
        </section>
    );
};

export default Main;