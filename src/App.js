import logo from './logo.svg';
import './App.css';
import Exercise from "./components/UseEffect"

function App() {
  const date = new Date();
  const yearNow = date.getFullYear();

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola
        </p>
        <Exercise year = {yearNow} />
      </header>
    </div>
  );
}

export default App;
