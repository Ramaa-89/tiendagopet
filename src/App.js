import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ClassComponent from './components/ClassComponent/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
import Boton from './components/boton/Boton';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClassComponent/>
        <FunctionalComponent/>
        <Boton/>
      </header>
    </div>
  );
}

export default App;
