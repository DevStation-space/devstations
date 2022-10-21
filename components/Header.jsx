import Image from 'next/image'
import React from 'react'
import Logo from "../assets/images/logo.png"
import styles from  "../styles/Header.module.css"
const Header = () => {
  return (
    <div className={styles.wrapper}>
        <div>
            <Image
            src={Logo}
            alt="Logo"
            height={100}
            width={100}
            />
        </div>
        <div>
            <ul>
                <li>
                    Community 
                </li>
                <li>
                    CLub
                </li>
                <li>
                    Events
                </li>
                <li>
                    About
                </li>
                <li>
                    Login
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header