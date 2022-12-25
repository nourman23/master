import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";
function Header() {
  // let selectHeader = document.getElementById("header");

  // useEffect(() => {
  //   window.onscroll = function () {
  //     selectHeader = document.getElementById("header");
  //     scrollFunction(selectHeader);
  //   };

  //   function scrollFunction(selectHeader) {
  //     if (
  //       document.body.scrollTop > 650 ||
  //       document.documentElement.scrollTop > 650
  //     ) {
  //       selectHeader.classList.add("header-scrolled");
  //     } else {
  //       selectHeader.classList.remove("header-scrolled");
  //       selectHeader.style.transition = "all 0.5s ease";
  //     }
  //   }
  // }, []);

  return (
    <>
      <header
        id="header"
        className=" d-flex align-items-center  position-absolute top-0 w-100"
      >
        <div
          className="w-100 d-flex justify-content-between  align-items-center shadow"
          style={{ backgroundColor: "#3b3b3b" }}
        >
          <Nav />
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
