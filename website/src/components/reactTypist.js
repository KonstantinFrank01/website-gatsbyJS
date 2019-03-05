import React from 'react';
import Typist from 'react-typist';
//import Waypoint from 'react-waypoint';
 
export default ({children}) => (
        <Typist avgTypingDelay={45}>
            <span className="my-custom-class" style={{ position: 'absolute', top: '145.5%', left: '32%', color: '#f63700', fontSize: '3rem'}}>CREATORS .</span><br />
            <Typist.Backspace count={10} delay={400}/>
            <span style={{ position: 'absolute', top: '145.5%', left: '32%', color: '#f63700', fontSize: '3rem'}}>BIG-THINKERS .</span>
            <Typist.Backspace count={14} delay={400} />
            <span style={{ position: 'absolute', top: '145.5%', left: '32%', color: '#f63700', fontSize: '3rem'}}>EXPERTS .</span>
        </Typist>
)

