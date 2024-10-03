import React, { useState } from 'react';
import './TaskList.css';

const TaskList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    // Función para manejar el cambio en el input
    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    const addTask = () => {
        if (task.trim()) { // Si el input no está vacío
            setTasks([...tasks, task]); // Agrega la tarea a la lista
            setTask(''); // Limpia el input después de agregar la tarea
        }
    };

    const deleteTask = (indexToDelete) => {
        // Filtrar las tareas que no coinciden con el índice de la tarea a eliminar
        const updatedTasks = tasks.filter((task, index) => index !== indexToDelete);
        setTasks(updatedTasks); // Actualizar la lista de tareas
    };

    return (
        <div className="task-container">
            <h2>Lista de Tareas</h2>

            {/* Input para ingresar una nueva tarea */}
            <input
                type="text"
                placeholder="Ingresa una tarea"
                value={task}
                onChange={handleInputChange}
            />
            <button onClick={addTask}>Agregar Tarea</button>

            {/* Esto renderiza la lista de tareas */}
            <ul>
                {tasks.map((taskItem, index) => (
                    <li key={index}>{taskItem}
                        {/* Botón para eliminar la tarea */}
                        <button className="delete-button" onClick={() => deleteTask(index)}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
