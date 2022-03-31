import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/about/About';
import Header from './component/header/Header';
import Inventory from './component/Inventory/Inventory';
import Oders from './component/orders/Oders';
import Shop from './component/shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Oders></Oders>} />
        <Route path='/inventory' element={<Inventory></Inventory>} />
        <Route path='/about' element={<About></About>} />
      </Routes>
    </div>
  );
}

export default App;
