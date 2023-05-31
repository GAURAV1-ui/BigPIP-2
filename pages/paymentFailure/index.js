import React from 'react'
import styles from "../../styles/paymentfailure.module.css";

const PaymentFailure = () => {
  return (
    <div>
      <div className={styles.container}>
  <div className={`${styles.ui} ${styles.middle} ${styles.aligned} ${styles.center} ${styles.aligned} ${styles.grid}`}>
    <div className={`${styles.ui} ${styles.eight} ${styles.wide} ${styles.column}`}>
   
      <form className={`${styles.ui} ${styles.large} ${styles.form}`}>
                
          <div className={`${styles.ui} ${styles.icon} ${styles.negative} ${styles.message}`}>
            <i className={`${styles.warning} ${styles.icon}`}></i>
            <div className={styles.content}>
              <div className={styles.header}>
                Oops! Something went wrong.
              </div>
              <p>While trying to reserve money from your account</p>
            </div>
            
         </div>
      
          <span className={`${styles.ui} ${styles.large} ${styles.teal} ${styles.submit} ${styles.fluid} ${styles.button}`}>Try again</span>
      
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default PaymentFailure;