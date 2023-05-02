import styles from "../../styles/aboutus.module.css";
import Image from "next/image";

const Aboutus = () => {

  const style = {
    '@media (max-width: 700px)': {
        display: "flex",
        flexDirection: "column",
    },
  };

  return (
    <>
      <div className={styles.aboutus}>
        <header className={styles.aboutus_header}>
          <div className={styles.aboutus_heading}>
            <h1>About Us</h1>
          </div>
          <div className={styles.aboutus_header_images}>
            <div>
              <Image 
              src="/trade.png" 
              alt="" 
              width={300}
              height={200}/>
            </div>
            <div>
              <Image 
              src="/tradecentric.png" 
              alt="" 
              width={300}
              height={200}/>
            </div>
            <div>
              <Image
               src="/trust.png" 
               alt="" 
               width={300}
               height={200}/>
            </div>
          </div>
        </header>
        <div className={styles.aboutus_content}>
            
            <div className={styles.aboutus_content_section}>
                <div className={styles.aboutus_content_section_content}>
                <h2>The Mission</h2>
                <p>
                Our mission is to provide our clients with the highest level of trading performance and service. We strive to consistently generate attractive returns for our investors, while maintaining a strong focus on risk management.
                </p>
                </div>
                <div>
                    <Image src='/Mission.png' 
                    alt="" 
                    width={300}
                    height={200}/>
                </div>
            </div>
            <div style={style} className={`$(window).width > 700 ? ${styles.aboutus_content_section} : ${styles.aboutus_content_section1}`}>                <div>
                    <Image
                     src='/Long-Term.png' 
                     alt="" 
                     width={300}
                     height={200}/>
                </div>
                <div className={styles.aboutus_content_section_content}>
                <h2>Long-term Relationships</h2>
                <p>
                We are dedicated to building long-term relationships with our clients and are committed to transparency and open communication. We believe that this is the foundation for a successful partnership.
                </p>
                </div>
            </div>
            <div className={styles.aboutus_content_section}>
                <div className={styles.aboutus_content_section_content}>
                <h2>Dynamic and Trader Centric</h2>
                <p>
                We use advanced technology and proprietary strategies to execute informed trades across various asset classes, including equities, futures, options, and currencies. Our experienced traders identify and capitalize on market opportunities to generate returns.
                </p>
                </div>
                <div>
                    <Image 
                    src='/Dynamic.png' 
                    alt="" 
                    width={300}
                    height={300}/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
