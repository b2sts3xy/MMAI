import React from 'react';
import '../style/Footer.css';

const Footer = () => {
    return (
        <div className="background">
            <div className='content'>
                <span className="MMAI">MMAI</span>
                <div className='link'>
                    <span className="twitter"><a href='https://twitter.com/metamonkey_ai'>twitter</a></span>
                    <span className="telegram"><a href='https://t.me/MMAI_Official'>telegram</a></span>
                    <span className="Youtube"><a href='https://www.youtube.com/channel/UCp0Bou6D571oZ_LTeUBd0EQ'>Youtube</a></span>
                </div>
            </div>
            <div>
                <span className="BY-METAMONKY-AI">Ⓒ 2022, BY METAMONKY AI</span>
            </div>
        </div>
    );
};

export default Footer;