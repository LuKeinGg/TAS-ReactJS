import React from 'react';
import Card from './components/cards';
import './components/cards.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <Card>
        <h3>Tarea 1</h3>
        <p>Descripción: Desarrollar el componente de card en React</p>
        <p>Persona asignada: Matias Alves</p>
        <p>Fecha inicio: 18/09/2024</p>
        <p>Fecha de fin: 20/09/2024</p>
      </Card>
      <Card>
        <h3>Tarea 2</h3>
        <p>Descripción: Revisar el código y hacer mejoras</p>
        <p>Persona asignada: Maria González</p>
        <p>Fecha inicio: 18/09/2024</p>
        <p>Fecha de fin: 21/09/2024</p>
      </Card>
      <Card>
        <h3>Tarea 3</h3>
        <p>Descripción:  Implementar pruebas</p>
        <p>Persona asignada: Carlos Martínez</p>
        <p>Fecha inicio: 18/09/2024</p>
        <p>Fecha de fin: 22/09/2024</p>
      </Card>
    </div>

  );
}

export default App;
