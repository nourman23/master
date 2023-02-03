import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { useAuthUser } from "react-auth-kit";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import EmailIcon from "@mui/icons-material/Email";
import WcIcon from "@mui/icons-material/Wc";
export const ProfileComponent = () => {
  const auth = useAuthUser();
  return (
    <div>
      <div className="row d-flex ">
        <div className="col col-lg-12 col-md-12 col-sm-12 ">
          <div className="card-body">
            <div className="d-flex text-black flex-column justify-content-center align-items-center">
              <div className="flex-shrink-0">
                <img
                  src={`data:image/jpeg;base64,${auth()?.image}`}
                  alt="Generic placeholder image"
                  className="img-fluid"
                  style={{
                    width: "130px",
                    borderRadius: "50px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                />
              </div>

              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                  marginTop: "30px",
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <CoPresentIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Name"
                    secondary={auth()?.first_name + "  " + auth()?.last_name}
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <EmailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Email" secondary={auth()?.email} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <WcIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Gender" secondary={auth()?.gender} />
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
