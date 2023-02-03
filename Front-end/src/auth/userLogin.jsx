import React, { useState } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import LoginWithGoogle from "../pages/LoginWithGoogle";
import Button from "react-bootstrap/Button";
import { Alert, Form } from "react-bootstrap";
// import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
// import useValidation from "../../Hook/useValidation";
// import useOperation from "../../Hook/useOperation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
// import LoginWithGoogle from "./LoginWithGoogle";

function Login() {
  const navigate = useNavigate();
  const SignIn = useSignIn();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  // const [, , , message, setMessage] = useValidation();
  // const { setCurrentUserToLocal, setCurrentUser, setToken, setTokenToLocal } =
  //   useOperation();
  //-----------------------------
  const data = new FormData();

  data.append("email", email);
  data.append("password", pass);
  const config = {
    method: "post",
    url: "http://127.0.0.1:8000/api/reactUserLogin",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    },
    data: data,
  };
  //-------------------------------
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage((prev) => ({ ...prev, login: "" }));
    setLoading(true);
    axios(config)
      .then((res) => {
        console.log("this");
        console.log(res.data.user_info);
        if (
          SignIn({
            token: res.data.access_token,
            expiresIn: 7000,
            tokenType: "Bearer",
            authState: res.data.user_info,
          })
        ) {
          setLoading(false);
          return navigate("/");
        }
      })
      .catch(function (error) {
        setLoading(false);

        setMessage((prev) => ({
          ...prev,
          login: error.response.data?.message,
        }));
      });
  };

  const handleLoginWithGoogle = (response) => {
    const GoogleData = new FormData();
    GoogleData.append("email", response.profileObj.email);
    GoogleData.append("password", response.profileObj.googleId);

    const GoogleConfig = {
      method: "post",
      url: "http://127.0.0.1:8000/api/reactUserLogin",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
      },
      data: GoogleData,
    };
    axios(GoogleConfig)
      .then((res) => {
        console.log(res.data);
        if (
          SignIn({
            token: res.data.token,
            expiresIn: 1000,
            tokenType: "Bearer",
            authState: res.data.user_info,
          })
        ) {
          // setCurrentUser(res.data.data.user);
          // setToken(res.data.data.token);
          // setCurrentUserToLocal(res.data.data.user);
          // setTokenToLocal(res.data.data.token);
          setLoading(false);
          return navigate("/profile");
        }
      })
      .catch(function (error) {
        // console.log(error);
        setLoading(false);

        setMessage((prev) => ({
          ...prev,
          login: error.response.data?.message,
        }));
      });
  };
  //----------------------------------

  return (
    <Form
      onSubmit={(e) => {
        handleLogin(e);
      }}
    >
      <MDBContainer className="py-5 my-5">
        <MDBCard className="col-8 mx-auto mt-5">
          <MDBRow className="g-0 ">
            <MDBCol className="col-lg-6  h-100 d-lg-block">
              <MDBCardImage
                src="https://images.pexels.com/photos/7217849/pexels-photo-7217849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="login form"
                className="rounded-start w-100 "
              />
            </MDBCol>

            <MDBCol className="col-lg-6 ">
              <MDBCardBody className="d-flex flex-column pb-0 ">
                <div className="d-flex flex-column mt-5 align-items-center">
                  {/* <img src={logo} alt="" style={{ width: 50 }} /> */}
                  <p className="h3 fw-bold mb-0">MOVER</p>
                </div>

                <h5
                  className="fw-normal my-4 pb-3 text-center"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>
                {message.login != undefined ? (
                  <Alert variant="danger"> {message.login} </Alert>
                ) : (
                  ""
                )}

                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Email address"
                  id="formControlLg"
                  type="email"
                  size="md"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Password"
                  id="formControlLg"
                  type="password"
                  size="md"
                  required
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
                {!loading ? (
                  <Button
                    className="mb-2 px-5 border-dark"
                    style={{ backgroundColor: "#3b3b3b" }}
                    size="md"
                    type="submit"
                  >
                    Login
                  </Button>
                ) : (
                  <Button
                    className="mb-2 px-5 bg-dark border-dark"
                    size="md"
                    type="submit"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm text-light"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </Button>
                )}
                <LoginWithGoogle
                  handleLoginWithGoogle={handleLoginWithGoogle}
                />

                <a className="small text-muted  align-self-end " href="#!">
                  Forgot password?
                </a>
                <p
                  className="mt-5 pb-lg-2 text-center "
                  style={{ color: "#393f81" }}
                >
                  Don't have an account?
                  <Link to="/register" style={{ color: "#393f81" }}>
                    Register here
                  </Link>
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </Form>
  );
}

export default Login;
