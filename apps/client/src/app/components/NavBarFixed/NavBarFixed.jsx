import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/icons/logo.svg'
import FormSearch from '../FormSearchBanner/FormSearch'
import './navbarfixed.css'

const NavBarFixed = () => {
  return (
    <nav className='navbar bg-body-tertiary navbar-fixed shadow-sm'>
        <div className="d-flex w-100 px-3">
          <NavLink to={'/'} className="navbar-brand d-flex">
            <img src={logo} height={40} alt="" /> <span className='d-none d-sm-block'>Chameleon</span>
          </NavLink>
          <FormSearch/>
        </div>
    </nav>
  )
}

export default NavBarFixed