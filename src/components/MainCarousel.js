import React, { useState } from 'react';
import "../style/MainCarousel.css"
import Headers from './Headers';
import StaticExampleMain from './StaticExampleMain';

const MainCarousel = ({onSolutionClick,onGalleryClick, onPartnerClick}) => {

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

    const onMetaverseClinet = () => {
        window.open('https://creativia.kr/files/MMAIPUREWORLDv011.zip', '_blank');
    }

    return (
        <section>
            <div id='first_carousel' className={(eventNum === event1id) ? 'default-view' : 'default-none'}>
                <div className='first_carousel_video_container'>
                    <video className='carousel_mp4' src="./img/mmai_homepage.mp4" height='1840px' poster="true" autoPlay muted loop playsInline preload='none'></video>
                </div>
                <div className='carousel_container_video'>
                    <Headers onSolutionClick={onSolutionClick} onGalleryClick={onGalleryClick} onPartnerClick={onPartnerClick} />
                    <div className='carousel_content'>
                        <div className='prevBtn'><img onClick={onArrowLeftClick} className='btnImg' src='./img/left.webp' alt=''/></div>
                        <div className='carousel_text'>
                            <spen className='main_carousel_text'>MMAI Metaverse World-<br/> Using Blockchain Technology<br/> Has Been Released.<br/></spen>
                            <spen className='sub_carousel_text'><br/><br/>We offer complete solutions for your business to integrate into the digital world,<br />from creating your virtual store to managing your inventory and hosting your store on our MetaMonkey AI Mall<br/><br/><br/><br/><br/></spen>
                            <div className='downloadBtn' onClick={onMetaverseClinet}>Download Launcher</div>
                        </div>
                        <div className='nextBtn'><img onClick={onArrowRightClick} className='btnImg' src='./img/right.webp' alt=''/></div>
                    </div>
                </div>
            </div>
            <div id='second_carousel' className={(eventNum === event2id) ? 'default-view' : 'default-none'}>
                {/* <div className='carousel_background'>
                    <img className='carousel_img' src='./img/MainCarousel1.webp' alt=''></img>
                </div> */}
                <div className='carousel_container'>
                    <Headers onSolutionClick={onSolutionClick} onGalleryClick={onGalleryClick} onPartnerClick={onPartnerClick}/>
                    <div className='carousel_content'>
                        <div className='prevBtn'><img onClick={onArrowLeftClick} className='btnImg' src='./img/left.webp' alt=''/></div>
                        <div className='carousel_text'>
                            <spen className='header_carousel_text'>Released at End of December 2022</spen>
                            <spen className='main_carousel_text'><br/>MMAI PUREWALLET<br/>Using The Cold Wallet in your Device!<br /></spen>
                            <spen className='sub_carousel_text'><br/><br/><br/>Using MMAI PUREWALLET, you can store and buy your Cryptocurrency in your Smart device freely <br /> trade Cryptocurrency with other people.<br /><br /><br /></spen>
                            <div className='storeBtn'>
                                <img onClick={onAppStore} className='storeImgA' src='./img/APPLESTORE.webp' alt=''/>
                                <a href='https://play.google.com/store/apps/details?id=com.nslab.pure_wallet&pli=1'><img className='storeImgG' src='./img/GooglePlay.webp' alt=''/></a>
                            </div>
                        </div>
                        <div className='nextBtn'><img onClick={onArrowRightClick} className='btnImg' src='./img/right.webp' alt=''/></div>
                    </div>
                </div>
            </div>
            <div id='third_carousel' className={(eventNum === event3id) ? 'default-view' : 'default-none'}>
                {/* <div className='carousel_background'>
                    <img className='carousel_img' src='./img/MainCarousel3.webp'alt=''></img>
                </div> */}
                <div className='carousel_container'>
                    <Headers onSolutionClick={onSolutionClick} onGalleryClick={onGalleryClick} onPartnerClick={onPartnerClick}/>
                    <div className='carousel_content'>
                        <div className='prevBtn'><img onClick={onArrowLeftClick} className='btnImg' src='./img/left.webp' alt=''/></div>
                        <div className='carousel_text'>
                            <spen className='main_carousel_text'>Metamonkey AI can integrate<br/> our real-world technology<br/> into any metaverse<br/></spen>
                            <spen className='sub_carousel_text'><br/><br/>Metamonkey AI can integrate our real-world AI technology into any metaverse.<br /> We offer solutions for companies to enhance user experiences and generate<br /> new revenue streams with our proprietary AI software and applications.<br/><br/><br/><br/></spen>
                            <div className='third_carouselBtn'>
                                <StaticExampleMain/>
                                <a href='https://uniswap.org/'><img className='third_carouselImg' src='./img/coin1.webp' alt=''/> </a>
                                <a href='https://www.bitmart.com/trade/en?symbol=MMAI_USDT&layout=basic&theme=dark'><img className='third_carouselImg' src='./img/coin2.webp' alt=''/> </a>
                                <a href='https://www.bkex.com/trade/MMAI_USDT'><img className='third_carouselImg' src='./img/coin3.webp' alt=''/> </a>
                                <a href='https://accounts.probit.com/id-id/login?client_id=probit-login&redirect_uri=https:%2F%2Fwww.probit.com%2Fauth%2Fcallback&state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIvdXNlci1jZW50ZXIvd2FsbGV0L2RlcG9zaXQvTU1BSSIsImlhdCI6MTY2ODc1ODMxMX0.pf_JjylfPlvvz8QIXUiobGEB8xV2PKOL_NqFBPWQzyU&response_type=code'><img className='third_carouselImg' src='./img/coin4.webp' alt=''/> </a>
                                <a href='https://www.lbank.info/exchange/mmai/usdt'><img className='third_carouselImg' src='./img/coin5.webp' alt=''/> </a>
                            </div>
                        </div>
                        <div className='nextBtn'><img onClick={onArrowRightClick} className='btnImg' src='./img/right.webp' alt=''/></div>
                    </div> 
                </div>
            </div>
        </section>
    );
};

export default MainCarousel;