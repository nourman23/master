import { TheCarousel } from "./Carousel";
import React from "react";

function Jumbotron(props) {
  // console.log(props);
  // let homeStyle;
  // if (props.title == "Home") {
  //   console.log("true");
  //   homeStyle = {

  //   };
  // } else {
  //   console.log("false");
  //   homeStyle = {
  //     background: "black",
  //   };
  // }

  return (
    <>
      {/* <div
        className=" text-center bg-light position-relative  jumborton"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: props.image,
          height: props.height,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.31)",
          }}
        >
          <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            {props.title != "Home" ? (
              <>
                <h1 className="my-5 text-light">{props.title}</h1>
                {props.subTitle == "driver conditions" ? (
                  <div className="d-flex align-items-center p-2">
                    <a
                      href="/driver_register"
                      className="btn bg-color p-2 mr-2"
                    >
                      <div className="d-flex align-items-center">
                        <ion-icon
                          name="speedometer-outline"
                          className="mr-2"
                          style={{ fontSize: "20px" }}
                        />
                        Signup now
                      </div>
                    </a>
                    <a
                      href="#"
                      className="text-white "
                      style={{ textDecoration: "underline" }}
                    >
                      already have an account ? login
                    </a>
                  </div>
                ) : (
                  <p className="text-light"> {props.subTitle}</p>
                )}
              </>
            ) : (
              <TheCarousel title={props.title} subTitle={props.subTitle} />
            )}
          </div>
        </div>
      </div> */}
      {/* <Svg /> */}
      <div className="container-fluid p-0 pb-5">
        <div className="owl-carousel header-carousel position-relative mb-5">
          <div
            className="owl-carousel-item position-relative"
            style={{ height: "300px " }}
          >
            <div
              className="h-100"
              style={{
                backgroundImage:
                  "url(http://images.huffingtonpost.com/2016-09-13-1473769006-9036433-Moving.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(6, 3, 21, .5)" }}
            >
              <div className="container">
                <div className="row justify-content-start mt-5 mb-2">
                  <div className="col-10 col-lg-8">
                    <div
                      className="container py-5 mt-4"
                      style={{ fontSize: "20px" }}
                    >
                      <h1 className="display-3 text-white mt-5 animated slideInDown">
                        {props.title}
                      </h1>
                      <nav aria-label="breadcrumb animated slideInDown mt-5">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a className="text-white" href="/">
                              Home
                            </a>
                          </li>

                          <li
                            className="breadcrumb-item text-secondary active "
                            aria-current="page"
                          >
                            {props.subTitle}
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jumbotron;
