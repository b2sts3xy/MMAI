import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style/Gallery.css';
import MainPage from './components/MainPage';
import Guide from './components/Guide';
import MobileMainPage from './mobile/MobileMainPage';

function App() {

  return (
    <section className="App">
      <div className='pc'>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainPage/>}></Route>
            <Route exact path="/Guide" element={<Guide/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>


      <div className='mobile'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MobileMainPage />} />
            <Route path='/Guide' element={<Guide />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </section>
  );
}

export default App;