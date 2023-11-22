import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FilmsAPI } from "../../api/api";



export const fetchFilmsByPage = createAsyncThunk(
    'fetchFilmsByPage',
    async (pageNumber) => {
        const data = await FilmsAPI.getFilmsByPage(pageNumber)

        return data
    }
)

export const fetchFilmById = createAsyncThunk(
    'fetchFilmById',
    async (id) => {
        const data = await FilmsAPI.getFilmById(id);

        return data
    }
)

export const fetchFilmsBySearch = createAsyncThunk(
    'fetchFilmsBySearch',
    async (text) => {
        const data = await FilmsAPI.getFilmsBySearch(text)

        return data
    }
)
const filmsSlice = createSlice({
    name: 'filmsSlice',
    initialState: {
        films: [],
        filmsSearch : [],
        film: null,
        pageNumber: 1,
        text : '',
        isFettching: false
    },
    reducers: {
        changePage(state, action) {
            state.pageNumber = state.pageNumber + 1
        },
        changeText(state, action){
            state.text = action.payload
        }
    },
    extraReducers: {
        [fetchFilmsByPage.pending]: (state, action) => { },
        [fetchFilmsByPage.fulfilled]: (state, action) => {
            state.films = action.payload
        },
        [fetchFilmById.fulfilled]: (state, action) => {
            state.film = action.payload
        },
        [fetchFilmsBySearch.fulfilled] : (state, action) => {
            state.filmsSearch = action.payload
        }
    }
});

export const { changePage, changeText } = filmsSlice.actions
export default filmsSlice.reducer
