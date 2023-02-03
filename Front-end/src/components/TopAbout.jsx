import React from "react";

export const TopAbout = () => {
  return (
    <section id="about" className="about " data-aos="zoom-in-left">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
            <div
              className="about-image"
              style={{
                backgroundImage:
                  'url("https://movingfurniture-kw.com/wp-content/uploads/2022/07/7.jpg")',
                backgroundSize: "cover",
                boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              {/* <img
                src="https://dynamic.whathouse.com/news/RemovalsFirm.jpg"
                alt=""
                width="100%"
                height="100%"
              /> */}
            </div>
          </div>
          <div className="animate__fadeInDownBig col-lg-6 content order-last  order-lg-first">
            <h3 className="gradient-text">About Us</h3>
            <p style={{ lineHeight: "38px" }} className="mt-5">
              Moving luggage with MOVER has become easier than before, whether
              it is the size of your possessions or even the distance of
              transportation, so do not worry about us.We are one of the best
              moving companies.
            </p>
            <ul>
              <li
                data-aos="fade-up"
                data-aos-delay={100}
                className="d-flex align-items-center"
              >
                <i className="fa fa-duotone fa-box" />
                <div>
                  <h5>
                    Your furniture is safe and you have a guarantee against any
                    damage to your furniture
                  </h5>
                  {/* <p style={{ lineHeight: "38px" }}>
                    Magni facilis facilis repellendus cum excepturi quaerat
                    praesentium libre trade
                  </p> */}
                </div>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay={200}
                className="d-flex align-items-center"
              >
                <i className="fa fa-light fa-truck-ramp-box" />
                <div>
                  <h5>
                    With MOVER, you will move your luggage to all cities, no
                    matter the distance
                  </h5>
                  {/* <p style={{ lineHeight: "38px" }}>
                    Quo totam dolorum at pariatur aut distinctio dolorum
                    laudantium illo direna pasata redi
                  </p> */}
                </div>
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay={300}
                className="d-flex align-items-center"
              >
                <i className="fa fa-light fa-house-user" />
                <div>
                  <h5>
                    {" "}
                    We will transport the furniture for you by the most
                    comfortable and safe means without hidden expenses and with
                    the best quality
                  </h5>
                  {/* <p>
                    Et velit et eos maiores est tempora et quos dolorem autem
                    tempora incidunt maxime veniam
                  </p> */}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
