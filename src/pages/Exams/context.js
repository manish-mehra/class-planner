import React,{useState, useContext, createContext} from 'react'

const ExamContext = createContext()

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

const ExamProvider = ({children})=>{
    const [exams, setExams] = useState([])
    const [subjects, setSubjects] = useState(sub)
    
    return <ExamContext.Provider value = {{
        exams, setExams,
        subjects, setSubjects
    }}>
        {children}
    </ExamContext.Provider>
}

export const useExamContext = ()=>{
    return useContext(ExamContext)
}

export {ExamContext, ExamProvider}