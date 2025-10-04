import React from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'

const navbar = () => {
  return (
    <div className='px-10 py-10 flex justify-between items-center'>
      <img className='w-150px' src={assets.logo}  />
      <ul className='flex gap-10 list-none text-[#49557e] text-[18px]'>
        <li>home</li>
        <li>menu</li>
        <li>mobile-app</li>
        <li>contact-us</li>
      </ul>
      <div className='flex gap-10 items-center'>
        <img src={assets.search_icon}  />
        <div>
            <img src={assets.basket_icon} alt="" />
            <div></div>
        </div>
        <button className='text-base border rounded-lg border-black px-2 py-2 bg-transparent'>sign in</button>
      </div>
      
    </div>
  )
}

export default navbar
