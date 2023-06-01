import React, { useEffect } from "react";
import styles from "../../styles/paymentfailure.module.css";
import { useRouter } from "next/router";
import { API } from "@/utils/api/config";

const PaymentFailure = () => {
  const router = useRouter();
  useEffect(() => {
    async function updateOrderStatus() {
      const txnToken = router.query.txnToken;
      const res = await API.patch("/orders/0", {
        txnToken: txnToken,
        status: "failed",
      });
    }

    if (router?.query?.txnToken) {
      updateOrderStatus();
    }
  }, [router.query]);

  return (
    <div className={styles.failure}>
      <div className={styles.header}>
        <h3>Oops! Something went wrong.</h3>
        <p>While trying to reserve money from your account</p>
      </div>
      <button className={styles.fButton}>Try again</button>
    </div>
  );
};

export default PaymentFailure;
