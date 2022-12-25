import React from "react";
import CountUp from "react-countup";
import { SlideTestimonial } from "react-materialui-testimonials-transition";
import Carousel from "react-material-ui-carousel";
export const OurWork = () => {
  return (
    <section>
      {/* <div className="section-header">
        <h2>Our work</h2>
        <p>
          Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
          nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
        </p>
      </div> 
      <div className="container">
        <div className="row">
          <div className="four col-md-3">
            <div className="counter-box ">
              <i className="fa fa-thumbs-o-up" />
              <span className="counter">2147</span>
              <p>Happy Customers</p>
            </div>
          </div>
          <div className="four col-md-3">
            <div className="counter-box">
              <i className="fa fa-group" />
              <span className="counter">3275</span>
              <p>Registered Members</p>
            </div>
          </div>
          <div className="four col-md-3">
            <div className="counter-box">
              <i className="fa fa-shopping-cart" />
              <span className="counter">289</span>
              <p>Available Products</p>
            </div>
          </div>
          <div className="four col-md-3">
            <div className="counter-box">
              <i className="fa  fa-user" />
              <span className="counter">1563</span>
              <p>Saved Trees</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h3 className="text-secondary text-uppercase mb-3">
                <b> Some Facts</b>
              </h3>
              <h1 className="mb-4" style={{ fontSize: "30px" }}>
                <b className="text-primary">#1</b> Place To Manage All Of Your
                Shipments
              </h1>
              <p className="mb-5">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="d-flex align-items-center">
                <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white"></i>
                <div className="ps-4">
                  <h6>Call for any query!</h6>
                  <h3 className="text-primary m-0">+012 345 6789</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4 align-items-center">
                <div className="col-sm-6">
                  <div
                    className="bg-primary p-4 mb-4 wow fadeIn"
                    data-wow-delay="0.3s"
                  >
                    <i className="fa fa-users fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2">
                      <CountUp end={2000} enableScrollSpy={true} />
                    </h2>
                    <p className="text-white mb-0">Happy Clients</p>
                  </div>
                  <div
                    className="bg-secondary p-4 wow fadeIn"
                    data-wow-delay="0.5s"
                  >
                    <i className="fa fa-ship fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2">
                      <CountUp end={4532} enableScrollSpy={true} />
                    </h2>
                    <p className="text-white mb-0">Complete Shipments</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="bg-default p-4 wow fadeIn"
                    data-wow-delay="0.7s"
                  >
                    <i className="fa fa-star fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2">
                      <CountUp end={500} enableScrollSpy={true} />
                    </h2>
                    <p className="text-white mb-0">Customer Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Carousel
        interval={5000}
        animation="slide"
        duration={500}
        className="w-100 h-100d-flex align-items-center"
      >
        <SlideTestimonial
          image="data:image/jpeg;base64,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"
          alt="Arif Shariati"
          imageRadius="50%"
          title="Arif Shariati"
          subtitle="CEO"
          testimonial={
            "Awesome React Material UI Testimonial component Package"
          }
          backgroundGradient={["#FE6B8B", "#FF8E53"]}
          backgroundColor="#f9f9f9"
          transition={true}
          direction="left"
          speed={3000}
          shadow={5}
        />

      </Carousel> */}
    </section>
  );
};
