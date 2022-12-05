import {Routes, Route, BrowserRouter } from "react-router-dom";
import CarList from "../pages/CarList/CarList";
import Home from "../pages/Home/Home";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/carlist" element={<CarList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
