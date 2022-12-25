import React from "react";
import ReadMoreReact from "read-more-react";
export const BotServices = () => {
  return (
    <>
      <div className="container-xxl py-5 services">
        <div className="container py-5">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <div className="section-header pt-5">
              <h2>Our Services</h2>
              <p>Explore Our Services</p>
            </div>
          </div>
          <div className="row g-4 justify-content-around">
            <div
              className="col-md-6 col-lg-5 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item p-4">
                <div
                  className="overflow-hidden mb-4"
                  style={{ height: "250px" }}
                >
                  <img
                    // className="img-fluid"
                    src="https://cdn.rentokil.com/content/local/my/images/desktop/main_technician-residual-spraying-stairs-desktop.jpg"
                    alt=""
                    height="100%"
                    width="100%"
                  />
                </div>
                <h3 className="mb-3">Pest control</h3>
                <ReadMoreReact
                  text={
                    "Our goal is always to strive to satisfy our customers to eliminate insects and completely exterminate all kinds of insects and rodents in order to make you happy with a clean environment always free of all kinds of insects."
                  }
                  readMoreText={
                    <a className="btn-slide mt-2" href>
                      <i className="fa fa-arrow-right" />
                      <span>Read More</span>
                    </a>
                  }
                />
              </div>
            </div>
            <div
              className="col-md-6 col-lg-5 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item p-4">
                <div
                  className="overflow-hidden mb-4"
                  style={{ height: "250px" }}
                >
                  <img
                    src="https://www.yesmovers.com.au/wp-content/uploads/2021/05/furniture-movers-in-melbourne.jpg"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </div>
                <h3 className="mb-3">Moving furniture</h3>
                <ReadMoreReact
                  text={
                    "One of the advantages of our company is to obtain a guarantee on the furniture during the transportation process that guarantees the customer that his furniture or property will not be exposed to any damage or losses."
                  }
                  readMoreText={
                    <a className="btn-slide mt-2" href>
                      <i className="fa fa-arrow-right" />
                      <span>Read More</span>
                    </a>
                  }
                />
              </div>
            </div>
            <div
              className="col-md-6 col-lg-5 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item p-4">
                <div
                  className="overflow-hidden mb-4"
                  style={{ height: "250px" }}
                >
                  <img
                    src="https://www.alnajmarepair.com/wp-content/uploads/2022/03/1180607321-612x612-1.jpg"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </div>
                <h3 className="mb-3">Furniture dismantling and assembly</h3>

                <ReadMoreReact
                  text={
                    "Disassemble and install all the contents of the house ." +
                    " We also take into account checking when dismantling the furniture, if there were any damages before, and trying to repair them at or before installation."
                  }
                  readMoreText={
                    <a className="btn-slide mt-4" href>
                      <i className="fa fa-arrow-right" />
                      <span>Read More</span>
                    </a>
                  }
                />
              </div>
            </div>
            <div
              className="col-md-6 col-lg-5 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item p-4">
                <div
                  className="overflow-hidden mb-4"
                  style={{ height: "250px" }}
                >
                  <img
                    src="https://www.cubesmart.com/blog/wp-content/uploads/How-To-Wrap-Furniture-Plastic-Wrapping-A-Chair.jpg"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </div>
                <h3 className="mb-3">Furniture packaging</h3>

                <ReadMoreReact
                  text={
                    "Packaging movables is an easy and simple process that is done very professionally by our workers in order to preserve the safety of movables from breakage, scratching or dust and deliver them safely."
                  }
                  readMoreText={
                    <a className="btn-slide mt-2" href>
                      <i className="fa fa-arrow-right" />
                      <span>Read More</span>
                    </a>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
