import React from "react";
import { TopAbout } from "../components/TopAbout";
import { OurWork } from "../components/OurWork";
import { Testimonials } from "../components/Testimonials";
import Jumbotron from "../components/Jumbotron";

function About() {
  return (
    <>
      <Jumbotron title="About Us" subTitle="About" />

      <TopAbout />
      <OurWork />
      <Testimonials />
    </>
  );
}
export default About;
