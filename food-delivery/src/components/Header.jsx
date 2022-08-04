import React from 'react'
import logo from "../img/logo.png"

 const Header = () => {
  return (
    <header className="w-screen p-6 px-16 fixed z-50">
        {/* desktip and tablet */}
        <div className="hidden md:flex w-full h-full">
            <div className="flex items-center gap-3">
            <img className="w-8 object-cover" src={logo} alt="name"/>
            <p className="font-bold text-headingColor text-xl">City</p>
            </div>
            <ul className="flex items-center gap-8 ml-auto ">
                <li>Home</li>
                <li>Menu</li>
                <li>About us</li>
                <li>Service</li>
            </ul>
           
        </div>

        {/* mobile */}
        <div className='flex md:hidden w-full h-full'>

        </div>
    </header>
  )
}

export default Header;
