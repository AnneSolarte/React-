import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Component2 from './Component2';

function App() {

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola
        </p>
        <MyComponent/>
        <Component2/>
      </header>
    </div>
  );
}

export default App;
