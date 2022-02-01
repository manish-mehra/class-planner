// Outlet used as a placeholder. enables Pagelayout component to render its child routes
import { Outlet } from 'react-router-dom' 

import Sidebar from '../Sidebar'
import MainWrapper from '../MainWrapper'

export default function index() {
  return (
      <div className='flex min-h-screen'>
          <Sidebar/>
          <MainWrapper>
            <Outlet/> 
          </MainWrapper>
      </div>
  )
}
