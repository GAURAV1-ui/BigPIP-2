import styles from '../styles/getfund.module.css';
import Image from "next/image";
// import logo from "../../Components/Navbar/logo.png";
// import Arrow1 from "../../Images/ArrowVector.svg";
// import Arrow2 from "../../Images/ArrowVector2.svg";

const GetFund = () => {
  return (
    <div>
        <div className={styles.getFundContainer}>
        <div className={styles.getFund}>
            <h1>Get Funded in 3 -easy steps</h1>
            <p>To ensure risk management, our Proprietary Trading Firm requires meeting Trading Objectives. Prove your trading expertise and discipline, with freedom to choose instruments and position size.</p>
        </div>
        
        <div className={styles.getFundCardArrow}>
                    {/* <div className={styles.getFundCardArrow1}> */}
                    <Image src="/ArrowVector2.svg" alt="/" width={100} height={100}/>
                    {/* <img src= {Arrow2}/> */}
                    <h1>-------------</h1>
                    {/* </div> */}
                    {/* <div className={styles.getFundCardArrow2}> */}
                    <Image src="/ArrowVector2.svg" alt="/" width={100} height={100}/>
                    {/* <img src = {Arrow2} className={styles.getFundCardArrow2}/> */}
                    <h1>----------</h1>
                    {/* </div> */}
            </div>
        <div>
            <div className={styles.getFundCard}>
            <div className={styles.getFundCard1}>
                <h3>Choose your Plan</h3>
                <p>Our Prop Firm has multiple programs to start your journey as a Forex Funded Trader</p>
                <button>View Plans</button>
            </div>

            <div className={styles.getFundCard2}>
                <h3>Choose your Plan</h3>
                <p>Our Prop Firm has multiple programs to start your journey as a Forex Funded Trader</p>
                <button>Evaluation Objectives</button>
            </div>
            <div className={styles.getFundCard3}>
                {/* <img src = {logo} alt = "" style ={{backgroundColor: "white", borderRadius: "20px", padding: "8px", marginTop: "3rem "}}/> */}
                <Image src="/logo.png" alt="/" width={100} height={100}/>
                <p>Now you are a BigPIP trader, trade responsibly and consistently to earn up to 85% of your profits. Consistent profits may lead to account scaling through our Scaling Plan, increasing your potential earnings.</p>
                <button>Earn Real Money</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default GetFund;
