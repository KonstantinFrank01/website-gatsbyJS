import React from "react"
import NavigationBar from "../components/navigationBar"
import DepBox1 from "../components/depBox1"
import DepBox2 from "../components/depBox2"
import DepBox3 from "../components/depBox3"
import heroImage from "../images/heroImage3.jpeg"


export default () => (
    <div style={{backgroundColor: 'white'}}>
        <NavigationBar />
        <img src={heroImage} alt="heroImage" style={{position: 'absolute', top: '10%'}}/> 
            <div style={{position: 'absolute', left: '7.5%', top: '100%'}}>
                <DepBox1></DepBox1>
            </div>
            <div style={{position: 'absolute', left: '37.5%', top: '100%'}}>
                <DepBox2></DepBox2>
            </div>
            <div style={{position: 'absolute', left: '67.5%', top: '100%'}}>
                <DepBox3></DepBox3>
            </div>
        
        <div id="colorBox1" style={{ backgroundColor: '#ffe5e0', width: '100%', height: '50%', position: 'absolute', top: '140%', zIndex: '1000'}}>    
            <p style={{position: 'absolute'}}>next content</p>
        </div>
        
    </div>
)