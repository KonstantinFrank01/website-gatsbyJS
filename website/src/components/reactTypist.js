import React from 'react';
import Typist from 'react-typist';
 
export default ({children}) => (
    <Typist>
  <span className="my-custom-class" style={{ position: 'absolute', top: '154%', left: '28%'}}>First Sentence</span><br />
  <div className="container"  style={{ position: 'absolute', top: '154%', left: '38%'}}>
    <span> This will be animated after first sentence is complete</span>
  </div>
  <span style={{ position: 'absolute', top: '154%', left: '68%'}}>Final sentence</span>
</Typist>
)