import React from 'react';
import Card from './components/cards';
import './components/cards.css';
import './App.css';


function App() {
  return (
    <div className="app">
      <Card
        titulo="Tarea 1"
        descripcion="Desarrollar el componente de Card en React"
        persona="Matias Alves"
        fechaInicio="18/09/2024"
        fechaFin="20/09/2024"
      />
      <Card
        titulo="Tarea 2"
        descripcion="Revisar el código y hacer mejoras"
        persona="María González"
        fechaInicio="18/09/2024"
        fechaFin="21/09/2024"
      />
      <Card
        titulo="Tarea 3"
        descripcion="Implementar pruebas"
        persona="Carlos Martínez"
        fechaInicio="19/09/2024"
        fechaFin="22/09/2024"
      />
    </div>
  );
}

export default App;
