import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Films from '../Components/Films/Films';
import { changePage } from '../store/Slices/filmsSlice';
import './HomePage.css';

const HomePage = () => {
    const dispatch = useDispatch()
    const { films} = useSelector((state) => state.filmsData)

    return (
        <div>
            <div className='films'>
                {
                    films.map((film) => {
                        return <Films key={film.id} film={film} />
                    })
                }
            </div>
            <div>
                <button
                    onClick={() => dispatch(changePage())}
                    className='btn'>more</button>
            </div>
        </div>
    )
}

export default HomePage