import React from 'react';
import WalletGallery from '../components/WalletGallery';
import '../mobileStyle/MobileWallet.css'

const MoblieWallet = () => {

    const mobileAPPClick = () => {
        alert("Coming Soon!");
    }
    
    return (
        <section>
            <div className='mobileWalletPhoto'>
                <img className='mobile_wallet_main' src='./images/imgMobile/mobile_wallet.webp' alt='MMAI PUREWALLET'/>
                <div className='mobileStore'>
                    <img className='mobileStoreImgA' src='./images/img/APPLESTORE_coming_soon.webp' alt='mmaipure appstore' />
                    <a href='https://play.google.com/store/apps/details?id=com.nslab.purewallet&pli=1'><img className='mobileStoreImgG' src='./images/img/GooglePlay.webp' alt='mmaipure google play store'/></a>
                </div>
            </div>
            <div className='mobileWalletContents'>
                <div className='mobileWalletContents1'>Released at End of December 2022</div>
                <div className='mobileWalletContents2'>MMAI PUREWALLET</div>
                <div className='mobileWalletContents3'>Enjoy the Benefits of Cold Storage with MMAI PureWallet without the need for extra hardware – The Convenient and Secure Cryptocurrency Wallet! </div>
            </div>
            <WalletGallery />
            <div className='mobileWalletVideo'>
            <a href='./imgMobile/mmaiwallet.mp4'><img id='mobileWalletVideoImg' src='./images/imgMobile/mobile_wallet_video.webp' alt='mmaipurewallet video'/></a>
                <div className='mobileWalletVideo_btn'>
                    <a href='./video/mmaiwallet.mp4'><img id='mobileWalletVideoImg_btnImg' src='./images/imgNew/play_btn.webp' alt='mmaipure games video'/></a>
                </div>
            </div>
        </section>
    );
};

export default MoblieWallet;