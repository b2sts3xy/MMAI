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
import MainPage from './components/MainPage';
import Guide from './components/Guide';
import MobileMainPage from './mobile/MobileMainPage';

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
        <Router>
          <Routes>
            <Route path='/' element={<MobileMainPage />} />
            <Route path='/Guide' element={<Guide />}></Route>
          </Routes>
        </Router>
      </div>
    </section>
  );
}

export default App;