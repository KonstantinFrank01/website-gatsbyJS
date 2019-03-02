import React from 'react';
import Typist from 'react-typist';
 
export default ({children}) => (
    <Typist>
  <span className="my-custom-class" style={{ position: 'absolute', top: '154%', left: '28%'}}>First Sentence</span><br />
  <Typist.Backspace count={8} delay={200} />
  <span style={{ position: 'absolute', top: '154%', left: '31%'}}>Phrase</span>
</Typist>
)