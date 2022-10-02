import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import events from "../event.json";
export default function StickyNavigation() {
  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 130) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  const navFix = fix
    ? { position: "fixed", left: "107px", top: "90px" }
    : { position: "absolute", left: "40px" };

  const locations = Object.keys(events);
  const locationCheck = useLocation();
  const setActiveClass = (location) => {
    if (locationCheck.pathname.substring(1) === "")
      if (location === "usa") return "active";
    if (locationCheck.pathname.substring(1) === location)
        return "active";
  };



  console.log(Array(locations));
  return (
    <>
      <div className="leftNavParent">
        <div className="navigations sticky" id="navigations" style={navFix}>
          <ul>
            {Array(locations)[0].map((location) => (
              <Link to={`/${location.toLowerCase()}`}>
                <li className={setActiveClass(location)}>
                  {`${location[0].toUpperCase()}${location.substring(1)}`} (10)
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
