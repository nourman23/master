import React from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
export const TopServices = () => {
  return (
    <>
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="service-item  position-relative">
                <div className="icon">
                  <i className="fa-solid fa-phone" />
                </div>
                <h3 className="mt-4">Contact us</h3>
                <p>
                  Contact us with your inquiry or suggestion within 24 hours,
                  seven days a week. We are at your service at all times and at
                  any time .
                </p>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className=" service-item position-relative">
                <div className="icon">
                  <i className="fa fa-light fa-truck-ramp-box" />
                </div>
                <h3>Goodbye to the trouble of moving furniture</h3>
                <p>
                  Our mission is to move your furniture easily and without
                  getting tired. With MOVER, moving furniture has become without
                  any fatigue or trouble. We move and pack furniture as an
                  integrated service to the fullest.
                </p>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i>
                    <AccessTimeFilledIcon sx={{ fontSize: 50 }} />
                  </i>
                </div>
                <h3 className="mt-4">Short time</h3>
                <p>
                  The packaging and transportation process takes place within a
                  short time, and the length of time in transportation depends
                  on the distance the furniture is moved to .
                </p>
              </div>
            </div>
            {/* End Service Item */}
          </div>
        </div>
      </section>
    </>
  );
};
