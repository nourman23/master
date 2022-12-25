import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Rating from "@mui/material/Rating";
import Container from "@mui/material/Container";
import { MDBInput } from "mdb-react-ui-kit";
import { useAuthUser } from "react-auth-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const RateModal = () => {
  const [rate, setRate] = useState(1);
  const [rateMessage, setRateMessage] = useState("");
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const auth = useAuthUser();
  // const [date, setDate] = useState("");

  // useEffect(() => {
  //   let theDate = new Date();
  //   let year = theDate.getFullYear();
  //   let month = theDate.getMonth() + 1;
  //   let day = theDate.getDate();
  //   setDate(`${year}-${month}-${day}`);
  // }, []);

  const handleRate = (e) => {
    e.preventDefault();

    const Data = {
      user_id: auth().id,
      testimonial: rateMessage,
      rating: rate,
    };
    const config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/newTestmonial",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
      },
      data: Data,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        return handleClose();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Button className="bg-secondary" onClick={handleShow}>
        Rate
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rate Our Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              handleRate(e);
            }}
          >
            {/* <Typography component="legend">Rate : </Typography> */}
            <Container className="col-lg-12 d-flex justify-content-center">
              <Rating
                name="simple-controlled"
                value={rate}
                className=""
                sx={{ fontSize: "50px" }}
                onChange={(event, newRate) => {
                  setRate(newRate);
                }}
              />
            </Container>
            <Container className="col-lg-12 d-flex justify-content-center">
              <MDBInput
                id="formControlLg"
                className="my-3"
                placeholder="Enter Your message "
                type="text"
                size="md"
                required
                onChange={(e) => setRateMessage(e.target.value)}
              />
            </Container>
            <Button className="bg-secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" className="bg-dark">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
