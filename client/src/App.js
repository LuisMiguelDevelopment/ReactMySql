import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Libros from './pages/Libros';
import Agregar from './pages/Agregar';
import Actualizar from './pages/Actualizar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Libros/>} />
            <Route path='/agregar' element={<Agregar/>} />
            <Route path='/actualizar' element={<Actualizar/>} />           
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
