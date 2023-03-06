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
                    <div className='mmaititle'><img className='footer_mmai' onClick={reload} src='./images/imgHeader/mmai_white_logo.png' alt='MMAI MAIN LOGO' /></div>
                    <div className='mmaisns'>
                        <div className="Youtube"><a  className='sns' href='https://www.youtube.com/channel/UCp0Bou6D571oZ_LTeUBd0EQ'><img src='./images/imgHeader/youtube.png' className='footer_sns_img' alt='MMAI YouTube'/></a></div> 
                        <div className="telegram"><a className='sns' href='https://t.me/MMAI_Official'><img src='./images/imgHeader/telegram.png' className='footer_sns_img' alt='MMAI Telegram' /></a></div>
                        <div className="twitter"><a className='sns' href='https://twitter.com/metamonkey_ai'><img src='./images/imgHeader/twitter.png' className='footer_sns_img' alt='MMAI Twitter' /></a></div>
                    </div>
                </div>
                <div className='secondline'>
                    <div className='by_mmai'>Ⓒ 2023, BY MMAI</div>
                    <div className='mmai_email'>📧Info@mmaipure.com </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
