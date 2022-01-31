// Outlet used as a placeholder. enables Pagelayout component to render its child routes
import { Outlet } from 'react-router-dom' 

import Sidebar from '../Sidebar'


export default function index() {
  return (
      <div>
          <Sidebar/>
          <Outlet/> 
      </div>
  )
}
