import React, { useState } from "react";
import styles from "../../styles/cart.module.css";
import Link from "next/link";
import { useCart } from "@/utils/contexts/CartContext";

const Cart = () => {
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponCode, setCouponCode] = useState("");

  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    calculateSubtotal,
    calculateTotal,
  } = useCart();

  const subtotal = calculateSubtotal();
  const total = calculateTotal();

  return (
    <div>
      <div className={`${styles.wrap} ${styles.cf}`}>
        <h1 className={styles.projTitle}>Cart</h1>
        <div className={`${styles.heading} ${styles.cf}`}>
          <h1 className={styles.heading1}>My Cart</h1>
          <Link href="/" className={styles.continue}>
            Continue Shopping
          </Link>
        </div>
        <div className={styles.cart}>
          <ul className={styles.cartWrap}>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className={`${styles.items} ${
                  index % 2 ? styles.odd : styles.even
                }`}
              >
                <div className={styles.infoWrap}>
                  <div className={styles.cartSection}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.itemImg}
                    />
                    <h3>{item.name}</h3>

                    <p>
                      <input
                        type="number"
                        className={styles.qty}
                        min="1"
                        step="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, e.target.value)
                        }
                      />{" "}
                      x ${item.price}
                    </p>

                    <p className={styles.stockStatus}> In Stock</p>
                  </div>

                  <div className={`${styles.prodTotal} ${styles.cartSection}`}>
                    <p>${item.price * item.quantity}</p>
                  </div>
                  <div className={`${styles.cartSection} ${styles.removeWrap}`}>
                    <Link
                      href="/"
                      className={styles.remove}
                      onClick={() => removeFromCart(item.id)}
                    >
                      x
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.promoCode}>
          <label htmlFor="promo">Have A Promo Code?</label>
          <input
            type="text"
            name="promo"
            placeholder="Enter Code"
            onChange={(e) => setCouponCode(e.target.value)}
            value={couponCode}
          />
          <a href="#" className={styles.btn}></a>
        </div>

        <div className={`${styles.subtotal} ${styles.cf}`}>
          <ul>
            <li className={styles.totalRow}>
              <span className={styles.label}>Subtotal</span>
              <span className={styles.value}>${subtotal}</span>
            </li>

            <li className={styles.totalRow}>
              <span className={styles.label}>Discount</span>
              <span className={styles.value}>- $0.00</span>{" "}
              {/* You might want to calculate this from a discount code */}
            </li>

            <li className={`${styles.totalRow} ${styles.final}`}>
              <span className={styles.label}>Total</span>
              <span className={styles.value}>${total}</span>
            </li>
            <li className={styles.totalRow}>
              <Link href="/" className={`${styles.btn} ${styles.continue}`}>
                Checkout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
