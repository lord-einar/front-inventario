import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/navbar/Menu';
import Remitos from './components/remitos/Remitos';

function App() {
  return (
    <div className="App">
      <header>
        <Menu />

        <Remitos />
      </header>
    </div>
  );
}

export default App;
