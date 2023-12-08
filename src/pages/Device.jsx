import axios from "axios";

const Device = () => {
  const addHandler = (e) => {
    e.preventDefault();

    const device = {
      active: true,
      coins: "1",
      name: "Test",
      imei: "012345678987654",
      sim_number: "1234567891011",
      vin: "na",
      plate_number: "RJ14 1234",
      model: "FMB920",
      users: ["admin"],
      vehicle_type: "Four Wheeler",
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("/api/cpanel/device", device, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    axios
      .delete("/api/cpanel/device/012345678987654")
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err.response.data.message));
  };

  return (
    <div>
      <h2>Device</h2>
      <button onClick={addHandler}>Add</button>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Device;
