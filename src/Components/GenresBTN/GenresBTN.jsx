import React from "react";
import './GenresBTN.css'

const GenresBTN = ({gener})=>{
    return(
        <button className="GenersBtn">{gener.name}</button>
    )
}
export default GenresBTN;