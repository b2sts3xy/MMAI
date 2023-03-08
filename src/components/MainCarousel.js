import React, {useState, useEffect} from 'react';
import "../style/MainCarousel.css"
import {Link} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const MainCarousel = ({setModalState}) => {

    useEffect(() => {
        AOS.init({duration : 1000});
      })

    const [eventNum, setEventNum] = useState()
    const [event1id, event2id, event3id, event4id] = [0, 1, 2, 3];

    const onArrowLeftClick = () => {
        if (eventNum === 0) {
            setEventNum(3)
        } else {
            setEventNum(eventNum - 1)
        }
    }
    const onArrowRightClick = () => {
        if (eventNum === 3) {
            setEventNum(0)
        } else {
            setEventNum(eventNum + 1)
        }
    }

    const onAppStore = () => {
        alert("Coming Soon!")
    }

    const onMarketPlace = () => {
        // window.open('https://mmaipure.com/marketplace/', '_blank');
        alert("NFT Sale done")
    }

    const onKeyModalOn = () => {
        setModalState(true);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setEventNum(3)
        }, 600);
    },[])

    return (
        <section>
            <div className={(
                    eventNum === event1id)
                    ? 'default-view'
                    : 'default-none'}>
                <div className='carousel1_container'>
                    <img className='carousel1_img' src='./images/img/MainCarousel1.webp' alt='MAIN BANNER'/>
                    <div className='carousel1_content'>
                        <div className='prevBtn'><img
                            onClick={onArrowLeftClick}
                            className='btnImg'
                            src='./images/img/left.webp'
                            alt=''/></div>
                        <div className='carousel1_text'>
                            <div className='main_carousel1_text'>MMAI PUREWORLD
                                <br/>
                                KEYS TO THE CITY RELEASE!</div>
                            <div className='sub_carousel1_text'>The Keys To The City are 5,002
                                NFTs that give holders exclusive rights within the MMAI PUREWOROLD!</div>
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
                className={(
                    eventNum === event2id)
                    ? 'default-view'
                    : 'default-none'}>
                <div className='carousel2_container'>
                    <img className='carousel2_img' src='./images/img/MainCarousel2.webp' alt='MAIN BANNER'/>
                    <div className='carousel2_content'>
                        <div className='prevBtn'><img
                            onClick={onArrowLeftClick}
                            className='btnImg'
                            src='./images/img/left.webp'
                            alt=''/></div>
                        <div className='carousel2_text'>
                            <div className='header_carousel2_text'>Released at End of December 2022</div>
                            <div className='main_carousel2_text'>MMAI PUREWALLET<br/>Using The Cold Wallet in your Device!</div>
                            <div className='sub_carousel2_text'>Using MMAI PUREWALLET, you
                                can store and buy your Cryptocurrency in your Smart device freely
                                <br/>
                                trade Cryptocurrency with other people.</div>
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
                className={(
                    eventNum === event3id)
                    ? 'default-view'
                    : 'default-none'}>
                <div className='carousel3_container'>
                    <img className='carousel3_img' src='./images/img/MainCarousel3.webp' alt='MAIN BANNER'/>
                    <div className='carousel3_content'>
                        <div className='prevBtn'><img
                            onClick={onArrowLeftClick}
                            className='btnImg'
                            src='./images/img/left.webp'
                            alt=''/></div>
                        <div className='carousel3_text'>
                            <div className='main_carousel3_text'>MMAI can integrate<br/>
                                our real-world technology<br/>
                                into any Metaverse</div>
                            <div className='sub_carousel3_text'>MMAI can integrate our real-world AI technology into any Metaverse.<br/>
                                We offer solutions for companies to enhance user experiences and generate<br/>
                                new revenue streams with our proprietary AI software and applications.</div>
                            
                            <div className='third_carouselBtn'>
                                <div className='BN_container'>
                                    <Link to="/Guide" target="_blank">
                                        <img className='thrid_buybtn' src='./images/imgNew/buy_now.webp' alt='Buy MMAI NOW!'/>
                                    </Link>
                                </div>
                                <div className='third_link'>
                                    <a href='https://uniswap.org/' target='_blank' className='third_link_a' rel="noopener noreferrer" aria-label="MMAI COIN"><img className='third_carouselImg' src='./images/imgNew/coin1.webp' alt=''/>
                                    </a>
                                    <a
                                        href='https://www.bitmart.com/trade/en?symbol=MMAI_USDT&layout=basic&theme=dark' target='_blank' className='third_link_a' rel="noopener noreferrer" aria-label="MMAI COIN"><img className='third_carouselImg' src='./images/imgNew/coin2.webp' alt=''/>
                                    </a>
                                    <a href='https://www.bkex.com/trade/MMAI_USDT' target='_blank' className='third_link_a' rel="noopener noreferrer" aria-label="MMAI COIN"><img className='third_carouselImg' src='./images/imgNew/coin3.webp' alt=''/>
                                    </a>
                                    <a
                                        href='https://accounts.probit.com/id-id/login?client_id=probit-login&redirect_uri=https:%2F%2Fwww.probit.com%2Fauth%2Fcallback&state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIvdXNlci1jZW50ZXIvd2FsbGV0L2RlcG9zaXQvTU1BSSIsImlhdCI6MTY2ODc1ODMxMX0.pf_JjylfPlvvz8QIXUiobGEB8xV2PKOL_NqFBPWQzyU&response_type=code' target='_blank' className='third_link_a' rel="noopener noreferrer" aria-label="MMAI COIN"><img className='third_carouselImg' src='./images/imgNew/coin4.webp' alt=''/>
                                    </a>
                                    <a href='https://www.lbank.info/exchange/mmai/usdt' target='_blank' className='third_link_a' rel="noopener noreferrer" aria-label="MMAI COIN"><img className='third_carouselImg' src='./images/imgNew/coin5.webp' alt=''/>
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

            <div className={(eventNum === event4id)
                    ? 'default-view'
                    : 'default-none'}>
                    <div className='carousel4_container'>
                        <img className='carousel4_img' src='./images/img/MainCarousel4.webp' alt='MAIN BANNER'/>
                        <div className='carousel4_content'>
                            <div className='prevBtn'><img onClick={onArrowLeftClick} className='btnImg' src='./images/img/left.webp' alt=''/></div>
                            <div className='carousel4_center'>
                                <div className='carousel4_main_text'>MMAI GAMES is launching soon!</div>
                                <div className='carousel4_sub_text'>The holders of MMAIPUREWORLD Key-to-the-City can play Demo version Now!</div>
                                <div className='carousel4_downloadBtn' onClick={onKeyModalOn}>
                                    {/* <a href={process.env.PUBLIC_URL +'/MMAIGAME.zip'} download> */}
                                        Download
                                    {/* </a> */}
                                </div>
                            </div>
                            <div className='nextBtn'><img onClick={onArrowRightClick} className='btnImg' src='./images/img/right.webp' alt=''/></div>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default MainCarousel;