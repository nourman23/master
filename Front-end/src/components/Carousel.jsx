import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
export const TheCarousel = ({ props }) => {
  var items = [
    {
      text: "Become a driver and get paid !",
      url: "/driver_conditions",
      icon: "fa-solid fa-people-group px-2",
      desc: "join us",
    },
    {
      text: "Request an drive for your things !",
      url: "/move_order_request",
      icon: " fa-solid fa-people-carry-box px-2",
      desc: "Request move order",
    },
  ];

  return (
    <>
      <Carousel
        interval={5000}
        animation="slide"
        duration={500}
        className="w-100 h-100d-flex align-items-center"
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
};

function Item(props) {
  return (
    <Paper className="text-white bg-transparent shadow-none m-5">
      <div className="w-100 ">
        <h2 className="mb-5 ">{props.item.text}</h2>

        <a href={props.item.url} className="btn bg-color mb-5">
          <div className="d-flex align-items-center">
            <i className={props.item.icon}></i>
            <span>{props.item.desc}</span>
          </div>
        </a>
      </div>
    </Paper>
  );
}

// import React from "react";
// import Carousel from "react-material-ui-carousel";
// import { Paper, Button } from "@mui/material";
// export const TheCarousel = (props) => {
//   var items = [
//     {
//       text: "Become a driver and get paid !",
//       url: "/driver_conditions",
//       icon: "fa material-icons px-2",
//     },
//     {
//       text: "Request an drive for your things !",
//       url: "/move_order_request",
//       icon: "fa fa-solid fa-people-carry-box px-2",
//     },
//   ];

//   return (
//     <>
//       <Carousel
//         interval={5000}
//         animation="slide"
//         duration={800}
//         className="w-100 border-0"
//       >
//         {items.map((item, i) => (
//           <Item key={i} item={item} />
//         ))}
//       </Carousel>
//     </>
//   );
// };

// function Item(props) {
//   return (
//     <Paper className="text-white bg-transparent border-0">
//       <div className="w-100 h-50 flex flex-column justify-content-center align-items-center border-0">
//         <p>{props.text} </p>
//         <a href={props.url} className="btn bg-color ">
//           <div className="d-flex ">
//             <i className={props.icon}></i> Join Us
//           </div>
//         </a>
//       </div>
//     </Paper>
//   );
// }
