import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import Button from "../Button/Button";
import axios from "axios";
import { useRouter } from "next/router";
import cookie from "js-cookie";

const LoginForm = () => {
  const router = useRouter();
  const [loadingState, setLoadingState] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [badLoginData, setBadLoginData] = useState(false);

  const tryLogIn = async () => {
    setLoadingState(true);
    const loginData = {
      email: email,
      password: password,
    };

    if (!email || !password) {
      setError(true);
      return;
    }
    setError(false);

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/users/login`,
        loginData
      );

      if (response.status === 200) {
        setBadLoginData(false);
        cookie.set("jwt_token", response.data.jwt_token);
        console.log("GOOD");
        // router.push("/");
      }
      setLoadingState(false);
    } catch (err) {
      setBadLoginData(true);
      console.log("err", err);
      setLoadingState(false);
    }
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.form}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <Button
          onClicking={tryLogIn}
          isLoading={loadingState}
          title="Login"
          className={styles.loginBtn}
        />

        {error && <div className={styles.error}>Please fill all inputs</div>}

        {badLoginData && (
          <div className={styles.error}>Provided login data incorrect </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
