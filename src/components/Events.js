import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import events from '../event.json'
export default function Events() {
  const [loading, setLoading] = useState(false);
 
  
  const location = useLocation();
  if (location.pathname.substring(1) === "") {
    setLoading(true);
    location.pathname = "/usa";
  }
  return (
    <div>{console.log("events")}
      <div className="events">
        {events[location.pathname.substring(1).toLowerCase()].map(
          (item, index) => {
            return (
              <div className="event" key={index}>
                <div className="img-container">
                  <img src={item.img<2?image1:image2} alt="" />
                </div>
                <div className="information-container">
                  <h2>{item.title}</h2>
                  <h3>{item.date}</h3>
                  <h5>{item.platform} | {item.time}</h5>
                  <button className="btn btn-block">Register now</button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
