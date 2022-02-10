import React,{useState, useContext, createContext} from 'react'

const TaskContext = createContext()

const TaskProvider = ({children})=>{
    const [tasks, setTasks] = useState([])
    
    return <TaskContext.Provider value = {{
        tasks, setTasks
    }}>
        {children}
    </TaskContext.Provider>
}

export const useTaskContext = ()=>{
    return useContext(TaskContext)
}

export {TaskContext, TaskProvider}