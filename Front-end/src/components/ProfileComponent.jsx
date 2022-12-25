import React, { useState } from "react";
import Rating from "@mui/material/Rating";

import { useAuthUser } from "react-auth-kit";

export const ProfileComponent = () => {
  const auth = useAuthUser();
  console.log(auth());
  return (
    <div>
      <div className="row d-flex justify-content-center ">
        <div className="col col-lg-10 col-md-12 col-sm-12 ">
          <div className="card-body p-4">
            <div className="d-flex text-black">
              <div className="flex-shrink-0">
                <img
                  src={`data:image/jpeg;base64,${auth()?.image}`}
                  alt="Generic placeholder image"
                  className="img-fluid"
                  style={{ width: "180px", borderRadius: "10px" }}
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <div className="m-3">
                  <h5>
                    {auth()?.first_name} {auth()?.last_name}
                  </h5>
                  <small className="text-secondary">{auth()?.email}</small>
                </div>
                {/* <div
                  className="d-flex justify-content-around rounded-3 p-2 mb-2"
                  style={{ backgroundColor: "#efefef" }}
                >
                  <div>
                    <p className="small text-muted mb-1">Articles</p>
                    <p className="mb-0">41</p>
                  </div>
                  <div className="px-3">
                    <p className="small text-muted mb-1">Followers</p>
                    <p className="mb-0">976</p>
                  </div>
                  <div>
                    <p className="small text-muted mb-1">Rating</p>
                    <p className="mb-0">8.5</p>
                  </div>
                </div> */}
                <div>
                  <a
                    href="/move_order_request"
                    className="btn bg-color flex-grow-1 mx-2"
                  >
                    <i
                      className="fa-solid fa-people-carry-box px-2 "
                      style={{ fontSize: "20px" }}
                    ></i>
                    Request move order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
