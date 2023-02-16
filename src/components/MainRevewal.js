import React, { useEffect } from 'react';
import '../style/MainRevewal.css'
import AOS from "aos";
import "aos/dist/aos.css";

const MainRevewal = () => {

    useEffect(() => {
        AOS.init();
      })

    const onAppStore = () => {
        alert("Coming Soon!")
    }

    const onMarketPlace = () => {
        window.open('https://mmaipure.com/marketplace/', '_blank');
    }

    return (
        <>
            {/* 월드와 비디오 파트 1 전체 너비 90% */}
            <div className='world_wallet_container' data-aos="fade-up" data-aos-duration="1500">
                <div className='world_box'>
                    <div className='world_contents' data-aos="fade-up" data-aos-duration="1500">
                        <span className='wc_title'>MMAI PUREWORLD</span>
                        <span className='wc_sub_title'><br />PureWorld is made for socializing, entertainment, gaming but it’s major focus is on bringing business to the virtual world. <br /><br /></span>
                        <a href='/' rel="noopener noreferrer" aria-label="MMAI WORLD DOWNLOAD"><img id='wd_img' src='./images/imgNew/world_download.webp' alt='MMAI WORLD DOWNLOAD'/></a>
                    </div>
                </div>
                <div className='wallet_box'>
                    <div className='wallet_contents' data-aos="fade-up" data-aos-duration="1500">
                        <span className='wc_title'>MMAI PUREWALLET</span>
                        <span className='wc_sub_title'><br />PureWallet offers a secure crypto wallet by introducing cold wallet capabilities without the purchase of any additional hardwar.<br /><br /></span>
                        <a href='/' rel="noopener noreferrer" aria-label="MMAI PUREWALLET DEMO WIDEO"><img id='wv_img' src='./images/imgNew/wallet_go_video.webp' alt='MMAI PUREWALLET DEMO WIDEO'/></a>
                    </div>
                </div>
            </div>



            {/* 큰 비디오 파트 2 */}
            <div className='ww_play_video' data-aos="fade-up" data-aos-duration="1500">
                <a href='/' rel="noopener noreferrer" aria-label="MMAI VIDEO"><img id='mv_img' src='./images/imgNew/meta_video_img.webp' alt='play_video'/></a>
            </div>



            {/* 비디오 밑에 파트 3 전체 너비 80% */}
            <div className='part3_text'>
                <span className='p3_main'>We Bring Real World AI Technology To The Metaverse.</span>
                <span className='p3_sub'><br /><br />The MMAI PUREWORLD is Based on Research and Development with a Major Focus on a Great Experience.</span>
            </div>
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
                            <img id='p4_vm_btn' onClick={onMarketPlace} src="./images/imgNew/visit_marketplace_btn.webp" alt='Visit Marketplace'/>
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
                        <img id='NFT_info_img' src='./images/imgNew/NFT_ARENA.webp' alt='marketplace ticket' />
                        <span className='ticket_name'><br /><br />ARENA<br /></span>
                        <span className='ticket_number'>2&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>

                    {/* NFT 2 */}
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <img id='NFT_info_img' src='./images/imgNew/BUILDING_ELECTRONIC_DISPLAY.webp' alt='marketplace ticket' />
                        <span className='ticket_name'><br /><br />BUILDING ELECTRONIC DISPLAY<br /></span>
                        <span className='ticket_number'>500&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>

                    {/* NFT 3 */}
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <img id='NFT_info_img' src='./images/imgNew/AD_BILLBOARD.webp' alt='marketplace ticket' />
                        <span className='ticket_name'><br /><br />AD BILLBOARD<br /></span>
                        <span className='ticket_number'>500&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>
                </div>

                {/* NFT 4 */}
                <div className='NFT_line'>
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <img id='NFT_info_img' src='./images/imgNew/STAND_AD.webp' alt='marketplace ticket' />
                        <span className='ticket_name'><br /><br />STAND AD<br /></span>
                        <span className='ticket_number'>500&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>

                    {/* NFT 5 */}
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <img id='NFT_info_img' src='./images/imgNew/STORE(LARGE).webp' alt='marketplace ticket' />
                        <span className='ticket_name'><br /><br />STORE (LARGE)<br /></span>
                        <span className='ticket_number'>250&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>

                    {/* NFT 6 */}
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <img id='NFT_info_img' src='./images/imgNew/SOTRE(MEDIUM).webp' alt='marketplace ticket' />
                        <span className='ticket_name'><br /><br />SOTRE (MEDIUM)<br /></span>
                        <span className='ticket_number'>250&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>
                </div>

                {/* NFT 7 */}
                <div className='NFT_line'>
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <img id='NFT_info_img' src='./images/imgNew/STORE(SMALL).webp' alt='marketplace ticket' />
                        <span className='ticket_name'><br /><br />STORE (SMALL)<br /></span>
                        <span className='ticket_number'>400&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>

                    {/* NFT 8 */}
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <img id='NFT_info_img' src='./images/imgNew/OFFICE.webp' alt='marketplace ticket' />
                        <span className='ticket_name'><br /><br />OFFICE<br /></span>
                        <span className='ticket_number'>500&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>

                    {/* NFT 9 */}
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <img id='NFT_info_img' src='./images/imgNew/BOOTH(LARGE).webp' alt='marketplace ticket' />
                        <span className='ticket_name'><br /><br />BOOTH (LARGE)<br /></span>
                        <span className='ticket_number'>100&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>
                </div>

                {/* NFT 10 */}
                <div className='NFT_line'>
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <img id='NFT_info_img' src='./images/imgNew/SOTRE(MEDIUM).webp' alt='marketplace ticket' />
                        <span className='ticket_name'><br /><br />BOOTH (MEDIUM)<br /></span>
                        <span className='ticket_number'>250&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>

                    {/* NFT 11 */}
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <img id='NFT_info_img' src='./images/imgNew/STORE(SMALL).webp' alt='marketplace ticket' />
                        <span className='ticket_name'><br /><br />BOOTH (SMALL)<br /></span>
                        <span className='ticket_number'>400&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>

                    {/* NFT 12 */}
                    <div className='NFT_info' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <img id='NFT_info_img' src='./images/imgNew/MMAI_MYSTERY_CAR.webp' alt='marketplace ticket' />
                        <span className='ticket_name'><br /><br />MMAI MYSTERY CAR<br /></span>
                        <span className='ticket_number'>1,500&nbsp;&nbsp;</span>
                        <span className='ticket_pieces'>Pieces<br /></span>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default MainRevewal;