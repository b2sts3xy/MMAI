import React, { useEffect } from 'react';
import '../style/MainRenewal.css'
import AOS from "aos";
import "aos/dist/aos.css";
import WorldGallery from './WorldGallery';
import GamesGallery from './GamesGallery';
import { Wallet } from 'ethers';
import WalletGallery from './WalletGallery';

const MainRenewal = ({setInfoState, setWhatInfo}) => {

    useEffect(() => {
        AOS.init({duration : 1000});
      })

    const onMarketPlace = () => {
        window.open('https://mmaipure.com/marketplace/', '_blank');
    }

    const onBuyNow = () => {
        window.open('/Guide', '_blank')
    }

    const onCERTIK = () => {
        window.open('https://www.certik.com/projects/metamonkey-ai', '_blank')
    }

    const onWorldVideo = () => {
        window.open('./video/mmaiworld.mp4')
    }

    const onGameVideo = () => {
        window.open('./video/mmaigames.mp4')
    }

    const onPWDownload = () => {
        alert("Coming Soon!")
    }
    
    const onWorldInfo = () => {
        setInfoState(true);
        setWhatInfo("world");
    }

    const onWalletInfo = () => {
        setInfoState(true);
        setWhatInfo("wallet");
    }

    const onGamesInfo = () => {
        setInfoState(true);
        setWhatInfo("games");
    }


    return (
        <>
            {/* 월드와 비디오 파트 1 전체 너비 90% */}
            <div className='p1_container' data-aos="fade-up" data-aos-duration="1500">
                <div className='world_container'>
                    <img className='p1_img' src='./images/imgNew/main_world.webp' alt='MMAI PUREWORLD'/>
                    <div className='world_box'>
                        <div className='world_contents' data-aos="fade-up" data-aos-duration="1500">
                            <div className='wc_title'>MMAI PureWorld</div>
                            <div className='wc_sub_title'>MMAI PureWorld is a virtual world where users can socialize, be entertained, and do business in the most realistic way possible. </div>
                            <span className='more_btn' onClick={onWorldInfo}>more info</span>
                            <div className='p1_white_btn' onClick={onPWDownload}><span>Download</span></div>
                        </div>
                    </div>
                </div>
                <div className='wallet_container'>
                    <img className='p1_img'  src='./images/imgNew/main_wallet.webp' alt='MMAI PUREWORLD'/>
                    <div className='wallet_box'>
                        <div className='wallet_contents' data-aos="fade-up" data-aos-duration="1500">
                            <div className='wc_title'>MMAI PureWallet</div>
                            <div className='wc_sub_title'>Convenience + Security - MMAI PureWallet is the world's first and only cryptocurrency wallet that allows you to do offline peer-to-peer payment transactions.</div>
                            <span className='more_btn' onClick={onWalletInfo}>more info</span>
                            <a href='./video/mmaiwallet.mp4' target='_blank' className='p1_white_btn' rel="noopener noreferrer" aria-label="MMAI PUREWALLET DEMO WIDEO"><span>Video</span></a>
                        </div>
                    </div>
                </div>
            </div>



            {/* 큰 비디오 파트 2 */}
            <div className='ww_play_video' data-aos="fade-up" data-aos-duration="1500">
                <img id='mv_img' src='./images/imgNew/meta_video.webp' alt='play_video'/>
                <div className='ww_play_video_btn'>
                    <img onClick={onWorldVideo} id='mv_play_btn' src='./images/imgNew/play_btn.webp' alt='play_video'/>
                </div>
            </div>

            {/* 비디오 밑에 파트 3 전체 너비 80% */}
            <div className='part3_text'>
                <span className='p3_main'>Unlock the Potential of your Business in the Metaverse with MMAI PureWorld</span>
                <span className='p3_sub'><br /><br />At MMAI, we provide solutions to bridge the gap between real world business and the potential of the virtual universe. </span>
            </div>

            <WorldGallery />

            <div className='part3_store' data-aos="fade-up" data-aos-duration="2000">
                <div className='p3_box'>
                    <div className='p3_store_text_btn' data-aos="fade-up" data-aos-duration="1500">
                        <span className='p3_store_main'>MMAI PureWallet<br /> Innovation in<br /> Blockchain System</span>
                        <span className='p3_store_sub'><br /><br />Enjoy the Benefits of Cold Storage with MMAI PureWallet  <br/> without the need for extra hardware.  <br/> <b>The Convenient and Secure Cryptocurrency Wallet!</b> <br/><br/><br/></span>
                        <div className='p3_store_btn'>
                            <a href='https://play.google.com/store/apps/details?id=com.nslab.purewallet&pli=1' target="_blank" rel="noopener noreferrer" aria-label="google play store"><img className='p3_storeImgG' src='./images/img/GooglePlay.webp' alt=''/></a>
                            <img className='p3_storeImgA' src='./images/img/APPLESTORE_coming_soon.webp' alt='Appstore'/>
                        </div>
                    </div>
                    <div className='p3_store_img' data-aos="fade-up" data-aos-duration="1500">
                        <img id='p3_img' src='./images/imgNew/p3_img.webp' alt='using mmai pure wallet'/>
                    </div>  
                </div>
            </div>

            <WalletGallery />
            
            <div className='wallet_func_text'>
                <span className='wallet_func'>MMAI PureWorld<br /><br /></span>
            </div>

            {/* NFT 토큰 파트 4  전체 너비 90% */}
            <div className='visit_marketplace_container'>
                <div className='visit_marketplace' data-aos="fade-up" data-aos-duration="1500">
                    <div className='vm_left'>
                        <div className='vm_left_box'>
                            <span id='p4_vm_btn' onClick={onMarketPlace}>Visit Marketplace</span>
                            {/* <img id='p4_vm_btn' onClick={onMarketPlace} src="./images/imgNew/visit_marketplace_btn.webp" alt='Visit Marketplace'/> */}
                        </div>
                    </div>
                    <div className='vm_right'>
                        <img id='p4_right_img' src='./images/imgNew/visit_marketplace_rear.webp' alt='Rear ARENAS'/>
                    </div>
                </div>
            </div>
            <div className='NFT_ticket'>
                <div className='NFT_box'>
                    <div className='NFT_text'>
                        <span className='NFT_maintext'>12 Exclusive Properties to Own</span>
                        <span className='NFT_subtext'><br /><br />Discover 12 Exclusive Properties to Own in MMAI PureWorld Metaverse Platform!</span>
                    </div>
                </div>
            </div>

            {/* NFT 사진들 */}
            <div className='NFT_photo'>
                {/* NFT 1 */}
                <div className='NFT_line'>
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        {/* 플립 카드 */}
                        <div className='filp_card'>
                            <div className='card_front'>
                                <img id='NFT_info_img' src='./images/imgNew/NFT_ARENA.webp' alt='marketplace ticket' />
                            </div>
                            <div className='card_back'>
                                <img id='NFT_info_img' src='./images/imgNew/ARENA_back.webp' alt='marketplace ticket' />
                            </div>
                        </div>
                        <span className='ticket_name'><br /><br />ARENA<br /></span>
                        <span className='ticket_number'>2&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>

                    {/* NFT 2 */}
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <div className='filp_card'>
                            <div className='card_front'>
                                <img id='NFT_info_img' src='./images/imgNew/BUILDING_ELECTRONIC_DISPLAY.webp' alt='marketplace ticket' />
                            </div>
                            <div className='card_back'>
                                <img id='NFT_info_img' src='./images/imgNew/BUILDING_ELECTRONIC_DISPLAY_back.webp' alt='marketplace ticket' />
                            </div>
                        </div>
                        <span className='ticket_name'><br /><br />BUILDING ELECTRONIC DISPLAY<br /></span>
                        <span className='ticket_number'>500&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>

                    {/* NFT 3 */}
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <div className='filp_card'>
                            <div className='card_front'>
                                <img id='NFT_info_img' src='./images/imgNew/AD_BILLBOARD.webp' alt='marketplace ticket' />
                            </div>
                            <div className='card_back'>
                                <img id='NFT_info_img' src='./images/imgNew/AD_BILLBOARD_back.webp' alt='marketplace ticket' />
                            </div>
                        </div>
                        <span className='ticket_name'><br /><br />AD BILLBOARD<br /></span>
                        <span className='ticket_number'>500&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>
                </div>

                {/* NFT 4 */}
                <div className='NFT_line'>
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <div className='filp_card'>
                            <div className='card_front'>
                                <img id='NFT_info_img' src='./images/imgNew/STAND_AD.webp' alt='marketplace ticket' />
                            </div>
                            <div className='card_back'>
                                <img id='NFT_info_img' src='./images/imgNew/STAND_AD_back.webp' alt='marketplace ticket' />
                            </div>
                        </div>      
                        <span className='ticket_name'><br /><br />STAND AD<br /></span>
                        <span className='ticket_number'>500&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>

                    {/* NFT 5 */}
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <div className='filp_card'>
                            <div className='card_front'>
                                <img id='NFT_info_img' src='./images/imgNew/STORE(LARGE).webp' alt='marketplace ticket' />
                            </div>
                            <div className='card_back'>
                                <img id='NFT_info_img' src='./images/imgNew/STORE(LARGE)_back.webp' alt='marketplace ticket' />
                            </div>
                        </div>
                        <span className='ticket_name'><br /><br />STORE (LARGE)<br /></span>
                        <span className='ticket_number'>250&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>

                    {/* NFT 6 */}
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <div className='filp_card'>
                            <div className='card_front'>
                                <img id='NFT_info_img' src='./images/imgNew/STORE(MEDIUM).webp' alt='marketplace ticket' />
                            </div>
                            <div className='card_back'>
                                <img id='NFT_info_img' src='./images/imgNew/STORE(MEDIUM)_back.webp' alt='marketplace ticket' />
                            </div>
                        </div>
                        <span className='ticket_name'><br /><br />SOTRE (MEDIUM)<br /></span>
                        <span className='ticket_number'>250&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>
                </div>

                {/* NFT 7 */}
                <div className='NFT_line'>
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <div className='filp_card'>
                            <div className='card_front'>
                                <img id='NFT_info_img' src='./images/imgNew/STORE(SMALL).webp' alt='marketplace ticket' />
                            </div>
                            <div className='card_back'>
                                <img id='NFT_info_img' src='./images/imgNew/STORE(SMALL)_back.webp' alt='marketplace ticket' />    
                            </div>
                        </div>
                        <span className='ticket_name'><br /><br />STORE (SMALL)<br /></span>
                        <span className='ticket_number'>400&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>

                    {/* NFT 8 */}
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <div className='filp_card'>
                            <div className='card_front'>
                                <img id='NFT_info_img' src='./images/imgNew/OFFICE.webp' alt='marketplace ticket' />
                            </div>
                            <div className='card_back'>
                                <img id='NFT_info_img' src='./images/imgNew/OFFICE_back.webp' alt='marketplace ticket' />
                            </div>
                        </div>
                        <span className='ticket_name'><br /><br />OFFICE<br /></span>
                        <span className='ticket_number'>500&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>

                    {/* NFT 9 */}
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <div className='filp_card'>
                            <div className='card_front'>
                                <img id='NFT_info_img' src='./images/imgNew/BOOTH(LARGE).webp' alt='marketplace ticket' />
                            </div>
                            <div className='card_back'>
                                <img id='NFT_info_img' src='./images/imgNew/BOOTH(LARGE)_back.webp' alt='marketplace ticket' />
                            </div>
                        </div>
                        <span className='ticket_name'><br /><br />BOOTH (LARGE)<br /></span>
                        <span className='ticket_number'>100&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>
                </div>

                {/* NFT 10 */}
                <div className='NFT_line'>
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <div className='filp_card'>
                            <div className='card_front'>
                                <img id='NFT_info_img' src='./images/imgNew/BOOTH(MEDIUM).webp' alt='marketplace ticket' />
                            </div>
                            <div className='card_back'>
                                <img id='NFT_info_img' src='./images/imgNew/BOOTH(MEDIUM)_back.webp' alt='marketplace ticket' />
                            </div>
                        </div>
                        <span className='ticket_name'><br /><br />BOOTH (MEDIUM)<br /></span>
                        <span className='ticket_number'>250&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>

                    {/* NFT 11 */}
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <div className='filp_card'>
                            <div className='card_front'>
                                <img id='NFT_info_img' src='./images/imgNew/BOOTH(SMALL).webp' alt='marketplace ticket' />
                            </div>
                            <div className='card_back'>
                                <img id='NFT_info_img' src='./images/imgNew/BOOTH(SMALL)_back.webp' alt='marketplace ticket' />    
                            </div>
                        </div>
                        <span className='ticket_name'><br /><br />BOOTH (SMALL)<br /></span>
                        <span className='ticket_number'>400&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>

                    {/* NFT 12 */}
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <div className='filp_card'>
                            <div className='card_front'>
                                <img id='NFT_info_img' src='./images/imgNew/MMAI_MYSTERY_CAR.webp' alt='marketplace ticket' />
                            </div>
                            <div className='card_back'>
                                <img id='NFT_info_img' src='./images/imgNew/MMAI_MYSTERY_CAR_back.webp' alt='marketplace ticket' />     
                            </div>
                        </div>
                        <span className='ticket_name'><br /><br />MMAI MYSTERY CAR<br /></span>
                        <span className='ticket_number'>1,500&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>
                </div>
                
            </div>

            {/* 파트 5 게임 + token */}
            <div className='game_video' data-aos="fade-up" data-aos-duration="1500">
                <img id='game_video_img' src='./images/imgNew/game_video.webp' alt='MMAI Game' />
                <div className='game_video_play_btn'>
                    <img id='gv_play_btn' onClick={onGameVideo} src='./images/imgNew/play_btn.webp' alt='play_video'/>
                </div>
            </div>

            <div className='text_token_buy'>
                {/* 파트 3 부분과 파트 5 부분 동일하고 내용만 다른 부분이 있어서 파트 3 css를 사용함 */}
                <div className='part3_text'>
                    <span className='p3_main'>Experience the Thrill of a High-Octane <br />Military Shooter Game with MMAI PureWorld!</span>
                    <span className='p3_sub'><br /><br />PureSoldier is a military-style 3rd person shooter game set in the MMAI PureWorld metaverse.<br /> Engage in thrilling battles with realistic weapons and take on intense missions as you become immersed in the action. <br />Gear up and join the fight! <br/></span>
                    <span className='more_btn_games' onClick={onGamesInfo}>more info</span>
                </div>
                <GamesGallery />
                <div className='part5_store' data-aos="fade-up" data-aos-duration="2000">
                    <div className='p5_box'>
                        <div className='p5_store_text_btn' data-aos="fade-up" data-aos-duration="1500">
                            <span className='p5_store_main'>Introducing the MMAI Token:<br/> Unlocking an <br />Ethereum-Based Future!</span>
                            <span className='p5_store_sub'><br /><br />We are committed to expanding the application of cryptocurrency tokens and increasing their utility, and with it comes two exciting new features. The MMAI token unlocks the potential of cold storage, allowing users to securely store  and trade their tokens in a variety of cryptocurrencies via PureWallet. Additionally, it is the native token of the MMAI PureWorld metaverse.<br/><br/><br/></span>
                            <div className='p5_store_btn'>
                                <img onClick={onBuyNow} className='p5_BN' src='./images/imgNew/buy_now.webp' alt='Buy MMAI NOW!'/>
                                <img onClick={onCERTIK} className='p5_CERTIK' src='./images/imgNew/CERTIK.webp' alt='CERTIK'/>
                            </div>
                        </div>
                        <div className='p5_store_img' data-aos="fade-up" data-aos-duration="1500">
                            <img id='p5_img' src='./images/imgNew/mmai_token.webp' alt='using mmai pure wallet'/>
                        </div>  
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainRenewal;