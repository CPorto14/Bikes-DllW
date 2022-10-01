import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './App'
import Info from './paradaBici'

function Direccion() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/paradaBici/:id' element={<Info></Info>}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default Direccion;