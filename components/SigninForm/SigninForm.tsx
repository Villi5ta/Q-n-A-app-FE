import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../Button/Button";
import axios from "axios";
import cookie from "js-cookie";
import styles from "./SigninForm.module.css";

const SignInForm = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);

  const signUp = async () => {
    const newUserData = {
      name: name,
      email: email,
      password: password,
    };

    if (password.length < 5) {
      setPasswordCheck(true);
      setError(false);
    }

    if (!name || !email || !password) {
      setError(true);
      setPasswordCheck(false);
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/users/signup`,
        newUserData
      );

      console.log(response);

      if (response.status === 200) {
        cookie.set("jwt_token", response.data.jwt_token);
        router.push("/questions");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.main}>
      <h3>Welcome! Create your account here</h3>

      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClicking={signUp} isLoading={false} title="Create account" />

      <div className={styles.error}>
        {error && (
          <div className={styles.error}>
            Please fill all registration fields
          </div>
        )}
        {passwordCheck && (
          <div className={styles.error}>
            Password must be at least 5 characters long
          </div>
        )}
      </div>
    </div>
  );
};

export default SignInForm;
