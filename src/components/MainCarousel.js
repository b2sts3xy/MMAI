import React, {useState} from 'react';
import "../style/MainCarousel.css"
import {Link} from "react-router-dom";

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
        if (eventNum === 2) {
            setEventNum(0)
        } else {
            setEventNum(eventNum + 1)
        }
    }

    const onAppStore = () => {
        alert("Coming Soon!")
    }

    const onMarketPlace = () => {
        window.open('https://mmaipure.com/marketplace/', '_blank');
    }

    return (
        <section>
            <div
                id='first_carousel'
                className={(
                    eventNum === event1id)
                    ? 'default-view'
                    : 'default-none'}>
                <div className='carousel_container'>
                    <div className='carousel_content'>
                        <div className='prevBtn'><img
                            onClick={onArrowLeftClick}
                            className='btnImg'
                            src='./images/img/left.webp'
                            alt=''/></div>
                        <div className='carousel1_text'>
                            <span className='main_carousel_text'>MMAI PUREWORLD
                                <br/>
                                KEYS TO THE CITY RELEASE!<br/></span>
                            <span className='sub_carousel_text'><br/><br/>The Keys To The City are 5,002
                                NFTs that give holders exclusive rights within the MMAI PUREWOROLD!<br/><br/><br/><br/></span>
                            <div className='downloadBtn' onClick={onMarketPlace}>KEYS TO THE CITY</div>
                        </div>
                        <div className='nextBtn'><img
                            onClick={onArrowRightClick}
                            className='btnImg'
                            src='./images/img/right.webp'
                            alt=''/></div>
                    </div>
                </div>
            </div>

            <div
                id='second_carousel'
                className={(
                    eventNum === event2id)
                    ? 'default-view'
                    : 'default-none'}>
                <div className='carousel_container'>
                    <div className='carousel_content'>
                        <div className='prevBtn'><img
                            onClick={onArrowLeftClick}
                            className='btnImg'
                            src='./images/img/left.webp'
                            alt=''/></div>
                        <div className='carousel_text'>
                            <span className='header_carousel_text'>Released at End of December 2022</span>
                            <span className='main_carousel_text'><br/>MMAI PUREWALLET<br/>Using The Cold Wallet in your Device!<br/></span>
                            <span className='sub_carousel_text'><br/><br/><br/>Using MMAI PUREWALLET, you
                                can store and buy your Cryptocurrency in your Smart device freely
                                <br/>
                                trade Cryptocurrency with other people.<br/><br/><br/></span>
                            <div className='storeBtn'>
                                <img
                                    onClick={onAppStore}
                                    className='storeImgA'
                                    src='./images/img/APPLESTORE.webp'
                                    alt=''/>
                                <a
                                    href='https://play.google.com/store/apps/details?id=com.nslab.purewallet&pli=1'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="google play store"><img className='storeImgG' src='./images/img/GooglePlay.webp' alt=''/></a>
                            </div>
                        </div>
                        <div className='nextBtn'><img
                            onClick={onArrowRightClick}
                            className='btnImg'
                            src='./images/img/right.webp'
                            alt=''/></div>
                    </div>
                </div>
            </div>

            <div
                id='third_carousel'
                className={(
                    eventNum === event3id)
                    ? 'default-view'
                    : 'default-none'}>
                <div className='carousel_container'>
                    <div className='carousel_content'>
                        <div className='prevBtn'><img
                            onClick={onArrowLeftClick}
                            className='btnImg'
                            src='./images/img/left.webp'
                            alt=''/></div>
                        <div className='carousel_text'>
                            <span className='main_carousel_text'>MetaMonkey AI can integrate<br/>
                                our real-world technology<br/>
                                into any Metaverse<br/></span>
                            <span className='sub_carousel_text'><br/><br/>MetaMonkey AI can integrate our real-world AI technology into any Metaverse.<br/>
                                We offer solutions for companies to enhance user experiences and generate<br/>
                                new revenue streams with our proprietary AI software and applications.<br/><br/><br/><br/></span>
                            <div className='third_carouselBtn'>
                                <div className='BN_container'>
                                    <Link to="/Guide" target="_blank">
                                        <img className="mc_BtnBuy" src='./images/img/buyBtn.png' alt='Buy MMAI NOW!'/>
                                    </Link>
                                </div>
                                <div className='third_link'>
                                    <a href='https://uniswap.org/'><img className='third_carouselImg' src='./images/img/coin1.webp' alt=''/>
                                    </a>
                                    <a
                                        href='https://www.bitmart.com/trade/en?symbol=MMAI_USDT&layout=basic&theme=dark'><img className='third_carouselImg' src='./images/img/coin2.webp' alt=''/>
                                    </a>
                                    <a href='https://www.bkex.com/trade/MMAI_USDT'><img className='third_carouselImg' src='./images/img/coin3.webp' alt=''/>
                                    </a>
                                    <a
                                        href='https://accounts.probit.com/id-id/login?client_id=probit-login&redirect_uri=https:%2F%2Fwww.probit.com%2Fauth%2Fcallback&state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIvdXNlci1jZW50ZXIvd2FsbGV0L2RlcG9zaXQvTU1BSSIsImlhdCI6MTY2ODc1ODMxMX0.pf_JjylfPlvvz8QIXUiobGEB8xV2PKOL_NqFBPWQzyU&response_type=code'><img className='third_carouselImg' src='./images/img/coin4.webp' alt=''/>
                                    </a>
                                    <a href='https://www.lbank.info/exchange/mmai/usdt'><img className='third_carouselImg' src='./images/img/coin5.webp' alt=''/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='nextBtn'><img
                            onClick={onArrowRightClick}
                            className='btnImg'
                            src='./images/img/right.webp'
                            alt=''/></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainCarousel;