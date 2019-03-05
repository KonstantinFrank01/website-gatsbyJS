import React from "react"
import depBoxStyle from "./depBox1_style.css"
import popcorn from "../images/movie.jpeg"

export default ({children}) => (
    <div>
        <div id="depBox1">
            <img src={popcorn} alt="popcorn" />
            <button className="buttonMovie">MOVIES</button>
        </div>
    </div>
)