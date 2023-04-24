import React, { useState,useEffect } from 'react'
import styles from "../../styles/faq.module.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import axios from 'axios';

const Faq = (props) => {

    console.log(props);

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i);
    };

    // useEffect(() => {
    //     axios.get("https://bigpip-cms.up.railway.app/api/FAQ")
    //       .then((res) => {
    //         console.log(res);
    //       }).catch((err) => {
    //       })
    //   }, []);

    return (
        <>
            <div className={styles.wholePage}>
                <div className={styles.background_of_contactUsPage}>

                    <div style={{ position: "relative" }}>
                        <h1 className={styles.faqs}>Frequently Asked Questions </h1>
                    </div>

                    <div className={styles.faqsTitle}>
                            <h1>General</h1>
                        </div>
                    <div className={styles.faqs_container}>
                        
                        <div className={styles.accordion}>
                            {newdata.map((item) => (

                                <div className={styles.rowOfAccordion} key={item.id} onClick={() => toggle(item.id)}>
                                    <div className={styles.questionOfAccordion}>

                                        <p>{item.question}</p>
                                        {selected === item.id ? <FaAngleUp className={styles.arrowDown} /> : <FaAngleDown className={styles.arrowDown} />}

                                    </div>
                                    <div className={selected === item.id ? `${styles.answerOfAccordion} ${styles.show}`: styles.answerOfAccordion}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                    <div className={styles.faqsTitle}>
                            <h1>BigPip Funding</h1>
                        </div>
                    <div className={styles.faqs_container}>
                        
                        <div className={styles.accordion}>
                            {newdata.map((item) => (

                                <div className={styles.rowOfAccordion} key={item.id} onClick={() => toggle(item.id)}>
                                    <div className={styles.questionOfAccordion}>

                                        <p>{item.question}</p>
                                        {selected === item.id ? <FaAngleUp className={styles.arrowDown} /> : <FaAngleDown className={styles.arrowDown} />}

                                    </div>
                                    <div className={selected === item.id ? `${styles.answerOfAccordion} ${styles.show}`: styles.answerOfAccordion}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                    <div className={styles.faqsTitle}>
                            <h1>Evaluation</h1>
                        </div>
                    <div className={styles.faqs_container}>
                        
                        <div className={styles.accordion}>
                            {newdata.map((item) => (

                                <div className={styles.rowOfAccordion} key={item.id} onClick={() => toggle(item.id)}>
                                    <div className={styles.questionOfAccordion}>

                                        <p>{item.question}</p>
                                        {selected === item.id ? <FaAngleUp className={styles.arrowDown} /> : <FaAngleDown className={styles.arrowDown} />}

                                    </div>
                                    <div className={selected === item.id ? `${styles.answerOfAccordion} ${styles.show}`: styles.answerOfAccordion}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </>
    )

}

const newdata = [
    {
        id: 1,
        question: "WHAT IS FOREX TRADING ?",
        answer: "The foreign exchange (also known as forex or FX) market is a global marketplace for exchanging national currencies. Because of the worldwide reach of trade, commerce, and finance, forex markets tend to be the largest and most liquid asset markets in the world. Currencies trade against each other as exchange rate pairs."

    },
    {
        id: 2,
        question: "WHICH COUNTRIES ARE ALLOWED TO JOIN BIGPIP FUNDING?",
        answer: "We accept and allow all traders from around the world to open an account with us."
    },
    {
        id: 3,
        question: "IS KYC MANDATORY?",
        answer: "KYC (Know Your Client) is a mandatory process for verifying your identity. It’s a regulation that we have to abide by for issuing members like you with a funded account that contains real funding capital."
    },
    {
        id: 4,
        question: "WHAT IS THE LEVERAGE?",
        answer: "For a given event, a paLeverage for all our accounts is 1:100."
    },
    {
        id: 5,
        question: "WHAT PAYMENT METHODS DO YOU ACCEPT?",
        answer: "Currently we accept payments by cryptocurrency. We accept BTC, ETH, LTC, USDC, and USDT . You can either pay via Coinbase or you can send through any other exchange.When making a payment via Cryptocurrency, please make sure to check for the correct network for every currency before making the transaction. The list of correct networks to use are as follows"
    },
    {
        id: 6,
        question: "WHAT DOCUMENTS ARE REQUIRED FOR KYC ?",
        answer: "You can send any official government-issued identification that includes a photo of you, such as the following:"
    },
]

export async function getServerSideProps() {
    const res = await fetch(`https://bigpip-cms.up.railway.app/api/FAQ`)
    const data = await res.json();
  
    return { props: { data } }
  }

export default Faq;
