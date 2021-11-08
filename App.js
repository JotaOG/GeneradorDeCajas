import React, { useState } from 'react';
import './App.css';
import { CreateBox } from './Components/CreateBox';
import { DisplayBox } from './Components/DisplayBox';

function App() {
  const [style, setStyle] = useState([{
    width: '',
    height: '',
    backgroundColor: ''
}]);

  return (
    <div className="App">
      <CreateBox setstyle={setStyle} style={style}/>
      <DisplayBox style={style}/>
    </div>
  );
}

export default App;
