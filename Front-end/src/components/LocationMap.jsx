import React from "react";

const LocationMap = ({ location }) => (
  <div
    className="embed-responsive embed-responsive-16by9"
    style={{ width: "400px", height: "400px" }}
  >
    <iframe
      className="embed-responsive-item"
      title="LocationMap"
      frameBorder="0"
      style={{ border: "0" }}
      src={
        "https://www.google.com/maps/embed/v1/place?key=" +
        "AIzaSyBTqd7r3bTIW-axaKGt9KkHCmK0NMZ2Cl0" +
        "&q=" +
        location.latitude +
        "," +
        location.longitude +
        "&zoom=16"
      }
      allowFullScreen
    />
  </div>
);

export default LocationMap;
