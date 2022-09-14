import './App.css';
import NavBar from './components/navbar/NavBar';
import ClassComponent from './components/ClassComponent/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
import Footer from './components/footer/footer';
import Counter from './components/counter/counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  const stock = 10

  return (
    <div className="App">
        <NavBar/> 
      <header className="App-header">
        <ItemListContainer />
        <Counter  stock={stock} />
      </header>
      <Footer/>
    </div>
  );
}

export default App;
