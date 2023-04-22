import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/signin.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signin = () => {
  const [toggleHide, setToggleHide] = useState(false);
  const passwordType = toggleHide ? "text" : "password";

  const toggleHideIcon = () => {
    setToggleHide((prevToggleHide) => !prevToggleHide);
  };

  return (
    <div className={styles.signin}>
      <div className={styles.signin_content}>
        <div className={styles.signin_img}>
          <Image src="/signin.png" alt="logo" width={300} height={600} />
        </div>
        <div className={styles.sigin_form}>
          <h2 className={styles.signin_form_heading}>Sign in</h2>
          <div className={styles.signin_oauth}>
            <div className={styles.sigin_oauth_google_text}>
              <FcGoogle />
              <span>&nbsp;Continue with Google</span>
            </div>
          </div>
          <div className={styles.signin_or}>
            <div className={styles.signin_or_line}>
              <p className={styles.signin_line}>
                <span>OR</span>
              </p>
            </div>
          </div>
          <div className={styles.signin_input}>
            <div className={styles.signin_form_input}>
              <div className={styles.signin_input}>
                <label className={styles.signin_input_label} htmlFor="email">
                  User name or email address
                </label>
                <br />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className={styles.signin_form_input_field}
                />
              </div>
              <div className={styles.signin_input}>
                <label className={styles.signin_input_label} htmlFor="password">
                  Your Password
                </label>
                <span
                  className={styles.signin_input_label}
                  style={{ float: "right", cursor: "pointer" }}
                  onClick={() => toggleHideIcon()}
                >
                  {toggleHide ? <FaEye /> : <FaEyeSlash />}
                  &nbsp;
                  {toggleHide ? "Hide" : "Show"}
                </span>
              </div>
              <div className={styles.password}>
                <input
                  type={passwordType}
                  placeholder="Password"
                  className={styles.signin_form_input_field}
                />
              </div>
              <div className={styles.signin_input}>
                <span
                  style={{
                    float: "right",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  className={styles.signin_input_label}
                >
                  Forgot your password?
                </span>
              </div>
              <div className={styles.signin_input}>
                <button className={styles.signin_input_button}>Sign in</button>
              </div>
              <div className={styles.signin_input}>
                <span className={styles.signin_input_label}>
                  Don't have an account?{" "}
                  <span
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    <Link href="/signup" style={{textDecoration: 'none', color: "#666"}}>Sign up</Link>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;