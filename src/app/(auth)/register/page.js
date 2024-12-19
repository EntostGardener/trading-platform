"use client";
import styles from "../auth.module.css";
import axios from "../../../api/axios";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {logIn} from "@/redux/user/userSlise";

export default function Register() {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.email);
  const [registerState, setRegisterState] = useState({});

  const registrationHendler = async () => {
    try {
      await axios.post(`/auth/register`, {registerState}).then((res) => {
        const {access_token, email} = res.data;
        dispatch(logIn({access_token, email}));
      });
    } catch (error) {
      console.error("Error fetching similar products:", error);
    }
  };

  const handleChange = (e) => {
    const {value, name} = e.target;

    setRegisterState((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(userEmail, "user");
  };

  return (
    <>
      <form
        className={styles.loginInputsAndBtn}
        onChange={(e) => handleChange(e)}>
        <div className={styles.loginInputs}>
        <input
            className={styles.input}
            name="Firstname"
            placeholder="First name"
          />
           <input
            className={styles.input}
            name="Lastname"
            placeholder="Last name"
          />
          <input className={styles.input} name="email" placeholder="Email" />
          <input className={styles.input} name="Phone number" placeholder="Phone number" />
          <input
            className={styles.input}
            name="username"
            placeholder="Username"
          />
          <input
            className={styles.input}
            name="password"
            placeholder="password"
          />
        </div>
        <div className={styles.signButton} onClick={registrationHendler}>
          Registration
        </div>
      </form>
    </>
  );
}
