import React, { useState } from 'react';
import './TaskList.css';

const TaskList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [isEditing, setIsEditing] = useState(null); // Guardar el índice de la tarea que se está editando
    const [editText, setEditText] = useState(''); // Estado para el texto editado

    const addTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask(''); // Limpiar el input después de agregar la tarea
        }
    };

    const deleteTask = (indexToDelete) => {
        // Filtrar las tareas que no coinciden con el índice de la tarea a eliminar
        const updatedTasks = tasks.filter((task, index) => index !== indexToDelete);
        setTasks(updatedTasks); // Actualizar la lista de tareas
    };

    // Iniciar edición
    const startEditing = (index) => {
        setIsEditing(index);
        setEditText(tasks[index]); // Cargar el texto actual en el estado de edición
    };

    // Guardar edición
    const saveEdit = (index) => {
        const updatedTasks = tasks.map((task, i) => (i === index ? editText : task));
        setTasks(updatedTasks);
        setIsEditing(null); // Salir del modo edición
    };

    // Cancelar edición
    const cancelEdit = () => {
        setIsEditing(null); // Salir del modo edición sin guardar
    };

    return (
        <div className="task-list-container">
            <h2>Lista de Tareas</h2>

            {/* Input para agregar tareas */}
            <input
                type="text"
                placeholder="Escribe una tarea..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button className="add-button" onClick={addTask}>Agregar Tarea</button>

            {/* Renderizar lista de tareas */}
            <ul>
                {tasks.map((taskItem, index) => (
                    <li key={index} className="task-item">
                        {/* Modo edición */}
                        {isEditing === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button className="save-button" onClick={() => saveEdit(index)}>Guardar</button>
                                <button className="cancel-button" onClick={cancelEdit}>Cancelar</button>
                            </>
                        ) : (
                            <>
                                {taskItem}
                                <button className="edit-button" onClick={() => startEditing(index)}>Editar</button>
                                <button className="delete-button" onClick={() => deleteTask(index)}>Eliminar</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;