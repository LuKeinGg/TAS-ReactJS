import React from 'react';
import { TemaProvider } from './TemaContext';
import CambiarTema from './components/CambiarTema';
import Contenido from './components/Contenido';
import './App.css';

const App = () => {
  return (
    <TemaProvider>
      <div className="app">
        <CambiarTema />
        <Contenido />
      </div>
    </TemaProvider>
  );
};

export default App;

