import React, {useState} from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar'

function App() {
  const [getNavbarValue, setNavbarValue] = useState("")

  const changeNavbarValue = () => {
    setNavbarValue('myContact')
  }
  
    return (
    <div>
      <NavigationBar/>
      <h1>Homepage</h1>
      <p>{getNavbarValue}</p>
      <button onClick={() => changeNavbarValue()}>Ubah Posisi</button>
    </div>
  );
}

export default App;
