import React from "react"
import NavigationBar from "../components/navigationBar"
import ITyped from "../utils/ityped-master/src/index"
/*import Typing from "../utils/typing"*/
import DepBox1 from "../components/depBox1"
import DepBox2 from "../components/depBox2"
import DepBox3 from "../components/depBox3"
import heroImage from "../images/heroImage3.jpeg"


export default () => (
    <div style={{backgroundColor: 'white'}}>
        <NavigationBar />
        <img src={heroImage} alt="heroImage" style={{position: 'absolute', top: '10%'}}/> 
            
        <div id="colorBox1" style={{ backgroundColor: '#F2F2F2', width: '100%', height: '115%', position: 'absolute', top: '91%'}}></div>
        <div style={{position: 'absolute', left: '7.5%', top: '100%'}}>
            <DepBox1></DepBox1>
        </div>
        <div style={{position: 'absolute', left: '37.5%', top: '100%'}}>
            <DepBox2></DepBox2>
        </div>
        <div style={{position: 'absolute', left: '67.5%', top: '100%'}}>
            <DepBox3></DepBox3>
        </div>
        <hr id="headingLine" style={{ zIndex: '1000', position: 'absolute', top: '155%', left: '7.5%', height: '0.7%', width: '7.5%', border: 'none', color: '#262222', backgroundColor: '#262222'}}/>
        <span style={{ position: 'absolute', top: '154%', left: '17%'}}>DIGITAL</span>
        <span id="element"style={{ position: 'absolute', top: '154%', left: '27%'}}></span>

        <div id="colorBox2" style={{ backgroundColor: '#ffe5e0', width: '100%', height: '50%', position: 'absolute', top: '240%', zIndex: '1000'}}></div> 
    </div>
)

/*var options = {
    strings: ['Creators', 'Big-Thinkers'],
    typeSpeed: 55,
    backSpeed: 30,
    startDelay: 500,
    backDelay: 500,
    loop: false,
    showCursor: true,
    cursorChar: "|",
    onFinished: function(){}
}
ITyped.ityped.init('#element', options);*/