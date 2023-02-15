import React from 'react';
import '../mobileStyle/MobileFooter.css'

const MobileFooter = () => {
    return (
        <>
            <div className='mobileFooterContainer'>
                <div className='mobileFooterFirst'>
                    <div className='mobileFooterTitle'><img className='mobile_footer_main' src='./images/img/mmai_logo.png' alt='MMAI MAIN LOGO' /></div>
                    <div className='mobileFooterSNS'>
                        <div className="mobileFooteBlog"><a className='mobileSNSLink' href='https://blog.mmaipure.com' aria-label='mmaipure blog'>Blog</a></div>
                        <div className="mobileFooteTwitter"><a className='mobileSNSLink' href='https://twitter.com/metamonkey_ai' aria-label='mmaipure twitter'>Twitter</a></div>
                        <div className="mobileFooterTelegram"><a className='mobileSNSLink' href='https://t.me/MMAI_Official' aria-label='mmaipure telegram'>Telegram</a></div>
                        <div className="mobileFooterYoutube"><a  className='mobileSNSLink' href='https://www.youtube.com/channel/UCp0Bou6D571oZ_LTeUBd0EQ' aria-label='mmaipure youtube'>YouTube</a></div>
                    </div>
                </div>
                <div className='mobileFooterSecond'>Ⓒ 2022, BY METAMONKY AI</div>
            </div>
        </>
    );
};

export default MobileFooter;