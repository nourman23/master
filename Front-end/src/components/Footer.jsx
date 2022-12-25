import React, { Component } from "react";

function Footer() {
  return (
    <>
      {/* <footer
            className="text-center text-lg-start text-white "
            
            >
      <div className="container p-1 pb-0">
     
        <section className="">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
          

            <hr className="w-100 clearfix d-md-none" />

           
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
              <p>
                <a className="text-white" href="/" >Home</a>
              </p>
              <p>
                <a className="text-white" href="/services">Services</a>
              </p>
              <p>
                <a className="text-white" href="/about">About</a>
              </p>
              <p>
                <a className="text-white" href="/contact">Contact</a>
              </p>
            </div>
           

            <hr className="w-100 clearfix d-md-none" />

           
            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
              <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
              <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>
          
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

            
              <a
                 className="btn btn-primary btn-floating m-1"
                 style={{ backgroundColor: "#3b5998" }}
                 href="#!"
                 role="button"
                 ><i className="fab fa-facebook-f"></i ></a>

              <a
                 className="btn btn-primary btn-floating m-1"
                 style={{ backgroundColor: "#55acee" }}
                 href="#!"
                 role="button"
                 ><i className="fab fa-twitter"></i></a>

          
              <a
                 className="btn btn-primary btn-floating m-1"
                 style={{ backgroundColor:" #dd4b39" }}
                 href="#!"
                 role="button"
                 ><i className="fab fa-google"></i ></a>

             
              <a
                 className="btn btn-primary btn-floating m-1"
                 style={{ backgroundColor: "#ac2bac" }}
                 href="#!"
                 role="button"
                 ><i className="fab fa-instagram"></i></a>

              <a
                 className="btn btn-primary btn-floating m-1"
                 style={{ backgroundColor: "#0082ca" }}
                 href="#!"
                 role="button"
                 ><i className="fab fa-linkedin-in"></i></a>
            
              <a
                 className="btn btn-primary btn-floating m-1"
                 style={{ backgroundColor: "#333333" }}
                 href="#!"
                 role="button"
                 ><i className="fab fa-github"></i></a>
            </div>
          </div>
         
        </section>
       
      </div>
    
      <div
           className="text-center p-3"
           style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
           >
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/"
           >MDBootstrap.com</a
          >
      </div>
    
    </footer> */}
      <div
        className="container-fluid bg-dark text-light footer pt-5 wow fadeIn"
        data-wow-delay="0.1s"
        // style={{ marginTop: "6rem" }}
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Address</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                123 Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                +012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href>
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-outline-light btn-social" href>
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-outline-light btn-social" href>
                  <i className="fab fa-youtube" />
                </a>
                <a className="btn btn-outline-light btn-social" href>
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Services</h4>
              <a className="btn btn-link" href>
                Air Freight
              </a>
              <a className="btn btn-link" href>
                Sea Freight
              </a>
              <a className="btn btn-link" href>
                Road Freight
              </a>
              <a className="btn btn-link" href>
                Logistic Solutions
              </a>
              <a className="btn btn-link" href>
                Industry solutions
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <a className="btn btn-link" href>
                About Us
              </a>
              <a className="btn btn-link" href>
                Contact Us
              </a>
              <a className="btn btn-link" href>
                Our Services
              </a>
              <a className="btn btn-link" href>
                Terms &amp; Condition
              </a>
              <a className="btn btn-link" href>
                Support
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <a className="border-bottom" href="#">
                  Your Site Name
                </a>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                Designed By{" "}
                <a className="border-bottom" href="https://htmlcodex.com">
                  HTML Codex
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
