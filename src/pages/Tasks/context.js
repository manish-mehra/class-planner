import React,{useState, useContext, createContext} from 'react'

const TaskContext = createContext()

const TaskProvider = ({children})=>{
    const [tasks, setTasks] = useState([])
    const [editTaskModal, setEditTaskModal] = useState(false)

    return <TaskContext.Provider value = {{
        tasks, setTasks,
        editTaskModal, setEditTaskModal
    }}>
        {children}
    </TaskContext.Provider>
}

export const useTaskContext = ()=>{
    return useContext(TaskContext)
}

export {TaskContext, TaskProvider}