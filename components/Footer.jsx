// import React from 'react'



// const Footer = () => {
//   return (
//     <div className='md:px-20 md:py-5 px-5 py-2'>
//         <div>
//             <div>
//                 <h1> <span className='text-yellow-500'>DEV</span> STATION</h1>
//                 <p>
//                     DevStation is an Open Source Community that helps tech enthusiasts to grow their self in tech  
//                 </p>
//             </div>
//             <div>

//             </div>
//             <div></div>
//         </div>
//         <div className='flex md:flex-row flex-col justify-between '>
//             <div>
//                 Made with ❤️ by DevStation
//             </div>
//             <div>
//                 All Rights Reserved © 2022
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react'
import styles from "../styles/Footer.module.css"
import { FaInstagramSquare, FaDiscord, FaTwitter } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.bio}>
                    <h1 className={styles.heading}>
                        <span className={styles.spanHeading}>DEV </span> - STATION
                    </h1>
                    <p>
                        DevStation is an Open Source Community that helps tech enthusiasts to grow their self in tech
                    </p>
                </div>
                <div className={styles.company}>
                    <h1 className={styles.heading}>
                        Company
                    </h1>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>About</li>
                        <a href="mailto:devstationspace@gmail.com">
                            <li className={styles.listItem}>Contact</li>
                        </a>
                        <a href="https://devstations.hashnode.dev/" target='_blank' rel='noopener noreferrer'>
                            <li className={styles.listItem}>Blog</li>
                        </a>
                        
                        <li className={styles.listItem}>Privacy</li>
                        <li className={styles.listItem}>Term & condition</li>

                    </ul>
                </div>
                <div className={styles.social}>
                    <h1 className={styles.heading}>
                        Social
                    </h1>
                    <div className={styles.links}>
                        <a href="https://www.instagram.com/dev__station/" rel='noopener noreferrer' target='_blank'>
                            <h1 className={styles.linkItem}>
                                <FaInstagramSquare className={styles.icons} />
                            </h1>
                        </a>
                        <a href="http://">
                            <h1 className={styles.linkItem}>
                                <BsLinkedin className={styles.icons} />
                            </h1>
                        </a>
                        <a href="http://discord.io/devstation" rel='noopener noreferrer' target='_blank'>
                            <h1 className={styles.linkItem}>
                                <FaDiscord className={styles.icons} />
                            </h1>
                        </a>
                        <a href="https://twitter.com/Devs_Station" target='_blank' rel='noopener noreferrer'>
                            <h1 className={styles.linkItem}>
                                <FaTwitter className={styles.icons} />
                            </h1>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

// https://go.qwiklabs.com/arcade?utm_source=mc&utm_medium=lp_confirm&utm_campaign=arcade