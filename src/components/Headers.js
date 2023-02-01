import React from 'react';
import "../style/Headers.css"

const Headers = ({onSolutionClick,onGalleryClick, onPartnerClick}) => {
    const reload = () => {
        window.location.replace('/');
    }

    return (
        <section className='header_container'>
            <div className='header_left'>
                <img className='header_name' onClick={reload} src='./img/mmai_logo.png' alt='MMAI MAIN LOGO' />
            </div>
            <div className='header_center' target="_blank">
                <span className='header_categori1'>Home</span>
                <a href='https://mmaipure.com/marketplace/' target="_blank" rel="noopener noreferrer" aria-label="Go MMAI MARKETPLACE" className='header_categori2'>MMAI MARKETPLACE</a>
                <a href='https://go.mmaipure.com/nft-sale' className='header_categori2'>MMAI NFT SALE</a>
                <a href='https://blog.mmaipure.com/' className='header_categori2'>MMAI BLOG</a>
                {/* <span onClick={onSolutionClick} className='header_categori2'>MMAI SOLUTIONS</span>
                <span onClick={onGalleryClick} className='header_categori2'>MMAI GALLERY</span>
                <span onClick={onPartnerClick} className='header_categori2'>PARTNERS</span> */}
                <a href='https://blog.mmaipure.com/' className='header_categori2'>MMAI BLOG</a>
            </div>
            <div className='header_right'>
                <a href='https://twitter.com/metamonkey_ai' className='header_sns'>Twitter</a>
                <a href='https://t.me/MMAI_Official' className='header_sns'>Telegram</a>
                <a href='https://www.youtube.com/channel/UCp0Bou6D571oZ_LTeUBd0EQ' className='header_sns'>YouTube</a>
                </div>
        </section>
    );
};

export default Headers;