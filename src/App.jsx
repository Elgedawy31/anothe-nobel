import ContactUs from "./pages/ContactUs/ContactUs";
import About from "./pages/About/About";
import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Products from "./pages/Products/Products";
import Certifications from "./pages/Certifications/Certifications.jsx";
import Applications from "./pages/Applications/Applications.jsx";
import CentrifugalFan from "./pages/CentrifugalFan/CentrifugalFan";
import TransportSeries from "./pages/transportSeries/TransportSeries";
import BoxFans from "./pages/boxFans/BoxFans";
import Accessories from "./pages/accessories/Accessories";
import CustomVenilrators from "./pages/customVenilrators/CustomVenilrators";
import AirFilering from "./pages/airFerling/AirFilering";
import RoofTopFans from "./pages/roofTopFans/RoofTopFans";
import AxialFans from "./pages/axialFans/AxialFans";
import './i18n';
import Smokeaxial from "./pages/smokeaxial/Smokeaxial";
import Smokecentrifugal from "./pages/smokecentrifugal/Smokecentrifugal";
import Clients from "./pages/Clients/Clients";



const Home = lazy(() => import("./pages/Home/Home"));

const App = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          {/* <Route path="/contact-us" element={<ContactUs />} /> */}
          <Route path="/Products" element={<Products />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/products/centrifugal-fan/heavy-duty" element={<CentrifugalFan />} />
          <Route path="/products/centrifugal-fan/transport-series" element={<TransportSeries  />} />
          <Route path="/products/centrifugal-fan/box-fans" element={<BoxFans  />} />
          <Route path="/products/accessories" element={<Accessories  />} />
          <Route path="/products/custom-venilrators" element={<CustomVenilrators  />} />
          <Route path="/products/air-filering" element={<AirFilering  />} />
          <Route path="/products/roof-top-fans" element={<RoofTopFans  />} />
          <Route path="/products/axial-fans" element={<AxialFans  />} />           
          <Route path="/products/smoke-axial" element={<Smokeaxial  />} />           
          <Route path="/products/smoke-centrifugal" element={<Smokecentrifugal  />} />           

          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
