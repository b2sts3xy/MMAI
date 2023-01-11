import React from 'react';
import '../style/Solution.css'
import { Link } from "react-router-dom";
import Guide from './Guide';
import StaticExampleVideo from './StaticExampleVideo';

const Solution = () => {
    const onClickEvent = () => {
        window.open('https://creativia.kr/files/MMAIPUREWORLDv011.zip', '_blank');
    }
    return (
        <div className='solBody'>
            <div className='secL'>
                <img className='img1' src='./imgSolution/sol1.webp' alt='MMAI PUREWORLD_METAVERSE_MAIN STREET_3'/>
                <div>
                    <div className='borderR'>
                        <div className='secR'>
                            <span className="MMAI-PUREWORLD">MMAI PUREWORLD</span>
                            <span className="text1">The MMAI PureWorld is a new exciting way of interacting with other Web3 enthusiasts. Leverage our metaverse to your advantage with a whole new level of immersive experiences, including entertainment, social, business, and educational. PureWorld is focused on utility software that provides multi-functional facilities to every meta-human. Our web-inside-web (WIW) module will include an NFT blockchain with metaverse for user traceability and a smart contract for access permission for meta-humans to travel across metaverse places.</span>
                        </div>
                    </div>
                    <div className='btnSol' onClick={onClickEvent} style={{cursor:'pointer'}}>Download Launcher</div>
                </div>
            </div>
            <div className='secL'>
                <div className='secR'>
                    <div className='borderUp'>
                    </div>
                    <span className="MMAI-PUREWALLET">MMAI PUREWALLET</span>
                    <div className='wallet'>
                        <span className="text2">PureWallet is an innovation in blockchain technology. It offers a secure crypto wallet by introducing cold wallet capabilities without the purchase of any additional hardware. It is also the only wallet that is capable of peer-to-peer transactions without an internet connection. Download the PureWallet and enter the exciting world of Web3 decentralized crypto banking.</span>
                    </div>
                    <StaticExampleVideo/>
                </div>     
                <img className='img2' src='./imgSolution/sol2.webp' alt='MMAI PUREWALLET_2'/>
            </div>
            <div className='secL'>
                <img className='img3' src='./imgSolution/sol3.webp' alt='NFT TOKEN_1'/>
                <div className='secR'>
                    <div className='borderL'>
                        <span className="Functional-NFTs">FUNCTIONAL NFTs</span>
                        <span className="text3">Our functional NFT goes beyond digital asset management by enabling the transformation of virtual products into physical assets. Other real-world products the NFT market will affect are investment instruments, authenticity of products, medical records, intellectual property, patents, identity verification, supply chain, voting, and so much more. In addition, our NFT blockchain will allow metaverse users with traceability and smart contract permission-based access for meta-humans to traverse the multiple metaverses.</span>            
                    </div>  
                    <span className="text">We Bring Real World AI Technology To The Metaverse.</span>
                </div>
            </div>
            <div className='secL'>
                <div className='secR'>
                    <div className='borderUp'></div>
                    <span className="MMAI-Token">MMAI TOKEN</span>
                    <span className="text4">The MMAI token is the utility token that will be used in the PUREWORLD ecosystem for certain interactions and transactions. This is an ERC-20 token built on the Ethereum blockchain.</span>
                    <div className='click'>
                        <Link to="/Guide" target="_blank">
                            <img className="img_BtnBuy" src='./imgSolution/buyBtn.png'/>
                        </Link>
                        <a className='certikA' href='https://www.certik.com/projects/metamonkey-ai'><img className='certik' src='./imgSolution/certik.png' alt=''/></a>
                    </div>
                </div>
                <img className='img4' src='./imgSolution/sol4.webp' alt='METAMONEKY TOKEN'/>
            </div>
        </div>
    );
};

export default Solution;
