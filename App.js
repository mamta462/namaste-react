import React from 'react';
import  ReactDOM   from 'react-dom/client';

const heading = React.createElement('h1',{id:'heading'},'i am h1 tag');
const headingJSX = <h1 id='heading'>I M h1 tag using JSX</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingJSX);
