import React from 'react';
import '../mobileStyle/MobileWallet.css'
import MobileAPWallet from './MobileAPWallet';

const MoblieWallet = () => {

    const mobileAPPClick = () => {
        alert("Coming Soon!");
    }
    
    return (
        <section>
            <div className='mobileWalletPhoto'>
                <div className='mobileStore'>
                    <img onClick={mobileAPPClick} className='mobileStoreImgA' src='./imgMobile/mobile_APPLESOTRE.webp' />
                    <a href='https://play.google.com/store/apps/details?id=com.nslab.pure_wallet&pli=1'><img className='mobileStoreImgG' src='./imgMobile/mobile_Google palystore.webp' /></a>
                </div>
            </div>
            <div className='mobileWalletContents'>
                <div className='mobileWalletContents1'>Released at End of December 2022</div>
                <div className='mobileWalletContents2'>MMAI PUREWALLET</div>
                <div className='mobileWalletContents3'>PureWallet is an innovation in blockchain technology. It offers a secure crypto wallet by introducing cold wallet capabilities without the purchase of any additional hardware. It is also the only wallet that is capable of peer-to-peer transactions without an internet connection. Download the PureWallet and enter the exciting world of Web3 decentralized crypto banking.</div>
            </div>
            <MobileAPWallet />
            <div className='mobileWalletVideo'>
                <a href='./imgMobile/mmaiwallet.mp4'><img id='mobileWalletVideoImg' src='./imgMobile/mobile_wallet_video.png' /></a>
            </div>
        </section>
    );
};

export default MoblieWallet;