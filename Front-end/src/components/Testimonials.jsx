import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../stors/Reducers/userReducer.js";
import { getTestimonials } from "../stors/Reducers/TestimonialReducer.js";

export const Testimonials = () => {
  const users = useSelector((state) => state.Users?.data?.data);
  const testimonials = useSelector((state) => state.Testimonials?.data?.data);
  var user;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getTestimonials());
  }, []);
  let filledStars;
  let emptyStars;
  if (testimonials == null || testimonials == undefined)
    return <p>loading ... </p>;
  return (
    <section>
      <div className="testimonials section-bg">
        <div className="section-header pt-5">
          <h2>Testimonials</h2>
          <p className="mt-4">What clients say about us ?</p>
        </div>

        <Carousel
          interval={5000}
          animation="slide"
          duration={700}
          className="w-100 h-100"
        >
          {testimonials?.map((testimonial, i) => {
            user = users.find((usr) => usr.id === testimonial.user_id);
            var allStars = [];
            for (let i = 1; i <= 5; i++) {
              if (i <= testimonial.stars)
                allStars.push(<span key={i} className="fa fa-star checked" />);
              else allStars.push(<span key={i} className="fa fa-star" />);
            }
            return (
              <div className="swiper-slide" key={i}>
                <div className="testimonial-wrap">
                  <div className="testimonial-item my-5">
                    <img
                      src={`data:image/jpeg;base64,${user.image}`}
                      // src={user.image}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>{user.first_name + " " + user.last_name}</h3>
                    <div className="stars">
                      {allStars.map((star, i) => {
                        return star;
                      })}
                    </div>
                    <p className="text-dark">
                      <i className="fa fa-quote-left quote-icon px-3 text-primary" />
                      {testimonial.testimonial}
                      <i className="fa fa-quote-right quote-icon px-3 text-primary" />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>

        {/* <div className="carousel-inner">
            <div className="carousel-item  active">
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item my-5">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <div className="stars">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                    </div>
                    <p className="text-dark">
                      <i className="fa fa-quote-left quote-icon" />
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                      <i className="fa fa-quote-right quote-icon" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>         */}
      </div>
    </section>
  );
};
