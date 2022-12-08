import React, { useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

import "./Auth.css";

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const SubmitLogin = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    formState.inputs.email.value = "";
    formState.inputs.password.value = "";
  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <>
      <Card className="authentication">
        <h2>Login Required</h2>
        <hr />
        <form onSubmit={SubmitLogin}>
          {!isLoginMode && (
            <Input
              onInput={inputHandler}
              id="name"
              element="input"
              placeholder="Your Name"
              type="text"
              label="Your Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name."
            />
          )}
          <Input
            onInput={inputHandler}
            id="email"
            element="input"
            placeholder="Your E-mail"
            type="email"
            label="E-mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid Email."
          />
          <Input
            onInput={inputHandler}
            id="password"
            element="input"
            placeholder="Your Password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid Password. at least 5 characters"
          />
          <Button disabled={!formState.isValid} type="submit">
            {isLoginMode ? "LOGIN" : "SIGNUP"}
          </Button>
        </form>
        <Button onClick={switchModeHandler} inverse>
          Switch to {isLoginMode ? "Signup" : "Login"}
        </Button>
      </Card>
    </>
  );
};

export default Auth;
