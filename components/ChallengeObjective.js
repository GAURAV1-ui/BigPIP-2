import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from '../styles/challengeObjective.module.css';

const Challenge = () => {
  const [challenge, setChallenge] = useState([]);
  const [challenge1, setChallenge1] = useState([]);

  useEffect(() => {
    axios
      .get("https://bigpip-cms.up.railway.app/api/home?populate=evaluation.descriptionPoints")
      .then((res) => {
        const data = res.data.data;
        // console.log(data.attributes.evaluation);
        setChallenge(data.attributes.evaluation[0].descriptionPoints);
        setChallenge1(data.attributes.evaluation[1].descriptionPoints);
      })
      .catch((err) => {});
  }, []);
  console.log(challenge)
  return (
    <div className={styles.objective}>
      <div className={styles.objective_content}>
        <h2 className={styles.objective_content_h}>Challenge Objective</h2>
        <p className={styles.Challengeobjective_content_p}>
          Choose your evaluation steps according to your trading style . Get
          quick with 1-step evaluation or play long with Standard evaluation.
        </p>
        <div className={styles.objective_cards}>
          <div className={`${styles.objective_card} ${styles.objective_card_standard}`}>
            <div className={styles.objective_card_heading}>
              <h3>Standard Evaluation</h3>
              <p className={styles.objective_card_heading_p}>For experienced traders.</p>
            </div>
            
            <div className={styles.objective_card_content}>
            {challenge.map((data) =>(
              <p>&#10003; {data.listItemValue}</p>
              ))}
              <button className={styles.objective_card_content_btn_split}>
              &#43; Profit Split : 85%
              </button>
              <button className={styles.objective_card_content_btn_plan}>
                Choose Plans
              </button>
            </div>
          </div>
          <div className={`${styles.objective_card} ${styles.objective_card_onestep}`}>
            <div className={styles.objective_card_heading}>
              <h3>1-step Evaluation</h3>
              <p className={styles.objective_card_heading_p}>Get Funded by skipping one step</p>
            </div>
            <div className={styles.objective_card_content}>
            {challenge1.map((data) =>(
              <p>&#10003; {data.listItemValue}</p>
              ))}
              <button className={styles.objective_card_content_btn_split}>
              &#43; Profit Split: 70%
              </button>
              <button className={styles.objective_card_content_btn_plan}>
                Choose Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://bigpip-cms.up.railway.app/api/home?populate=*`)
  const data = await res.json();
  return { props: { data } }
}

export default Challenge;
