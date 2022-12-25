import React from "react";
import Jumbotron from "../components/Jumbotron";

export const DriverConditions = () => {
  console.log("cond");
  return (
    <div>
      <Jumbotron
        title="Drive with Mover and be a Captain"
        subTitle="driver conditions"
        url="https://www.cft.org/sites/main/files/imagecache/lightbox/main-images/pandemic-bus-driver_is-1321183981.jpg"
      />

      <section>
        <div className="section-header">
          <h2>Why become a captain?</h2>
        </div>
        <div className="container">
          <div className="row ">
            <div className="col col-lg-4 col-md-7 col-sm-12  ">
              <div className="card shadow cond h-100 border-0 mx-2 p-2 justify-content-center align-items-center">
                <i
                  className="fas fa-duotone fa-business-time m-2 text-secondary"
                  style={{ fontSize: "40px" }}
                />
                <div className="card-title text-center p-3">
                  Full time? Part time? With Mover you work on your own time.
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-7 col-sm-12 ">
              <div className="card shadow cond h-100 border-0 mx-2 p-2 justify-content-center align-items-center">
                <i
                  className="fas fa-duotone fa-sack-dollar m-2 text-secondary"
                  style={{ fontSize: "40px" }}
                />
                <div className="card-title text-center p-3">
                  Make your own money
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-7 col-sm-12 ">
              <div className="card shadow cond h-100 border-0 mx-2 p-2 justify-content-center align-items-center">
                <i
                  className="fas fa-duotone fa-face-smile m-2 text-secondary"
                  style={{ fontSize: "40px" }}
                />
                <div className="card-title text-center p-3">
                  Control your own life
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section-header">
          <h2>Requirements</h2>
        </div>
        <section className="container w-50">
          <div className="d-flex align-items-center m-5">
            <ion-icon
              name="calendar-outline"
              className="w-2"
              style={{ fontSize: "50px", color: "#ff3e41" }}
            ></ion-icon>
            <div className="ps-4">
              <h6 className="mb-2">
                <b> AGE</b>
              </h6>
              <p>
                You have to be over 18 years of age with a valid driver’s
                license to drive with Mover.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center m-5">
            <ion-icon
              name="shield-checkmark-outline"
              className="w-25"
              style={{ fontSize: "50px", color: "#ff3e41" }}
            ></ion-icon>
            <div className="ps-4">
              <h6 className="mb-2">
                <b> Screening</b>
              </h6>
              <p>
                The screening process may include drug tests, police reports,
                credit checks etc.
              </p>
            </div>
          </div>
        </section>
      </section>
      <section style={{ position: "relative" }}>
        <img
          src="https://www.geotab.com/CMS-Images-production/Blog/NA/2021/Feb/Truck-driver-retention/blog_driver_rentention_hero_@1x_DS02354.jpg"
          style={{ filter: "brightness(40%) blur(3px)", height: "500px" }}
          width="100%"
          height="100%"
          alt=""
        />
        <div
          className=" h-100 d-flex flex-column justify-content-center align-items-center"
          style={{ position: "absolute", top: "1%", left: "28%" }}
        >
          <h3 className="text-white my-5" style={{ fontSize: "30px" }}>
            Have you got what it takes to be a Mover Captain?
          </h3>
          <a href="/driver_register" className="btn bg-color p-2 mr-2">
            Signup now
          </a>
        </div>
      </section>
      <section>
        <div className=" bg-light h-100">
          <div className="d-flex align-items-center justify-content-center h-100">
            <div className="col-lg-4 col-md-7 col-sm-12 my-5">
              <h2 style={{ fontSize: "30px" }}>How to start ?</h2>
              <div className="d-flex align-items-center justify-content-center my-4">
                <i
                  className="fa-solid fa-1 m-4 bg-color p-3"
                  style={{ fontSize: "40px" }}
                />
                <div>
                  <h4 style={{ fontSize: "25px", letterSpacing: "4px" }}>
                    Register
                  </h4>
                  <p>
                    Complete &nbsp;
                    <a
                      href="/driver_register"
                      style={{ color: "#feb900", textDecoration: "underline" }}
                    >
                      register form
                    </a>
                    &nbsp; apply to become a Mover Captain.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center my-4">
                <i
                  className="fa-solid fa-2 m-4 bg-color p-3"
                  style={{ fontSize: "40px" }}
                />
                <div>
                  <h4 style={{ fontSize: "25px", letterSpacing: "4px" }}>
                    Train
                  </h4>
                  <p>
                    After reviewing your application we’ll invite you for a
                    training session.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center my-4">
                <i
                  className="fa-solid fa-3 m-4 bg-color p-3"
                  style={{ fontSize: "40px" }}
                />
                <div>
                  <h4 style={{ fontSize: "25px", letterSpacing: "4px" }}>
                    Ride
                  </h4>
                  <p>When training is complete, you can start to earn money!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12 m-5 h-100">
              <img
                src="https://blog.ptvgroup.com/wp-content/uploads/2022/02/Truckdriver.jpg"
                height="100%"
                width="100%"
                alt=""
                style={{ borderRadius: "20px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
