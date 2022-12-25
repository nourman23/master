import React, { useState, useEffect } from "react";
import axios from "axios";
export const GetLocationDetails = (loc, getUserLocation) => {
  console.log(loc);
  const [info, setInfo] = useState([{}]);

  useEffect(() => {
    let theUrl =
      "https://api.opencagedata.com/geocode/v1/json?q=" +
      loc?.latitude +
      "+" +
      loc?.longitude +
      "&key=597c30e932434a138d6e822ff42b15af";
    console.log(theUrl);
    const options = {
      method: "GET",
      url: theUrl,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("Latitude =", loc?.latitude);
        console.log("Longitude =", loc?.longitude);
        console.log(response.data.results);
        setInfo(response.data.results[0].components);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [getUserLocation]);
  if (!info)
    return {
      country: "country Loading ...",
      city: "city Loading ...",
      neighbourhood: "Neighbourhood Loading ...",
      suburb: "Suburb Loading ...",
    };
  return info;
};
