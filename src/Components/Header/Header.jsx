import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../../store/Slices/genresSlices";
import { changeText, fetchFilmsBySearch } from "../../store/Slices/filmsSlice";
import GenresBTN from "../GenresBTN/GenresBTN";
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(false);
    const { genres } = useSelector((state) => state.genresData)
    const { text, filmsSearch } = useSelector((state) => state.filmsData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchGenres())
    }, []);

    useEffect(() => {
        dispatch(fetchFilmsBySearch(text))
        if(text.length >= 3){
            setOpen(true)
        }else {
            setOpen(false)
        }
    }, [text])

    const changeTextUI = (e) => {
        dispatch(changeText(e.target.value))
    }

    return (
        <header>
            <h1>Logo</h1>
            <nav >
                {
                    genres.map((gener) => {
                        return <GenresBTN key={gener.id} gener={gener} />
                    })
                }
            </nav>
            <div className="search">
                <input
                    value={text}
                    onChange={changeTextUI}
                />
                {
                    open && <div className="search-block">
                        {
                            filmsSearch.map((film) => {
                                return <li key={film.id}>{film.title}</li>
                            })
                        }
                    </div>
                }
            </div>
        </header>
    )
}

export default Header;


