import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Button from './components/Button'
import Footer from './components/Footer'

function App() {
  const navText = "Coba tekan"
  const click = () => {
    return alert('woy');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Header text={navText}/>
        <Button clicked={click} text={navText}/>
        <Footer text="Bajigur woy"/>
      </header>
    </div>
  );
}

export default App;
