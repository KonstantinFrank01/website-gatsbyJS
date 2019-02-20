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
        
        <p style={{position: 'absolute', top: '150%'}}>next content</p>
    </div>
)