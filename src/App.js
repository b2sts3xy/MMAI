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

  return (
    <div className="App">
      <div className='top'>
        <Headers/>
      </div>
      <Main/>
      <div className='middle'>
        <span class="MMAI-Solution">MMAI Solution</span>
        <Solution/>
        <div className='gallText'>MMAI Gallery</div>
      </div>
        <Gallery/>
      <div className='middle'>
        <Whitepapers/>
        <div className="AI-Technology-Partners">
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