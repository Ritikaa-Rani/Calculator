import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className=' w-[325px] h-[400px]'>
          <input type="text" className='border-2 w-[320px] h-[80px]'/>
          <div className=''>
            <button className='border-2 w-20 h-20'>7</button>
            <button className='border-2 w-20 h-20'>8</button>
            <button className='border-2 w-20 h-20'>9</button>
            <button className='border-2 w-20 h-20'>/</button>
            <button className='border-2 w-20 h-20'>4</button>
            <button className='border-2 w-20 h-20'>5</button>
            <button className='border-2 w-20 h-20'>6</button>
            <button className='border-2 w-20 h-20'>*</button>
            <button className='border-2 w-20 h-20'>1</button>
            <button className='border-2 w-20 h-20'>2</button>
            <button className='border-2 w-20 h-20'>3</button>
            <button className='border-2 w-20 h-20'>-</button>
            <button className='border-2 w-20 h-20'>AC</button>
            <button className='border-2 w-20 h-20'>0</button>
            <button className='border-2 w-20 h-20'>=</button>
            <button className='border-2 w-20 h-20'>+</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
