import React, { useState, useEffect } from 'react';
import './UserList.css';

const UserList = () => {
    // Estado para almacenar los usuarios
    const [users, setUsers] = useState([]);

    // Estado para manejar el loading mientras se hace la llamada a la API
    const [loading, setLoading] = useState(true);

    // useEffect para realizar la llamada a la API una vez que se renderiza el componente
    useEffect(() => {
        // Función asíncrona para obtener los datos de la API
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);  // Guardamos los datos obtenidos en el estado
            } catch (error) {
                console.error('Error al obtener los usuarios:', error);
            } finally {
                setLoading(false); // Una vez completada la carga, desactivamos el loading
            }
        };

        fetchUsers();
    }, []); // El array vacío asegura que solo se ejecute una vez, cuando el componente se monta


    return (
        <div className="user-list-container">
            <h1>Lista de Usuarios</h1>
            {loading ? (
                <p>Cargando usuarios...</p>  // Mostrar un mensaje mientras se cargan los datos
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.id} className="user-card">
                            <p><strong>Nombre:</strong> {user.name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UserList;

//Si se recarga la página se ve que dice Cargando usuarios... y luego muestra la lista de usuarios.