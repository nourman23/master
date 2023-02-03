import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { OrderHistory } from "../components/OrderHistory";
import { EditProfile } from "../components/EditProfile";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";

export default function App() {
  const navigate = useNavigate();
  const signOut = useSignOut();
  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };
  const logout = () => {
    signOut();
    navigate("/login");
  };
  return (
    <>
      <MDBRow className="h-100 tw-w-11/12" style={{ marginTop: "50px" }}>
        <MDBCol
          size="3"
          className="h-100 border-0 border-right-1 tw-w-48"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 0px 0px",
          }}
        >
          <MDBTabs className="flex-column text-center h-100 ">
            <MDBTabsItem className="py-5">
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab1")}
                active={verticalActive === "tab1"}
              >
                Edit Profile
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem className="py-5">
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab2")}
                active={verticalActive === "tab2"}
              >
                Order history
              </MDBTabsLink>
            </MDBTabsItem>

            <MDBTabsItem className="py-5">
              <MDBTabsLink
                href="/move_order_request"
                style={{ color: "black" }}
              >
                Request move order
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem className="py-5">
              <MDBTabsLink
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size="9" className="mt-5 p-0">
          <MDBTabsContent>
            <MDBTabsPane show={verticalActive === "tab1"}>
              <EditProfile />
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === "tab2"}>
              <OrderHistory />
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
    </>
  );
}
