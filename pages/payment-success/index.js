import React,{useEffect,useState} from "react";
import styles from "../../styles/paymentsuccess.module.css";
import {useLocation} from 'react-router-dom'

const PaymentScuccess = () => {

const[param,setParam] = useState(null);
  
  const location = useLocation();

//   useEffect (() => {
//     const queryParams = new URLSearchParams(location.search);
//     const singleValue = queryParams.get('key');
//     console.log(singleValue,'apple');
// },[]);

const query = new URLSearchParams(this.props.location.search);
const token = query.get('session-token');
console.log(token);
  
  return (
    <div className={styles.paymentSuccess}>
      <div className={styles.card}>
        <div
          style={{
            borderRadius: "200px",
            height: "200px",
            width: "200px",
            background: "#F8FAF5",
            margin: "0 auto",
          }}
        >
          <i className={styles.checkmark}>✓</i>
        </div>
        <h1 className={styles.heading}>Success</h1>
        <p className={styles.para}>
          We received your purchase request;
          <br /> we&apos;ll be in touch shortly!
        </p>
      </div>
    </div>
  );
};

export default PaymentScuccess;
