
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Loyout from './components/Loyout/Loyout';
import ProductPage from './pages/ProductPage/ProductPage';

function App({products}) {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loyout /> }>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products products={products}/>} />
          <Route path='/products/:id' element={<ProductPage products={products}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
