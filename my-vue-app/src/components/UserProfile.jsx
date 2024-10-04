import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import './UserProfile.css';

const UserProfile = () => {
    // Uso el hook useContext para acceder al valor del contexto
    const { username } = useContext(UserContext);

    return (
        <div className='user-profile'>
            <h2>Perfil del Usuario</h2>
            <p>Nombre de usuario: {username}</p>
        </div>
    );
}

export default UserProfile;
