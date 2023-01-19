import React from 'react';
import '../mobileStyle/MobileWhitePapers.css'

const MobileWhitePapers = () => {
    return (
        <section className='mobileWhitePapersContainer'>
            <div className='mobileWhitePapersTitle'>MMAI WHITE PAPERS</div>
            <div className='mobileWhitePapersText'>MMAI core belief is Research and then Development is more important than people think. R&D is the key component of innovation that will drive the broader adoption of Web3 technologies. The research labs are what drives our ability to obtain new knowledge that is placing MMAI tech on the cutting edge of tomorrow’s internet</div>

            <div className='mobileBlockChain'>
                <div className='mobileBlockChainTitle'>Blockchain White Papers</div>
                <div className='mobilePapers'>
                    <a href='https://doi.org/10.1049/cmu2.12465'><img className='mobilePapersimg' src='./imgWhitePaper/1-1.webp' alt='mmai white paper'></img></a>
                    <div className='mobilePaperMiniTitle'>Smart auto mining (SAM) for industrial IoT Blockchain Network</div>
                    <div id="mobileTHIHIS">THESIS</div>
                </div>
                <div className='mobilePapers'>
                    <a href='https://doi.org/10.1016/j.icte.2021.08.004'><img className='mobilePapersimg' src='./imgWhitePaper/1-2.webp' alt='mmai white paper'></img></a>
                    <div className='mobilePaperMiniTitle'>Blockchain side Implementation : <br/>An offline Transaction Architecture</div>
                    <div id="mobileTHIHIS">THESIS</div>
                </div>
            </div>
            <div className='mobileMeaverse'>
                <div className='mobileMetaverseTitle'>Metaverse White Papers</div>
                <div className='mobilePapers'>
                    <a href='https://doi.org/10.1049/itr2.12252'><img className='mobilePapersimg' src='./imgWhitePaper/2-1.webp' alt='mmai white paper'></img></a>
                    <div className='mobilePaperMiniTitle'>Intelligent <br/>Transportation Systems</div>
                    <div id="mobileTHIHIS">THESIS</div>
                </div>
                <div className='mobilePapers'>
                    <a href='https://doi.org/10.48550/arXiv.2202.10336'><img className='mobilePapersimg' src='./imgWhitePaper/2-2.webp' alt='mmai white paper'></img></a>
                    <div className='mobilePaperMiniTitle'>Artificial <br />Intelligence</div>
                    <div id="mobileTHIHIS">THESIS</div>
                </div>
            </div>
            <div className='mobileAI'>
                <div className='mobileAITitle'>AI & Deep Learning White Papers</div>
                <div className='mobilePapers'>
                    <a href='https://doi.org/10.1109/JIOT.2022.3152929'><img className='mobilePapersimg' src='./imgWhitePaper/3-1.webp' alt='mmai white paper'></img></a>
                    <div className='mobilePaperMiniTitle'>Low-power <br />and Lossy</div>
                    <div id="mobileTHIHIS">THESIS</div>
                </div>
                <div className='mobilePapers'>
                    <a href='https://doi.org/10.1109/JIOT.2020.3013272'><img className='mobilePapersimg' src='./imgWhitePaper/3-2.webp' alt='mmai white paper'></img></a>
                    <div className='mobilePaperMiniTitle'>Smart <br />Health</div>
                    <div id="mobileTHIHIS">THESIS</div>
                </div>
            </div>
        </section>
    );
};

export default MobileWhitePapers;