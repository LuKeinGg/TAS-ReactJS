import React from 'react';
import { UserProvider } from './UserContext';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <UserProvider>
      <div className="App">
        <h1>Bienvenido a la aplicación</h1>
        <UserProfile />
      </div>
    </UserProvider>
  );
}

export default App;

//Pongo estos comentarios porque tuve un problema con un push. Para que pueda subir la rama.