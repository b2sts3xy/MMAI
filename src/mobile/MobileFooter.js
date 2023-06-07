import React from 'react';
import '../mobileStyle/MobileFooter.css'

const MobileFooter = () => {
    return (
        <>
            <div className='mobileFooterContainer'>
                <div className='mobileFooterFirst'>
                    <div className='mobileFooterTitle'><img className='mobile_footer_main' src='./images/imgMobile/mmai_logo.webp' alt='MMAI MAIN LOGO' /></div>
                    <div className='mobileFooterSNS'>
                        <div className="mobileFooteTwitter"><a className='mobileSNSLink' href='https://twitter.com/metamonkey_ai' aria-label='mmaipure twitter'>Twitter</a></div>
                        <div className="mobileFooterTelegram"><a className='mobileSNSLink' href='https://t.me/MMAI_Official' aria-label='mmaipure telegram'>Telegram</a></div>
                        <div className="mobileFooterYoutube"><a  className='mobileSNSLink' href='https://www.youtube.com/channel/UCp0Bou6D571oZ_LTeUBd0EQ' aria-label='mmaipure youtube'>YouTube</a></div>
                    </div>
                </div>
                <div className='mobileFooterSecond'>
                    <div className='mobile_by_mmai'>Ⓒ 2023, MMAI</div>
                    <div className='mobile_mmai_email'>📧Info@mmaipure.com </div>
                </div>
            </div>
        </>
    );
};

export default MobileFooter;