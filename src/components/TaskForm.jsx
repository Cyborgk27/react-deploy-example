import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
function TaskForm() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description
        })

        //Vacía el formulario
        setTitle("")
        setDescription("")
    }
    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4" >
                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
                <input placeholder="Escribe tu tarea"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="bg-slate-300 p-3 w-full mb-2" />
                <textarea placeholder='Describe la tarea'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description} 
                    className="bg-slate-300 p-3 w-full mb-2"/>
                <button className='bg-indigo-500 px-2 py-1 rounded-md mt-4 hover:bg-indigo-400'>
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default TaskForm