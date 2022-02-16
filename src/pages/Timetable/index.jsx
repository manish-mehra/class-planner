import Header from './components/Header'
import Main from './components/Main'
import { TimetableProvider } from './context'

export default function index() {
  return (
    <>
        <TimetableProvider>
          <div className='flex-col px-48 mb-20'>
            <Header/>
            <Main/>
          </div>
        </TimetableProvider>
    </>
  )
}
