"use client";
import styles from "../auth.module.css";
import axios from "../../../api/axios";

import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {logIn} from "@/redux/user/userSlise";

export default function Login() {
  const dispatch = useDispatch();

  const [loginState, setLoginState] = useState({});

  const loginHendler = async () => {
    try {
      await axios.post(`/auth/login`, {loginState}).then((res) => {
        const {access_token, email} = res.data;
        dispatch(logIn({access_token, email}));
        console.log(res, "ress");
      });
    } catch (error) {
      console.error("Error fetching similar products:", error);
    }
  };

  const handleChange = (e) => {
    const {value, name} = e.target;

    setLoginState((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(loginState);
  };
  return (
    <>
      <form
        className={styles.loginInputsAndBtn}
        onChange={(e) => handleChange(e)}>
        <div className={styles.loginInputs}>
          <input className={styles.input} name="email" placeholder="Email" />
          <input
            className={styles.input}
            name="password"
            placeholder="password"
          />
        </div>
        <div className={styles.signButton} onClick={loginHendler}>
          Log In
        </div>
      </form>
    </>
  );
}
