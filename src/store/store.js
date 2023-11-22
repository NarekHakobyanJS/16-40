import {configureStore} from "@reduxjs/toolkit";
import filmsSlice from "./Slices/filmsSlice";
import genresSlices from "./Slices/genresSlices";

export const store = configureStore({
    reducer : {
        genresData : genresSlices,
        filmsData : filmsSlice
    }

})

export default store;