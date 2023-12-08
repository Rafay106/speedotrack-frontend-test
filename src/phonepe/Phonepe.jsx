import React, { useState } from "react";
import axios from "axios";

const Phonepe = () => {
  const [coin, setCoin] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Cookie:
          "connect.sid=s%3ATjNhqqCUgcw2LBE4gS1y3v3s_ykbbyRU.ycDu3nakhCyLg%2Bmu6eas1NYbbEzIClkniamncdqxz2M",
      },
    };

    axios
      .post("/api/phonepe/pay/web-flow", { coin })
      .then(({ data }) => {
        console.log(data);
        window.location.href = data.message;
      })
      .catch((err) => console.log(err.response.data.message));
  };

  return (
    <div>
      <h3>Phonepe</h3>
      <form onSubmit={handleSubmit}>
        <p>
          Coin:
          <input
            type="text"
            name="coin"
            value={coin}
            onChange={(e) => setCoin(e.target.value)}
          />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    </div>
  );
};

export default Phonepe;
