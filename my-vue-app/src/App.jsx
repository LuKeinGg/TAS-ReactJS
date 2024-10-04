import React from 'react';
import { UserProvider } from './UserContext';
import MostrarUsuario from './components/MostrarUsuario';
import InputUsuario from './components/InputUsuario';
import './App.css';

const App = () => {
  return (
    <UserProvider>
      <div className="app-container">
        <h1>Aplicación de Contexto de Usuario</h1>
        <InputUsuario />
        <MostrarUsuario />
      </div>
    </UserProvider>
  );
};

export default App;

