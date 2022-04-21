import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Acceuil from './pages/Acceuil';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Orinoco</h1>

        <nav>
          <Link to="/acceuil"> <h2>Acceuil</h2></Link>
          <Link to="/pannier"> <h2>Pannier</h2> </Link>
          <Link to="/commander"> <h2>Commander</h2> </Link>
        </nav>
      </header>

      <Routes>
        <Route exact path="/" element={<Acceuil/>}/>
        <Route path="/acceuil" element={<Acceuil/>}/>
      </Routes>
    </div>
  );
}

export default App;
