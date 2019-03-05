import React from "react"
import depBoxStyle from "./depBox3_style.css"
import Strategy from "../images/strategy.jpeg"

export default ({children}) => (
    <div id="depBox3">
        <img src={Strategy} alt="Strategy" />
        <button className="buttonStrategy">STRATEGY</button>
    </div>
)