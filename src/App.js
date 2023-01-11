import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
import MainPage from './components/MainPage';
import Guide from './components/Guide';

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
        <Router>
          <Routes>
            <Route exact path="/" element={<MainPage/>}></Route>
            <Route exact path="/Guide" element={<Guide/>}></Route>
          </Routes>
        </Router>
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