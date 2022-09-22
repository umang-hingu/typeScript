import React from "react";
import Layout from "../Layout/Layout";
//import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch,useAppSelector } from "../store/hooks";

import { homepageActions } from "../store/homepage-slice";


const RegistrationPage = () => {
  const dispatch = useAppDispatch();

  const registeredUserData = useAppSelector((state) => state.registeredUserData);

  const submitHandler = (event:React.FormEvent) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registeredUserData),
    };
    fetch("https://reqres.in/api/register", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        dispatch(homepageActions.addRegisterUserData({ ...registeredUserData, token: data.token }));
      });

   
  };
  const emailChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    const enteredEmail = event.target.value;
   
    dispatch(
      homepageActions.addRegisterUserData({
        ...registeredUserData,
        email: enteredEmail,
      })
    );
  };

  const passwordChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    const enteredPassword = event.target.value;
    
    dispatch(
      homepageActions.addRegisterUserData({
        ...registeredUserData,
        password: enteredPassword,
      })
    );
  };

  

  return (
    <Layout>
      <form onSubmit={submitHandler}>
        <label>Email</label>
        <input type="email" onChange={emailChangeHandler}></input>
        <label>Password</label>
        <input type="password" onChange={passwordChangeHandler}></input>
        <button type="submit">Sign Up</button>
      </form>
    </Layout>
  );
};

export default RegistrationPage;
