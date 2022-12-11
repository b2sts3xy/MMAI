import React from 'react';
import '../mobileStyle/MobileToken.css'

const MoblieToken = () => {
    return (
        <section>
            <div className='mobileTokenPhoto'>
                <div className='mobileTokenBtn'>
                    <a href='https://www.metamonkey.ai/buynow'><img className='mobileTokenBtnImg' src='./imgMobile/mobile_tokenbtn.webp' /></a>
                </div>
            </div>
            <div className='mobileTokenContents'>
                <div className='mobileTokenContents1'>Released at End of December 2022</div>
                <div className='mobileTokenContents2'>MMAI Token</div>
                <div className='mobileTokenContents3'>The MMAI token is the utility token that will be used in the PUREWORLD ecosystem for certain interactions and transactions. This is an ERC-20 token built on the Ethereum blockchain.</div>
            </div>
            <div className='mobileCoinphoto'>
                <div className='mobileCoinOne'>
                    <a href='https://accounts.probit.com/id-id/login?client_id=probit-login&redirect_uri=https:%2F%2Fwww.probit.com%2Fauth%2Fcallback&state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIvdXNlci1jZW50ZXIvd2FsbGV0L2RlcG9zaXQvTU1BSSIsImlhdCI6MTY2ODc1ODMxMX0.pf_JjylfPlvvz8QIXUiobGEB8xV2PKOL_NqFBPWQzyU&response_type=code'><img className='mobileCoinOneImg' src='./imgMobile/mobile_probit.webp'/></a>
                    <a href='https://www.bitmart.com/trade/en?symbol=MMAI_USDT&layout=basic&theme=dark'><img className='mobileCoinOneImg' src='./imgMobile/mobile_bitmart.webp'/></a>
                    <a href='https://uniswap.org/'><img className='mobileCoinOneImg' src='./imgMobile/mobile_Uniswap.webp'/></a>
                    <a href='https://www.bkex.com/trade/MMAI_USDT'><img className='mobileCoinOneImg' src='./imgMobile/mobile_bkex.webp'/></a>
                    <a href='https://www.lbank.info/exchange/mmai/usdt'><img className='mobileCoinOneImg' src='./imgMobile/mobile_lbank.webp'/></a>
                </div>
                <div className='mobileCoinTwo'>
                    <a href='https://www.certik.com/projects/metamonkey-ai'><img className='mobileCoinTwoImg' src='./imgMobile/mobile_certik.webp'/></a>
                </div>
            </div>
        </section>
    );
};

export default MoblieToken;