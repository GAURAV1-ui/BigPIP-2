import React, { useEffect, useState } from "react";
import styles from "../styles/herosection.module.css";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import ChallengeObjective from '../components/ChallengeObjective';
import Plan from "@/components/Plan";
import GetbibCard from "@/components/GetbibCard";
import GetFund from "@/components/GetFund";
import Testimonials from "@/components/Testimonials";

export default function Home(props) {

  console.log(props.data);
  const [counter, setCounter] = useState(100);
  const [counter1, setCounter1] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (counter < 500) {
      setTimeout(() => {
        setCounter((counter) => counter + 32);
      }, 100);
    }
  }, [counter]);

  useEffect(() => {
    if (counter1 < 2) {
      setTimeout(() => {
        setCounter1((counter1) => counter1 + 1);
      }, 100);
    }
  }, [counter1]);

  const onClickGetStartedHandler = () => {
    router.push("/getstarted");
  }

  return (
    <main>
         <div className={styles.heroBackground}>
      <div className={styles.hero}>
        <div className={styles.heroBackgroundContainer}>
          <div className={styles.HomeBackground_content}>
            <div className={styles.HomeBackground_content_heading1}>
              <h1>Trade smart,</h1>
              <h1>not hard!</h1>
              <div className={styles.HomeBackground_content_description1}>
                <br></br>
                <p>Your trading grounds, our capital.</p>
                <p>Earn up to 85% of profits.</p>
              </div>
              <div className={styles.HomeBackground_content_Counter}>
                <div className={styles.HomeBackground_content_Counter1}>
                  {/* <Odometer value={500} format="(.ddd),dd" /> */}

                  <div className={styles.HomeBackground_content_Counter1}>
                    <h2>{`${counter}`}+</h2>
                    <div className={styles.HomeBackground_content_text}>
                      <p>People</p>
                      <p>Onboard</p>
                    </div>
                  </div>
                  <div className={styles.HomeBackground_content_Counter2}>
                    <h2>${counter1}M+</h2>
                    <div className={styles.HomeBackground_content_text}>
                      <p>Paid</p>
                      <p>Out</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.HomeBackground_content_button}>
                <button onClick ={onClickGetStartedHandler}>Join them now</button>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              src="/HeroBackgroundBull.png"
              className={styles.imgTop1}
              alt="homebackgroundBull"
              width={620}
              height={450}
             
            />
            <Image
              src="/HeroBackgroundBull1.png"
              className={styles.imgTop}
              alt="homebackgroundBull1"
              width={640}
              height={460}
            />
          </div>
        </div>
      </div>
      </div>
      <GetFund/>
      <GetbibCard/>
      <ChallengeObjective/>
      <Plan/>
      <Testimonials/>
    </main>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://bigpip-cms.up.railway.app/api/home?populate=*`)
  const data = await res.json();
  return { props: { data } }
}
