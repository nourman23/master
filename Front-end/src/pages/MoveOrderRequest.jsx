import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import { useAuthUser } from "react-auth-kit";
import GetLocation from "../components/GetLocation";
import { GetLocationDetails } from "../components/GetLocationDetails";
import LocationMap from "../components/LocationMap";
import axios from "axios";
import Swal from "sweetalert2";
export const MoveOrderRequest = () => {
  const auth = useAuthUser();
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [locationView, setLocationView] = useState("");
  const [destination, setDestination] = useState("");
  const [getUserLocation, setGetUserLocation] = useState(false);
  const loc = GetLocation(getUserLocation);
  const locationDetails = GetLocationDetails(loc, getUserLocation);
  console.log(locationDetails);
  const handleLocation = () => {
    setGetUserLocation(true);
    setLocationView(<LocationMap location={loc} />);
    setLocation(
      locationDetails.country +
        " - " +
        locationDetails.city +
        " - " +
        locationDetails.neighbourhood +
        " beside " +
        locationDetails.suburb
    );
  };
  const handleDestination = () => {
    setDestination("test");
  };

  var data = new FormData();
  data.append("user_id", auth()?.id);
  data.append("name", auth()?.first_name + " " + auth()?.last_name);
  data.append("email", auth()?.email);
  data.append("phone", phone);
  data.append("location", location);
  data.append("destination", destination);

  var config = {
    method: "post",
    url: "http://127.0.0.1:8000/api/newRequest",
    data: data,
  };
  const handleRequest = (e) => {
    e.preventDefault();
    axios(config)
      .then(function (response) {
        console.log(response.data);
        Swal.fire({
          icon: "success",
          title: "Your Request Sent Successfully",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    setPhone("");
    setDestination("");
    setLocation("");
  };
  return (
    <>
      <Jumbotron
        title="Request Your Order Moving"
        subTitle="Request"
        url="https://cmsplatform.blob.core.windows.net/wwwgainesvillemoversusacom/gallery/original/6ec2f61b-7508-4760-9b2f-4d6fb36e4c6e.jpg"
      />

      <div style={{ marginTop: "-250px !important", marginBottom: "30px" }}>
        <section className="w-100 d-flex justify-content-center">
          <div className="card w-50 shadow">
            <form
              onSubmit={(e) => {
                handleRequest(e);
              }}
            >
              <div className="row register-form p-5  justify-content-md-center">
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="First Name *"
                      value={auth()?.first_name + " " + auth()?.last_name}
                      disabled
                    />
                    <label htmlFor="floatingInput" style={{ color: "grey" }}>
                      Name
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      value={auth()?.email}
                      disabled
                    />
                    <label htmlFor="floatingInput" style={{ color: "grey" }}>
                      Email address
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Your location"
                      style={{ height: "auto", width: "100%" }}
                      required
                      value={location}
                      disabled
                    />
                    <label htmlFor="floatingInput" style={{ color: "grey" }}>
                      Your location
                    </label>
                  </div>
                  <div className="ml-3 mt-2 mb-5">
                    {/* <span style={{ color: "grey" }}>or</span> */}
                    <p
                      onClick={handleLocation}
                      className="p-2 w-75 text-primary tw-cursor-pointer"
                      style={{ textDecoration: "underline" }}
                    >
                      get my location
                    </p>
                  </div>
                  {locationView && locationView}
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Last Name *"
                      value={auth()?.last_name}
                      disabled
                    />
                    <label htmlFor="floatingInput" style={{ color: "grey" }}>
                      Last Name
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      minLength={10}
                      maxLength={10}
                      name="txtEmpPhone"
                      id="floatingInput"
                      className="form-control"
                      placeholder="Your Phone number"
                      required
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                    <label htmlFor="floatingInput" style={{ color: "grey" }}>
                      Phone number
                    </label>
                  </div>
                  <div className="form-floating ">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      required
                      placeholder="Your destination"
                      value={destination}
                      disabled
                    />
                    <label htmlFor="floatingInput" style={{ color: "grey" }}>
                      Your destination
                    </label>
                  </div>
                  <div className="ml-3 mt-2">
                    {/* <span style={{ color: "grey" }}>or</span> */}
                    <p
                      onClick={handleDestination}
                      className="p-2 w-75 text-primary tw-cursor-pointer"
                      style={{ textDecoration: "underline" }}
                    >
                      select my destination
                    </p>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn w-25 bg-primary text-white my-3 justify-content-md-end"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};
