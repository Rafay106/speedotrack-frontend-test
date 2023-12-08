import axios from "axios";
import { useState } from "react";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [from, setFrom] = useState(new Date().toISOString().slice(0, 10));
  const [to, setTo] = useState(new Date().toISOString().slice(0, 10));

  const formHandler = async (e) => {
    e.preventDefault();

    const options = { from: new Date(from), to: new Date(to) };

    try {
      const { data } = await axios.post("/api/coin/transaction", options);
      setTransactions(data.passbook);
    } catch (err) {
      delete err.stack;
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Transaction</h1>

      <form onSubmit={formHandler}>
        <p>
          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </p>
        <p>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </p>
        <p>
          <input type="submit" value="Show" />
        </p>
      </form>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length ? (
            transactions.map((t, i) => (
              <tr key={i}>
                <td>{t.date}</td>
                <td>{t.amount}</td>
                <td>{t.balance}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
