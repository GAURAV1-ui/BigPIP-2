import { IconContext } from "react-icons/lib";
import styles from "../../styles/footer.module.css";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.inner_footer}>
        <div className={styles.footer_item}>
          <div className={styles.footer_items} style={{ textAlign: "left" }}>
            <h1>About Us</h1>
            <p>
              We are a group of experienced traders and investors who have come
              together to form a dynamic and innovative trading firm. Our team
              consists of individuals with diverse backgrounds and expertise,
              ranging from quantitative analysis to market analysis and
              execution.
            </p>
          </div>
        </div>
        <div className={styles.footer_items1}>
          <div className={styles.footer_items} style={{ textAlign: "left" }}>
            <h3>Quick Links</h3>
            <ul className={styles.footer_items_ul}>
              <Link target="_blank" href="/">
                <li>Home</li>
              </Link>
              <Link target="_blank" href="/getstarted">
                <li>About Us</li>
              </Link>
              <Link target="_blank" href="/signin">
                <li>Login</li>
              </Link>
              <Link target="_blank" href="https://bigpipfunding.goaffpro.com/">
                <li>Affiliate Login</li>
              </Link>
            </ul>
          </div>

          {/* <div className={styles.footer-items" style={{textAlign:'right'}}>
          <h3>Blogs</h3>
          <ul>
            <Link href="#">
              <li>Blog 1</li>
            </Link>
            <Link href="#">
              <li>Blog 2</li>
            </Link>
            <Link href="#">
              <li>Blog 3</li>
            </Link>
            <Link href="#">
              <li>Blog 4</li>
            </Link>
          </ul>
        </div> */}

          <div className={styles.footer_items} style={{ textAlign: "left" }}>
            <h3>Contact us</h3>
            <ul>
              <li>+12022495667</li>
              <li>support@bigpipfunding.com</li>
              <li className={styles.footer_icon}>
                <Link
                  href="https://api.whatsapp.com/send/?phone=12022495667&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconContext.Provider
                    value={{ color: "white", size: "20px" }}
                  >
                    <FaWhatsapp />
                  </IconContext.Provider>
                </Link>
                <Link
                  href="https://discord.com/invite/zDXyV5ACUm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconContext.Provider
                    value={{ color: "white", size: "20px" }}
                  >
                    <FaDiscord />
                  </IconContext.Provider>
                </Link>
                <Link
                  href="https://www.instagram.com/bigpipfunding/?igshid=MDM4ZDc5MmU%3D"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconContext.Provider
                    value={{ color: "white", size: "20px" }}
                  >
                    <FaInstagram />
                  </IconContext.Provider>
                </Link>
                <Link
                  href="https://t.me/bigpipfunding"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconContext.Provider
                    value={{ color: "white", size: "20px" }}
                  >
                    <FaTelegram />
                  </IconContext.Provider>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <p>© 2023 BigPip Funding. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
