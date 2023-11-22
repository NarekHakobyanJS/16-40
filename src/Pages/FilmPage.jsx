import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchFilmById} from '../store/Slices/filmsSlice';
import {useParams} from 'react-router-dom';

const FilmPage = () => {
    const {id} = useParams();
    console.log(id);
    const dispatch = useDispatch();
    const {film} = useSelector((state) => state.filmsData)
    useEffect(() => {
        dispatch(fetchFilmById(id))
    }, [id]);

    return (
        <div>
            <h1>{film?.title}</h1>
        </div>
    )
}

export default FilmPage