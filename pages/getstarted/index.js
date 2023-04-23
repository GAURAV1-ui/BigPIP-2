import React,{useState} from 'react'
import styles from "../../styles/getstarted.module.css";

import { AiFillMail} from 'react-icons/ai';
import { BsDiscord} from 'react-icons/bs';
import { IoLogoWhatsapp} from 'react-icons/io';
import { BsTelegram} from 'react-icons/bs';

const GetStarted = () => {
    const [userName, setUserName] = useState("");
    const [userTel, setUserTel] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const onUserNameChange = (event) => {
        setUserName(event.target.value);
    }
    const onUserEmailChange = (event) => {
        setUserEmail(event.target.value);
    }
    const onTelChange = (event) => {
        setUserTel(event.target.value);
    }
    const onMessageChange = (event) => {
        setUserMessage(event.target.value);
    }
  return (
    <>
    <div className={styles.container}>
    <div className={styles.form}>
      <div className={styles.contact_info}>
        <h1 className={styles.title}>We Love To Help</h1>
        <p className={styles.text}>
        Our customers enjoy a high level of customer service through our personal and truly international approach. We are always available to help you.
        </p>
        <p className={styles.text}>
        You can contact us through our live chat, on telegram messenger or by sending us an e-mail at support@bigpipfunding.com
        </p>

        <div className={styles.info}>
          <div className={styles.information}>
            {/* <img src="img/location.png" className={styles.icon" alt="" /> */}
            <AiFillMail className='icon'/>
            <p>support@bigpipfunding.com</p>
          </div>
          <div className={styles.information}>
            <BsTelegram className={styles.icon}/>
            <p>Telegram</p>
          </div>
          <div className={styles.information}>
            {/* <img src="img/phone.png" className={styles.icon" alt="" /> */}
            <IoLogoWhatsapp className={styles.icon}/>
            <p>WhatsApp</p>
          </div>
          <div className={styles.information}>
            {/* <img src="img/phone.png" className={styles.icon" alt="" /> */}
            <BsDiscord className={styles.icon}/>
            <p>Discord</p>
          </div>
        </div>
      </div>

      <div className={styles.contact_form}>
        <form action="">
          <h3 className={styles.title}>Contact us</h3>
          <div className={styles.input_container}>
            <input 
            type="text"
             name="name" 
             className={styles.input}
             placeholder='username'
             value = {userName}
             onChange = {onUserNameChange}
             />
          </div>
          <div className={styles.input_container}>
            <input 
            type="email" 
            name="email" 
            className={styles.input}
            placeholder='useremail'
            value = {userEmail}
            onChange = {onUserEmailChange}/>
            {/* <label for="}>Email</label>
            <span>Email</span> */}
          </div>
          <div className={styles.input_container}>
            <input type="tel"
             name="phone" 
             className={styles.input} 
             placeholder='phone'
             value = {userTel}
             onChange = {onTelChange}/>
          </div>
          <div className={`${styles.input_container} ${styles.textarea}`}>
            <textarea name="message"
             className={styles.input} 
             placeholder='message.....'
             value = {userMessage}
             onChange = {onMessageChange}>
             </textarea>
          </div>
          <input type="submit" value="Send" className={styles.btn}/>
        </form>
      </div>
    </div>
  </div>
  </>
  )
}


export default GetStarted