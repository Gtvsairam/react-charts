import React from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div  className='navbar-click'>
    <ul>
    <li><NavLink to='/BarChart'>Bar Chart</NavLink></li> <br/>
    </ul>
    
    </div>
  )
}

export default Navbar