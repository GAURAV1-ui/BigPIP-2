import React from "react";
import styles from '../styles/getbibcard.module.css';
import Image from "next/image";
// import Vector1 from "../../Images/Vector1.svg";
// import calendar from "../../Images/calendar.svg";
// import infinite from "../../Images/infinite.svg";
// import clock from "../../Images/clock.svg";
// import cash from "../../Images/cash-icon.svg";

const GetbibCard = () => {
  return (
    <div>
      <div className={styles.getbib}>
        <div className={styles.getbibCardPip}>
          <h1>Why traders choose BigPIP ?</h1>
          <p>Join us for trading success with a leading prop trading firm,investing in innovative tech for an optimal trading experience.</p>
          {/* <p style={{ marginTop: "-1.2rem" }}> */}
            {/* {" "} */}
            
          {/* </p> */}
        </div>
        <div className={styles.getbibCard_Container}>
          <div className={styles.getbibCard}>
            <Image src="/Vector1.svg" alt="/" width={100} height={100}/>
            <h2>Scaling Plan</h2>
            <p>
              Long-term relationships our aim. Consistent profit leads to 25%
              quarterly balance increase for your Funded Account.
            </p>
          </div>
          <div className={styles.getbibCard}>
          <Image src="/calendar.svg" alt="/" width={100} height={100}/>
            <h2>Bi-weekly Payouts</h2>
            <p>
              Get your payouts every 2 weeks and trust us when we say they are
              fast and safe.
            </p>
          </div>
          <div className={styles.getbibCard}>
          <Image src="/infinite.svg" alt="/" width={100} height={100}/>
            <h2>24/7 Customer Service</h2>
            <p>
              Our customer service is available 24/7, providing round-the-clock
              support to assist with any inquiries or concerns.
            </p>
          </div>
            <div className={styles.getbibCard}>
            <Image src="/clock.svg" alt="/" width={100} height={100}/>
              <h2>No Time Limit</h2>
              <p>
                Trade limitless and no stringent rules on trading styles, work
                your way up all by yourself.
              </p>
            </div>
            <div className={styles.getbibCard}>
              <Image src="/clock.svg" alt="/" width={100} height={100}/>
              <h2>Trade Upto $5million</h2>
              <p>
                Unlock the potential to trade up to 5 million dollars and expand
                your trading capabilities with our powerful funding program.
              </p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default GetbibCard;
