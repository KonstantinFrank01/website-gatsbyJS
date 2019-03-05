import React from "react"
import Ausflug from "../images/ausflug.jpeg"
import ArticleBox1Style from "./articleBox2_style.css"

export default ({children}) => (
    <div class="wrapper">
        <div class="zoom-effect-container">
            <div class="image-card">
                <img src={Ausflug} />
            </div>
        </div>
        <div style={{ position: 'absolute', top: '78%', left: '0%', backgroundColor: '#fafafa', width: '330px', height: '130px', zIndex: '10000'}} class="text">
            <span style={{ position: 'absolute', top: '8%', left: '7%', color: '#004853', fontSize: '1.3rem', zIndex: '100'}}>Grillfeier in der Mittagspause</span>
            <span style={{ position: 'absolute', top: '60%', left: '7%', color: '#004853', fontSize: '0.75rem'}}>Was gibt es schöneres als eine Grillerei von den Chefs für die Mitarbeiter</span>
        </div>
        <div class="overlay">
            <span>In den beiden Sommer quartalen grillen unsere Chefs 2x für unsere Mitarbeiter<br />
                und natürlich auch für sie selbst ;-). Lorem ipsum dolor sit amet, consetetur sadipscing <br /> 
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, <br />
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita <br />
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </span>
        </div>
    </div>
)