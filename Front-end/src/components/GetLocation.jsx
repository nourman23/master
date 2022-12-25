import React, { useState, useEffect } from "react";
import LocationMap from "./LocationMap";
const GetLocation = (getUserLocation) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [location, setLocation] = useState({
    latitude: latitude,
    longitude: longitude,
  });
  navigator.geolocation.getCurrentPosition(function (position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });

  useEffect(() => {
    setLocation({
      latitude: latitude,
      longitude: longitude,
    });
  }, [latitude, longitude]);

  return location;
};

export default GetLocation;
