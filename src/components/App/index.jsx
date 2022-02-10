import { Link } from "react-router-dom"
import {
  Routes,
  Route
} from "react-router-dom"

//importing routes
import Overview from '../../pages/Overview'
import Agenda from '../../pages/Agenda'
import Timetable from '../../pages/Timetable'
import Assignments from '../../pages/Assignments'
import Exams from '../../pages/Exams'
import Semesters from '../../pages/Semesters'
import Subjects from '../../pages/Subjects'
import Tasks from '../../pages/Tasks'
import Teachers from '../../pages/Teachers'

//import layout component
import PageLayout from '../PageLayout'

function App() {
  
  return (
    <>
        <Routes>
          <Route path="/" element={<PageLayout />} >
            <Route index path = "/" element = {<Overview/>}/>
            <Route path="/agenda" element={<Agenda />}/>
            <Route path="/timetable" element={<Timetable />}/>
            <Route path="/assignments" element={<Assignments />}/>
            <Route path="/exams" element={<Exams />}/>
            <Route path="/semesters" element={<Semesters />}/>
            <Route path="/subjects" element={<Subjects />}/>
            <Route path="/tasks" element={<Tasks />}/>
            <Route path="/teachers" element={<Teachers />}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
