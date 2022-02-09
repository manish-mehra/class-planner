

import Header from './components/Header'
import Main from './components/Main'

import { TaskProvider } from './context'

export default function index() {
  
  
  return (
    <TaskProvider>
      <div className='flex-col px-52 mb-20'>
        <Header/>
        <Main/>
    </div>
    </TaskProvider>
  )
}
