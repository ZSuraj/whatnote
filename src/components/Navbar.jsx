import React, { useContext, useEffect } from 'react'

import '../styles/Navbar.scss'
import { Link, useLocation, useParams } from 'react-router-dom'
import { MyContext } from '../ContextApi'

const Navbar = () => {

  const { city, setCity } = useContext(MyContext)
  const location = useLocation()

  useEffect(() => {
    const cityName = location.pathname.split('/')[2];
    setCity(cityName)
  }, [location])
  
  return (
    <nav className='navbar'>
        <div className='image-container'>
            <img className='nav-icon' src="https://s3-alpha-sig.figma.com/img/fa21/14b1/d80e1b637478de2fd60e79b2ae880249?Expires=1684713600&Signature=akUbDw2FmFxjt1QukgHaBu~jEhOyv4M5bBlPpVU8gF5~ziPplJmXq2TOLoiDClh3p64UgwjuNs3ii-VyAKjASaXTuxIqxm0rUU3SakZuzkm~h3NzFBigi2ugsnA~Rof3NXHIovkbhcfigAm8jvMR11oysKeL3akNHBBb6X7L3nL4UNND4uPWsPf7W9AjfAPZWHI3I1AzfcgB8nzQW0IKko-s0KBDOsZH44032losSthX1GkH5cRIEjlqVfzvzr5HvduIJ-HkXM1PEcSfeMABEnWpVqirve7GRVwbowFJSt6FUPBhL1N642E9tIkhicgnT7umCkLPuyyHcxj3Zd2Teg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="icon"/>
        </div>
        <div className='nav-buttons'>
          {
            (location.pathname === `/selectseats/${city}` || location.pathname === '/cart') &&
            <Link to="/cities" className='city-btn mr-1'>City Select</Link>
          }
          {
            location.pathname !== '/' &&
            <Link to="/cart" className='cart-btn'>Go to cart</Link>
          }
        </div>
    </nav>
  )
}

export default Navbar