import React,{useState, useContext, createContext} from 'react'

const TimetableContext = createContext()

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

const TimetableProvider = ({children})=>{
    const [subjects, setSubjects] = useState(sub)
    
    return <TimetableContext.Provider value = {{
        subjects, setSubjects
    }}>
        {children}
    </TimetableContext.Provider>
}

export const useTimetableContext = ()=>{
    return useContext(TimetableContext)
}

export {TimetableContext, TimetableProvider}