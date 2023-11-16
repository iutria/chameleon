import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {

  const links = [
    {to:'/', icon: 'camera', text: 'photos'},
    {to:'/illustration', icon: 'brush', text: 'illustrations'},
    {to:'/vector', icon: 'vector-pen', text: 'vectors'}
  ];

  return <nav id='menu' className='d-flex center p-2'>
    {
      links.map(
        (item,index)=>(
          <NavLink key={index} className='btn' to={item.to}><i className={`me-2 bi bi-${item.icon}`}></i>{item.text}</NavLink>
        )
      )
    }
  </nav>
}

export default NavBar