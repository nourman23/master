import React, { useState, useEffect } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";
import { RateModal } from "./RateModal";
export const OrderHistory = () => {
  const auth = useAuthUser();
  const [requests, setRequests] = useState();
  useEffect(() => {
    var config = {
      method: "get",
      url: `http://127.0.0.1:8000/api/userOrders/${auth().id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data.requests);
        setRequests(response.data?.requests);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (!requests) return <p>loading ... </p>;
  return (
    <div className="container tw-w-4/5 mt-5">
      <MDBTable align="middle" className="">
        <MDBTableHead>
          <tr className="text-primary">
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Location</th>
            <th scope="col">Destination</th>
            <th scope="col">Status</th>
            <th scope="col">Rate our Service</th>
            {/* <th scope="col">Arrived</th> */}
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {requests?.map((request, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  {request.created_at.split("T")[0] +
                    " At " +
                    request.created_at.split("T")[1].slice(1, 5)}
                </td>
                <td>
                  <p className="fw-normal mb-1">{request.location}</p>
                </td>
                <td>{request.destination}</td>
                <td>{request.status}</td>
                <td>
                  <RateModal />
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};
