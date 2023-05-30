import { useState,useEffect } from 'react';
import styles from '../styles/plan.module.css';
import axios from 'axios';

const Plan = (props) => {
    const [showOneStep, setShowOneStep] = useState(true);
    const [showStandard, setShowStandard] = useState(false);
    const [plan, setPlan] = useState([]);
    const [plan1, setPlan1] = useState([]);

    const toggleAccountType = () => {
        setShowOneStep((showOneStep) => !showOneStep);
        setShowStandard((showStandard) => !showStandard);
    }

    useEffect(() => {
      axios
        .get("https://bigpip-cms.up.railway.app/api/home?populate=evaluation.plans")
        .then((res) => {
          const data = res.data.data;
          // console.log(data.attributes.evaluation);
          setPlan(data.attributes.evaluation[1].plans);
          setPlan1(data.attributes.evaluation[0].plans);
        })
        .catch((err) => {});
    }, []);


    return (
      <div>
        <div className={styles.plan}>
            <div className={styles.plan_content}>
                <h3 className={styles.plan_content_h}>Choose your Account Type</h3>
                <p className={styles.plan_content_p}>BigPIP Funding offers over 14 different plans to choose from. Assess your skills and choose the right ones for yourself</p>
                <div className={styles.plan_content_btns}>
                <button className={showOneStep ? styles.plan_content_btns_onestep : styles.plan_content_btns_standard} onClick={() => toggleAccountType()}>1-Step Evaluation</button>
                <button className={showOneStep ? styles.plan_content_btns_standard : styles.plan_content_btns_onestep} onClick={() => toggleAccountType()}>Standard Evaluation</button>
                </div>
                </div>
                </div>


<div className={styles.scroll_container}>

{showOneStep && 
 <table className={`${styles.table} ${styles.scroll}`}>

    <thead>
      <tr>
        <td style= {{backgroundColor: "#0C3A08", color:"white",fontSize: "18px"}}>1-STEP EVAL.</td>
        {plan.map(data => (
          <th>{`$${data.totalCost}`}</th>
          ))}
      </tr>
      
    </thead>
  
    <tbody>
      <tr>
        <td>Target</td>
        {/* <td>{plan[0].target}</td> */}
        {plan.map(data => (
          <td>{data.target}</td>
          ))}
        {/* <td></td>
        <td></td>
        <td></td> */}
      </tr>
      <tr>
        <td>Minimum Trading Days</td>
        {plan.map(data => (
          <td>{data.minTradingDays}</td>
          ))}
      </tr>
      <tr>
        <td>Maximum Trading Days</td>
       {plan.map(data => (
          <td>{data.maxTradingDays}</td>
          ))}
      </tr>
      <tr>
        <td>Available Leverage</td>
        {/* <td>{plan[0].availableLeverage}</td> */}
        {plan.map(data => (
          <td>{data.availableLeverage}</td>
          ))}
      </tr>
      <tr>
        <td>Profit Split</td>
        {/* <td>{plan[0].profitSplit}</td> */}
        {plan.map(data => (
          <td>{data.profitSplit}</td>
          ))}
      </tr>
      <tr>
        <td>Refundable Registration Fee</td>
        {plan.map(data => (
          <td>{`$${data.refundableRegFee}`}</td>
          ))}
      </tr>
      <tr>
        <td></td>
        <td><button className={styles.plan_buttons}>Choose Plan</button></td>
        <td><button className={styles.plan_buttons}>Choose Plan</button></td>
        <td><button className={styles.plan_buttons}>Choose Plan</button></td>
        <td><button className={styles.plan_buttons}>Choose Plan</button></td>
      </tr>
    </tbody>
  </table>
        }

  { showStandard && <table className={`${styles.table} ${styles.scroll}`}>
    <thead>
      <tr>
        <td style= {{backgroundColor: "#0C3A08", color:"white",fontSize: "18px"}}>STANDARD EVAL.</td>
        {plan1.map(data => (
          <th>{`$${data.totalCost}`}</th>
          ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Target</td>
        {plan1.map(data => (
          <td>{data.target}</td>
          ))}
      </tr>
      <tr>
        <td>Minimum Trading Days</td>
        {plan1.map(data => (
          <td>{data.minTradingDays}</td>
          ))}
      </tr>
      <tr>
        <td>Maximum Trading Days</td>
        {plan1.map(data => (
          <td>{data.maxTradingDays}</td>
          ))}
      </tr>
      <tr>
        <td>Available Leverage</td>
        {plan1.map(data => (
          <td>{data.availableLeverage}</td>
          ))}
      </tr>
      <tr>
        <td>Profit Split</td>
        {plan1.map(data => (
          <td>{data.profitSplit}</td>
          ))}
      </tr>
      <tr>
        <td>Refundable Registration Fee</td>
        {plan1.map(data => (
          <td>{`$${data.refundableRegFee}`}</td>
          ))}
      </tr>
      <tr>
        <td></td>
        <td><button className={styles.plan_buttons}>Choose Plan</button></td>
        <td><button className={styles.plan_buttons}>Choose Plan</button></td>
        <td><button className={styles.plan_buttons}>Choose Plan</button></td>
        <td><button className={styles.plan_buttons}>Choose Plan</button></td>
        <td><button className={styles.plan_buttons}>Choose Plan</button></td>
        <td><button className={styles.plan_buttons}>Choose Plan</button></td>
      </tr>
    </tbody>
  </table>
}
</div>

    </div>
    )
}

// export async function getServerSideProps() {
//   const res = await fetch(
//     `https://bigpip-cms.up.railway.app/api/testimonials?populate=*`
//   );
//   const data = await res.json();
//   return { props: { data } };
// }

export default Plan;