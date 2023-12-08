import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Success from "./pages/Success";
import Failure from "./pages/Failure";
import ServerError from "./pages/ServerError";
import User from "./pages/User";
import Transaction from "./pages/Transaction";
import PaymentGateway from "./pages/PaymentGateway";
import Home from "./pages/Home";
import AddDevice from "./pages/Device";

function App() {
  return (
    <div id="app">
      <h1>SpeedoTrack Test</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/add-device">Add Device</Link>
        <Link to="/transaction">Transaction</Link>
        <Link to="/pg">Payment Gateway</Link>
      </div>
      <div id="app-routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/add-device" element={<AddDevice />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/pg/*" element={<PaymentGateway />} />

          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/server-error" element={<ServerError />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
