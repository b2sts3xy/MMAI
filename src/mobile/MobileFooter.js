import React from 'react';
import '../mobileStyle/MobileFooter.css'

const MobileFooter = () => {
    return (
        <>
            <div className='mobileFooterContainer'>
                <div className='mobileFooterFirst'>
                    <div className='mobileFooterTitle'>MMAI</div>
                    <div className='mobileFooterSNS'>
                        <div className="mobileFooteBlog"><a className='mobileSNSLink' href='https://blog.mmaipure.com'>Blog</a></div>
                        <div className="mobileFooteTwitter"><a className='mobileSNSLink' href='https://twitter.com/metamonkey_ai'>Twitter</a></div>
                        <div className="mobileFooterTelegram"><a className='mobileSNSLink' href='https://t.me/MMAI_Official'>Telegram</a></div>
                        <div className="mobileFooterYoutube"><a  className='mobileSNSLink' href='https://www.youtube.com/channel/UCp0Bou6D571oZ_LTeUBd0EQ'>YouTube</a></div>
                    </div>
                </div>
                <div className='mobileFooterSecond'>Ⓒ 2022, BY METAMONKY AI</div>
            </div>
        </>
    );
};

export default MobileFooter;