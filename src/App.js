
import './App.css';
import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import PetsIcon from '@mui/icons-material/Pets';

import Cuerpo from './componentes/cuerpo'



function App() {

  
  return (
    <div className="App">
      <header className="App-header">
      <PetsIcon></PetsIcon>Imágenes caninas
      </header>
      <Cuerpo className="App-cuerpo"></Cuerpo>
    </div>
  );
}

export default App;
