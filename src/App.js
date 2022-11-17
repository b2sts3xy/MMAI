import React, { useRef, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Headers from './components/Headers';
import Partners from './components/Partners';
import Whitepapers from './components/Whitepapers';
import Solution from './components/Solution';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style/Gallery.css';
import AutoPlaySecond from './components/AutoPlaySecond';
import AutoPlay from './components/AutoPlay'


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
    <div className="App">
      <div className='top'>
        <Headers onSolutionClick={onSolutionClick} onGalleryClick={onGalleryClick} onPartnerClick={onPartnerClick}/>
      </div>
      <Main/>
      <div className='middle'>
        <div ref={solutionRef}><span class="MMAI-Solution">MMAI Solution</span></div>
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
  );
}

export default App;