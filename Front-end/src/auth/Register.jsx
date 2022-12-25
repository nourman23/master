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
import Select from "react-select";
import Button from "react-bootstrap/Button";
import { Alert, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
// import { Select, Option } from "@material-tailwind/react";
import RegisterWithGoogle from "../pages/RegisterWithGoogle";
const options = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
];
function Register() {
  const navigate = useNavigate();
  const SignIn = useSignIn();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const data = new FormData();
  data.append("first_name", firstName);
  data.append("last_name", lastName);
  data.append("email", email);
  data.append("gender", gender);
  data.append("image", image);
  data.append("password", pass);
  data.append("password_confirmation", confirmPass);

  const config = {
    method: "post",
    url: "http://127.0.0.1:8000/api/reactUserRegister",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    },
    data: data,
  };
  console.log(data);
  const handleRegister = (e) => {
    e.preventDefault();
    setMessage((prev) => ({ ...prev, register: "" }));
    setLoading(true);
    axios(config)
      .then((res) => {
        // console.log(res.data.access_token);
        if (
          SignIn({
            token: res.data.access_token,
            expiresIn: 1000,
            tokenType: "Bearer",
            authState: res.data.data,
          })
        ) {
          setLoading(false);
          return navigate("/");
        }
      })
      .catch(function (error) {
        // console.log(error);

        setLoading(false);

        setMessage((prev) => ({
          ...prev,
          register: error.response.data?.message,
        }));
      });
  };
  const handleRegisterWithGoogle = (response) => {
    console.log(response);
    // const GoogleData = new FormData();
    // GoogleData.append("name", response.profileObj.name);
    // GoogleData.append("email", response.profileObj.email);
    // GoogleData.append("password", response.profileObj.googleId);
    // GoogleData.append("password_confirmation", response.profileObj.googleId);
    setFirstName(response.profileObj.name.split(" ")[0]);
    setLastName(response.profileObj.name.split(" ")[1]);
    setEmail(response.profileObj.email);
    setPass(response.profileObj.googleId);
    setConfirmPass(response.profileObj.googleId);
    document.getElementById("firstName").setAttribute("disabled", true);
    document.getElementById("lastName").setAttribute("disabled", true);
    document.getElementById("email").setAttribute("disabled", true);
    // document.getElementById("password").setAttribute("disabled", true);
    // document.getElementById("confirmPass").setAttribute("disabled", true);
    document.getElementById("password").style.display = "none";
    document.getElementById("confirmPass").style.display = "none";
  };
  return (
    <Form
      onSubmit={(e) => {
        handleRegister(e);
      }}
    >
      <MDBContainer className="py-5 h-100 my-5">
        <MDBCard className="col-5 mx-auto mt-5">
          <MDBRow className="g-0 ">
            <MDBCol className="col-lg-12 ">
              <MDBCardBody className="d-flex flex-column pb-0 ">
                <div className="d-flex flex-column mt-2 align-items-center">
                  {/* <img src={logo} alt="" style={{ width: 50 }} /> */}
                  <p className="h3 fw-bold mb-0">MOVER</p>
                </div>
                <h5
                  className="fw-normal mb-4 mt-1 pb-3 text-center"
                  style={{ letterSpacing: "1px" }}
                >
                  create an account
                </h5>
                {message.register != undefined ? (
                  <Alert variant="danger"> {message.register} </Alert>
                ) : (
                  ""
                )}

                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Your First name"
                  id="firstName"
                  type="text"
                  size="md"
                  value={firstName}
                  required
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />

                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Your Last name"
                  id="lastName"
                  type="text"
                  size="md"
                  value={lastName}
                  required
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Email address"
                  id="email"
                  type="email"
                  size="md"
                  value={email}
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <Select
                  className="mb-4"
                  placeholder="Your Gender"
                  options={options}
                  onChange={(e) => {
                    console.log(e.value);
                    setGender(e.value);
                  }}
                  required
                />
                <div>
                  <label
                    htmlFor="dropzone-file"
                    className="tw-flex tw-flex-col tw-items-center tw-mb-4 tw-justify-center tw-w-full  
                    tw-border-2 tw-border-gray-300 tw-border-dashed tw-rounded-lg tw-cursor-pointer tw-bg-gray-50 
                    dark:hover:tw-bg-bray-800 dark:tw-bg-gray-700 hover:tw-bg-gray-100 dark:tw-border-gray-600 
                   dark:hover:tw-border-gray-500 dark:hover:tw-bg-gray-600"
                  >
                    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-1">
                      <svg
                        aria-hidden="true"
                        className="tw-w-10 tw-h-10  tw-text-gray-400"
                        fill="tw-none"
                        stroke="tw-currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="tw-round"
                          strokeLinejoin="tw-round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      {image ? (
                        <span className="tw-text-grey tw-pb-3 tw-pt-2">
                          {image.name}
                        </span>
                      ) : (
                        <>
                          <p className="tw-mb-2 tw-text-sm tw-text-gray-500 dark:tw-text-gray-400">
                            <span className="tw-font-semibold">
                              Click to upload your image
                            </span>
                            <span> or drag and drop</span>
                          </p>
                          <p className="tw-text-xs tw-text-gray-500 dark:tw-text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </>
                      )}
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="tw-hidden"
                      required
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                    />
                  </label>
                </div>
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Password"
                  id="password"
                  type="password"
                  size="md"
                  required
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Confirm Password"
                  id="confirmPass"
                  type="password"
                  size="md"
                  value={confirmPass}
                  required
                  onChange={(e) => {
                    setConfirmPass(e.target.value);
                  }}
                />

                {!loading ? (
                  <Button
                    className="mb-2 px-5 bg-dark border-dark"
                    size="md"
                    type="submit"
                  >
                    Register
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
                <RegisterWithGoogle
                  handleRegisterWithGoogle={handleRegisterWithGoogle}
                />
                <p
                  className="mt-5 pb-lg-2 text-center "
                  style={{ color: "#393f81" }}
                >
                  have an account?{" "}
                  <Link to="/login" style={{ color: "#393f81" }}>
                    Login
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
export default Register;
