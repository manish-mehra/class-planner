import React,{useState, useContext, createContext} from 'react'

const AssignmentContext = createContext()

const sub = [
    {
        id: '1',
        name: 'Math',
        description: 'algebra, trigonometry, statistics, geometry...',
        color: 'red'
    },

    {
        id: '2',
        name: 'Science',
        description: 'physics, , chemistry, biology',
        color: 'blue'
    },
    {
        id: '3',
        name: 'English',
        description: 'physics, , chemistry, biology',
        color: 'green'
    },
    {
        id: '4',
        name: 'History',
        description: 'physics, , chemistry, biology',
        color: 'pink'
    }
]

const AssignmentProvider = ({children})=>{
    const [assignments, setAssignments] = useState([])
    const [subjects, setSubjects] = useState(sub)
    
    return <AssignmentContext.Provider value = {{
        assignments, setAssignments,
        subjects, setSubjects
    }}>
        {children}
    </AssignmentContext.Provider>
}

export const useAssignmentContext = ()=>{
    return useContext(AssignmentContext)
}

export {AssignmentContext, AssignmentProvider}