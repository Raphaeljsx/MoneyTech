import React from 'react'
import { IVenda } from '../Context/DataContext'

const VendaItem = ({venda}:{venda: IVenda}) => {
  return (
    <div className='venda box'>
      <a href="">{venda.id}</a>
      <div>{venda.nome}</div>
      <div>{venda.preco.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}</div>
    </div>
  )
}

export default VendaItem