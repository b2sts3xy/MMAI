import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style/Gallery.css';
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
import MarketPlacePopUp from './components/MarketPlacePopUp';

function App() {

  // useEffect(() => {
  //   window.open("https://www.naver.com/", "_blank", 'width=900,height=900');
  // },[]);

  return (
    <section className="App">
      <div className='pc'>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainPage/>}></Route>
            <Route exact path="/Guide" element={<Guide/>}></Route>
            {/* <Route exact path="/mmaimarketplace" element={<MarketPlacePopUp />}></Route> */}
          </Routes>
        </BrowserRouter>
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