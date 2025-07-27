import logo from './logo.svg';
import './App.css';
import Aggu from './Aggu.png'; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
	  {/*<img src={logo} className="App-logo" alt="logo" />*/}
		<img src={Aggu} alt="Aggu" width={200} style={{ marginRight: '30px' }} />
			{/* <p>
          Edit <code>src/App.js</code> and save to reload.
			</p> */}
		
        <a
          className="App-link"
          href="https://reactjs.org"
		  target="_blank"
          rel="noopener noreferrer"
		 
        >
		Learn React
        </a>
		 <a
          className="App-link"
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
		         >
	         Agastya 
		</a>
      </header>
    </div>
  );
}

export default App;
