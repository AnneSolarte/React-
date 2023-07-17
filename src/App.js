import logo from './logo.svg';
import './App.css';
import Exercise from "./components/UseEffect"
import {AjaxComponent} from './components/AjaxComponent';

function App() {

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola
        </p>
        <Exercise/>
        <AjaxComponent/>
      </header>
    </div>
  );
}

export default App;
