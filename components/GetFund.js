import styles from '../styles/getfund.module.css';
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
                    <Image src="/ArrowVector2.svg" alt="/" width={70} height={70}/>
                    {/* <img src= {Arrow2}/> */}
                    <h1>-------------</h1>
                    {/* </div> */}
                    {/* <div className={styles.getFundCardArrow2}> */}
                    <Image src="/ArrowVector2.svg" alt="/" width={70} height={70}/>
                    {/* <img src = {Arrow2} className={styles.getFundCardArrow2}/> */}
                    <h1>----------</h1>
                    {/* </div> */}
            </div>
        <div>
            <div className={styles.getFundCard}>
            <div className={styles.getFundCard1}>
                <h3>Choose your Plan</h3>
                <p>Our Prop Firm has multiple programs to start your journey as a Forex Funded Trader</p>
                <AnchorLink href='#plans'>
                <button>View Plans</button>
                </AnchorLink>
            </div>

            <div className={styles.getFundCard2}>
                <h3>Choose your Plan</h3>
                <p>Prove our capital is safe in your hands by not losing more than 12%</p>
                <AnchorLink href='#plans'>
                <button>Evaluation Objectives</button>
                </AnchorLink>
            </div>
            <div className={styles.getFundCard3}>
                {/* <img src = {logo} alt = "" style ={{backgroundColor: "white", borderRadius: "20px", padding: "8px", marginTop: "3rem "}}/> */}
                <Image src="/logo.png" alt="/" width={220} height={35}/>
                <p>Now you are a BigPIP trader, trade responsibly and consistently to earn up to 85% of your profits. Consistent profits may lead to account scaling through our Scaling Plan, increasing your potential earnings.</p>
                <AnchorLink href='#plans'>
                <button>Earn Real Money</button>
                </AnchorLink>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default GetFund;
