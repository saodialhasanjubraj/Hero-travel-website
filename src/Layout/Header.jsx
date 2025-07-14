import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div>
       <h1>logo</h1>
       <ul><li><NavLink to="">Home</NavLink></li></ul>
       <ul><li><NavLink to="">About</NavLink></li></ul>
       <ul><li><NavLink to="">Package</NavLink></li></ul>
       <ul><li><NavLink to="">Contact Us</NavLink></li></ul>
    </div>
  )
}

export default Header