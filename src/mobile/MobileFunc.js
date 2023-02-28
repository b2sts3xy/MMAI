import React from 'react';
import FuncGallery from '../components/FuncGallery';
import '../mobileStyle/MobileFunc.css'

const MobileFunc = () => {
    return (
        <section>
            <img className='mobileFunc' src='./images/imgMobile/mobile_func.webp' alt='MMAI Head Office Building'/>
            <div className='mobileFuncContents'>
                <div className='mobileFuncContents1'>You can purchase MMAI land through NFT</div>
                <div className='mobileFuncContents2'>FUNCTIONAL NFTs</div>
                <div className='mobileFuncContents3'>MMAI PureWorld is a decentralized virtual economy that runs parallel to the real world by providing an immersive social network, an open-source<br/> e-commerce platform and true digital ownership of properties.</div>
            </div>
            <FuncGallery />
            <div className='mobileFuncVideo'>
                <img id='mobileFuncVideoImg' src='./images/imgMobile/mobile_func_video.webp' alt='mmaipure world video'/>
                <div className='mobileFuncVideo_btn'>
                    <a href='./images/video/mmaifunc.mp4'><img id='mobileFuncVideoImg_btnImg' src='./images/imgNew/play_btn.webp' alt='mmaipure games video'/></a>
                </div>
            </div>
        </section>
    );
};

export default MobileFunc;