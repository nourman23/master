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
                <h3>Nesciunt Mete</h3>
                <p>
                  Provident nihil minus qui consequatur non omnis maiores. Eos
                  accusantium minus dolores iure perferendis tempore et
                  consequatur.
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
                  <i>
                    <AccessTimeFilledIcon sx={{ fontSize: 50 }} />
                  </i>
                </div>
                <h3>Eosle Commodi</h3>
                <p>
                  Ut autem aut autem non a. Sint sint sit facilis nam iusto
                  sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
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
                  <i className="fa fa-light fa-truck-ramp-box" />
                </div>
                <h3>Ledo Markt</h3>
                <p>
                  Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                  Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.
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
