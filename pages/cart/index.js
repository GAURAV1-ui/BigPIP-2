import React from 'react';
import styles from "../../styles/cart.module.css";

const Cart = () => {
  return (
    <div>
      <div className={`${styles.wrap} ${styles.cf}`}>
  <h1 className={styles.projTitle}>Responsive Table<span>-Less</span> Shopping Cart</h1>
  <div className={`${styles.heading} ${styles.cf}`}>
    <h1 className={styles.heading1}>My Cart</h1>
    <a href="/" className={styles.continue}>Continue Shopping</a>
  </div>
  <div className={styles.cart}>
    {/* <ul className={styles.tableHead}>
      <li className={styles.prodHeader}>Product</li>
      <li>Quantity</li>
      <li>Total</li>
       <li>Remove</li>
    </ul> */}
    <ul className={styles.cartWrap}>
      <li className={`${styles.items} ${styles.odd}`}>

        <div className={styles.infoWrap}>
          <div className={styles.cartSection}>
            <img src ="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" className={styles.itemImg} />
            <p className={styles.itemNumber}>#QUE-007544-002</p>
            <h3>Item Name 1</h3>

            <p> <input type ="text" className={styles.qty} placeholder="3" /> x $5.00</p>

            <p className={styles.stockStatus}> In Stock</p>
          </div>

          <div className={`${styles.prodTotal} ${styles.cartSection}`}>
            <p>$15.00</p>
          </div>
          <div className={`${styles.cartSection} ${styles.removeWrap}`}>
            <a href="/" className={styles.remove}>x</a>
          </div>
        </div>
      </li>
      <li className={`${styles.items} ${styles.even}`}>

        <div className={styles.infoWrap}>
          <div className={styles.cartSection}>

            <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" className={styles.itemImg}/>
            <p className={styles.itemNumber}>#QUE-007544-002</p>
            <h3>Item Name 1</h3>

            <p> <input type="text" className={styles.qty} placeholder="3" /> x $5.00</p>

            <p className={styles.stockStatus}> In Stock</p>
          </div>

          <div className={`${styles.prodTotal} ${styles.cartSection}`}>
            <p>$15.00</p>
          </div>
          <div className={`${styles.cartSection} ${styles.removeWrap}`}>
            <a href="/" className={styles.remove}>x</a>
          </div>
        </div>
      </li>

    </ul>
  </div>

  <div className={styles.promoCode}><label for="promo">Have A Promo Code?</label><input type="text" name="promo" placholder="Enter Code" />
    <a href="#" className={styles.btn}></a>
  </div>

  <div className={`${styles.subtotal} ${styles.cf}`}>
    <ul>
      <li className={styles.totalRow}><span className={styles.label}>Subtotal</span><span className={styles.value}>$35.00</span></li>

      <li className={styles.totalRow}><span className={styles.label}>Discount</span><span className={styles.value}>- $5.00</span></li>

      <li className={`${styles.totalRow} ${styles.final}`}><span className={styles.label}>Total</span><span className={styles.value}>$30.00</span></li>
      <li className={styles.totalRow}><a href="/" className={`${styles.btn} ${styles.continue}`}>Checkout</a></li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Cart;