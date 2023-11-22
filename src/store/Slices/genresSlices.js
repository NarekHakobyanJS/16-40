import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FilmsAPI } from "../../api/api";


export const fetchGenres = createAsyncThunk(
    'fetchGenres',
    async () => {
        const data = await FilmsAPI.getGenres();

        return data
    }
)
const genresSlice = createSlice({
    name: "genresSlice",
    initialState: {
        genres: []
    },

    reducers: {

    },

    extraReducers: {
        [fetchGenres.fulfilled]: (state, action) => {
            state.genres = action.payload
        }
    }
})

export default genresSlice.reducer;