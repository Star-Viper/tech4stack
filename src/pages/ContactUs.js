import { FunctionComponent } from "react";
import styles from "./ContactUs.module.css";

const ContactUs: FunctionComponent = () => {
  return (
    <div className={styles.contactus}>
      <div className={styles.manWorkingOnNftBlockchain} />
      <div className={styles.contactUs}>Contact us</div>
      <div className={styles.top}>
        <div className={styles.seekingPersonalizedSupportContainer}>
          <span>Seeking personalized support?</span>
          <span className={styles.requestAMail}>
            {" "}
            Request a mail from our team
          </span>
        </div>
        <div className={styles.field}>
          <div className={styles.yourName}>Your name</div>
        </div>
        <div className={styles.field1}>
          <div className={styles.yourName}>email</div>
        </div>
        <div className={styles.autoLayoutHorizontal}>
          <div className={styles.sendARequest}>Send a request</div>
        </div>
      </div>
      <img
        className={styles.manUsingEthereumBlockchain}
        alt=""
        src="/man-using-ethereum-blockchain-technology--1280x1190@2x.png"
      />
      <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
      <img
        className={styles.contactusChild}
        alt=""
        src="/group-1000001767@2x.png"
      />
    </div>
  );
};

export default ContactUs;
