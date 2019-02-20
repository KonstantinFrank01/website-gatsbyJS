import React from "react"
import depBoxStyle from "./depBox1_style.css"
import popcorn from "../images/popcorn.jpg"

export default ({children}) => (
    <div>
        <div id="depBox1">
            <img src={popcorn} alt="popcorn" />
        </div>
        <button className="buttonMovie">Movies</button>
    </div>
)

/*function showButton() {
    if (document.getElementById('depBox1').onmouseover == true) {
        console.log('over');
    }
}*/