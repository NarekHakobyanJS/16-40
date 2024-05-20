
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Loyout from './components/Loyout/Loyout';
import ProductPage from './pages/ProductPage/ProductPage';
import Carts from './pages/Carts/Carts';
import { useState } from 'react';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';

function App({products, users}) {
  const [cart, setCart] = useState([])

  let allPrice = cart.reduce((accum, elem) => accum + elem.initprice, 0)


  
  const addToCard = (element) => {
    let isArray = false;

    cart.forEach((el) => {
      if(el.id === element.id) {
        isArray = true
        setCart(cart.map((elem) => {
          if(elem.id === element.id) {
            return {
              ...elem,
              count : ++elem.count,
              initprice : elem.price * elem.count
            }
          }else {
            return elem
          }
        }))
      }
    })


    if(!isArray) {
      setCart((prev) => {
        return [...prev, element]
      })
    }
  }

  const btnsClicks = (count, id) => {
    setCart(cart.map((el) => {
      if(el.id === id) {
        return {
          ...el,
          count : count,
          initprice : el.price * count
        }
      }else {
        return el
      }
    }))
  }

  const removeCartItem = (id) => {
    setCart(cart.filter((el) => el.id !== id))
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loyout cart={cart}/> }>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products products={products}  addToCard={addToCard} />} />
          <Route path='/products/:id' element={<ProductPage products={products}/>}/>
          <Route path='/carts' element={<Carts allPrice={allPrice} btnsClicks={btnsClicks}  cart={cart} removeCartItem={removeCartItem}/> }/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/login' element={<Login users={users}/> }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
