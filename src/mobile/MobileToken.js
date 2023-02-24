import React from 'react';
import '../mobileStyle/MobileToken.css'
import { Link } from "react-router-dom";

const MoblieToken = () => {
    return (
        <section>
            <div className='mobileTokenPhoto'>
                <img className='mobileTokenImg' src='./images/imgMobile/mobile_token.webp' alt='MMAI TOKEN'/>
                <div className='mobileTokenBtn'>
                    <Link to="/Guide" target="_blank" className='mobileToken_link'>
                        <div className='mobileToken_buybtn'>Buy MMAI NOW!</div>
                    </Link>
                </div>
            </div>
            <div className='mobileTokenContents'>
                <div className='mobileTokenContents1'>ERC-20 Ethereum Blockchain</div>
                <div className='mobileTokenContents2'>MMAI Token</div>
                <div className='mobileTokenContents3'>The MMAI token is the utility token that will be used in the PUREWORLD ecosystem for certain interactions and transactions. This is an ERC-20 token built on the Ethereum blockchain.</div>
            </div>
            <div className='mobileCoinphoto'>
                <div className='mobileCoinOne'>
                    <a href='https://accounts.probit.com/id-id/login?client_id=probit-login&redirect_uri=https:%2F%2Fwww.probit.com%2Fauth%2Fcallback&state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIvdXNlci1jZW50ZXIvd2FsbGV0L2RlcG9zaXQvTU1BSSIsImlhdCI6MTY2ODc1ODMxMX0.pf_JjylfPlvvz8QIXUiobGEB8xV2PKOL_NqFBPWQzyU&response_type=code'><img className='mobileCoinOneImg' src='./images/imgMobile/mobile_probit.webp' alt='mmai token probit'/></a>
                    <a href='https://www.bitmart.com/trade/en?symbol=MMAI_USDT&layout=basic&theme=dark'><img className='mobileCoinOneImg' src='./images/imgMobile/mobile_bitmart.webp' alt='mmai token bitmart'/></a>
                    <a href='https://uniswap.org/'><img className='mobileCoinOneImg' src='./images/imgMobile/mobile_Uniswap.webp' alt='mmai token Uniswap'/></a>
                    <a href='https://www.bkex.com/trade/MMAI_USDT'><img className='mobileCoinOneImg' src='./images/imgMobile/mobile_bkex.webp' alt='mmai token bkex'/></a>
                    <a href='https://www.lbank.info/exchange/mmai/usdt'><img className='mobileCoinOneImg' src='./images/imgMobile/mobile_lbank.webp' alt='mmai token lbank'/></a>
                </div>
                <div className='mobileCoinTwo'>
                    <a href='https://www.certik.com/projects/metamonkey-ai'><img className='mobileCoinTwoImg' src='./images/imgMobile/mobile_certik.webp' alt='mmai token probit'/></a>
                </div>
            </div>
        </section>
    );
};

export default MoblieToken;