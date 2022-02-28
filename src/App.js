import logo from './logo.svg';
import './App.css';
import background from './img/background.jpg';
import Bio from './components/Bio.jsx';
import Portfolio from './components/Portfolio.jsx';

function App() {
  return (
    // <div >
    //   <div className={"App-body"}>
    //     <Bio/>
    //   </div>
    //   {/* <div><Portfolio/></div> */}
    // </div>
    <div className={"App-body"}>
      <Bio/>
      {/* <Portfolio/> */}
    </div>
  );
}

export default App;
