import React from 'react' 
import styles from '../styles/Whatweoffer.module.css'

const Whatweoffer = () => {
  return (
       <div className={styles.what__we__offer}>
        <div className={styles.offer}> 
          <span>What Do</span>
          <span> We</span> 
          <span> Offer ?</span>
        </div>
        <div className={styles.container}>
        <div className={styles.flex}>1</div>
        <div className={styles.flex}>2</div>
        <div className={styles.flex}>3</div>
        </div>
      </div>
  )
}

export default Whatweoffer
