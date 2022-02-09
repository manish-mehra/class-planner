import React from 'react'
import Header from './components/Header'
import Main from './components/Main'

export default function index() {
  return (
    <div className='flex-col px-52 mb-20'>
        <Header/>
        <Main/>
    </div>
  )
}
