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
                    <div className='mmaititle'><img className='footer_mmai' onClick={reload} src='./images/img/mmai_logo.png' alt='MMAI MAIN LOGO' /></div>
                    <div className='mmaisns'>
                    <div className="Youtube"><a  className='sns' href='https://www.youtube.com/channel/UCp0Bou6D571oZ_LTeUBd0EQ'><img src='./images/imgHeader/youtube.png' alt='MMAI YouTube'/></a></div> 
                        <div className="telegram"><a className='sns' href='https://t.me/MMAI_Official'><img src='./images/imgHeader/telegram.png' alt='MMAI Telegram' /></a></div>
                        <div className="twitter"><a className='sns' href='https://twitter.com/metamonkey_ai'><img src='./images/imgHeader/twitter.png' alt='MMAI Twitter' /></a></div>
                    </div>
                </div>
                <div className='secondline'>Ⓒ 2022, BY MMAI</div>
            </div>
        </section>
    );
};

export default Footer;
