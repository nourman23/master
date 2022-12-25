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

const options = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
];
function DriverRegister() {
  const navigate = useNavigate();
  const SignIn = useSignIn();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [license, setLicense] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPass, setConfirmPass] = useState("");
  const [message, setMessage] = useState("");

  const data = new FormData();
  data.append("first_name", firstName);
  data.append("last_name", lastName);
  data.append("email", email);
  data.append("gender", gender);
  data.append("age", age);
  data.append("phone", phone);
  data.append("image", image);
  data.append("license", license);
  data.append("password", pass);
  data.append("password_confirmation", confirmPass);

  const config = {
    method: "post",
    url: "http://127.0.0.1:8000/api/reactDriverRegister",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    },
    data: data,
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setMessage((prev) => ({ ...prev, register: "" }));
    setLoading(true);
    axios(config)
      .then((res) => {
        console.log(res.data);
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
        console.log(error);

        setLoading(false);

        setMessage((prev) => ({
          ...prev,
          register: error.response.data?.message,
        }));
      });
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
                  <p className="h3 fw-bold mb-0">MOVER</p>
                </div>

                <h5
                  className="fw-normal my-4 pb-3 text-center"
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
                  id="formControlLg"
                  type="text"
                  size="md"
                  required
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Your Last name"
                  id="formControlLg"
                  type="text"
                  size="md"
                  required
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
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
                  placeholder="Your Age"
                  id="formControlLg"
                  type="number"
                  size="md"
                  required
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Your Phone Number"
                  id="formControlLg"
                  type="text"
                  size="md"
                  required
                  onChange={(e) => {
                    setPhone(e.target.value);
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
                <div>
                  <label
                    htmlFor="license-file"
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
                      {license ? (
                        <span className="tw-text-grey tw-pb-3 tw-pt-2">
                          {license.name}
                        </span>
                      ) : (
                        <>
                          <p className="tw-mb-2 tw-text-sm tw-text-gray-500 dark:tw-text-gray-400">
                            <span className="tw-font-semibold">
                              Click to upload your license
                            </span>
                            <span> or drag and drop</span>
                          </p>
                          <p className="tw-text-xs tw-text-gray-500 dark:tw-text-gray-400">
                            pdf (MAX. 10000)
                          </p>
                        </>
                      )}
                    </div>
                    <input
                      id="license-file"
                      type="file"
                      className="tw-hidden"
                      required
                      onChange={(e) => {
                        // console.log(e.target.files[0]);
                        setLicense(e.target.files[0]);
                      }}
                    />
                  </label>
                </div>

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
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Confirm Password"
                  id="formControlLg"
                  type="password"
                  size="md"
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
                {/* <LoginWithGoogle
                  handleLoginWithGoogle={handleLoginWithGoogle}
                /> */}
                {/* <p
                  className="mt-5 pb-lg-2 text-center "
                  style={{ color: "#393f81" }}
                >
                  have an account?{" "}
                  <Link to="/login" style={{ color: "#393f81" }}>
                    Login
                  </Link>
                </p> */}
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </Form>
  );
}
export default DriverRegister;
