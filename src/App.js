import './App.css';
import Footer from './components/Footer';
import Headers from './components/Headers';
import Partners from './components/Partners';
import Whitepapers from './components/Whitepapers';
import Solution from './components/Solution';


function App() {
  return (
    <div className="App">
      <div className='top'>
        <Headers/>
      </div>
      <div className='middle'>
        <span class="MMAI-Solution">MMAI Solution</span>
        <Solution/>
        <div>MMAI Gallery</div>
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
