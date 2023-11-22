import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilmsByPage } from './store/Slices/filmsSlice';
import HomePage from './Pages/HomePage';
import Header from './Components/Header/Header';
import './App.css';
import FilmPage from './Pages/FilmPage';



function App() {
  const dispatch = useDispatch()
  const { pageNumber } = useSelector((state) => state.filmsData)

  useEffect(() => {
    dispatch(fetchFilmsByPage(pageNumber))
  }, [pageNumber])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/film/:id' element={<FilmPage />}/>
      </Routes>
    </div>
  );
}

export default App;
