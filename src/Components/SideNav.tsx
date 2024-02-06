import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSell } from "react-icons/md";
import { TbArrowsTransferUp } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { NavLink } from 'react-router-dom';


const SideNav = () => {
  return (
    <nav className='sidenav box bg-3'>
      <div style={{fontSize:'1.65rem', fontFamily: 'monospace', marginBottom:'1rem'}}>MoneyTech</div>
      <ul >
        <li>
            <span><IoHomeOutline fill='currentColor'/></span>
          <NavLink to='/'>
            Resumo</NavLink>
        </li>
        <li>
            <span><MdOutlineSell fill='currentColor' /></span>
          <NavLink to='/vendas'>
            Vendas</NavLink>
        </li>
        <li>
            <span><TbArrowsTransferUp fill='currentColor'/></span>
          <a href="">
            Webhooks</a>
          </li>
          <li>
            <span><CiSettings fill='currentColor'/></span>
          <a href="">
            Configurações</a>
          </li>
          <li>
            <span><MdOutlineEmail fill='currentColor'/></span>
          <a href="">
            Contato</a>
          </li>
          <li>
            <span><IoMdLogOut fill='currentColor'/></span>
          <a href="">
            Sair</a>
          </li>
      </ul>
    </nav>
  )
}

export default SideNav
