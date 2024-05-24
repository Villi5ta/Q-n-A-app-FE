import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../Button/Button";
import axios from "axios";
import cookie from "js-cookie";

const SignInForm = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    const newUserData = {
      name: name,
      email: email,
      password: password,
    };

    if (!name || !email || !password) {
      console.log("bad data");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.SERVER_URL}/users/signup`,
        newUserData
      );

      if (response.status === 200) {
        cookie.set("jwt_token", response.data.jwt_token);
        console.log("GOOD");
        router.push("/questions");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClicking={signUp} isLoading={false} title="Create account" />
    </div>
  );
};

export default SignInForm;
