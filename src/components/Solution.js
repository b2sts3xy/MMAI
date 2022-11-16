import React from 'react';
import '../style/Solution.css'

const Solution = () => {
    return (
        <div className='solBody'>
            <div className='secL'>
                <img className='img1' src='./sol1.png' alt='이미지'/>
                <div>
                    <div className='borderR'>
                        <div className='secR'>
                            <span class="MMAI-PUREWORLD">MMAI PUREWORLD</span>
                            <span class="text1">The MMAI PureWorld is a new exciting way of interacting with other Web3 enthusiasts. Leverage our metaverse to your advantage with a whole new level of immersive experiences, including entertainment, social, business, & educational. PureWorld is focused on utility software that provides multi-functional facilities to every meta-human. Our web-inside-web (WIW) module will include an NFT blockchain with metaverse for user traceability and a smart contract for access permission for meta-humans to travel across metaverse places.</span>
                        </div>
                    </div>
                    <a href='http://naver.com'><div className='btnSol'>Download Launcher</div></a>
                </div>
            </div>    
            <div className='secL'>
                <div className='secR'>
                    <div className='borderUp'>
                    </div>
                    <span class="MMAI-PUREWALLET">MMAI PUREWALLET</span>
                    <div className='wallet'>
                        <a href='http://naver.com'><div className='btnSol2'>Watching the Demo Video</div></a>
                        <span class="text2">PureWallet is an innovation in blockchain technology. It offers secure crypto wallet by introducing cold wallet capabilities without the purchase of any additional hardware. It is also the only wallet that is capable of peer-to-peer transactions without an internet connection. Download the PureWallet and enter the exciting world of Web3 decentralized crypto banking.</span>
                    </div>
                </div>     
                <img className='img2' src='./sol2.png' alt='이미지'/>
            </div>
            <div className='secL'>
                <img className='img3' src='./sol3.png' alt='이미지'/>
                <div className='secR'>
                    <div className='borderL'>
                        <span class="Functional-NFTs">Functional NFTs</span>
                        <span class="text3">Our functional NFT goes beyond digital asset management by enabling the transformation of virtual products into physical assets. Other real-world products the NFT market will affect are investment instruments, authenticity of products, medical records, intellectual property and patents, identity verification, supply chain, voting, and so much more. In addition, our NFT blockchain will allow metaverse users with traceability and smart contract permission-based access for meta-humans to traverse the multiple metaverses.</span>            
                    </div>  
                    <span class="text">We Bring Real World AI Technology To The Metaverse.</span>
                </div>
            </div>
            <div className='secL'>
                <div className='secR'>
                    <div className='borderUp'></div>
                    <span class="MMAI-Token">MMAI Token</span>
                    <span class="text4">The MMAI token is the utility token that will be used in the PUREWORLD ecosystem for certain interactions and transactions. This is an ERC-20 token built on the Ethereum blockchain.</span>
                </div>
                <img className='img4' src='./sol4.png' alt='이미지'/>
            </div>
        </div>
    );
};

export default Solution;
