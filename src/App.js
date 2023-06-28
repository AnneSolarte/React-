import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Component2 from './Component2';
import Component3 from './Component3';

function App() {
  const ficha_médica = {
    RH:"AB+",
    EPS: "S.O.S",

  }
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola
        </p>
        <Component3
        nombre = "Anne"
        apellido = "Solarte"
        ficha = {ficha_médica}  
        />
        <MyComponent/>
        <Component2/>
      </header>
    </div>
  );
}

export default App;
