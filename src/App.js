import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header>
      <NavBar />
      </header>
      <main>
      <ItemListContainer/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
