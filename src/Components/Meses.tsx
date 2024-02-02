import React from 'react'
import MesBtn from './MesBtn'

const Meses = () => {
  return (
    <div className='flex'>
      <MesBtn n={-2}/>
      <MesBtn n={-1}/>
      <MesBtn n={0}/>
      <MesBtn n={1}/>
    </div>
  )
}

export default Meses