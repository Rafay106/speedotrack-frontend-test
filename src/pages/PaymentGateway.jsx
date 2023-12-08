import { Link, Route, Routes } from "react-router-dom";
import Phonepe from "../phonepe/Phonepe";
import FormRazor from "../razorpay/FormRazor";
import Paytm from "../paytm/Paytm";

const PaymentGateway = () => {
  return (
    <>
      <h2>Payment Gateway Test</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/pg/phonepe">Phonepe</Link>
        <Link to="/pg/razor">Razor</Link>
        <Link to="/pg/paytm">Paytm</Link>
      </div>
      <div id="pg-routes">
        <Routes>
          <Route path="/" element={ <h2>Select One</h2>} />
          <Route path="/phonepe" element={<Phonepe />} />
          <Route path="/razor" element={<FormRazor />} />
          <Route path="/paytm" element={<Paytm />} />
        </Routes>
      </div>
    </>
  );
};

export default PaymentGateway;
