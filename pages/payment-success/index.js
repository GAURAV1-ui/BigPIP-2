
import React, { useEffect } from "react";
import styles from "../../styles/paymentsuccess.module.css";
import { useRouter } from "next/router";
import { API } from "@/utils/api/config";

const PaymentScuccess = () => {
  const router = useRouter();
  useEffect(() => {
    async function updateOrderStatus() {
      const txnToken = router.query.txnToken;
      const res = await API.put("/orders/0", {
        txnToken,
        status: "successful",
      });
    }

    if (router?.query?.txnToken) {
      updateOrderStatus();
    }
  }, [router.query]);

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
