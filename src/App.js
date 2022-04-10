import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/about/About';
import Header from './component/header/Header';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import Oders from './component/orders/Oders';
import Register from './component/Register/Register';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Shipment from './component/Shipment/Shipment';
import Shop from './component/shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Oders></Oders>} />
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        } />
        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment />
          </RequireAuth>
        } />
        <Route path='/about' element={<About></About>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
