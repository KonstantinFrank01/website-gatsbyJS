import React from "react"
import NavigationBar from "../components/navigationBar"
import DepBox1 from "../components/depBox1"
import DepBox2 from "../components/depBox2"
import DepBox3 from "../components/depBox3"
import Typist from "../components/reactTypist"
import Logo from "../images/logo.jpg"
import heroImage from "../images/heroImage3.jpeg"


export default () => (
    <div style={{backgroundColor: 'white'}}>
        <NavigationBar />
        <img src={Logo} alt="Firmenlogo" style={{position: 'absolute', top: '1.5%', left: '1.4%', height: '53px', width: '215px'}} /> 
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
        <hr id="headingLine" style={{ zIndex: '1000', position: 'absolute', top: '155%', left: '7.5%', height: '0.7%', width: '7.5%', border: 'none', color: '#ffb246', backgroundColor: '#ffb246'}}/>
        <span style={{ position: 'absolute', top: '154%', left: '17%', color: '#ffb246'}}>DIGITAL</span>
        <Typist></Typist>

        <div id="colorBox2" style={{ backgroundColor: '#ffe5e0', width: '100%', height: '50%', position: 'absolute', top: '240%', zIndex: '1000'}}></div> 
    </div>
)