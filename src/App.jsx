import React from 'react'
import Features from './components/features'
import HowItWorks from './components/HowItWorks'
import SampleBook from './components/SampleBook'
import DarkModeToggle from './components/DarkModeToggle'

const App = () => {
  return (
    <div className='relative dark:bg-gradient-0'>
      <Features/>
      <HowItWorks/>
      <SampleBook/>
      <DarkModeToggle/>
    </div>
  )
}

export default App