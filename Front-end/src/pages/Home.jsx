import React, { useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { TopAbout } from "../components/TopAbout";
import { TopServices } from "../components/TopServices";
import { BotServices } from "../components/BotServices";
import { Testimonials } from "../components/Testimonials";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../stors/Reducers/userReducer.js";
import Carousel from "react-material-ui-carousel";
function Home() {
  const Users = useSelector((state) => state);
  // const dispatch = useDispatch();
  // console.log(Users);
  // useEffect(() => {
  //   dispatch(getUsers());
  // }, []);
  return (
    <>
      <div className="container-fluid p-0 pb-5">
        <div className="owl-carousel header-carousel position-relative mb-5">
          <Carousel
            interval={5000}
            animation="slide"
            duration={700}
            className="w-100 h-100"
          >
            <div
              className="owl-carousel-item position-relative"
              style={{ height: "700px " }}
            >
              <div
                className="h-100"
                style={{
                  backgroundImage:
                    'url("https://caloundraremovals.com.au/wp-content/uploads/2022/11/backloading.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "#060315ad" }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                      <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                        Transport Solution
                      </h5>
                      <h1 className="display-3 text-white animated slideInDown mb-4">
                        #1 Place For helping you
                        <span className="text-primary"> move </span>
                        your furniture
                      </h1>
                      <p className="fs-5 fw-medium text-white mb-4 pb-2">
                        We come to you wherever you are
                      </p>
                      {/* <a
                        href=""
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      >
                        Read More
                      </a> */}
                      <a
                        href="/move_order_request"
                        className="btn bg-color py-md-3 px-md-5 me-3 animated slideInLeft"
                      >
                        <div className="d-flex">
                          <i
                            className="fa-solid fa-people-carry-box pr-4"
                            style={{ fontSize: " 25px" }}
                          ></i>
                          Request move order
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="owl-carousel-item position-relative"
              style={{ height: "700px " }}
            >
              <div
                className="h-100"
                style={{
                  backgroundImage:
                    'url("https://airtasker-seo-assets-prod.s3.amazonaws.com/en_AU/1659580612946_howmuchdomoversmake.jpg")',
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "#060315ad" }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                      <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                        Transport Solution
                      </h5>
                      <h1 className="display-3 text-white animated slideInDown mb-4">
                        Become a<span className="text-primary"> driver </span>
                        and get paid !
                      </h1>
                      <a
                        href="/driver_conditions"
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      >
                        <div className="d-flex">
                          <i
                            className="material-icons px-2"
                            style={{ fontSize: " 25px" }}
                          >
                            people
                          </i>
                          Join Us
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <TopServices />

      <TopAbout />

      <BotServices />
      <Testimonials />
    </>
  );
}
export default Home;
