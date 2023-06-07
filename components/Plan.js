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
  const [standardEvaluation, setStandardEvaluation] = useState({});
  const [oneStepEvaluation, setOneStepEvaluation] = useState({});

  const { addToCart } = useCart();

  const toggleAccountType = () => {
    setShowOneStep((showOneStep) => !showOneStep);
    setShowStandard((showStandard) => !showStandard);
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/home?populate=evaluation.plans.product`
      )
      .then((res) => {
        const data = res.data.data;
        // console.log(data.attributes.evaluation);
        setPlan(data.attributes.evaluation[1].plans);
        setPlan1(data.attributes.evaluation[0].plans);
        setStandardEvaluation(data.attributes.evaluation[0]);
        setOneStepEvaluation(data.attributes.evaluation[1]);
        console.log({
          first: data.attributes.evaluation[0].plans,
          second: data.attributes.evaluation[1].plans,
          all: data,
        });
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
              {oneStepEvaluation?.title}
            </button>
            <button
              className={
                showOneStep
                  ? styles.plan_content_btns_standard
                  : styles.plan_content_btns_onestep
              }
              onClick={() => toggleAccountType()}
            >
              {standardEvaluation?.title}
            </button>
          </div>
        </div>
      </div>

      <div className={styles.scroll_container}>
        {showOneStep && (
          <table className={`${styles.table} ${styles.scroll}`}>
            <tbody>
              <tr style={{ background: "#FEE2CB", color: "#212121" }}>
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
              {oneStepEvaluation?.plans?.map((data, i) => (
                <tr key={data.id}>
                  <td>{`$${data.totalCost}`}</td>
                  <td>{data.target}</td>
                  <td>{data.minTradingDays}</td>
                  <td>{data.maxTradingDays}</td>
                  <td>{data.availableLeverage}</td>
                  <td>{data.profitSplit}</td>
                  <td>{`$${data.refundableRegFee}`}</td>
                  <td>
                    <button
                      className={styles.plan_buttons}
                      onClick={() => {
                        if (data.product?.data) {
                          const { title, price, description } =
                            data.product.data.attributes;
                          addToCart({
                            id: data.product.data.id,
                            title,
                            description,
                            price,
                            quantity: 1,
                          });
                          toast.success("Added to cart");
                        } else {
                          toast.error("Product not available");
                        }
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
              <tr style={{ background: "#FEE2CB", color: "#212121" }}>
                <th
                  style={{
                    backgroundColor: "#0C3A08",
                    color: "white",
                    fontSize: "16px",
                  }}
                >
                  STANDARD EVAL.
                </th>
                <th>Target</th>
                <th>Minimum Trading Days</th>
                <th>Maximum Trading Days</th>
                <th>Available Leverage</th>
                <th>Profit Split</th>
                <th>Refundable Registration Fee</th>
              </tr>
              {standardEvaluation?.plans.map((data, i) => (
                <tr key={data.id}>
                  <td>{`$${data.totalCost}`}</td>
                  <td>{data.target}</td>
                  <td>{data.minTradingDays}</td>
                  <td>{data.maxTradingDays}</td>
                  <td>{data.availableLeverage}</td>
                  <td>{data.profitSplit}</td>
                  <td>{`$${data.refundableRegFee}`}</td>
                  <td>
                    <button
                      className={styles.plan_buttons}
                      onClick={() => {
                        if (data.product?.data) {
                          const { title, price, description } =
                            data.product.data.attributes;
                          addToCart({
                            id: data.product.data.id,
                            title,
                            description,
                            price,
                            quantity: 1,
                          });
                          toast.success("Added to cart");
                        } else {
                          toast.error("Product not available");
                        }
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
