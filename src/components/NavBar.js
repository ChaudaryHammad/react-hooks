import React from 'react'
import './Nav.css'
import { Link, NavLink } from 'react-router-dom'
function NavBar() {
  return (
    <>
    <div className="nav-bar">
    

        <ul>
            <li>
               <Link to="/home-page">Home</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
            <li>
                <Link to='/hooks'>Hooks</Link>
            </li>


        </ul>
    </div>
    </>
  )
}

export default NavBar