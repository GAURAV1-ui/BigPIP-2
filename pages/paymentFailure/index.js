import React from 'react'
import styles from "../../styles/paymentfailure.module.css";

const PaymentFailure = () => {
  return (
    <div className={styles.failure}>

              <div className={styles.header}>
                <h3>Oops! Something went wrong.</h3>
              <p>While trying to reserve money from your account</p>
              </div>
          <button className={styles.fButton}>Try again</button>

</div>
  )
}

export default PaymentFailure;