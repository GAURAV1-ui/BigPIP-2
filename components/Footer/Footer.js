import { IconContext } from "react-icons/lib";
import "./Footer.css";
import { FaDiscord, FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div class="footer">
      <div class="inner-footer">
        <div class="footer-items" style={{textAlign:'left'}}>
          <h1>About Us</h1>
          <p>
          We are a group of experienced traders and investors who have come together to form a dynamic and innovative trading firm. Our team consists of individuals with diverse backgrounds and expertise, ranging from quantitative analysis to market analysis and execution.
          </p>
        </div>

        <div class="footer-items" style={{textAlign:'right'}}>
          <h3>Quick Links</h3>
          <ul>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/aboutus">
              <li>About Us</li>
            </a>
            <a href="/login">
              <li>Login</li>
            </a>
            <a href="#">
              <li>Affiliate Login</li>
            </a>
          </ul>
        </div>

        {/* <div class="footer-items" style={{textAlign:'right'}}>
          <h3>Blogs</h3>
          <ul>
            <a href="#">
              <li>Blog 1</li>
            </a>
            <a href="#">
              <li>Blog 2</li>
            </a>
            <a href="#">
              <li>Blog 3</li>
            </a>
            <a href="#">
              <li>Blog 4</li>
            </a>
          </ul>
        </div> */}

        <div class="footer-items" style={{textAlign:'right'}}>
          <h3>Contact us</h3>
          <ul>
            <li>+1 202 249 5667</li>
            <li>support@bigpipfunding.com</li>
            <li>
              <a href="https://api.whatsapp.com/send/?phone=12022495667&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                <IconContext.Provider value={{ color: "white", size: '20px'}}>
                  <FaWhatsapp style={{ marginRight: "1rem" }} />
                </IconContext.Provider>
              </a>
              <a href="https://discord.com/invite/zDXyV5ACUm" target="_blank" rel="noreferrer">
                <IconContext.Provider value={{ color: "white", size: '20px'}}>
                  <FaDiscord style={{ marginRight: "1rem" }} />
                </IconContext.Provider>
              </a>
              <a href="https://www.instagram.com/bigpipfunding/?igshid=MDM4ZDc5MmU%3D" target="_blank" rel="noreferrer">
                <IconContext.Provider value={{ color: "white", size: '20px'}}>
                  <FaInstagram style={{ marginRight: "1rem" }} />
                </IconContext.Provider>
              </a>
              <a href="https://t.me/bigpipfunding" target="_blank" rel="noreferrer">
                <IconContext.Provider value={{ color: "white", size: '20px'}}>
                  <FaTelegram />
                </IconContext.Provider>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2023 BigPip Funding. All Rights Reserved.</p>
        </div>
    </div>
  );
};

export default Footer;
