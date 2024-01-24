import React from 'react'
import { useData } from '../Context/DataContext'

const Resumo = () => {
  const {data} = useData()
  return (
    <div>
      <h1>Resumo</h1>
    </div>
  )
}

export default Resumo
