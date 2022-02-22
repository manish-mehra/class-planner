import React,{useState, useContext, createContext} from 'react'

const AssignmentContext = createContext()


const AssignmentProvider = ({children})=>{
    const [assignments, setAssignments] = useState([])
    
    return <AssignmentContext.Provider value = {{
        assignments, setAssignments
    }}>
        {children}
    </AssignmentContext.Provider>
}

export const useAssignmentContext = ()=>{
    return useContext(AssignmentContext)
}

export {AssignmentContext, AssignmentProvider}