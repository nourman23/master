import { TheCarousel } from "./Carousel";
import React from "react";

function Jumbotron(props) {
  return (
    <>
      <div className="container-fluid p-0 pb-5">
        <div className="owl-carousel header-carousel position-relative mb-5">
          <div
            className="owl-carousel-item position-relative"
            style={{ height: "500px " }}
          >
            <div
              className="h-100"
              style={{
                backgroundImage: `url(${props.url})`,
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
