import React from "react"
import depBoxStyle from "./depBox2_style.css"
import code from "../images/code.jpeg"

export default ({children}) => (
    <div id="depBox2">
        <img src={code} alt="Online" />
        <button className="buttonOnline">ONLINE</button>
    </div>
)