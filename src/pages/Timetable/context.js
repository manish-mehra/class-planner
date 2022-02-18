import React,{useState, useContext, createContext} from 'react'
import TimetabelStructureData from './components/TimetableStructureData'

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
    const [currentTimetable, setCurrentTimetable] = useState(TimetabelStructureData || [])
    const [timetables, setTimetables] = useState([])

    return <TimetableContext.Provider value = {{
        currentTimetable, setCurrentTimetable,
        subjects, setSubjects,
        timetables, setTimetables
    }}>
        {children}
    </TimetableContext.Provider>
}

export const useTimetableContext = ()=>{
    return useContext(TimetableContext)
}

export {TimetableContext, TimetableProvider}