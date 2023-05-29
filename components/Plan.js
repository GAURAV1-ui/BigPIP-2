import { useState } from 'react';
import styles from '../styles/plan.module.css';

const Plan = () => {
    const [showOneStep, setShowOneStep] = useState(true);
    const [showStandard, setShowStandard] = useState(false);

    const toggleAccountType = () => {
        setShowOneStep((showOneStep) => !showOneStep);
        setShowStandard((showStandard) => !showStandard);
    }

    return (
        <div className={styles.plan}>
            <div className={styles.plan_content}>
                <h3 className={styles.plan_content_h}>Choose your Account Type</h3>
                <p className={styles.plan_content_p}>BigPIP Funding offers over 14 different plans to choose from. Assess your skills and choose the right ones for yourself</p>
                <div className={styles.plan_content_btns}>
                <button className={showOneStep ? styles.plan_content_btns_onestep : styles.plan_content_btns_standard} onClick={() => toggleAccountType()}>1-Step Evaluation</button>
                <button className={showOneStep ? styles.plan_content_btns_standard : styles.plan_content_btns_onestep} onClick={() => toggleAccountType()}>Standard Evaluation</button>
                </div>
                {/* <div className={styles.plan_content_tables}>
                    {showOneStep && <div className={styles.plan_content_tables_grid_onestep}>
                        <div className={styles.header_1}>1-Step Evaluation</div>
                        <div className={styles.header_2}>$10,000</div>
                        <div className={styles.header_3}>$10,000</div>
                        <div className={styles.header_4}>$10,000</div>
                        <div className={styles.header_5}>$10,000</div>
                        <div className={styles.target}>Target</div>
                        <div className={styles.target_value}>Phase | Target: 10%</div>
                        <div className={styles.min_trade}>Minimum Trading Days</div>
                        <div className={styles.min_trade_days}>5 Days</div>
                        <div className={styles.max_trade}>Maximum Trading Days</div>
                        <div className={styles.max_trade_days}>Unlimited</div>
                        <div className={styles.leverage}>Available Leverage</div>
                        <div className={styles.leverage_value}>1:100</div>
                        <div className={styles.profit}>Profit Split</div>
                        <div className={styles.profit_value}>70%</div>
                        <div className={styles.refund}>Refundable Registration Fee</div>
                        <div className={styles.refund_value_1}>$99</div>
                        <div className={styles.refund_value_2}>$189</div>
                        <div className={styles.refund_value_3}>$399</div>
                        <div className={styles.refund_value_4}>$749</div>
                        <div className={styles.plan_area}>Plan</div>
                        <div className={styles.plan_btn_1}><button>Choose Plan</button></div>
                        <div className={styles.plan_btn_2}><button>Choose Plan</button></div>
                        <div className={styles.plan_btn_3}><button>Choose Plan</button></div>
                        <div className={styles.plan_btn_4}><button>Choose Plan</button></div>
                    </div>}
                    {showStandard && <div className={styles.plan_content_tables_grid_standard}>
                        <div className={styles.header_1}>1-Step Evaluation</div>
                        <div className={styles.header_2}>$25,000</div>
                        <div className={styles.header_3}>$50,000</div>
                        <div className={styles.header_4}>$100,000</div>
                        <div className={styles.header_5}>$200,000</div>
                        <div className={styles.header_6}>$500,000</div>
                        <div className={styles.header_7}>$800,000</div>
                        <div className={styles.target}>Target</div>
                        <div className={styles.target_value}>Phase | Target: 10%</div>
                        <div className={styles.min_trade}>Minimum Trading Days</div>
                        <div className={styles.min_trade_days}>2 Days</div>
                        <div className={styles.max_trade}>Maximum Trading Days</div>
                        <div className={styles.max_trade_days}>Unlimited</div>
                        <div className={styles.leverage}>Available Leverage</div>
                        <div className={styles.leverage_value}>1:200</div>
                        <div className={styles.profit}>Profit Split</div>
                        <div className={styles.profit_value}>80%</div>
                        <div className={styles.refund}>Refundable Registration Fee</div>
                        <div className={styles.refund_value_1}>$199</div>
                        <div className={styles.refund_value_2}>$299</div>
                        <div className={styles.refund_value_3}>$499</div>
                        <div className={styles.refund_value_4}>$949</div>
                        <div className={styles.refund_value_5}>$2199</div>
                        <div className={styles.refund_value_6}>$3499</div>
                        <div className={styles.plan_area}>Plan</div>
                        <div className={styles.plan_btn_1}><button>Choose Plan</button></div>
                        <div className={styles.plan_btn_2}><button>Choose Plan</button></div>
                        <div className={styles.plan_btn_3}><button>Choose Plan</button></div>
                        <div className={styles.plan_btn_4}><button>Choose Plan</button></div>
                        <div className={styles.plan_btn_5}><button>Choose Plan</button></div>
                        <div className={styles.plan_btn_6}><button>Choose Plan</button></div>
                    </div>}
                </div> */}
        {/* <div className ={styles.plan_table} style={{overflowX:"auto"}}>
            <table cellspacing='0'>
            <tr className={styles.row}>
    <th style={{backgroundColor: "#0A3100", color: "white"}}>1-Step Evaluation</th>
    <th style={{backgroundColor: "#FEE2CB"}}>$10,000</th>
    <th style={{backgroundColor: "#FEE2CB"}}>$10,000</th>
    <th style={{backgroundColor: "#FEE2CB"}}>$10,000</th>
    <th style={{backgroundColor: "#FEE2CB"}}>$10,000</th>
  </tr>
  <tr className={styles.row}>
    <td style={{backgroundColor: "#FEE2CB"}}>Target</td>
    <td colspan="4">Phase | Target: 10%</td>
  </tr>
  <tr className={styles.row}>
    <td style={{backgroundColor: "#FEE2CB"}}>Minimum Trading Days</td>
    <td colspan='4'>5 Days</td>
  </tr>
  <tr className={styles.row}>
    <td style={{backgroundColor: "#FEE2CB"}}>Maximum Trading Days</td>
    <td colspan='4'>Unlimited</td>
  </tr>
  <tr className={styles.row}>
    <td style={{backgroundColor: "#FEE2CB"}}>Available Leverage</td>
    <td colspan='4'>1:100</td>
  </tr>
  <tr className={styles.row}>
    <td style={{backgroundColor: "#FEE2CB"}}>Profit Split</td>
    <td colspan='4'>70%</td>
  </tr>
  <tr className={styles.row}>
    <td style={{backgroundColor: "#FEE2CB"}}>Refundable Registration Fees</td>
    <td>$99</td>
    <td>$189</td>
    <td>$399</td>
    <td>$749</td>
  </tr>
  <tr className={styles.row}>
    <td style={{backgroundColor: "#FEE2CB"}}>Plan</td>
    <td><button className={styles.plan_btn}>Choose Plan</button></td>
    <td><button className={styles.plan_btn}>Choose Plan</button></td>
    <td><button className={styles.plan_btn}>Choose Plan</button></td>
    <td><button className={styles.plan_btn}>Choose Plan</button></td>
  </tr>
</table>
  </div> */}

<div className={styles.scroll_container}>
  <table className={`${styles.table} ${styles.scroll}`}>
    <thead>
      <tr>
        <td style= {{backgroundColor: "#0C3A08", color:"white",fontSize: "20px"}}>1-STEP EVAL.</td>
        <td>$10,000</td>
        <td>$20,000</td>
        <td>$50,000</td>
        <td>$1,00,000</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Target</td>
        <td>Phase 1 Target: 10%</td>

      </tr>
      <tr>
        <td>Minimum Trading Days</td>
        <td>5 Days</td>
      </tr>
      <tr>
        <td>Maximum Trading Days</td>
        {/* <td>The Dark Knight</td>
        <td>Action, Crime, Drama, Thriller</td>
        <td>2008</td>
        <td>Christopher Nolan</td> */}
      </tr>
      <tr>
        <td>Available Leverage</td>
        {/* <td>The Godfather: Part II</td>
        <td>Crime, Drama</td>
        <td>1974</td>
        <td>Francis Ford Coppola</td> */}
      </tr>
      <tr>
        <td>Profit Split</td>
        {/* <td>12 Angry Men</td>
        <td>Crime, Drama</td>
        <td>1957</td>
        <td>Sidney Lumet</td> */}
      </tr>
      <tr>
        <td>Refundable Registration Fee</td>
        {/* <td>12 Angry Men</td>
        <td>Crime, Drama</td>
        <td>1957</td>
        <td>Sidney Lumet</td> */}
      </tr>
    </tbody>
  </table>
</div>

    </div>
    </div>
    )
}

export default Plan;