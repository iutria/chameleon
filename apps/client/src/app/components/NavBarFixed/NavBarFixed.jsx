import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/icons/logo.svg'
import FormSearch from '../FormSearchBanner/FormSearch'
import './navbarfixed.css'

const NavBarFixed = ({type, search}) => {

  return (
    <nav className='navbar bg-body-tertiary navbar-fixed'>
        <div className="d-flex w-100 px-3">
          <NavLink to={'/'} className="navbar-brand d-flex">
            <img src={logo} height={40} alt="" /> <span className='d-none d-sm-block'>Chameleon</span>
          </NavLink>
          <FormSearch values={{type, search}}/>
        </div>
    </nav>
  )
}

export default NavBarFixed