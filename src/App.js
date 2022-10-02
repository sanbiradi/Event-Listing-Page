import React from "react";
import Events from "./components/Events";
import Header from "./components/Header";
import StickyNavigation from "./components/StickyNavigation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";


const App = () => {
  // const location = useLocation();
  // if (location.pathname === "/")
  return (
    <Router>
      <div className="container">
        <Header />
        <h1 className="centered">Explore Our Events</h1>
        <div className="flex">
          <StickyNavigation />
          <Routes>
            <Route path="/" element={<Events />} />
            <Route path="/usa" element={<Events />} />
            <Route path="/uk" element={<Events />} />
            <Route path="/canada" element={<Events />} />
            <Route path="/australia" element={<Events />} />
            <Route path="/newzealand" element={<Events />} />
            <Route path="/singapore" element={<Events />} />
            <Route path="/ireland" element={<Events />} />
            <Route path="/germany" element={<Events />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
