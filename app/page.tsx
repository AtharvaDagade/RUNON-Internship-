import React, { useState } from 'react'
import Toolbar from './components/Toolbar/Toolbar'
import Website from './components/Website/Website'

const page = () => {

  return (
    
    <div className='flex h-full bg-gradient-to-r from-[#00c3c7] to-[#0287a8]'>
      <Toolbar/>
      <Website/>
    </div>
  )
}

export default page