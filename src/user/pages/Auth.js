import React from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../../shared/util/validators";

import "./Auth.css";

const Auth = () => {
  const [formState, inputHandler] = useForm(
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
  return (
    <>
      <Card className="authentication">
        <h2>Login Required</h2>
        <hr />
        <form onSubmit={SubmitLogin}>
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
          <Button disabled={!formState.isValid} type="submit">Login</Button>
        </form>
      </Card>
    </>
  );
};

export default Auth;
