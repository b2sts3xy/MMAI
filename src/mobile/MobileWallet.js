import React from 'react';
import '../mobileStyle/MobileWallet.css'

const MoblieWallet = () => {

    const mobileAPPClick = () => {
        alert("Coming Soon!");
    }
    
    return (
        <section>
            <div className='mobileWalletPhoto'>
                <div className='mobileStore'>
                    <img onClick={mobileAPPClick} className='mobileStoreImgA' src='./images/imgMobile/mobile_APPLESOTRE.webp' alt='mmaipure appstore' />
                    <a href='https://play.google.com/store/apps/details?id=com.nslab.purewallet&pli=1'><img className='mobileStoreImgG' src='./images/imgMobile/mobile_Google palystore.webp' alt='mmaipure google play store'/></a>
                </div>
            </div>
            <div className='mobileWalletContents'>
                <div className='mobileWalletContents1'>Released at End of December 2022</div>
                <div className='mobileWalletContents2'>MMAI PUREWALLET</div>
                <div className='mobileWalletContents3'>PureWallet is an innovation in blockchain technology. It offers a secure crypto wallet by introducing cold wallet capabilities without the purchase of any additional hardware. It is also the only wallet that is capable of peer-to-peer transactions without an internet connection. Download the PureWallet and enter the exciting world of Web3 decentralized crypto banking.</div>
            </div>
            <div className='mobileWalletVideo'>
                <a href='./imgMobile/mmaiwallet.mp4'><img id='mobileWalletVideoImg' src='./images/imgMobile/mobile_wallet_video.png' alt='mmaipurewallet video'/></a>
            </div>
        </section>
    );
};

export default MoblieWallet;