import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Loyout from './components/Loyout/Loyout';
import ProductPage from './pages/ProductPage/ProductPage';
import Carts from './pages/Carts/Carts';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import Register from './pages/Regiser/Register';

import './App.css';

export const instance = axios.create({
  baseURL: 'https://fakestoreapi.com'
})


function App() {
  const [products, setPorducts] = useState([])

  // console.log(products);
  const [cart, setCart] = useState([])
  const [users, setUsers] = useState([
    {
      id: Date.now(),
      name: "Ashot",
      login: 'admin',
      lastName: 'Xazaryan',
      email: "cgitem@mail.ru",
      phone: '432525234',
      role: "admin",
      password: '1234'
    }
  ])
  const [user, setUser] = useState(null)

  useEffect(() => {
    instance.get('/products')
      .then((res) => setPorducts(res.data.map((el) => {
        return {
          ...el,
          "initprice": el.price,
          "count": 1,
        }
      })))
  }, [])

  const authUser = (user) => {
    setUser(user)
  }

  const addUsers = (values) => {


    setUsers((prev) => {
      return [...prev, { ...values, id: Date.now() }]
    })
  }
  let allPrice = cart.reduce((accum, elem) => accum + elem.initprice, 0)

  const addToCard = (element) => {
    let isArray = false;

    cart.forEach((el) => {
      if (el.id === element.id) {
        isArray = true
        setCart(cart.map((elem) => {
          if (elem.id === element.id) {
            return {
              ...elem,
              count: ++elem.count,
              initprice: elem.price * elem.count
            }
          } else {
            return elem
          }
        }))
      }
    })


    if (!isArray) {
      setCart((prev) => {
        return [...prev, element]
      })
    }
  }

  const btnsClicks = (count, id) => {
    setCart(cart.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          count: count,
          initprice: el.price * count
        }
      } else {
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
        <Route path='/' element={<Loyout cart={cart} users={users} user={user} />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products products={products} addToCard={addToCard} />} />
          <Route path='/products/:id' element={<ProductPage />} />
          <Route path='/carts' element={<Carts allPrice={allPrice} btnsClicks={btnsClicks} cart={cart} removeCartItem={removeCartItem} />} />
          <Route path='/profile' element={<Profile authUser={authUser} />} />
          <Route path='/login' element={<Login users={users} />} />
          <Route path='/register' element={<Register addUsers={addUsers} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
