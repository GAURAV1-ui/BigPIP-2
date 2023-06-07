import { useState, useEffect } from "react";
import styles from "../styles/plan.module.css";
import axios from "axios";
import { useCart } from "@/utils/contexts/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Plan = (props) => {
  const [showOneStep, setShowOneStep] = useState(true);
  const [showStandard, setShowStandard] = useState(false);
  const [plan, setPlan] = useState([]);
  const [plan1, setPlan1] = useState([]);

  const { addToCart } = useCart();

  const toggleAccountType = () => {
    setShowOneStep((showOneStep) => !showOneStep);
    setShowStandard((showStandard) => !showStandard);
  };

  useEffect(() => {
    axios
      .get(
        "https://bigpip-cms.up.railway.app/api/home?populate=evaluation.plans"
      )
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
          <p className={styles.plan_content_p}>
            BigPIP Funding offers over 14 different plans to choose from. Assess
            your skills and choose the right ones for yourself
          </p>
          <div className={styles.plan_content_btns}>
            <button
              className={
                showOneStep
                  ? styles.plan_content_btns_onestep
                  : styles.plan_content_btns_standard
              }
              onClick={() => toggleAccountType()}
            >
              1-Step Evaluation
            </button>
            <button
              className={
                showOneStep
                  ? styles.plan_content_btns_standard
                  : styles.plan_content_btns_onestep
              }
              onClick={() => toggleAccountType()}
            >
              Standard Evaluation
            </button>
          </div>
        </div>
      </div>

      <div className={styles.scroll_container}>
        {showOneStep && (
          <table className={`${styles.table} ${styles.scroll}`}>
            <tbody>
              <tr style={{ background: "#FEE2CB",
    color: "#212121"}}>
            <th
                  style={{
                    backgroundColor: "#0C3A08",
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  1-STEP EVAL.
                </th>
                <th>Target</th>
                <th>Minimum Trading Days</th>
                <th>Maximum Trading Days</th>
                <th>Available Leverage</th>
                <th>Profit Split</th>
                <th>Refundable Registration Fee</th>
                </tr>
            {plan.map((data, i) => (
              <tr>
                
                <td key={i}>{`$${data.totalCost}`}</td>
                  <td key={i}>{data.target}</td>
                  <td key={i}>{data.minTradingDays}</td>
                  <td key={i}>{data.maxTradingDays}</td>
                  <td key={i}>{data.availableLeverage}</td>
                  <td key={i}>{data.profitSplit}</td>
                  <td key={i}>{`$${data.refundableRegFee}`}</td>
                  <td>
                  <button
                    className={styles.plan_buttons}
                    onClick={() => {
                      addToCart({
                        id: data.key,
                        title: "1-Step Evaluation - 1",
                        description: "Test",
                        price: data.refundableRegFee,
                        quantity: 1,
                      });
                      toast.success("Added to cart");
                    }}
                  >
                    Choose Plan
                  </button>
                </td>
              </tr>
                ))}
                <ToastContainer />
             
            </tbody>
          </table>
        )}

        {showStandard && (
          <table className={`${styles.table} ${styles.scroll}`}>
            <tbody>
              <tr style={{ background: "#FEE2CB",
    color: "#212121"}}>
            <th
                  style={{
                    backgroundColor: "#0C3A08",
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  1-STEP EVAL.
                </th>
                <th>Target</th>
                <th>Minimum Trading Days</th>
                <th>Maximum Trading Days</th>
                <th>Available Leverage</th>
                <th>Profit Split</th>
                <th>Refundable Registration Fee</th>
                </tr>
            {plan1.map((data, i) => (
              <tr>
                
                <td key={i}>{`$${data.totalCost}`}</td>
                  <td key={i}>{data.target}</td>
                  <td key={i}>{data.minTradingDays}</td>
                  <td key={i}>{data.maxTradingDays}</td>
                  <td key={i}>{data.availableLeverage}</td>
                  <td key={i}>{data.profitSplit}</td>
                  <td key={i}>{`$${data.refundableRegFee}`}</td>
                  <td>
                  <button
                    className={styles.plan_buttons}
                    onClick={() => {
                      addToCart({
                        id: data.key,
                        title: "Standard-Evaluation",
                        description: "Test",
                        price: data.refundableRegFee,
                        quantity: 1,
                      });
                      toast.success("Added to cart");
                    }}
                  >
                    Choose Plan
                  </button>
                </td>
              </tr>
                ))}
                <ToastContainer />
             
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Plan;
