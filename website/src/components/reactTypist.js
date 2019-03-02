import React from 'react';
import Typist from 'react-typist';
 
export default ({children}) => (
    <Typist>
        <span className="my-custom-class" style={{ position: 'absolute', top: '150.5%', left: '32%', color: '#ffb246', fontSize: '3rem', fontWeight: 'bold'}}>CREATORS .</span><br />
        <Typist.Backspace count={10} delay={200} />
        <span style={{ position: 'absolute', top: '150.5%', left: '32%', color: '#ffb246', fontSize: '3rem', fontWeight: 'bold'}}>EXPERTS .</span>
        <Typist.Backspace count={9} delay={200} />
        <span style={{ position: 'absolute', top: '150.5%', left: '32%', color: '#ffb246', fontSize: '3rem', fontWeight: 'bold'}}>BIG-THINKERS .</span>
    </Typist>
)