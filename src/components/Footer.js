import React from 'react';
import '../style/Footer.css';

const Footer = () => {

    const reload = () => {
        window.location.replace('/');
    }
    
    return (
        <section>
            <div className='Footer'>
                <div className='firstline'>
                    <div className='mmaititle'><spen onClick={reload} className="footer_mmai">MMAI</spen></div>
                    <div className='mmaisns'>
                        <div className="twitter"><a className='sns' href='https://twitter.com/metamonkey_ai'>twitter</a></div>
                        <div className="telegram"><a className='sns' href='https://t.me/MMAI_Official'>telegram</a></div>
                        <div className="Youtube"><a  className='sns' href='https://www.youtube.com/channel/UCp0Bou6D571oZ_LTeUBd0EQ'>Youtube</a></div> 
                    </div>
                </div>
                <div className='secondline'>Ⓒ 2022, BY METAMONKY AI</div>
            </div>
        </section>
    );
};

export default Footer;
