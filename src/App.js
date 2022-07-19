import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header>
      <NavBar />
      </header>
      <main>
      <ItemListContainer/>
      <ItemDetailContainer/>
      </main>
      <footer>
      
      </footer>
    </div>
  );
}

export default App;
