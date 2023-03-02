import React, { useEffect } from 'react';
import '../style/MainRenewal.css'
import AOS from "aos";
import "aos/dist/aos.css";
import WorldGallery from './WorldGallery';
import GamesGallery from './GamesGallery';

const MainRenewal = () => {

    useEffect(() => {
        AOS.init({duration : 1000});
      })

    const onAppStore = () => {
        alert("Coming Soon!")
    }

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
        window.open('./images/video/mmaiworld.mp4')
    }

    const onGameVideo = () => {
        window.open('./images/video/mmaigames.mp4')
    }

    const onPWDownload = () => {
        alert("Coming Soon!")
    }
    
    const onWorldImfo = () => {
        window.open('./assets/MMAI_PureWorld_Page.pdf', '_blank')
    }

    const onWalletImfo = () => {
        window.open('./assets/MMAI_PureWallet_Website_Page.pdf', '_blank')
    }


    return (
        <>
            {/* 월드와 비디오 파트 1 전체 너비 90% */}
            <div className='p1_container' data-aos="fade-up" data-aos-duration="1500">
                <div className='world_container'>
                    <img className='p1_img' src='./images/imgNew/main_world.webp' alt='MMAI PUREWORLD'/>
                    <div className='world_box'>
                        <div className='world_contents' data-aos="fade-up" data-aos-duration="1500">
                            <div className='wc_title'>MMAI PUREWORLD</div>
                            <div className='wc_sub_title'>PureWorld is made for socializing, entertainment, gaming but it’s major focus is on bringing business to the virtual world. </div>
                            {/* <a href='/' className='p1_white_btn' rel="noopener noreferrer" aria-label="MMAI WORLD DOWNLOAD"><span>Download</span></a> */}
                            <span className='more_btn' onClick={onWorldImfo}>more info</span>
                            <div className='p1_white_btn' onClick={onPWDownload}><span>Download</span></div>
                        </div>
                    </div>
                </div>
                <div className='wallet_container'>
                    <img className='p1_img'  src='./images/imgNew/main_wallet.webp' alt='MMAI PUREWORLD'/>
                    <div className='wallet_box'>
                        <div className='wallet_contents' data-aos="fade-up" data-aos-duration="1500">
                            <div className='wc_title'>MMAI PUREWALLET</div>
                            <div className='wc_sub_title'>PureWallet offers a secure crypto wallet by introducing cold wallet capabilities without the purchase of any additional hardwar.</div>
                            <span className='more_btn' onClick={onWalletImfo}>more info</span>
                            <a href='./images/video/mmaiwallet.mp4' target='_blank' className='p1_white_btn' rel="noopener noreferrer" aria-label="MMAI PUREWALLET DEMO WIDEO"><span>Demo Video</span></a>
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
                <span className='p3_main'>We Bring Real World AI Technology To The Metaverse.</span>
                <span className='p3_sub'><br /><br />The MMAI PUREWORLD is Based on Research and Development with a Major Focus on a Great Experience.</span>
            </div>

            <WorldGallery />

            <div className='part3_store' data-aos="fade-up" data-aos-duration="2000">
                <div className='p3_box'>
                    <div className='p3_store_text_btn' data-aos="fade-up" data-aos-duration="1500">
                        <span className='p3_store_main'>MMAI Innovation in<br /> Blockchain System</span>
                        <span className='p3_store_sub'><br /><br />Using MMAI PUREWALLET, you can store and buy <br/> your Cryptocurrency in your smart device and freely <br/> trade cryptocurrency with other people<br/><br/><br/></span>
                        <div className='p3_store_btn'>
                            <a href='https://play.google.com/store/apps/details?id=com.nslab.purewallet&pli=1' target="_blank" rel="noopener noreferrer" aria-label="google play store"><img className='p3_storeImgG' src='./images/img/GooglePlay.webp' alt=''/></a>
                            <img onClick={onAppStore} className='p3_storeImgA' src='./images/img/APPLESTORE.webp' alt='Appstore'/>
                        </div>
                    </div>
                    <div className='p3_store_img' data-aos="fade-up" data-aos-duration="1500">
                        <img id='p3_img' src='./images/imgNew/p3_img.webp' alt='using mmai pure wallet'/>
                    </div>  
                </div>
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
                        <span className='NFT_maintext'>12 Exclusive Properties To Own</span>
                        <span className='NFT_subtext'><br /><br />Using MMAI PUREWALLET, you can store and buy your Cryptocurrency in your smart device and freely trade cryptocurrency with other people</span>
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
                    <span className='p3_main'>Enjoy Various Games at MMAI PUREWORLD!</span>
                    <span className='p3_sub'><br /><br />Various Games will be Released soon by MMAI PUREWORLD</span>
                </div>
                <GamesGallery />
                <div className='part3_store' data-aos="fade-up" data-aos-duration="2000">
                    <div className='p3_box'>
                        <div className='p3_store_text_btn' data-aos="fade-up" data-aos-duration="1500">
                            <span className='p3_store_main'>MMAI Token</span>
                            <span className='p3_store_sub'><br /><br />Utility Token that will be used in the PUREWORLD  <br/> Ecosystem for Certain Interactions and Transactions. <br/> This is an ERC-20 Token Built on the Ethereum Blockchain<br/><br/><br/></span>
                            <div className='p3_store_btn'>
                                <img onClick={onBuyNow} className='p3_storeImgG' src='./images/imgNew/buy_now.webp' alt='Buy MMAI NOW!'/>
                                <img onClick={onCERTIK} className='p3_storeImgA' src='./images/imgNew/CERTIK.webp' alt='CERTIK'/>
                            </div>
                        </div>
                        <div className='p3_store_img' data-aos="fade-up" data-aos-duration="1500">
                            <img id='p3_img' src='./images/imgNew/mmai_token.webp' alt='using mmai pure wallet'/>
                        </div>  
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainRenewal;