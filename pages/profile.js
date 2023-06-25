import React, { useEffect, useState } from "react";
import styles from "../styles/profile.module.css";
import { useAuth } from "@/utils/contexts/AuthContext";
import { useRouter } from "next/router";
import { API } from "@/utils/api/config";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    orders: [],
  });

  const router = useRouter();

  const { currentUser, signOut } = useAuth();

  useEffect(() => {
    if (currentUser === null) {
      router.push("/signin");
    }
  }, [currentUser, router]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get(
        `/orders?filters[email][$eq]=${currentUser.email}`
      );

      console.log({ res });

      setProfile({
        name: currentUser.name,
        email: currentUser.email,
        orders: res.data?.data?.map((item) => ({
          status: item.attributes.status,
          createdAt: item.attributes.createdAt,
          transactionId: item.attributes.txnToken,
          products: item.attributes.products,
        })),
      });
    };

    if (currentUser) fetchData();
  }, [currentUser]);

  const { name, email, orders } = profile;

  function getTotal(products) {
    return products.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
  }

  return (
    <section className={styles.container}>
      {/* <h1>Profile Page</h1> */}
      <h3>{name}</h3>
      <h4>{email}</h4>
      <hr />
      <h3>Previous Orders</h3>
      <div className={styles.orders}>
        {orders.map((order, i) => (
          <div className={styles.order} key={i}>
            <div className={styles.orderStatus}>
              <div className={styles.status}>
                <h4>{i + 1}.</h4>
                <h4>Status: {order.status}</h4>
              </div>
              <div className={styles.transaction}>
                <h4>Date: {new Date(order.createdAt).toLocaleDateString()}</h4>
                <h4>Total: ${getTotal(order.products)}</h4>
                <h4
                  onClick={() =>
                    alert("Transaction ID: " + order.transactionId)
                  }
                >
                  Transaction ID: {order.transactionId?.slice(0, 5)}...
                </h4>
              </div>
            </div>
            <div className={styles.itemsContainer}>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order?.products.map((product, j) => (
                    <tr key={j}>
                      <td>{product.title}</td>
                      <td>{product.quantity}</td>
                      <td>${product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
        {orders.length === 0 && (
          <div className={styles.noOrders}>
            <h3>No orders yet</h3>
          </div>
        )}
      </div>
      <button onClick={signOut}>Logout</button>
    </section>
  );
};

export default Profile;
