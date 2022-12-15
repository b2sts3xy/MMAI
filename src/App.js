import React, { useRef, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Partners from './components/Partners';
import Whitepapers from './components/Whitepapers';
import Solution from './components/Solution';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style/Gallery.css';
import AutoPlaySecond from './components/AutoPlaySecond';
import AutoPlay from './components/AutoPlay'
import MobileMain from './mobile/MobileMain';
import MoblieWorld from './mobile/MobileWorld';
import MoblieWallet from './mobile/MobileWallet';
import MobileFunc from './mobile/MobileFunc';
import MoblieToken from './mobile/MobileToken';
import MobileWhitePapers from './mobile/MobileWhitePapers';
import MobilePartners from './mobile/MobilePartners';
import MobileFooter from './mobile/MobileFooter';


function App() {

  const solutionRef = useRef(null);
  const galleryRef = useRef(null);
  const partnerRef = useRef(null);

  const onSolutionClick = () => {
    solutionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onGalleryClick = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onPartnerClick = () => {
    partnerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [rendNum, setRendNum] = useState(false);


  return (
    <section className="App">
      <div className='pc'>
        <div className='top'>
          {/* <Headers onSolutionClick={onSolutionClick} onGalleryClick={onGalleryClick} onPartnerClick={onPartnerClick}/> */}
        </div>
        <Main onSolutionClick={onSolutionClick} onGalleryClick={onGalleryClick} onPartnerClick={onPartnerClick}/>
        <div className='middle'>
          <div ref={solutionRef}><span class="MMAI-Solution">MMAI SOLUTION</span></div>
          <Solution/>
        </div>
        <div className='gallBody'>
            <div className='gallBox'>
                <div ref={galleryRef} className='gallText'>MMAI Gallery</div>
                <div className='but'>
                  <button className={rendNum ? 'gallBtn' : 'gallBtn_active'} onClick={() => {setRendNum(false)}}>MMAI WORLD</button>
                  <button className={rendNum ? 'gallBtn_active' : 'gallBtn'} onClick={() => {setRendNum (true)}}>MMAI PUREWALLET</button>
                </div>
            </div>
            {rendNum ? <AutoPlaySecond/> : <AutoPlay/>}
        </div>
        <div className='middle'>
          <Whitepapers/>
          <div ref={partnerRef} className="AI-Technology-Partners">
              <span>AI Technology Partners</span>
          </div>
          <Partners/>
        </div>
        <div className='bottom'>
          <Footer/>
        </div>
      </div>


      <div className='mobile'>
        <MobileMain />
        <MoblieWorld />
        <MoblieWallet />
        <MobileFunc />
        <MoblieToken />
        <MobileWhitePapers />
        <MobilePartners />
        <MobileFooter />
      </div>
    </section>
  );
}

export default App;