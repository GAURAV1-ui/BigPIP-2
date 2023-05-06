// import styles from "./Testimonials.module.css";
import React,{useEffect} from "react";
import axios from "axios";
import styles from '../styles/testimonials.module.css';
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";

const Testimonials = () => {

  useEffect(() => {
    axios.get("https://bigpip-cms.up.railway.app/api/home?populate=*")
      .then((res) => {
        // console.log(res.data);
      }).catch((err) => {
      })
  }, []);

  return (
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
            </div>
            </div>
      </div>
    </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://bigpip-cms.up.railway.app/api/testimonials?populate=*`)
  const data = await res.json();
  return { props: { data } }
}

export default Testimonials;
