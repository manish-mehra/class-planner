import Header from './components/Header'
import Main from './components/Main'

export default function index() {
  return (
    <>
        <div className='flex-col px-48 mb-20'>
          <Header/>
          <Main/>
        </div>
    </>
  )
}
