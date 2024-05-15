
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Loyout from './components/Loyout/Loyout';
import ProductPage from './pages/ProductPage/ProductPage';
import Carts from './pages/Carts/Carts';
import { useState } from 'react';

function App({products}) {
  const [cart, setCart] = useState([])

  // console.log(cart);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loyout cart={cart}/> }>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products products={products} setCart={setCart}/>} />
          <Route path='/products/:id' element={<ProductPage products={products}/>}/>
          <Route path='/carts' element={<Carts cart={cart}/> }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
