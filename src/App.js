import React, { useRef } from 'react';
import './App.css';
import Footer from './components/Footer';
import Headers from './components/Headers';
import Partners from './components/Partners';
import Whitepapers from './components/Whitepapers';
import Solution from './components/Solution';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.css'
import Gallery from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';

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


  return (
    <div className="App">
      <div className='top'>
        <Headers onSolutionClick={onSolutionClick} onGalleryClick={onGalleryClick} onPartnerClick={onPartnerClick}/>
      </div>
      <Main/>
      <div className='middle'>
        <div ref={solutionRef}><span class="MMAI-Solution">MMAI Solution</span></div>
        <Solution/>
        <div ref={galleryRef} className='gallText'>MMAI Gallery</div>
      </div>
        <Gallery/>
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