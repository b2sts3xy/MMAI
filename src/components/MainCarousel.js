import React, { useState } from 'react';
import "../style/MainCarousel.css"
import StaticExampleMain from './StaticExampleMain';

const MainCarousel = () => {

    const [eventNum, setEventNum] = useState(0)
    const [event1id, event2id, event3id] = [0, 1, 2];

    const onArrowLeftClick = () => {
        if (eventNum === 0) {
            setEventNum(2)
        } else {
            setEventNum(eventNum - 1)
        }
    }
    const onArrowRightClick = () => {
        if(eventNum === 2) {
            setEventNum(0)
        } else {
            setEventNum(eventNum + 1)
        }
    }

    const onAppStore = () => {
        alert("Coming Soon!")
    }

    return (
        <section>
            <div id='first_carousel' className={(eventNum === event1id) ? 'default-view' : 'default-none'}>
                <div>
                    <img className='carousel_img' src='./img/MainCarousel1.png' alt=''></img>
                </div>
                <div className='carousel_content'>
                    <div className='prevBtn'><img onClick={onArrowLeftClick} className='btnImg' src='./img/left.png' alt=''/></div>
                    <div className='carousel_text'>
                        <spen className='main_carousel_text'>MMAI Metarverse World,<br/> Using Blockchain Technology<br/> has been Released.<br/></spen>
                        <spen className='sub_carousel_text'><br/><br/>We offer complete solutions for your business to integrate into the digital world, from creating<br />your virtual store to managing your inventory and hosting your store on our MetaMonkey AI Mall<br/><br/><br/><br/><br/></spen>
                        <div className='downloadBtn' onClick={onAppStore}>Download Launcher</div>
                    </div>
                    <div className='nextBtn'><img onClick={onArrowRightClick} className='btnImg' src='./img/right.png' alt=''/></div>
                </div>
            </div>
            <div id='second_carousel' className={(eventNum === event2id) ? 'default-view' : 'default-none'}>
                <div className='carousel_background'>
                    <img className='carousel_img' src='./img/MainCarousel2.png' alt=''></img>
                </div>
                <div className='carousel_content'>
                    <div className='prevBtn'><img onClick={onArrowLeftClick} className='btnImg' src='./img/left.png' alt=''/></div>
                    <div className='carousel_text'>
                        <spen className='header_carousel_text'>Released at End of December 2022</spen>
                        <spen className='main_carousel_text'><br/>MMAI PUREWALLET<br/>Using the Cold Wallet for Free!<br /></spen>
                        <spen className='sub_carousel_text'><br/><br/><br/>Using MMAI PUREWALLET, You can store and buy your Cryptocurrency in your Smart device freely <br /> trande Cryptocurrency with other people.<br /><br /><br /></spen>
                        <div className='storeBtn'>
                            <img onClick={onAppStore} className='storeImgA' src='./img/APPLESTORE.png' alt=''/>
                            <a href='https://play.google.com/store/apps/details?id=com.nslab.pure_wallet&pli=1'><img className='storeImgG' src='./img/GooglePlay.png' alt=''/></a>
                        </div>
                    </div>
                    <div className='nextBtn'><img onClick={onArrowRightClick} className='btnImg' src='./img/right.png' alt=''/></div>
                </div>
            </div>
            <div id='third_carousel' className={(eventNum === event3id) ? 'default-view' : 'default-none'}>
                <div className='carousel_background'>
                    <img className='carousel_img' src='./img/MainCarousel3.png'alt=''></img>
                </div>
                <div className='carousel_content'>
                    <div className='prevBtn'><img onClick={onArrowLeftClick} className='btnImg' src='./img/left.png' alt=''/></div>
                    <div className='carousel_text'>
                        <spen className='main_carousel_text'>Metamonkey AI can intergrate<br/> our real-world technology<br/> into any metaverse<br/></spen>
                        <spen className='sub_carousel_text'><br/><br/>Metamonkey AI can integrate our real-world AI technology into any metaverse.<br /> We offer solutions for companies to enhance user experiences and generate<br /> new revenue streams with our proprietary AI software and applications.<br/><br/><br/><br/></spen>
                        <div className='third_carouselBtn'>
                            <StaticExampleMain/>
                            <a href='https://uniswap.org/'><img className='third_carouselImg' src='./img/coin1.png' alt=''/> </a>
                            <a href='https://www.bitmart.com/trade/en?symbol=MMAI_USDT&layout=basic&theme=dark'><img className='third_carouselImg' src='./img/coin2.png' alt=''/> </a>
                            <a href='https://www.bkex.com/trade/MMAI_USDT'><img className='third_carouselImg' src='./img/coin3.png' alt=''/> </a>
                            <a href='https://accounts.probit.com/id-id/login?client_id=probit-login&redirect_uri=https:%2F%2Fwww.probit.com%2Fauth%2Fcallback&state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIvdXNlci1jZW50ZXIvd2FsbGV0L2RlcG9zaXQvTU1BSSIsImlhdCI6MTY2ODc1ODMxMX0.pf_JjylfPlvvz8QIXUiobGEB8xV2PKOL_NqFBPWQzyU&response_type=code'><img className='third_carouselImg' src='./img/coin4.png' alt=''/> </a>
                            <a href='https://www.lbank.info/exchange/mmai/usdt'><img className='third_carouselImg' src='./img/coin5.png' alt=''/> </a>
                        </div>
                    </div>
                    <div className='nextBtn'><img onClick={onArrowRightClick} className='btnImg' src='./img/right.png' alt=''/></div>
                </div> 
            </div>
        </section>
    );
};

export default MainCarousel;