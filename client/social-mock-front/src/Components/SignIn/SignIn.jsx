// Import css
import styles from "./SignIn.module.css";

// Import Components
import TextField from "../TextField/TextField";

const SignIn = () => {
  return (
    <div>
      <div className={styles.header}>
        <h2>Hello Again!</h2>
        <h3>Welcome back</h3>
      </div>
      <div className={styles.main}>
        <TextField className={"p-1"} type={"text"} placeholder={"User Name"} />
        <TextField type={"password"} placeholder={"PassWord"} />
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default SignIn;
