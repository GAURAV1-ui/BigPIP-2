import React,{useState,useEffect} from 'react'
import styles from "../../styles/getstarted.module.css";
import axios from 'axios';
import { AiFillMail} from 'react-icons/ai';
import { BsDiscord} from 'react-icons/bs';
import { IoLogoWhatsapp} from 'react-icons/io';
import { BsTelegram} from 'react-icons/bs';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetStarted = (props) => {
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

    const onHandleSubmit = (event) => {
      event.preventDefault();

      // if(userEmail === "" || userName === "" || userTel === "" || userMessage === "") {
      //     toast.error("Please complete your details.");
      //     return;
      // }

      axios({
        method: 'post',
        url: 'https://bigpip-cms.up.railway.app/api/ezforms/submit',
        data:
        {  formData : {
          name: userName,
          email: userEmail,
          phone: userTel,
          message: userMessage
        }
        },
        headers: {
          'content-type': 'application/json'
        }
      }).then((res) => {
        setUserName('');
        setUserEmail('');
        setUserTel('');
        setUserMessage('');
        toast.success("Thankyou for your response");
        console.log(res);
      }).catch((err) => {
        console.log(err);
        toast.error("Something wrong");
      })
    }

      //   useEffect(() => {
      //   axios.get("https://bigpip-cms.up.railway.app/api/get-started")
      //     .then((res) => {
      //       console.log(res);
      //     }).catch((err) => {
      //     })
      // }, []);

  return (
    <>
    <div className={styles.container}>
    <div className={styles.form}>
      <div className={styles.contact_info}>
        <h1 className={styles.title}>{props.data.data.attributes.title}</h1>
        <p className={styles.text}>
        Our customers enjoy a high level of customer service through our personal and truly international approach. We are always available to help you.
        </p>
        <p className={styles.text}>
        You can contact us through our live chat, on telegram messenger or by sending us an e-mail at support@bigpipfunding.com
        </p>

        <div className={styles.info}>
          <div className={styles.information}>
            <AiFillMail className={styles.icon}/>
            <p>support@bigpipfunding.com</p>
          </div>
          <div className={styles.information}>
            <BsTelegram className={styles.icon}/>
            <p>Telegram</p>
          </div>
          <div className={styles.information}>
            <IoLogoWhatsapp className={styles.icon}/>
            <p>WhatsApp</p>
          </div>
          <div className={styles.information}>
            <BsDiscord className={styles.icon}/>
            <p>Discord</p>
          </div>
        </div>
      </div>

      <div className={styles.contact_form}>
        <form onSubmit={onHandleSubmit}>
          <h3 className={styles.title}>Contact us</h3>
          <div className={styles.input_container}>
            <input 
            type="text"
             name="name" 
             className={styles.input}
             placeholder='username'
             value = {userName}
             required
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
            required
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
             required
             onChange = {onTelChange}/>
          </div>
          <div className={`${styles.input_container} ${styles.textarea}`}>
            <textarea name="message"
             className={styles.input} 
             placeholder='message.....'
             value = {userMessage}
             required
             onChange = {onMessageChange}>
             </textarea>
             <ToastContainer/>
          </div>
          <input type="submit" value="Send" className={styles.btn}/>
        </form>
      </div>
    </div>
  </div>
  </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://bigpip-cms.up.railway.app/api/get-started?populate=*`)
  const data = await res.json();
  return { props: { data } }
}


export default GetStarted