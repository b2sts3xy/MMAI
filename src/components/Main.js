import React from 'react';
import MainCarousel from './MainCarousel';
import '../style/Main.css'

const Main = ({onSolutionClick,onGalleryClick, onPartnerClick}) => {
    return (
        <section className='Main'>
            <div className='main_carousel'>
                <MainCarousel onSolutionClick={onSolutionClick} onGalleryClick={onGalleryClick} onPartnerClick={onPartnerClick}/>
            </div>
            <div className='main_text'>
                <div className='main_coldwallet'>
                    <p className='main_text_title'>MMAI PUREWALLET</p>
                    <p className='main_text_content'>No additional hardware needed to use this wallet for cold storage. Plus this is the first and only wallet that can make peer-to-peer payment without an internet connection. </p>
                </div>
                <div className='main_realworldmetaverse'>
                    <p className='main_text_title'>MMAI PUREWORLD</p>
                    <p className='main_text_content'>The MMAI PureWorld is based on research and development with a major focus on a great experience. Whether you are looking to have fun, looking for an investment opportunity, or looking to create your Ecommerce business on tomorrow's internet today. </p>
                </div>
                <div className='main_blockchain'>
                    <p className='main_text_title'>Payment Processing</p>
                    <p className='main_text_content'>Our blockchain based payment processing system is aimed at bridging Web2 & Web3 Ecommerce business. Plus it will drive Ecommerce in our PureWorld.</p>
                </div>
            </div>
        </section>
    );
};

export default Main;