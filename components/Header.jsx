import Image from 'next/image'
import React from 'react'
import Logo from "../assets/images/logo.png"
const Header = () => {
  return (
    <div>
        <div>
            <Image
            src={Logo}
            alt="Logo"
            height={100}
            width={100}
            />
        </div>
    </div>
  )
}

export default Header