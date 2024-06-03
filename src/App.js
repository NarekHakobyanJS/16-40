import { useEffect, useRef, useState } from 'react';
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
import MyContext from './MyContext';

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

  const storage = useRef(false)
  useEffect(() => {

    if (storage.current) {
      localStorage.setItem('cartStore', JSON.stringify(cart))
    }
    storage.current = true

  }, [cart])

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

  const globalInfo = {
    cart,
    users,
    user,
    products,
    addToCard,
    allPrice,
    btnsClicks,
    removeCartItem,
    authUser,
    addUsers
  }
  return (
    <div className="App">
      <MyContext.Provider value={globalInfo}>
        <Routes>
          <Route path='/' element={<Loyout />}>
            <Route index element={<Home />} />
            <Route path='/products' element={<Products  />} />
            <Route path='/products/:id' element={<ProductPage />} />
            <Route path='/carts' element={<Carts />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login  />} />
            <Route path='/register' element={<Register />} />
          </Route>
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
