import React, {useState} from 'react';
import '../style/Guide.css'

function Guide() {
    return (
        <div className='Window_Guide'>
            <div className='Guide'>
                <img className='img_back'/>
                <div className='Guide_Title'>
                    <div className='GTitle_Big'>Buy $MMAI NOW!</div>
                    <p>Soon Available in More Exchanges</p>
                </div>

                <div className='CoinLink'>
                    <div className='Coin1'><a href='https://uniswap.org/'><img src='./img/coin1.webp' style={{width:"6.5vw"}}/></a></div>
                    <div className='Coin2'><a href='https://www.bitmart.com/trade/en?symbol=MMAI_USDT&layout=basic&theme=dark'><img src='./img/coin2.webp' style={{width:"6.5vw"}}/></a></div>
                    <div className='Coin3'> <a href='https://www.bkex.com/trade/MMAI_USDT'><img src='./img/coin3.webp' style={{width:"6.5vw"}}/></a></div>
                    <div className='Coin4'><a href='https://accounts.probit.com/id-id/login?client_id=probit-login&redirect_uri=https:%2F%2Fwww.probit.com%2Fauth%2Fcallback&state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiIvdXNlci1jZW50ZXIvd2FsbGV0L2RlcG9zaXQvTU1BSSIsImlhdCI6MTY2ODc1ODMxMX0.pf_JjylfPlvvz8QIXUiobGEB8xV2PKOL_NqFBPWQzyU&response_type=code'><img src='./img/coin4.webp' style={{width:"6.5vw"}}/></a></div>
                    <div className='Coin5'><a href='https://www.lbank.info/exchange/mmai/usdt'><img src='./img/coin5.webp' style={{width:"6.5vw"}}/></a></div>
                </div>

                <div className='Step1'>
                    <p>Step 1</p>
                    <p>Copy to your clipboard our Ofiicial Contract Address</p>
                    <div className='Step1_Address'><p>0xaa0c5b3567fd1bac8a2a11eb16c3f81a49eea90f</p></div>
                    <p>(Double-check Contract Address in <u>Etherscan</u> and <u>Dextools</u> to Avoid Scammers)</p>
                </div>
                
                <div className='Step2'>
                    <p>Step 2</p>
                    <p>Open Uniswap Official Website</p>
                    <div className='Step2_url'><a href='https://uniswap.org/'><p>https://uniswap.org/</p></a></div>
                    <p>(Make sure the website ends in .org)</p>
                </div>
                
                <div className='Step3'>
                    <p>Step 3</p>
                    <p>Launch the Uniswap app by clicking the Button on the Right upper corner.</p>
                    <p><img src='./assets/uniswapProcess3.webp' style={{width:"7vw"}}/ ></p>
                    <p>It will open the swap window and will automatically pair to ETH</p>
                    <p><img src='./assets/uniswapProcess2.webp' style={{width:"20vw"}}/></p>
                </div>
                
                <div className='Step4'>
                    <p>Step 4</p>
                    <p>Click "Select Token" and Paste the Official MMAI contract address</p>
                    <p>it will automatically load the token information.</p>
                    <p><img src='./assets/uniswapProcess4.webp' style={{width:"20vw"}}/></p>
                </div>
                
                <div className='Step5'>
                    <p>Step 5</p>
                    <p>The final step is to set the amount to buy</p>
                    <p>connect your Crypto wallet to continue with the transaction.</p>
                </div>

            </div>
        </div>
    );
}

export default Guide;