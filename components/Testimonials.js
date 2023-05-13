// import styles from "./Testimonials.module.css";
import React,{useEffect, useState} from "react";
import axios from "axios";
import styles from '../styles/testimonials.module.css';
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";

const Testimonials = () => {

  const [testimonial, setTestimmonial] = useState([]);

  useEffect(() => {
    axios.get("https://bigpip-cms.up.railway.app/api/testimonials?populate=*")
      .then((res) => {
        const data = res.data.data;
        console.log(data);
        setTestimmonial(data);
      }).catch((err) => {
      })
  }, []);

  console.log(testimonial);

  return (
    <>
    <div style ={{backgroundColor: "#001f0f"}}>

    <div className={styles.testimonials}>
      <div className={styles.testimonials_content}>
        <div className={styles.testimonials_content_heading}>
          <div className={styles.testimonials_content_heading_h}>
            Listen To What Traders Have To Say
            </div>
          <div className={styles.testimonials_content_heading_p}>
            Our 24/7 support team is available for all your FOREX Funded account
            needs, day or night we are there for you. When you need us we are
            always there to assist.
          </div>
        </div>
      </div>
      <div className={styles.testimonials_content}>
        <div className={styles.testimonials_content_cards}>
        {testimonial.map((item) => (
          <div className={styles.testimonials_content_card}>

            <div className={styles.testimonials_content_card_heading}>
           
              <h4>{item.attributes.title}</h4>
              <p>
                {item.attributes.description}
              </p>
              <IconContext.Provider
                value={{ color: "green"}}
              >
                  {/* <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar /> */}
                  
              {Array.from({ length: item.attributes.clientRating }, (_, index) => <FaStar key={index} />)}
              <span className={styles.testimonials_content_card_heading_star}>{item.attributes.clientName}</span>
              </IconContext.Provider>
              
            </div>
            </div>
            ))} 

          {/* <div className={styles.testimonials_content_card}>
            <div className={styles.testimonials_content_card_heading}>
              <h4>No limit at our trading rule</h4>
              <p>
                Lorem psum is a crazy good text ot act as a dummy text at
                different places
              </p>
              <IconContext.Provider
                value={{ color: "green"}}
              >
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
              <span className={styles.testimonials_content_card_heading_star}>Roxanne</span>
              </IconContext.Provider>
            </div>
            </div>
          <div className={styles.testimonials_content_card}>
            <div className={styles.testimonials_content_card_heading}>
              <h4>No limit at our trading rule</h4>
              <p>
                Lorem psum is a crazy good text ot act as a dummy text at
                different places
              </p>
              <IconContext.Provider
                value={{ color: "green"}}
              >
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
              <span className={styles.testimonials_content_card_heading_star}>Roxanne</span>
              </IconContext.Provider>
            </div>
            </div>
          <div className={styles.testimonials_content_card}>
            <div className={styles.testimonials_content_card_heading}>
              <h4>No limit at our trading rule</h4>
              <p>
                Lorem psum is a crazy good text ot act as a dummy text at
                different places
              </p>
              <IconContext.Provider
                value={{ color: "green"}}
              >
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
              <span className={styles.testimonials_content_card_heading_star}>Roxanne</span>
              </IconContext.Provider>
            </div>
            </div> */}
            </div>
      </div>
    </div>
    </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://bigpip-cms.up.railway.app/api/testimonials?populate=*`)
  const data = await res.json();
  return { props: { data } }
}

export default Testimonials;
