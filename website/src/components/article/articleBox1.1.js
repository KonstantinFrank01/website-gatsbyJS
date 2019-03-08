import React from "react"
import Barbecue from "../images/barbecue.jpeg"
import ArticleBox1Style from "./articleBox1_style.css"

export default ({ img, title, summary }) => (
    <div class="wrapper">
        <div class="zoom-effect-container">
            <div class="image-card">
                <img src={ img } />
            </div>
        </div>
        <div style={{ position: 'absolute', top: '78%', left: '0%', backgroundColor: '#fafafa', width: '330px', height: '130px', zIndex: '10000'}} class="text">
            <span style={{ position: 'absolute', top: '8%', left: '7%', color: '#004853', fontSize: '1.3rem', zIndex: '100'}}>{ title }</span>
            <span style={{ position: 'absolute', top: '60%', left: '7%', color: '#004853', fontSize: '0.75rem'}}>{ summary }</span>
        </div>
        <div class="overlay">
            <span>{ excerpt }</span>
            {/* button */}
        </div>
    </div>
)