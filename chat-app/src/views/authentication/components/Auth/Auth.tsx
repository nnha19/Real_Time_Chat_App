import axios from "axios";
import React, { useState } from "react";
import Button from "../../../../common/button";
import ImageUpload from "../../../../common/imageUpload";
import Input from "../../../../common/input";

interface IinputVal {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  avatar: string;
}

const Auth = () => {
  const [login, setLogin] = useState(false);
  const [inputVals, setInputVals] = useState({} as IinputVal);

  const changeValHandler = (e: any) => {
    if (e.target.files) {
      setInputVals({ ...inputVals, avatar: e.target.files[0] });
      return;
    }
    const { value, name } = e.target;
    setInputVals({ ...inputVals, [name]: value });
  };

  const submitFormHandler = async (e: any) => {
    e.preventDefault();
    let data;
    const { firstName, lastName, password, email, avatar } = inputVals;
    if (login) {
      data = {
        email,
        password,
      };
    } else {
      data = new FormData();
      data.append("firstName", firstName);
      data.append("lastName", lastName);
      data.append("email", email);
      data.append("password", password);
      data.append("avatar", avatar);
    }

    const resp = await axios({
      method: "post",
      url: login
        ? `http://localhost:5000/user/login`
        : `http://localhost:5000/user/signup`,
      data,
    });
    console.log(resp.data);
  };

  const changeLoginModeHandler = () => {
    setInputVals({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      avatar: "",
    });
    setLogin(!login);
  };

  return (
    <div className="bg-gray-400 w-screen h-screen p-10 flex items-center">
      <div className="w-md bg-white mx-auto p-12 px-12">
        <h2 className="border-b-2 pb-4 font-medium text-lg">Login</h2>
        <form onSubmit={submitFormHandler}>
          {!login && <ImageUpload changeVal={changeValHandler} />}
          {!login && (
            <div className="flex">
              <Input
                type="text"
                placeholder="First Name"
                label="Your First Name"
                value={inputVals["firstName"]}
                name="firstName"
                changeVal={changeValHandler}
                formContainerStyle="mr-2"
              />
              <Input
                type="text"
                placeholder="Last Name"
                label="Your Last Name"
                value={inputVals["lastName"]}
                name="lastName"
                changeVal={changeValHandler}
              />
            </div>
          )}
          <Input
            type="email"
            placeholder="Email"
            label="Your Email"
            value={inputVals["email"]}
            name="email"
            changeVal={changeValHandler}
          />
          <Input
            type="password"
            placeholder="Password"
            label="Your Password"
            value={inputVals["password"]}
            name="password"
            changeVal={changeValHandler}
          />
          <Button>Submit</Button>
        </form>
        <div className="mt-4 ">
          <span>
            {!login ? "Already have an acount?" : "Don't have an account?"}
          </span>
          <span
            className="underline cursor-pointer ml-2 text-blue-400"
            onClick={changeLoginModeHandler}
          >
            {!login ? "Login In" : "Sign Up"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Auth;
