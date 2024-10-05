import React, { useContext } from 'react';
import MostrarTema from './components/MostrarTema';
import MostrarIdioma from './components/MostrarIdioma';
import CambiarTema from './components/CambiarTema';
import CambiarIdioma from './components/CambiarIdioma';
import TemaProvider, { TemaContext } from './TemaContext';
import IdiomaProvider from './IdiomaContext';
import './App.css';

const App = () => {
  const { tema } = useContext(TemaContext); // Obtenemos el tema actual (claro u oscuro)

  return (
    <div className={`app ${tema}`}> {/* Aplicamos la clase en función del tema */}
      <MostrarIdioma />
      <MostrarTema />
      <CambiarIdioma />
      <CambiarTema />
    </div>
  );
};

const RootApp = () => (
  <IdiomaProvider>
    <TemaProvider>
      <App />
    </TemaProvider>
  </IdiomaProvider>
);

export default RootApp;
