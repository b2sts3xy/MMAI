import React from 'react';
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
                    <img onClick={mobileAPPClick} className='mobileStoreImgA' src='./images/img/APPLESTORE.webp' alt='mmaipure appstore' />
                    <a href='https://play.google.com/store/apps/details?id=com.nslab.purewallet&pli=1'><img className='mobileStoreImgG' src='./images/img/GooglePlay.webp' alt='mmaipure google play store'/></a>
                </div>
            </div>
            <div className='mobileWalletContents'>
                <div className='mobileWalletContents1'>Released at End of December 2022</div>
                <div className='mobileWalletContents2'>MMAI PUREWALLET</div>
                <div className='mobileWalletContents3'>PureWallet is an innovation in blockchain technology. It offers secure crypto wallet by introducing cold wallet capabilities without the purchase of any additional hardware. It is also the only wallet that is capable of peer-to-peer transactions without an internet connection. Download the PureWallet and enter the exciting world of Web3 decentralized crypto banking.</div>
            </div>
            <div className='mobileWalletVideo'>
            <a href='./imgMobile/mmaiwallet.mp4'><img id='mobileWalletVideoImg' src='./images/imgMobile/mobile_wallet_video.png' alt='mmaipurewallet video'/></a>
                <div className='mobileWalletVideo_btn'>
                    <a href='/'><img id='mobileWalletVideoImg_btnImg' src='./images/imgNew/play_btn.webp' alt='mmaipure games video'/></a>
                </div>
            </div>
        </section>
    );
};

export default MoblieWallet;