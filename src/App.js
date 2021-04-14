import { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(()=>{
    //initializing materialize js
    M.AutoInit();
  })
  return (
    <div className="App">
      Hello There
    </div>
  );
}

export default App;
