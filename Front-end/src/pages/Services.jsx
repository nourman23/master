import React from "react";
import Jumbotron from "../components/Jumbotron";
import { TopServices } from "../components/TopServices";
import { BotServices } from "../components/BotServices";

function Services() {
  return (
    <>
      <Jumbotron
        title="Our Services"
        subTitle="Services"
        url="https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2022/05/hiring-movers.jpg?fit=1200%2C800&ssl=1"
      />

      <TopServices />
      <BotServices />
    </>
  );
}
export default Services;
