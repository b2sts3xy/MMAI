import React from 'react';
import '../style/Footer.css';

const Footer = () => {
    return (
        <section>
            <div className='Footer'>
                <div className='firstline'>
                    <div className='mmaititle'>MMAI</div>
                    <div className='mmaisns'>
                        <span className="twitter"><a className='sns' href='https://twitter.com/metamonkey_ai'>twitter</a></span>
                        <span className="telegram"><a className='sns' href='https://t.me/MMAI_Official'>telegram</a></span>
                        <span className="Youtube"><a  className='sns' href='https://www.youtube.com/channel/UCp0Bou6D571oZ_LTeUBd0EQ'>Youtube</a></span> 
                    </div>
                </div>
                <div className='secondline'>Ⓒ 2022, BY METAMONKY AI</div>
            </div>
        </section>
    );
};

export default Footer;