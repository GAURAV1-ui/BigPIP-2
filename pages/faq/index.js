import React, { useState,useEffect } from 'react'
import styles from "../../styles/faq.module.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import axios from 'axios';

const Faq = (props) => {


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
                            {props.data.data.attributes.general.map((item) => (

                                <div className={styles.rowOfAccordion} key={item.id} onClick={() => toggle(item.id)}>
                                    <div className={styles.questionOfAccordion}>

                                        <p>{item.title}</p>
                                        {selected === item.id ? <FaAngleUp className={styles.arrowDown} /> : <FaAngleDown className={styles.arrowDown} />}

                                    </div>
                                    <div className={selected === item.id ? `${styles.answerOfAccordion} ${styles.show}`: styles.answerOfAccordion}>
                                        <p>{item.description}</p>
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
                            {props.data.data.attributes.bigPipFunding.map((item) => (

                                <div className={styles.rowOfAccordion} key={item.id} onClick={() => toggle(item.id)}>
                                    <div className={styles.questionOfAccordion}>

                                        <p>{item.title}</p>
                                        {selected === item.id ? <FaAngleUp className={styles.arrowDown} /> : <FaAngleDown className={styles.arrowDown} />}

                                    </div>
                                    <div className={selected === item.id ? `${styles.answerOfAccordion} ${styles.show}`: styles.answerOfAccordion}>
                                        <p>{item.description}</p>
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
                            {props.data.data.attributes.evaluation.map((item) => (

                                <div className={styles.rowOfAccordion} key={item.id} onClick={() => toggle(item.id)}>
                                    <div className={styles.questionOfAccordion}>

                                        <p>{item.title}</p>
                                        {selected === item.id ? <FaAngleUp className={styles.arrowDown} /> : <FaAngleDown className={styles.arrowDown} />}

                                    </div>
                                    <div className={selected === item.id ? `${styles.answerOfAccordion} ${styles.show}`: styles.answerOfAccordion}>
                                        <p>{item.description}</p>
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


export async function getServerSideProps() {
    const res = await fetch(`https://bigpip-cms.up.railway.app/api/FAQ?populate=*`)
    const data = await res.json();
    return { props: { data } }
  }

export default Faq;
