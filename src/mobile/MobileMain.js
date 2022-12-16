import React from 'react';
import '../mobileStyle/MobileMain.css'

const MobileMain = () => {

    const mobileReload = () => {
        window.location.replace('/');
    }


    return (
        <section>
            <div className='mobileMainContainer'>
                <div className='mobileMainContents'>
                    <div className='mobileHeader'>
                        <div className='mobileTitle' onClick={mobileReload}>MMAI</div>
                        <div className='mobilesns'>
                            <div className="msns"><a href='https://blog.mmaipure.com'>mmai blog</a></div>
                            <div className="msns"><a href='https://twitter.com/metamonkey_ai'>twitter</a></div>
                            <div className="msns"><a href='https://t.me/MMAI_Official'>telegram</a></div>
                            <div className="msns"><a href='https://www.youtube.com/channel/UCp0Bou6D571oZ_LTeUBd0EQ'>Youtube</a></div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileMain;