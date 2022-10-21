import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "../assets/images/logo.png"
import styles from "../styles/Header.module.css"
const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <Image
                    src={Logo}
                    alt="Logo"
                    height={100}
                    width={100}
                />
            </div>
            <div className={styles.rightSide}>
                <ul className={styles.list}>
                    <Link href='/Community'>
                        <li className={styles.listItem}>
                            Community
                        </li>
                    </Link>

                    <Link href='/Club'>
                        <li className={styles.listItem}>
                            Club
                        </li>
                    </Link>

                    <Link href='/Event'>
                        <li className={styles.listItem}>
                            Events
                        </li>
                    </Link>

                    <Link href='/About'>
                        <li className={styles.listItem}>
                            About
                        </li>
                    </Link>

                    <li className={styles.listItem}>
                        Login
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header