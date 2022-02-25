import React from 'react'

import Header from './components/Header'
import Main from './components/Main'

import { ExamProvider } from './context'

export default function index() {
  return (
    <ExamProvider>
      <div className='flex-col px-52 mb-20'>
        <Header/>
        <Main/>
    </div>
    </ExamProvider>
  )
}
