import React,{useState, useContext, createContext} from 'react'

const SubjectContext = createContext()

const sub = [
    {
        id: '1',
        name: 'Math',
        description: 'algebra, trigonometry, statistics, geometry...'
    },

    {
        id: '2',
        name: 'Science',
        description: 'physics, , chemistry, biology'
    }
]

const SubjectProvider = ({children})=>{
    const [subjects, setSubjects] = useState(sub)
    
    return <SubjectContext.Provider value = {{
        subjects, setSubjects
    }}>
        {children}
    </SubjectContext.Provider>
}

export const useSubjectContext = ()=>{
    return useContext(SubjectContext)
}

export {SubjectContext, SubjectProvider}